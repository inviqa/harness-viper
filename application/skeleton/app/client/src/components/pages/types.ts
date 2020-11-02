import { QueryResult } from '@apollo/client';
import { GetPageByPathQuery, GetPageByPathQueryVariables } from '~hooks/apollo';

export type PageProps = {
  queryResult: QueryResult<GetPageByPathQuery, GetPageByPathQueryVariables>;
};
