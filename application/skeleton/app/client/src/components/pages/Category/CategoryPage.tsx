import React, { FunctionComponent, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import ProductList from '../../organisms/ProductList/ProductList';
import DocumentTitle from '../../DocumentTitle';
import { PageProps } from '../types';
import { CategoryPageFragmentFragment, ProductSortCriteria, ProductSortOrder } from '~hooks/apollo';
import { parseHtml } from '~lib/parseHtml';

export const CategoryPage: FunctionComponent<PageProps> = ({ queryResult }) => {
  const page = queryResult.data?.routeByPath?.page as CategoryPageFragmentFragment;
  const { t } = useTranslation('catalog');
  const productsFilters = useMemo(
    () => [
      {
        name: 'category_id',
        value: { eq: page.id }
      }
    ],
    [page.id]
  );
  const sortingOptions = useMemo(
    () => [
      { value: `${ProductSortCriteria.Position}_${ProductSortOrder.Asc}`, label: t('SortBy.Position.Asc') },
      { value: `${ProductSortCriteria.Name}_${ProductSortOrder.Asc}`, label: t('SortBy.Name.Asc') },
      { value: `${ProductSortCriteria.Price}_${ProductSortOrder.Asc}`, label: t('SortBy.Price.Asc') },
      { value: `${ProductSortCriteria.Price}_${ProductSortOrder.Desc}`, label: t('SortBy.Price.Desc') }
    ],
    [t]
  );

  return (
    <>
      <DocumentTitle title={page.category.title} />
      <h1 className="mb-3">{page.category.name}</h1>

      {page.category.description ? parseHtml(page.category.description) : null}

      <ProductList filters={productsFilters} sortingOptions={sortingOptions} />
    </>
  );
};

export default CategoryPage;
