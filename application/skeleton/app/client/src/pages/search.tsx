import React from 'react';
import { NextComponentType, NextPageContext } from 'next';
import ProductList from '../components/organisms/ProductList/ProductList';
import DocumentTitle from '../components/DocumentTitle';
import { useTranslation } from '~lib/createI18n';

type Props = {
  searchTerm?: string;
  namespacesRequired?: string[];
};

export const Search: NextComponentType<NextPageContext, unknown, Props> = ({ searchTerm = '' }) => {
  const { t } = useTranslation('common');
  return (
    <>
      <DocumentTitle title={t('Search.Title', { term: searchTerm })} />
      <ProductList searchTerm={searchTerm} />
    </>
  );
};

Search.getInitialProps = async context => ({
  namespacesRequired: ['common', 'catalog', 'commerce'],
  searchTerm: context.query.q
});

export default Search;
