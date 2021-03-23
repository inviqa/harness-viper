import React from 'react';
import { withApollo } from '@inviqa/viper-storybook-addons';
import { createApolloCache } from '@inviqa/viper-nextjs';
import ProductList from './ProductList';
import { apolloCacheConfig } from '~lib/apolloCacheConfig';
import { getProductsMock } from '~hooks/apollo/mocks/GetProducts';
import { addToCartMock } from '~hooks/apollo/mocks/AddToCart';

export default {
  component: ProductList,
  title: 'Organisms/ProductList',
  decorators: [withApollo],
  parameters: {
    apollo: {
      cache: createApolloCache(apolloCacheConfig),
      mocks: [getProductsMock(), addToCartMock()]
    }
  }
};

export const withProducts = () => <ProductList />;
export const withNoProducts = () => <ProductList />;
