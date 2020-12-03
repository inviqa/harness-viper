/* eslint-disable class-methods-use-this */
import { Context, ResolverProvider as ResolverProviderInterface } from '@inviqa/viper-gateway-graphql-service';
import { Resolvers } from './typedef/types';
import { DataSources } from './DataSource';

export class ResolverProvider implements ResolverProviderInterface<Resolvers<Context<DataSources>>> {
  getResolvers() {
    return {
      Query: {
        helloWorld: async (_, args, context: Context<DataSources>) => {
          const { helloWorld: helloWorldDataSource } = context.dataSources;
          return helloWorldDataSource.getHelloWorld();
        }
      }
    };
  }
}
