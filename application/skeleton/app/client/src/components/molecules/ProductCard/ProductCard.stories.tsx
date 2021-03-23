import React from 'react';
import { withApollo } from '@inviqa/viper-storybook-addons';
import { createApolloCache } from '@inviqa/viper-nextjs';
import ProductCard from './ProductCard';
import { apolloCacheConfig } from '~lib/apolloCacheConfig';
import { addToCartMock } from '~hooks/apollo/mocks/AddToCart';
import { ProductType } from '~hooks/apollo';

export default {
  component: ProductCard,
  title: 'Molecules/ProductCard',
  decorators: [withApollo],
  parameters: {
    apollo: {
      cache: createApolloCache(apolloCacheConfig),
      mocks: [addToCartMock()]
    }
  }
};

export const simple = () => (
  <ProductCard
    type={ProductType.Simple}
    id="36"
    name="Aim Analog Watch"
    sku="mock-sku"
    url="/gear/watches/aim-analog-watch.html"
    price={{
      value: 4500,
      currency: 'GBP'
    }}
    thumbnailImage={{
      alt: 'Aim Analog Watch',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/g/mg04-bk-0.jpg'
    }}
    style={{ maxWidth: '300px' }}
  />
);

export const other = () => (
  <ProductCard
    type={ProductType.Other}
    id="36"
    name="Aim Analog Watch"
    sku="mock-sku"
    url="/gear/watches/aim-analog-watch.html"
    price={{
      value: 4500,
      currency: 'GBP'
    }}
    thumbnailImage={{
      alt: 'Aim Analog Watch',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/g/mg04-bk-0.jpg'
    }}
    style={{ maxWidth: '300px' }}
  />
);
