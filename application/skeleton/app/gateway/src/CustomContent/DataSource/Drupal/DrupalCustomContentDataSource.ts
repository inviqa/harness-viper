/* eslint-disable react/static-property-placement */
import { DataSource, DataSourceConfig } from 'apollo-datasource';
import { ApolloError } from 'apollo-server-errors';
import { Context } from '@inviqa/viper-gateway-graphql-service';
import { GraphqlClientOperations, DrupalGraphqlClientProvider } from '@inviqa/viper-backend-drupal';
import { CustomContentDataSource } from '../CustomContentDataSource';
import {
  LanguageId,
  GetNodeHomepageByNodeIdDocument,
  GetNodeHomepageByNodeIdQuery,
  GetNodeHomepageByNodeIdQueryVariables
} from '../../../Drupal';
import { DrupalHomeDataTransformer } from './DrupalHomeDataTransformer';

export class DrupalCustomContentDataSource extends DataSource implements CustomContentDataSource {
  private client!: GraphqlClientOperations;

  context!: Context;

  constructor(
    private readonly clientProvider: DrupalGraphqlClientProvider,
    private readonly homeTransformer: DrupalHomeDataTransformer
  ) {
    super();
  }

  initialize(config: DataSourceConfig<Context>): void {
    this.context = config.context;
    this.client = this.clientProvider.getClient(this.context);
  }

  // TODO: extract duplicated method
  // eslint-disable-next-line class-methods-use-this
  private isValidLocale(locale: string) {
    return /[a-z]{2,4}_[A-Z]{2,4}/.test(locale);
  }

  // TODO: extract duplicated method
  private validateLocale(locale: string) {
    if (!this.isValidLocale(locale)) {
      throw new ApolloError('Locale must be a valid ISO/IEC 15897 locale code. For example: en_GB or de_DE');
    }
  }

  // TODO: extract duplicated method
  private mapLocaleCodeToDrupalLanguage = (locale: string) => {
    this.validateLocale(locale);

    return locale.split('_')[0].toUpperCase() as LanguageId;
  };

  async fetchCmsHomeById(id: string) {
    const locale = (this.context.ctx.request.header['content-language'] || 'en_GB').replace('-', '_');
    const result = await this.client.query<GetNodeHomepageByNodeIdQuery, GetNodeHomepageByNodeIdQueryVariables>({
      query: GetNodeHomepageByNodeIdDocument,
      variables: {
        id,
        language: this.mapLocaleCodeToDrupalLanguage(locale)
      }
    });

    return this.homeTransformer.transformData(result.data, locale);
  }
}
