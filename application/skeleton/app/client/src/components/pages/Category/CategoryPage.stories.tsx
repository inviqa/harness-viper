import React from 'react';
import { withApollo } from '@inviqa/viper-storybook-addons';
import CategoryPage from './CategoryPage';
import { PageProps } from '..';
import data from './mock.json';
import { getProductsMock } from '~hooks/apollo/mocks/GetProducts';
import { addToCartMock } from '~hooks/apollo/mocks/AddToCart';
import { cache } from '~lib/cache';

export default {
  component: CategoryPage,
  title: 'Pages/CategoryPage',
  decorators: [withApollo],
  parameters: {
    apollo: {
      cache,
      mocks: [
        getProductsMock({
          filters: [{ name: 'category_id', value: { eq: data.routeByPath.page.id } }],
          pagination: { offset: 0, limit: 12 }
        }),
        addToCartMock()
      ]
    }
  }
};

export const categoryPage = () => <CategoryPage queryResult={({ data } as unknown) as PageProps['queryResult']} />;
