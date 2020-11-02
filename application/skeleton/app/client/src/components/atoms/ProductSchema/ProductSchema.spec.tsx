import { render } from '@testing-library/react';
import React from 'react';
import { ProductType } from '~hooks/apollo';
import ProductSchema from './ProductSchema';

/* eslint-disable */
jest.mock('next/head', () => (props: any) => <div {...props} />);
/* eslint-enable */

describe(ProductSchema, () => {
  const product = {
    id: '969',
    sku: 'mock-sku',
    name: 'Rapha Sports Short',
    title: 'Rapha Sports Short',
    price: {
      value: 3500,
      currency: 'GBP'
    },
    description:
      '<p>For those about to sweat, we support you with the Rapha Sports Short. The compression-fit liner surrounds your muscles with the stimulation they need to find your high gear, while moisture-wicking performance fabric helps prevents sweat build-up.</p><p>&bull; Black shorts with royal accents.<br />&bull; Compression liner. <br />&bull; Inseam: 8". <br />&bull; Machine wash/dry.</p>',
    image: {
      alt: 'Rapha Sports Short',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/s/msh07-black_main_1.jpg'
    },
    type: ProductType.Simple
  };

  describe('When: product data is provided', () => {
    it('it renders the price to 2 decimal places', () => {
      const { container } = render(<ProductSchema {...product} />);
      expect(container.textContent?.includes('"price":"35.00"'));
    });
  });
});
