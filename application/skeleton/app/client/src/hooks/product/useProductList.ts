import { ApolloClient, ApolloQueryResult, NetworkStatus, NormalizedCacheObject, useReactiveVar } from '@apollo/client';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { ToolbarProps } from '@inviqa/viper-ui';
import { currentFiltersVar, currentSortVar, normalizeFilterValue } from '~lib/apolloCacheConfig';
import {
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryVariables,
  ProductSortCriteria,
  Sort,
  useGetProductsQuery
} from '~hooks/apollo';
import type { ProductListInitialVariables } from './types';

const defaultVariables = {
  pagination: {
    offset: 0,
    limit: 12
  }
};

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

const useProductListVariables = ({ filters, searchTerm }: ProductListInitialVariables): GetProductsQueryVariables => {
  const currentSort = useReactiveVar(currentSortVar);
  const currentFilters = useReactiveVar(currentFiltersVar);
  const variables = useMemo(() => {
    const filtersToReturn = filters ?? [];
    return {
      ...defaultVariables,
      filters: [...(Array.isArray(filtersToReturn) ? filtersToReturn : [filtersToReturn]), ...currentFilters],
      sort: currentSort,
      searchTerm
    };
  }, [currentFilters, currentSort, filters, searchTerm]);

  return variables;
};

export const useProductList = (
  initialVariables: ProductListInitialVariables = {},
  sortingOptions: ToolbarProps['sortingOptions'] = []
) => {
  const { t } = useTranslation('catalog');
  const variables = useProductListVariables(initialVariables);
  const { data, loading, error, fetchMore, networkStatus } = useGetProductsQuery({
    variables,
    notifyOnNetworkStatusChange: true
  });

  const { items = [], total = 0, facets = [], sortCriterias = [] } = data?.products ?? {};

  const filteredSortingOptions = useMemo(
    () =>
      sortingOptions.filter(sorting =>
        sortCriterias.includes(sorting.value.replace(/_[A-Z]+$/, '') as ProductSortCriteria)
      ),
    [sortingOptions, sortCriterias]
  );

  const fetchMoreWithVariables = useCallback(
    () =>
      fetchMore({
        variables: {
          pagination: {
            offset: items.length,
            limit: variables.pagination.limit
          }
        }
      }),
    [fetchMore, items.length, variables.pagination.limit]
  );

  return {
    data: {
      items,
      total,
      facets,
      filteredSortingOptions
    },
    state: {
      currentSort: variables.sort,
      visible: items.length,
      isNewDataLoading: !data && loading,
      canLoadMore: items.length < total,
      isFetchingMore: networkStatus === NetworkStatus.fetchMore,
      errorMessage: items.length === 0 ? t('catalog:NoProductsFound') : error?.message
    },
    actions: {
      fetchMore: fetchMoreWithVariables,
      onSortChange,
      onFilterChange
    }
  };
};

export const ssrQueryProductList = (
  client: ApolloClient<NormalizedCacheObject>,
  { filters, searchTerm }: ProductListInitialVariables
): Promise<ApolloQueryResult<GetProductsQuery>> => {
  return client.query<GetProductsQuery>({
    query: GetProductsDocument,
    variables: {
      ...defaultVariables,
      filters,
      searchTerm,
      sort: currentSortVar()
    }
  });
};
