import { DataSource } from 'apollo-datasource';
import { CustomContentDataSource } from './CustomContentDataSource';

export type DataSources = {
  content: CustomContentDataSource & DataSource;
};
