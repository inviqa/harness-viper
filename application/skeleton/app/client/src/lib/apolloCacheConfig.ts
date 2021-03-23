import { InMemoryCacheConfig, makeVar } from '@apollo/client';
import isEqual from 'react-fast-compare';
import {
  FacetValue,
  Filter,
  ProductFilterInput,
  ProductSortCriteria,
  ProductSortOrder,
  Sort,
  TypedTypePolicies
} from '~hooks/apollo';

export const isMiniCartVisibleVar = makeVar(false);

const defaultSort = { criteria: ProductSortCriteria.Position, order: ProductSortOrder.Asc };
export const currentSortVar = makeVar<Sort>(defaultSort);
const lastSortVar = makeVar<Sort | null>(null);

const defaultFilters: Filter[] = [];
export const currentFiltersVar = makeVar<Filter[]>(defaultFilters);
const lastFiltersVar = makeVar<Filter[] | null>(null);

export const resetVarsOnPageChange = () => {
  lastSortVar(null);
  lastFiltersVar(null);

  currentSortVar(defaultSort);
  currentFiltersVar(defaultFilters);
};

export const normalizeFilterValue = (value: FacetValue): Omit<FacetValue, '__typename'> =>
  Object.keys(value).reduce((validParameters, parameter) => {
    if (value[parameter as keyof FacetValue] && parameter !== '__typename') {
      return {
        ...validParameters,
        [parameter]: value[parameter as keyof FacetValue]
      };
    }

    return validParameters;
  }, {});

const typePolicies: TypedTypePolicies = {
  Menu: {
    keyFields: ['name']
  },
  ProductList: {
    fields: {
      items: {
        merge(existing, incoming, { variables: { pagination, sort, filters } = {} }) {
          if (!lastSortVar()) lastSortVar(sort);
          if (!lastFiltersVar()) lastFiltersVar(filters);

          if (!isEqual(lastSortVar(), sort)) {
            lastSortVar(sort);
            return incoming;
          }

          if (!isEqual(lastFiltersVar(), filters)) {
            lastFiltersVar(filters);
            return incoming;
          }

          const merged = existing ? existing.slice(0) : [];
          const start = pagination.offset;
          const end = start + incoming.length;
          for (let i = start; i < end; ++i) {
            merged[i] = incoming[i - start];
          }
          return merged;
        }
      }
    }
  },
  FacetOption: {
    fields: {
      isSelected: {
        read(_, { variables: { filters = [] } = {}, readField }) {
          const fieldValue = readField('value') as FacetValue;
          const facetName = readField('facetName');

          if (!fieldValue || !facetName) {
            return false;
          }

          const transformedValue = normalizeFilterValue(fieldValue);
          const isPresentInFilters = filters.some((filter: ProductFilterInput) => {
            return filter.name === facetName && isEqual(filter.value, transformedValue);
          });

          return isPresentInFilters;
        }
      }
    }
  },
  Cart: {
    fields: {
      items: {
        merge(_existing, incoming) {
          return incoming;
        }
      }
    }
  }
};

export const apolloCacheConfig: InMemoryCacheConfig = {
  typePolicies
};
