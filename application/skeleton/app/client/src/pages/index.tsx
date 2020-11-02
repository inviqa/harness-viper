import React from 'react';
import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { useGetPageByPathQuery } from '~hooks/apollo';
import PageDistribution from '../components/PageDistribution';

const throw404 = () => {
  if (process.browser) {
    return <ErrorPage statusCode={404} />;
  }
  const e = new Error();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e as any).code = 'ENOENT';
  throw e;
};

export const Index: NextComponentType = () => {
  const router = useRouter();
  const queryResult = useGetPageByPathQuery({
    variables: {
      path: router.asPath
    }
  });

  const { loading, error, data } = queryResult;
  if (!data && error) {
    if (error.graphQLErrors.find(e => e.extensions?.code === '404')) {
      return throw404();
    }
    return (
      <>
        <h1>Error!</h1>
      </>
    );
  }

  if (loading) return <></>;

  // TODO: need to verify this works as expected once we start persisting page state in the url (e.g. page number/sorts/filters)
  return <PageDistribution key={router.asPath} queryResult={queryResult} />;
};

Index.getInitialProps = async () => ({
  namespacesRequired: ['common', 'catalog', 'commerce']
});

export default Index;
