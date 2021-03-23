import React from 'react';
import { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import {
  getApolloProps,
  getI18nProps,
  GetContextWithApollo,
  has404RoutingError,
  throwClientSide404,
  isDataOnlyRequest
} from '@inviqa/viper-nextjs';
import {
  GetPageByPathDocument,
  GetPageByPathQuery,
  GetPageByPathQueryVariables,
  useGetPageByPathQuery
} from '~hooks/apollo';
import PageDistribution from '../components/PageDistribution';
import createApolloClientConfig from '~lib/createApolloClientConfig';
import { ssrQueryProductList } from '~hooks/product';

type Props = { pagePath: string };

export const Index: NextPage<Props> = ({ pagePath }) => {
  const queryResult = useGetPageByPathQuery({
    variables: {
      path: pagePath
    }
  });
  const { loading, error, data } = queryResult;

  if (!data && error) {
    if (has404RoutingError(error.graphQLErrors)) {
      return throwClientSide404();
    }

    return (
      <>
        <h1>Error!</h1>
      </>
    );
  }

  if (loading) return <></>;

  // TODO: need to verify this works as expected once we start persisting page state in the url (e.g. page number/sorts/filters)
  return <PageDistribution key={pagePath} queryResult={queryResult} />;
};

const getPageProps = async ({
  query,
  locale,
  apolloClient,
  req
}: GetContextWithApollo<GetServerSidePropsContext>): Promise<GetServerSidePropsResult<Props>> => {
  // TODO: need to verify this works as expected once we start persisting page state in the url (e.g. page number/sorts/filters)
  const path = Array.isArray(query.all) ? query.all.join('/') : query.all ?? '';
  const pagePath = `/${locale}/${path}`;

  if (!isDataOnlyRequest(req)) {
    // ssr queries for page
    const { data, errors } = await apolloClient.query<GetPageByPathQuery, GetPageByPathQueryVariables>({
      query: GetPageByPathDocument,
      variables: {
        path: pagePath
      },
      errorPolicy: 'all'
    });

    if (errors && errors.length > 0) {
      if (has404RoutingError(errors)) {
        return {
          notFound: true
        };
      }
    }

    if (data.routeByPath?.page.type === 'CategoryPage') {
      await ssrQueryProductList(apolloClient, {
        filters: [
          {
            name: 'category_id',
            value: { eq: data.routeByPath.page.id }
          }
        ]
      });
    }
  }

  return {
    props: {
      pagePath
    }
  };
};

export const getServerSideProps = getI18nProps(
  ['catalog', 'commerce'],
  undefined,
  getApolloProps(createApolloClientConfig, getPageProps)
);

export default Index;
