import React from 'react';
import { withApollo } from '@inviqa/viper-storybook-addons';
import ProductPage from './ProductPage';
import data from './mock.json';
import { PageProps } from '../types';

export default {
  component: [ProductPage],
  title: 'Pages/Product',
  decorators: [withApollo],
  parameters: {
    apollo: {
      mocks: []
    }
  }
};

export const productPage = () => <ProductPage queryResult={({ data } as unknown) as PageProps['queryResult']} />;
