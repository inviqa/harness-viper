import React from 'react';
import { withApollo } from '@inviqa/viper-storybook-addons';
import { createApolloCache } from '@inviqa/viper-nextjs';
import { apolloCacheConfig } from '~lib/apolloCacheConfig';
import { addToCartMock } from '~hooks/apollo/mocks/AddToCart';
import ProductGridBlock from './ProductGridBlock';
import data from '../../pages/CmsHomepage/mock.json';

export default {
  component: [ProductGridBlock],
  decorators: [withApollo],
  title: 'Organisms/ProductGridBlock',
  parameters: {
    apollo: {
      cache: createApolloCache(apolloCacheConfig),
      mocks: [addToCartMock()]
    }
  }
};

export const withData = () => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <ProductGridBlock {...(data.routeByPath.page.homePage.productGrid as any)} />
);
