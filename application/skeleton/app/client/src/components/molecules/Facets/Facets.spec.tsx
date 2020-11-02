import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Facets from './Facets';
import { GetProductsQuery } from '~hooks/apollo';

describe(Facets, () => {
  describe('When: facets are provided', () => {
    const facets: GetProductsQuery['products']['facets'] = [
      {
        name: 'price',
        label: 'Price',
        options: [
          {
            count: 12,
            label: '20-30',
            facetName: 'price',
            isSelected: false,
            value: {
              __typename: 'FacetRangeValue',
              from: '20',
              to: '30'
            }
          },
          {
            count: 15,
            label: '30-40',
            facetName: 'price',
            isSelected: false,
            value: {
              __typename: 'FacetRangeValue',
              from: '30',
              to: '40'
            }
          },
          {
            count: 4,
            label: '40-50',
            facetName: 'price',
            isSelected: false,
            value: {
              __typename: 'FacetRangeValue',
              from: '40',
              to: '50'
            }
          },
          {
            count: 10,
            label: '50-60',
            facetName: 'price',
            isSelected: false,
            value: {
              __typename: 'FacetRangeValue',
              from: '50',
              to: '60'
            }
          },
          {
            count: 5,
            label: '60-70',
            facetName: 'price',
            isSelected: false,
            value: {
              __typename: 'FacetRangeValue',
              from: '60',
              to: '70'
            }
          },
          {
            count: 3,
            label: '70-80',
            facetName: 'price',
            isSelected: false,
            value: {
              __typename: 'FacetRangeValue',
              from: '70',
              to: '80'
            }
          },
          {
            count: 1,
            label: '80-*',
            facetName: 'price',
            isSelected: false,
            value: {
              __typename: 'FacetRangeValue',
              from: '80',
              to: null
            }
          }
        ]
      },
      {
        name: 'sale',
        label: 'Sale',
        options: [
          {
            count: 50,
            label: '0',
            facetName: 'sale',
            isSelected: false,
            value: {
              eq: '1',
              is: null
            }
          },
          {
            count: 20,
            label: '1',
            facetName: 'sale',
            isSelected: false,
            value: {
              eq: '0',
              is: null
            }
          }
        ]
      },
      {
        name: 'category_id',
        label: 'Category',
        options: [
          {
            count: 13,
            label: 'New Luma Yoga Collection',
            facetName: 'category_id',
            isSelected: false,
            value: {
              eq: '8',
              in: null
            }
          },
          {
            count: 50,
            label: 'Women&reg;',
            facetName: 'category_id',
            isSelected: false,
            value: {
              eq: '20',
              in: null
            }
          },
          {
            count: 50,
            label: 'Tops',
            facetName: 'category_id',
            isSelected: false,
            value: {
              eq: '21',
              in: null
            }
          },
          {
            count: 12,
            label: 'Jackets',
            facetName: 'category_id',
            isSelected: false,
            value: {
              eq: '23',
              in: null
            }
          },
          {
            count: 12,
            label: 'Hoodies & Sweatshirts',
            facetName: 'category_id',
            isSelected: false,
            value: {
              eq: '24',
              in: null
            }
          },
          {
            count: 12,
            label: 'Tees',
            facetName: 'category_id',
            isSelected: false,
            value: {
              eq: '25',
              in: null
            }
          },
          {
            count: 14,
            label: 'Bras & Tanks',
            facetName: 'category_id',
            isSelected: false,
            value: {
              eq: '26',
              in: null
            }
          },
          {
            count: 12,
            label: 'Women Sale',
            facetName: 'category_id',
            isSelected: false,
            value: {
              eq: '30',
              in: null
            }
          },
          {
            count: 11,
            label: 'Erin Recommends',
            facetName: 'category_id',
            isSelected: false,
            value: {
              eq: '34',
              in: null
            }
          },
          {
            count: 13,
            label: 'Performance Fabrics',
            facetName: 'category_id',
            isSelected: false,
            value: {
              eq: '35',
              in: null
            }
          },
          {
            count: 6,
            label: 'Eco Friendly',
            facetName: 'category_id',
            isSelected: false,
            value: {
              eq: '36',
              in: null
            }
          }
        ]
      }
    ];

    it('Then: it renders the facet names', () => {
      const { getByText } = render(<Facets facets={facets} onFilterChange={jest.fn()} />);

      facets.forEach(({ label }) => {
        expect(getByText(label)).toBeInTheDocument();
      });
    });

    it('And: it renders simple facet options', () => {
      const { getByLabelText } = render(<Facets facets={facets} onFilterChange={jest.fn()} />);
      const item = getByLabelText('Women® (50)'); // checking entities are decoded - test data only contains &reg;
      expect(item).toBeInTheDocument();
      expect(item).toHaveAttribute('value', '{"eq":"20","in":null}');
      expect(item).toHaveAttribute('name', 'category_id');
    });

    it('And: it renders price facet options', () => {
      const { getByLabelText } = render(<Facets facets={facets} onFilterChange={jest.fn()} />);
      const item = getByLabelText('£20.00 − £30.00 (12)');
      expect(item).toBeInTheDocument();
      expect(item).toHaveAttribute('value', '{"__typename":"FacetRangeValue","from":"20","to":"30"}');
      expect(item).toHaveAttribute('name', 'price');
    });

    it('And: it renders boolean facet options', () => {
      const { getByLabelText } = render(<Facets facets={facets} onFilterChange={jest.fn()} />);
      const noItem = getByLabelText('Facet.Boolean.No (50)');
      expect(noItem).toBeInTheDocument();
      expect(noItem).toHaveAttribute('value', '{"eq":"1","is":null}');
      expect(noItem).toHaveAttribute('name', 'sale');

      const yesItem = getByLabelText('Facet.Boolean.Yes (20)');
      expect(yesItem).toBeInTheDocument();
      expect(yesItem).toHaveAttribute('value', '{"eq":"0","is":null}');
      expect(yesItem).toHaveAttribute('name', 'sale');
    });

    it('And: it forwards onFilterChange through to third-party facets component', () => {
      const onFilterChange = jest.fn();
      const { getByLabelText } = render(<Facets facets={facets} onFilterChange={onFilterChange} />);
      expect(onFilterChange).not.toHaveBeenCalled();
      userEvent.click(getByLabelText(/Performance Fabrics/));
      expect(onFilterChange).toHaveBeenCalledTimes(1);
      expect(onFilterChange).toHaveBeenCalledWith([{ name: 'category_id', value: '{"eq":"35","in":null}' }]);
    });
  });
});
