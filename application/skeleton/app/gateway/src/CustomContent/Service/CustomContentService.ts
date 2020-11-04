import { ListenOptions } from 'net';
import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { TypedefFilePointerOrPointers } from '@inviqa/viper-graphql-utils';
import {
  InternalGatewayService,
  RunnableGatewayService,
  GatewayServiceType,
  GatewayServiceRunner
} from '@inviqa/viper-gateway-service';
import { ApolloServerBuilder, ResolverProvider } from '@inviqa/viper-apollo';
import { CustomContentDataSource, DataSources } from '../DataSource';

export class CustomContentService implements InternalGatewayService, RunnableGatewayService {
  private apolloServer: ApolloServer;

  public readonly name = 'custom-content';

  public readonly type = GatewayServiceType.Graphql;

  constructor(
    public readonly path: string,
    private readonly typedefPointerOrPointers: TypedefFilePointerOrPointers,
    private readonly resolverProvider: ResolverProvider,
    private readonly dataSource: CustomContentDataSource,
    private readonly serviceRunner: GatewayServiceRunner,
    private readonly serverBuilder: ApolloServerBuilder
  ) {}

  getAppMiddleware() {
    return this.createApolloServer().getMiddleware({ path: this.path });
  }

  start(koa: Koa, listenOptions: ListenOptions) {
    this.createApolloServer().applyMiddleware({ app: koa, path: this.path });
    return this.serviceRunner.start(koa, listenOptions, [this]);
  }

  private createApolloServer() {
    if (!this.apolloServer) {
      this.apolloServer = this.serverBuilder
        .setFederatedSchema(this.typedefPointerOrPointers, this.resolverProvider.getResolvers())
        .setContext(context => context)
        .setDataSources<DataSources>(() => ({
          content: this.dataSource
        }))
        .finalise();
    }
    return this.apolloServer;
  }
}
