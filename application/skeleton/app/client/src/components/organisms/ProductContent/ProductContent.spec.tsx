import React from 'react';
import { act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductContent from './ProductContent';
import { renderWithProviders } from '~test-helpers';
import { cartIdVar } from '~hooks/cart';
import { addToCartMock } from '~hooks/apollo/mocks/AddToCart';
import { ProductType } from '~hooks/apollo';
import { messagesVar } from '~hooks/useMessages';

describe(ProductContent, () => {
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
    gallery: [
      {
        alt: 'Aim Analog Watch',
        url:
          'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/g/mg04-bk-0.jpg'
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
    type: ProductType.Simple
  };

  beforeEach(() => {
    act(() => {
      cartIdVar('mock-cart-id');
      messagesVar([]);
    });
  });

  afterEach(() => {
    act(() => {
      cartIdVar(null);
      messagesVar([]);
    });
  });

  describe('When: product data is provided', () => {
    const setup = () => renderWithProviders(<ProductContent {...product} />, { mocks: [] });

    it('Then: it renders the product title', () => {
      const { getByText } = setup();
      expect(getByText('Rapha Sports Short')).toBeInTheDocument();
    });

    it('And: it renders the product image', () => {
      const { container } = setup();
      expect(container.querySelectorAll('.product-image')).toHaveLength(1);
      expect(container.querySelectorAll('.product-gallery__thumbnails-item')).toHaveLength(6);
    });

    it('And: it renders the product price', () => {
      const { getByText } = setup();
      expect(getByText('£35.00')).toBeInTheDocument();
    });

    it('And: it renders the product sku', () => {
      const { getByText } = setup();
      expect(getByText('SKU: mock-sku')).toBeInTheDocument();
    });

    it('And: it renders the product description', () => {
      const { getByText } = setup();
      expect(getByText(/For those about to sweat, we support you with the Rapha Sports Short/)).toBeInTheDocument();
    });

    it('And: it renders an add to cart form', () => {
      const { getByLabelText, getByText } = setup();
      expect(getByLabelText('Cart.Item.Quantity')).toBeInTheDocument();
      expect(getByText('Cart.AddToCart')).toBeInTheDocument();
    });
  });

  describe('When: product type is other', () => {
    it('Then: the add to cart button is disabled', () => {
      const { getByText } = renderWithProviders(<ProductContent {...product} type={ProductType.Other} />, {
        mocks: []
      });
      expect(getByText('Cart.AddToCart')).toBeDisabled();
    });
  });

  describe('When: product type is simple', () => {
    it('Then: the add to cart button is not disabled', () => {
      const { getByText } = renderWithProviders(<ProductContent {...product} />, {
        mocks: []
      });
      expect(getByText('Cart.AddToCart')).not.toBeDisabled();
    });

    describe('When: add to cart button is clicked', () => {
      it('Then: it disables the button while loading', async () => {
        const { getByText } = renderWithProviders(<ProductContent {...product} />, { mocks: [] });
        userEvent.click(getByText('Cart.AddToCart'));
        await waitFor(() => expect(getByText('Cart.AddToCart')).toBeDisabled());
      });

      describe('And: add to cart was unsuccessful', () => {
        it('Then: it adds an error message', async () => {
          const { getByText } = renderWithProviders(<ProductContent {...product} />, { mocks: [] });
          userEvent.click(getByText('Cart.AddToCart'));

          expect(messagesVar()).toStrictEqual([]);

          await waitFor(() => expect(getByText('Cart.AddToCart')).not.toBeDisabled());
          expect(messagesVar()).toStrictEqual([
            {
              content: `Messages.UnexpectedError ${product.id},${product.name},${product.sku}`,
              id: `error-${product.id}-${product.name}-${product.sku}`,
              type: 'error'
            }
          ]);
        });
      });

      describe('And: add to cart was successful', () => {
        it('Then: it adds a success message', async () => {
          const { getByText } = renderWithProviders(<ProductContent {...product} />, { mocks: [addToCartMock()] });
          userEvent.click(getByText('Cart.AddToCart'));

          expect(messagesVar()).toStrictEqual([]);
          await waitFor(() => expect(getByText('Cart.AddToCart')).not.toBeDisabled());
          expect(messagesVar()).toStrictEqual([
            {
              content: `Messages.AddedToCart ${product.id},${product.name},${product.sku}`,
              id: `${product.id}-added-to-cart`,
              type: 'success'
            }
          ]);
        });
      });
    });

    describe('When: user has no cart', () => {
      describe('And: add to cart button is clicked', () => {
        it('Then: adds an error message', async () => {
          act(() => {
            cartIdVar(null);
          });
          const { getByText } = renderWithProviders(<ProductContent {...product} />, { mocks: [] });
          userEvent.click(getByText('Cart.AddToCart'));

          await waitFor(() => expect(getByText('Cart.AddToCart')).not.toBeDisabled());
          expect(messagesVar()).toStrictEqual([
            {
              content: `Messages.UnexpectedError ${product.id},${product.name},${product.sku}`,
              id: `error-${product.id}-${product.name}-${product.sku}`,
              type: 'error'
            }
          ]);
        });
      });
    });
  });
});
