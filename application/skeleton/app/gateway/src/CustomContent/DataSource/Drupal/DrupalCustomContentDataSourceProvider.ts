import { DataSourceProvider } from '@inviqa/viper-gateway-graphql-service';
import { DrupalCustomContentDataSource } from './DrupalCustomContentDataSource';

type Constructable<T> = T & {
  new (...args: unknown[]): T;
};

export class DrupalCustomContentDataSourceProvider extends DataSourceProvider<DrupalCustomContentDataSource> {
  protected DataSourceConstructor = DrupalCustomContentDataSource as Constructable<DrupalCustomContentDataSource>;
}
