import { renderHook } from '@testing-library/react-hooks';
import { useGetProductsQuery } from '~hooks/apollo';
import { getProductsMock } from '~hooks/apollo/mocks/GetProducts';
import { useProductList } from './useProductList';

jest.mock('~hooks/apollo', () => {
  const actual = jest.requireActual('../apollo');
  return {
    ...actual,
    useGetProductsQuery: jest.fn()
  };
});

describe(useProductList, () => {
  beforeEach(() => {
    (useGetProductsQuery as jest.Mock).mockImplementation(() => ({
      loading: false,
      data: getProductsMock().result.data
    }));
  });

  describe('When: component is rendered with no custom variables', () => {
    it('Then: it makes a query for products with default values', () => {
      renderHook(() => useProductList());
      expect(useGetProductsQuery).toHaveBeenCalledTimes(1);
      expect(useGetProductsQuery).toHaveBeenCalledWith({
        notifyOnNetworkStatusChange: expect.any(Boolean),
        variables: {
          filters: [],
          pagination: { limit: expect.any(Number), offset: 0 },
          sort: { criteria: expect.any(String), order: expect.any(String) }
        }
      });
    });

    it('And: it returns an accurate representation of the query response for rendering UI', () => {
      const { result } = renderHook(() => useProductList());
      expect(result.current).toEqual({
        data: {
          items: expect.any(Array),
          facets: expect.any(Array),
          filteredSortingOptions: [],
          total: expect.any(Number)
        },
        actions: {
          fetchMore: expect.any(Function),
          onFilterChange: expect.any(Function),
          onSortChange: expect.any(Function)
        },
        state: {
          canLoadMore: true,
          currentSort: { criteria: expect.any(String), order: expect.any(String) },
          isFetchingMore: false,
          isNewDataLoading: false,
          visible: expect.any(Number)
        }
      });
    });
  });

  describe('When: component is rendered with custom variables', () => {
    it('Then: it makes a query for products including the custom variables', () => {
      renderHook(() =>
        useProductList({
          searchTerm: 'something',
          filters: [{ name: 'category_id', value: { eq: '7' } }]
        })
      );
      expect(useGetProductsQuery).toHaveBeenCalledWith({
        notifyOnNetworkStatusChange: expect.any(Boolean),
        variables: {
          filters: [{ name: 'category_id', value: { eq: '7' } }],
          searchTerm: 'something',
          pagination: { limit: expect.any(Number), offset: 0 },
          sort: { criteria: expect.any(String), order: expect.any(String) }
        }
      });
    });
  });

  describe('When: component is rendered with sorting options', () => {
    it('Then: it filters the sorting options according to the query response', () => {
      const { result } = renderHook(() =>
        useProductList(undefined, [
          { value: 'POSITION_ASC', label: 'position' },
          { value: 'COLOUR_ASC', label: 'colour' }
        ])
      );
      expect(result.current.data.filteredSortingOptions).toEqual([{ value: 'POSITION_ASC', label: 'position' }]);
    });
  });
});
