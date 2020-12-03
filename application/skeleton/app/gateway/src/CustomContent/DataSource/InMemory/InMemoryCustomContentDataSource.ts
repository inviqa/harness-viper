/* eslint-disable react/static-property-placement */
import { DataSource, DataSourceConfig } from 'apollo-datasource';
import { Context } from '@inviqa/viper-gateway-graphql-service';
import { CustomContentDataSource } from '../CustomContentDataSource';

export class InMemoryCustomContentDataSource extends DataSource implements CustomContentDataSource {
  context!: Context;

  initialize(config: DataSourceConfig<Context>): void {
    this.context = config.context;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,class-methods-use-this
  async fetchCmsHomeById(id: string) {
    // TODO: implement mock homepage
    return null;
  }
}
