import React from 'react';
import { withApollo } from '@inviqa/viper-storybook-addons';
import ProductList from './ProductList';
import { cache } from '~lib/cache';
import { getProductsMock } from '~hooks/apollo/mocks/GetProducts';
import { addToCartMock } from '~hooks/apollo/mocks/AddToCart';

export default {
  component: ProductList,
  title: 'Organisms/ProductList',
  decorators: [withApollo],
  parameters: {
    apollo: {
      cache,
      mocks: [getProductsMock(), addToCartMock()]
    }
  }
};

export const withProducts = () => <ProductList />;
export const withNoProducts = () => <ProductList />;
