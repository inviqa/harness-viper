import { DataSource } from 'apollo-datasource';
import { HelloWorldDataSource } from './HelloWorldDataSource';

export type DataSources = {
  helloWorld: HelloWorldDataSource & DataSource;
};
