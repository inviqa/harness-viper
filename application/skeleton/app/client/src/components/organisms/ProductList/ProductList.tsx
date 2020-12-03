import { Grid, BoxOwnProps, Button } from 'theme-ui';
import React, { FunctionComponent, HTMLAttributes, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { NetworkStatus, useReactiveVar } from '@apollo/client';
import { Toolbar, ToolbarProps } from '@inviqa/viper-ui-commerce';
import { Filter, ProductSortCriteria, Sort, useGetProductsQuery } from '~hooks/apollo';
import { currentFiltersVar, currentSortVar, normalizeFilterValue } from '~lib/cache';
import Result from '../../utility/Result/Result';
import TwoColumnsPageLayout from '../../templates/TwoColumnContentLayout/TwoColumnContentLayout';
import Facets from '../../molecules/Facets/Facets';
import ProductCard from '../../molecules/ProductCard/ProductCard';

const onSortChange = (value: string) => {
  const [criteria, order] = value.split('_') as [Sort['criteria'], Sort['order']];
  currentSortVar({ criteria, order });
};

const onFilterChange = (filters: { name: string; value: string }[]) => {
  const filtersToApply = filters.map(({ name, value }) => {
    const parsedValue = JSON.parse(value);
    return {
      name,
      value: normalizeFilterValue(parsedValue)
    };
  });

  currentFiltersVar(filtersToApply);
};

const ProductList: FunctionComponent<
  {
    filters?: Filter[];
    searchTerm?: string;
    sortingOptions?: ToolbarProps['sortingOptions'];
  } & HTMLAttributes<HTMLElement> & { as?: BoxOwnProps['as'] }
> = memo(({ filters = [], sortingOptions = [], searchTerm, ...props }) => {
  const limit = 12;
  const currentSort = useReactiveVar(currentSortVar);
  const currentFilters = useReactiveVar(currentFiltersVar);
  const { data, loading, error, fetchMore, networkStatus } = useGetProductsQuery({
    variables: {
      filters: [...filters, ...currentFilters],
      pagination: {
        offset: 0,
        limit
      },
      sort: currentSort,
      searchTerm
    },
    notifyOnNetworkStatusChange: true
  });
  const { t } = useTranslation('catalog');

  const { items = [], total = 0, facets = [], sortCriterias = [] } = data?.products ?? {};
  const isFetchingMore = networkStatus === NetworkStatus.fetchMore;
  const isNewDataLoading = !data && loading;
  const canLoadMore = items.length < total;

  const filteredSortingOptions = useMemo(
    () =>
      sortingOptions.filter(sorting =>
        sortCriterias.includes(sorting.value.replace(/_[A-Z]+$/, '') as ProductSortCriteria)
      ),
    [sortingOptions, sortCriterias]
  );

  return (
    <>
      <Toolbar
        data-toolbar
        sortingOptions={filteredSortingOptions}
        selectedSort={`${currentSort.criteria}_${currentSort.order}`}
        onSortChange={onSortChange}
        totalItemCount={total}
        visibleItemCount={items.length}
      />

      <Result loading={isNewDataLoading} error={items.length === 0 ? t('catalog:NoProductsFound') : error?.message}>
        <TwoColumnsPageLayout sidebarPos="left" sidebar={<Facets facets={facets} onFilterChange={onFilterChange} />}>
          <Grid columns={[2, 3, 4]} {...props}>
            {items.map(product => (
              <ProductCard key={product.id} data-product-card {...product} />
            ))}
          </Grid>

          {canLoadMore ? (
            <Button
              data-load-more
              variant="secondary"
              sx={{ display: 'block', mt: 4, mx: 'auto' }}
              disabled={isFetchingMore}
              onClick={() => {
                fetchMore({
                  variables: {
                    pagination: {
                      offset: items.length,
                      limit
                    }
                  }
                });
              }}
            >
              {t('catalog:LoadMoreProducts')}
            </Button>
          ) : null}
        </TwoColumnsPageLayout>
      </Result>
    </>
  );
});

export default ProductList;
