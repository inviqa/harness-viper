/* eslint-disable react/static-property-placement */
import { DataSource, DataSourceConfig } from 'apollo-datasource';
import { Context } from '@inviqa/viper-gateway-graphql-service';
import { HelloWorldDataSource } from './HelloWorldDataSource';

export class MockHelloWorldDataSource extends DataSource implements HelloWorldDataSource {
  context!: Context;

  initialize(config: DataSourceConfig<Context>): void {
    this.context = config.context;
  }

  // eslint-disable-next-line class-methods-use-this
  getHelloWorld() {
    return new Promise<string>(resolve => {
      setTimeout(() => resolve('Hello world!'), 1);
    });
  }
}
