/* eslint-disable class-methods-use-this */
import { ResolverProvider } from '@inviqa/viper-apollo';
import { Context } from '@inviqa/viper-gateway-graphql-service';
import { Resolvers, CmsHomepagePage } from '../typedef';
import { DataSources } from '../DataSource';

export class CustomContentResolverProvider implements ResolverProvider<Resolvers> {
  getResolvers() {
    return {
      CmsHomepagePage: {
        homePage: async (
          { id }: Pick<CmsHomepagePage, 'id'>,
          _variables: unknown,
          { dataSources }: Context<DataSources>
        ) => {
          return dataSources.content.fetchCmsHomeById(id);
        }
      }
    };
  }
}
