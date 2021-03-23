import React from 'react';
import { useTranslation } from 'react-i18next';
import type { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import { getApolloProps, GetContextWithApollo, getI18nProps, isDataOnlyRequest } from '@inviqa/viper-nextjs';
import ProductList from '../components/organisms/ProductList/ProductList';
import DocumentTitle from '../components/DocumentTitle';
import { GetMenuDocument, GetMenuQuery, GetMenuQueryVariables } from '~hooks/apollo';
import createApolloClientConfig from '~lib/createApolloClientConfig';

type Props = {
  searchTerm: string;
};

export const Search: NextPage<Props> = ({ searchTerm }) => {
  const { t } = useTranslation('common');
  return (
    <>
      <DocumentTitle title={t('Search.Title', { term: searchTerm })} />
      <ProductList searchTerm={searchTerm} />
    </>
  );
};

const getPageProps = async ({
  apolloClient,
  query,
  req
}: GetContextWithApollo<GetServerSidePropsContext>): Promise<GetServerSidePropsResult<Props>> => {
  if (!isDataOnlyRequest(req)) {
    // ssr queries for page - ssr for main menu as it's 'above the fold', leave footer menu for csr
    await Promise.all([
      apolloClient.query<GetMenuQuery, GetMenuQueryVariables>({
        query: GetMenuDocument,
        variables: { name: 'main' }
      })
    ]);
  }

  return {
    props: {
      searchTerm: Array.isArray(query.q) ? query.q.join(',') : query.q ?? ''
    }
  };
};

export const getServerSideProps = getI18nProps(
  ['catalog', 'commerce'],
  undefined,
  getApolloProps(createApolloClientConfig, getPageProps)
);

export default Search;
