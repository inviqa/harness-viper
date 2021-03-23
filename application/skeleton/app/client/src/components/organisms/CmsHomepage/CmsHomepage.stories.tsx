import React from 'react';
import { withApollo } from '@inviqa/viper-storybook-addons';
import { createApolloCache } from '@inviqa/viper-nextjs';
import { apolloCacheConfig } from '~lib/apolloCacheConfig';
import CmsHomepage from './CmsHomepage';
import data from '../../pages/CmsHomepage/mock.json';
import { addToCartMock } from '~hooks/apollo/mocks/AddToCart';

export default {
  component: [CmsHomepage],
  decorators: [withApollo],
  title: 'Organisms/CmsHomepage',
  parameters: {
    apollo: {
      cache: createApolloCache(apolloCacheConfig),
      mocks: [addToCartMock()]
    }
  }
};

export const withData = () => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <CmsHomepage homepageData={data.routeByPath.page.homePage as any} />
);
