import { QueryResult } from '@apollo/client';
import { Query, QueryRouteByPathArgs } from '~hooks/apollo';

export type PageQueryData = Pick<Query, 'routeByPath'>;

export type PageQueryResult = QueryResult<PageQueryData, QueryRouteByPathArgs>;
