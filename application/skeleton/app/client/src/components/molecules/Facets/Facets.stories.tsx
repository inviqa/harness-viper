import React from 'react';
import Facets, { Props } from './Facets';

export default {
  component: Facets,
  title: 'Molecules/Facets',
  args: {
    facets: [
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
              from: '80',
              to: null
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
    ]
  },
  argTypes: { onFilterChange: { action: 'onFilterChange' } }
};

export const withData = (args: Props) => <Facets {...args} />;
