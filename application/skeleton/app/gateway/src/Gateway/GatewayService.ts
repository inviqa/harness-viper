import { ListenOptions } from 'net';
import Koa, { Middleware } from 'koa';
import {
  GatewayServiceRunner,
  RunnableGatewayService,
  InternalGatewayService,
  GatewayServiceType
} from '@inviqa/viper-gateway-service';
import { ApolloServer } from 'apollo-server-koa';
import { ApolloServerBuilder } from '@inviqa/viper-apollo';
import { ApolloGatewayAutoloader, Context } from '@inviqa/viper-gateway-graphql-service';
import { RemoteGraphQLDataSource } from '@apollo/gateway';

type GatewayContext = {
  authToken: string | null;
  contentLanguage: string | null;
  websiteId: string | null;
  currency: string | null;
};

export class GatewayService implements RunnableGatewayService, InternalGatewayService {
  private apolloServer: ApolloServer;

  public readonly name = 'gateway';

  public readonly type = GatewayServiceType.Graphql;

  constructor(
    public readonly path: string,
    private readonly serviceRunner: GatewayServiceRunner,
    private readonly serverBuilder: ApolloServerBuilder,
    private readonly gatewayAutoloader: ApolloGatewayAutoloader
  ) {}

  getAppMiddleware(): Middleware {
    return this.createApolloServer().getMiddleware({ path: this.path });
  }

  start(koa: Koa, listenOptions: ListenOptions) {
    // Apollo doesn't use @types/koa resulting in type missmatch
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.createApolloServer().applyMiddleware({ app: (koa as unknown) as any, path: this.path });
    return this.serviceRunner.start(koa, listenOptions, [this]);
  }

  private createApolloServer() {
    if (!this.apolloServer) {
      const gateway = this.gatewayAutoloader
        .getBuilder()
        .addBuildServiceFunction(({ url }) => {
          // TODO: consider bringing this into the core
          return new RemoteGraphQLDataSource<GatewayContext>({
            url,
            willSendRequest({ request, context }) {
              const { authToken, contentLanguage, websiteId, currency } = context;

              if (authToken) {
                request.http?.headers.set('viper-auth-token', authToken);
              }

              if (contentLanguage) {
                request.http?.headers.set('content-language', contentLanguage);
              }

              if (websiteId) {
                request.http?.headers.set('viper-website', websiteId);
              }

              if (currency) {
                request.http?.headers.set('viper-currency', currency);
              }
            }
          });
        })
        .finalise();

      this.apolloServer = this.serverBuilder
        .setContext((context: Context) => {
          // TODO: consider bringing this into the core
          return {
            authToken: context.ctx.header.authorization ? context.ctx.header.authorization.split(' ')[1] : null,
            contentLanguage: context.ctx.header['content-language'] ?? null,
            websiteId: context.ctx.header['viper-website'] ?? null,
            currency: context.ctx.header['viper-currency'] ?? null
          };
        })
        .setGateway(gateway)
        .finalise();
    }
    return this.apolloServer;
  }
}
