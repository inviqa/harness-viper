import { DataSourceProvider } from '@inviqa/viper-gateway-graphql-service';
import { InMemoryCustomContentDataSource } from './InMemoryCustomContentDataSource';

type Constructable<T> = T & {
  new (...args: unknown[]): T;
};

export class InMemoryCustomContentDataSourceProvider extends DataSourceProvider<InMemoryCustomContentDataSource> {
  protected DataSourceConstructor = InMemoryCustomContentDataSource as Constructable<InMemoryCustomContentDataSource>;
}
