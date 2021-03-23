import { ListenOptions } from 'net';
import Koa, { Middleware } from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { TypedefFilePointerOrPointers } from '@inviqa/viper-graphql-utils';
import {
  InternalGatewayService,
  RunnableGatewayService,
  GatewayServiceType,
  GatewayServiceRunner
} from '@inviqa/viper-gateway-service';
import { ResolverProvider } from '@inviqa/viper-gateway-graphql-service';
import { ApolloServerBuilder } from '@inviqa/viper-apollo';
import { HelloWorldDataSource, DataSources } from './DataSource';

export class HelloWorldService implements InternalGatewayService, RunnableGatewayService {
  private apolloServer: ApolloServer;

  public readonly name = 'hello-world';

  public readonly type = GatewayServiceType.Graphql;

  constructor(
    public readonly path: string,
    private readonly typedefPointerOrPointers: TypedefFilePointerOrPointers,
    private readonly resolverProvider: ResolverProvider,
    private readonly dataSource: HelloWorldDataSource,
    private readonly serviceRunner: GatewayServiceRunner,
    private readonly serverBuilder: ApolloServerBuilder
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
      this.apolloServer = this.serverBuilder
        .setFederatedSchema(this.typedefPointerOrPointers, this.resolverProvider.getResolvers())
        .setContext(context => context)
        .setDataSources<DataSources>(() => ({
          helloWorld: this.dataSource
        }))
        .finalise();
    }
    return this.apolloServer;
  }
}
