import { withApollo } from '@inviqa/viper-storybook-addons';
import React from 'react';
import { addToCartMock } from '~hooks/apollo/mocks/AddToCart';
import { cache } from '~lib/cache';
import { ProductType } from '~hooks/apollo';
import ProductContent from './ProductContent';

const product = {
  id: '969',
  sku: 'mock-sku',
  name: 'Rapha Sports Short',
  title: 'Rapha Sports Short',
  price: {
    value: 3500,
    currency: 'GBP'
  },
  url: '/en/rapha-sports-short',
  description:
    '<p>For those about to sweat, we support you with the Rapha Sports Short. The compression-fit liner surrounds your muscles with the stimulation they need to find your high gear, while moisture-wicking performance fabric helps prevents sweat build-up.</p><p>&bull; Black shorts with royal accents.<br />&bull; Compression liner. <br />&bull; Inseam: 8". <br />&bull; Machine wash/dry.</p>',
  image: {
    alt: 'Rapha  Sports Short',
    url:
      'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/s/msh07-black_main_1.jpg'
  },
  gallery: [
    {
      alt: 'Rapha Sports Short',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/df5e62fb1e927688bec2d9a70eaf27ef/m/s/msh07-black_main_1.jpg'
    },
    {
      alt: 'Arcadio Gym Short',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/df5e62fb1e927688bec2d9a70eaf27ef/m/s/msh11-blue_main_1.jpg'
    },
    {
      alt: 'Pierce Gym Short',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/df5e62fb1e927688bec2d9a70eaf27ef/m/s/msh12-red_main_1.jpg'
    },
    {
      alt: 'Lono Yoga Short',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/df5e62fb1e927688bec2d9a70eaf27ef/m/s/msh06-gray_main_2.jpg'
    },
    {
      alt: 'Hawkeye Yoga Short',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/df5e62fb1e927688bec2d9a70eaf27ef/m/s/msh05-gray_main_1.jpg'
    },
    {
      alt: "Cob'alt CoolTech™ Fitness Short",
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/df5e62fb1e927688bec2d9a70eaf27ef/m/s/msh01-blue_main_1.jpg'
    }
  ],
  options: [],
  variants: []
};

export default {
  component: [ProductContent],
  title: 'Organisms/ProductContent',
  decorators: [withApollo],
  parameters: {
    apollo: {
      cache,
      mocks: [addToCartMock()]
    }
  }
};

export const simple = () => <ProductContent type={ProductType.Simple} {...product} />;
export const other = () => <ProductContent type={ProductType.Other} {...product} />;
