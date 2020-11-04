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
import { cache, currentFiltersVar, currentSortVar } from '~lib/cache';
import { ProductSortCriteria, ProductSortOrder, ProductType } from '~hooks/apollo';

describe('ProductList', () => {
  beforeEach(() => {
    cache.reset();
    currentSortVar({ criteria: ProductSortCriteria.Position, order: ProductSortOrder.Asc });
    currentFiltersVar([]);
  });

  // TODO: investigate why sometimes it fails on CI
  // describe('When: the product data is loading', () => {
  //   const mock = getProductsMock();

  //   it('Then: it renders a loading icon', () => {
  //     const { getByLabelText } = renderWithProviders(<ProductList />, {
  //       mocks: [mock]
  //     });
  //     expect(getByLabelText('Loading')).toBeInTheDocument();
  //   });
  // });

  describe('When: product data is provided', () => {
    const mock = getProductsMock();

    it('Then: it renders all products', async () => {
      const { container, getByText } = renderWithProviders(<ProductList />, {
        mocks: [mock]
      });
      await waitFor(() => getByText('Aim Analog Watch'));
      expect(container.querySelectorAll('.product-card')).toHaveLength(9);
    });

    it('And: it renders a load more button', async () => {
      const { getByText } = renderWithProviders(<ProductList />, {
        mocks: [mock]
      });
      await waitFor(() => getByText('Aim Analog Watch'));
      expect(getByText('catalog:LoadMoreProducts')).toBeInTheDocument();
    });

    it('And: it renders the product counts', async () => {
      const { getByText } = renderWithProviders(<ProductList />, { mocks: [mock] });
      await waitFor(() => getByText('Aim Analog Watch'));
      expect(getByText('catalog:ProductListCount 27,9')).toBeInTheDocument();
    });

    describe('When: the sort is changed', () => {
      const sortingOptions = [
        { value: `${ProductSortCriteria.Position}_${ProductSortOrder.Asc}`, label: 'catalog:SortBy.Position.Asc' },
        { value: `${ProductSortCriteria.Name}_${ProductSortOrder.Asc}`, label: 'catalog:SortBy.Name.Asc' }
      ];
      const mocks = [
        getProductsMock(),
        getProductsMock({
          sort: { criteria: ProductSortCriteria.Name, order: ProductSortOrder.Asc },
          data: {
            products: {
              items: defaultProductsAlphaSorted,
              total: defaultProductsAlphaSorted.length * 3,
              facets: defaultFacets
            }
          }
        })
      ];

      it('Then: it renders a loading icon', async () => {
        const { getByLabelText } = renderWithProviders(<ProductList sortingOptions={sortingOptions} />, {
          mocks
        });
        await waitFor(() => getByLabelText('catalog:SortBy.Label'));
        userEvent.selectOptions(getByLabelText('catalog:SortBy.Label'), 'NAME_ASC');
        await waitFor(() => expect(getByLabelText('Loading')).toBeInTheDocument());
      });

      describe('When: sorted products have finished loading', () => {
        it('Then: it sorts the products according to selected sort', async () => {
          const { getByLabelText, getByText, container } = renderWithProviders(
            <ProductList sortingOptions={sortingOptions} />,
            {
              mocks
            }
          );
          await waitFor(() => getByLabelText('catalog:SortBy.Label'));
          userEvent.selectOptions(getByLabelText('catalog:SortBy.Label'), 'NAME_ASC');
          await waitFor(() => getByText('Aim Analog Watch'));
          expect(container.querySelectorAll('.product-card')[0]).toHaveTextContent('Aim Analog Watch');
          expect(container.querySelectorAll('.product-card')[8]).toHaveTextContent('Summit Watch');
        });
      });
    });

    describe('When: a filter is applied', () => {
      const mocks = [
        getProductsMock(),
        getProductsMock({
          filters: [{ name: 'category_id', value: { eq: '35' } }],
          data: {
            products: {
              items: defaultProductsFiltered,
              total: defaultProductsFiltered.length,
              facets: defaultFacets
            }
          }
        })
      ];

      it('Then: it renders a loading icon', async () => {
        const { getByLabelText } = renderWithProviders(<ProductList />, {
          mocks
        });
        await waitFor(() => getByLabelText(/Performance Fabrics/));
        userEvent.click(getByLabelText(/Performance Fabrics/));
        await waitFor(() => expect(getByLabelText('Loading')).toBeInTheDocument());
      });

      describe('When: filtered products have finished loading', () => {
        it('Then: it loads products matching the selected filter', async () => {
          const { getByLabelText, getByText, container } = renderWithProviders(<ProductList />, {
            mocks
          });
          await waitFor(() => getByLabelText(/Performance Fabrics/));
          userEvent.click(getByLabelText(/Performance Fabrics/));
          await waitFor(() => getByText('Aim Analog Watch'));
          expect(container.querySelectorAll('.product-card')).toHaveLength(3);
        });
      });
    });

    describe('When: load more button is clicked', () => {
      const mocks = [
        getProductsMock(),
        getProductsMock(), // apparently each mock can only be used once!
        getProductsMock({
          pagination: { offset: 9, limit: 12 },
          data: {
            products: {
              items: [
                ...defaultProducts,
                {
                  __typename: 'Product',
                  id: '1',
                  name: 'Test Product 1',
                  type: ProductType.Simple,
                  sku: '1',
                  url: '/test-product-1.html',
                  price: {
                    value: 9800,
                    currency: 'GBP'
                  },
                  thumbnailImage: null,
                  options: null,
                  variants: null
                },
                {
                  __typename: 'Product',
                  id: '2',
                  name: 'Test Product 2',
                  type: ProductType.Simple,
                  sku: '2',
                  url: '/test-product-2.html',
                  price: {
                    value: 432423,
                    currency: 'GBP'
                  },
                  thumbnailImage: null,
                  options: null,
                  variants: null
                }
              ],
              total: defaultProducts.length * 3,
              facets: defaultFacets
            }
          }
        })
      ];

      it('Then: it disables load more button', async () => {
        const { getByText } = renderWithProviders(<ProductList />, { mocks });
        await waitFor(() => getByText('catalog:LoadMoreProducts'));
        userEvent.click(getByText('catalog:LoadMoreProducts'));
        await waitFor(() => expect(getByText('catalog:LoadMoreProducts')).toBeDisabled());
      });

      describe('When: more products have finished loading', () => {
        it('Then: it renders new product list', async () => {
          const { getByText, container } = renderWithProviders(<ProductList />, { mocks });
          await waitFor(() => getByText('catalog:LoadMoreProducts'));
          userEvent.click(getByText('catalog:LoadMoreProducts'));
          await waitFor(() => getByText('Test Product 1'));
          expect(container.querySelectorAll('.product-card')).toHaveLength(11);
        });
      });
    });
  });

  describe('When: product data is provided and there are no more products to load', () => {
    const sortingOptions = [
      { value: `${ProductSortCriteria.Position}_${ProductSortOrder.Asc}`, label: 'catalog:SortBy.Position.Asc' },
      { value: `${ProductSortCriteria.Name}_${ProductSortOrder.Asc}`, label: 'catalog:SortBy.Name.Asc' }
    ];
    const mocks = [
      getProductsMock({
        data: { products: { items: defaultProducts, total: defaultProducts.length, facets: defaultFacets } }
      }),
      getProductsMock({
        sort: { criteria: ProductSortCriteria.Name, order: ProductSortOrder.Asc },
        data: {
          products: {
            items: defaultProductsAlphaSorted,
            total: defaultProductsAlphaSorted.length,
            facets: defaultFacets
          }
        }
      })
    ];
    it('Then: it does not render a load more button', async () => {
      const { queryByText, getByText } = renderWithProviders(<ProductList sortingOptions={sortingOptions} />, {
        mocks
      });
      await waitFor(() => getByText('Aim Analog Watch'));
      expect(queryByText('catalog:LoadMoreProducts')).toBeNull();
    });

    it('And: it allows products to be sorted', async () => {
      const { getByLabelText, getByText, container } = renderWithProviders(
        <ProductList sortingOptions={sortingOptions} />,
        {
          mocks
        }
      );
      await waitFor(() => getByLabelText('catalog:SortBy.Label'));
      userEvent.selectOptions(getByLabelText('catalog:SortBy.Label'), 'NAME_ASC');
      await waitFor(() => getByText('Aim Analog Watch'));
      expect(container.querySelectorAll('.product-card')[0]).toHaveTextContent('Aim Analog Watch');
      expect(container.querySelectorAll('.product-card')[8]).toHaveTextContent('Summit Watch');
    });
  });

  describe('When: product data is not provided', () => {
    const mock = getProductsMock({
      data: { products: { __typename: 'ProductList', items: [], total: 0, facets: [] } }
    });

    it('Then: it renders a message', async () => {
      const { getByText, getByRole } = renderWithProviders(<ProductList />, {
        mocks: [mock]
      });
      await waitFor(() => getByRole('alert'));
      expect(getByText('catalog:NoProductsFound')).toBeInTheDocument();
    });

    it('And: no load more button is rendered', async () => {
      const { getByRole, queryByText } = renderWithProviders(<ProductList />, {
        mocks: [mock]
      });
      await waitFor(() => getByRole('alert'));
      expect(queryByText('catalog:LoadMoreProducts')).toBeNull();
    });
  });
});
