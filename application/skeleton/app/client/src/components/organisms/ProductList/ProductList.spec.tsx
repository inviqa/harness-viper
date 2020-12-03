import React from 'react';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductList from './ProductList';
import { renderWithProviders } from '~test-helpers';
import {
  defaultFacets,
  defaultProducts,
  defaultProductsAlphaSorted,
  defaultProductsFiltered,
  getProductsMock
} from '~hooks/apollo/mocks/GetProducts';
import { currentFiltersVar, currentSortVar } from '~lib/cache';
import { ProductSortCriteria, ProductSortOrder, useGetProductsQuery } from '~hooks/apollo';

jest.mock('~hooks/apollo', () => {
  const actual = jest.requireActual('../../../hooks/apollo');
  return {
    ...actual,
    useGetProductsQuery: jest.fn()
  };
});

describe('ProductList', () => {
  beforeEach(() => {
    currentSortVar({ criteria: ProductSortCriteria.Position, order: ProductSortOrder.Asc });
    currentFiltersVar([]);
  });

  describe('When: the product data is loading', () => {
    beforeEach(() => {
      (useGetProductsQuery as jest.Mock).mockImplementationOnce(() => ({
        loading: true
      }));
    });

    it('Then: it renders a loading icon', () => {
      const { getByLabelText } = renderWithProviders(<ProductList />);
      expect(getByLabelText('Loading')).toBeInTheDocument();
    });
  });

  describe('When: product data is provided', () => {
    beforeEach(() => {
      (useGetProductsQuery as jest.Mock).mockImplementation(() => ({
        loading: false,
        data: getProductsMock().result.data
      }));
    });

    it('Then: it renders all products', async () => {
      const { container, getByText } = renderWithProviders(<ProductList />);
      await waitFor(() => getByText('Aim Analog Watch'));
      expect(container.querySelectorAll('.product-card')).toHaveLength(9);
    });

    it('And: it renders a load more button', async () => {
      const { getByText } = renderWithProviders(<ProductList />);
      await waitFor(() => getByText('Aim Analog Watch'));
      expect(getByText('catalog:LoadMoreProducts')).toBeInTheDocument();
    });

    it('And: it renders the product counts', async () => {
      const { getByText } = renderWithProviders(<ProductList />);
      await waitFor(() => getByText('Aim Analog Watch'));
      expect(getByText('catalog:ProductListCount 27,9')).toBeInTheDocument();
    });
  });

  describe('When: the sort is changed', () => {
    const sortingOptions = [
      { value: `${ProductSortCriteria.Position}_${ProductSortOrder.Asc}`, label: 'catalog:SortBy.Position.Asc' },
      { value: `${ProductSortCriteria.Name}_${ProductSortOrder.Asc}`, label: 'catalog:SortBy.Name.Asc' }
    ];

    beforeEach(() => {
      (useGetProductsQuery as jest.Mock)
        .mockImplementationOnce(() => ({
          loading: false,
          data: getProductsMock().result.data
        }))
        .mockImplementationOnce(() => ({
          loading: false,
          data: {
            products: {
              items: defaultProductsAlphaSorted,
              total: defaultProductsAlphaSorted.length * 3,
              facets: defaultFacets,
              sortCriterias: ['NAME', 'POSITION', 'PRICE', 'RELEVANCE']
            }
          }
        }));
    });

    describe('And: sorted products have finished loading', () => {
      it('Then: it sorts the products according to selected sort', async () => {
        const { getByLabelText, getByText, container } = renderWithProviders(
          <ProductList sortingOptions={sortingOptions} />
        );
        await waitFor(() => getByLabelText('catalog:SortBy.Label'));
        userEvent.selectOptions(getByLabelText('catalog:SortBy.Label'), 'NAME_ASC');
        expect(useGetProductsQuery).toHaveBeenLastCalledWith({
          notifyOnNetworkStatusChange: true,
          variables: {
            filters: [],
            pagination: { limit: 12, offset: 0 },
            sort: { criteria: 'NAME', order: 'ASC' }
          }
        });
        await waitFor(() => getByText('Aim Analog Watch'));
        expect(container.querySelectorAll('.product-card')[0]).toHaveTextContent('Aim Analog Watch');
        expect(container.querySelectorAll('.product-card')[8]).toHaveTextContent('Summit Watch');
      });
    });
  });

  describe('When: a filter is applied', () => {
    beforeEach(() => {
      (useGetProductsQuery as jest.Mock)
        .mockImplementationOnce(() => ({
          loading: false,
          data: getProductsMock().result.data
        }))
        .mockImplementationOnce(() => ({
          loading: false,
          data: {
            products: {
              items: defaultProductsFiltered,
              total: defaultProductsFiltered.length,
              facets: defaultFacets,
              sortCriterias: ['NAME', 'POSITION', 'PRICE', 'RELEVANCE']
            }
          }
        }));
    });

    describe('When: filtered products have finished loading', () => {
      it('Then: it loads products matching the selected filter', async () => {
        const { getByLabelText, getByText, container } = renderWithProviders(<ProductList />);
        await waitFor(() => getByLabelText(/Performance Fabrics/));
        userEvent.click(getByLabelText(/Performance Fabrics/));
        expect(useGetProductsQuery).toHaveBeenLastCalledWith({
          notifyOnNetworkStatusChange: true,
          variables: {
            filters: [{ name: 'category_id', value: { eq: '35' } }],
            pagination: { limit: 12, offset: 0 },
            sort: { criteria: 'POSITION', order: 'ASC' }
          }
        });
        await waitFor(() => getByText('Aim Analog Watch'));
        expect(container.querySelectorAll('.product-card')).toHaveLength(3);
      });
    });
  });

  describe('When: load more button is clicked', () => {
    let fetchMore: jest.Mock;

    beforeEach(() => {
      fetchMore = jest.fn();
      (useGetProductsQuery as jest.Mock).mockImplementationOnce(() => ({
        fetchMore,
        loading: false,
        data: getProductsMock().result.data
      }));
    });

    it('Then: it fetches more products', async () => {
      const { getByText } = renderWithProviders(<ProductList />);
      await waitFor(() => getByText('catalog:LoadMoreProducts'));
      userEvent.click(getByText('catalog:LoadMoreProducts'));
      expect(fetchMore).toHaveBeenCalledTimes(1);
      expect(fetchMore).toHaveBeenCalledWith({ variables: { pagination: { limit: 12, offset: 9 } } });
    });
  });

  describe('When: product data is provided and there are no more products to load', () => {
    const sortingOptions = [
      { value: `${ProductSortCriteria.Position}_${ProductSortOrder.Asc}`, label: 'catalog:SortBy.Position.Asc' },
      { value: `${ProductSortCriteria.Name}_${ProductSortOrder.Asc}`, label: 'catalog:SortBy.Name.Asc' }
    ];

    beforeEach(() => {
      (useGetProductsQuery as jest.Mock).mockImplementationOnce(() => ({
        loading: false,
        data: {
          products: {
            items: defaultProducts,
            total: defaultProducts.length,
            facets: defaultFacets,
            sortCriterias: ['NAME', 'POSITION', 'PRICE', 'RELEVANCE']
          }
        }
      }));
    });

    it('Then: it does not render a load more button', async () => {
      const { queryByText, getByText } = renderWithProviders(<ProductList sortingOptions={sortingOptions} />);
      await waitFor(() => getByText('Aim Analog Watch'));
      expect(queryByText('catalog:LoadMoreProducts')).not.toBeInTheDocument();
    });
  });

  describe('When: product data is not provided', () => {
    beforeEach(() => {
      (useGetProductsQuery as jest.Mock).mockImplementationOnce(() => ({
        loading: false,
        data: {
          products: {
            __typename: 'ProductList',
            items: [],
            total: 0,
            facets: [],
            sortCriterias: ['NAME', 'POSITION', 'PRICE', 'RELEVANCE']
          }
        }
      }));
    });

    it('Then: it renders a message', async () => {
      const { getByText, getByRole } = renderWithProviders(<ProductList />);
      await waitFor(() => getByRole('alert'));
      expect(getByText('catalog:NoProductsFound')).toBeInTheDocument();
    });

    it('And: no load more button is rendered', async () => {
      const { getByRole, queryByText } = renderWithProviders(<ProductList />);
      await waitFor(() => getByRole('alert'));
      expect(queryByText('catalog:LoadMoreProducts')).not.toBeInTheDocument();
    });
  });
});
