import { act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ProductType } from '~hooks/apollo';
import { addToCartMock } from '~hooks/apollo/mocks/AddToCart';
import { cartIdVar } from '~hooks/cart';
import { messagesVar } from '~hooks/useMessages';
import { isMiniCartVisibleVar } from '~lib/cache';
import { renderWithProviders } from '~test-helpers';
import ProductCard from './ProductCard';

describe(ProductCard, () => {
  const product = {
    type: ProductType.Simple,
    id: '36',
    name: 'Aim Analog Watch',
    sku: 'mock-sku',
    url: '/gear/watches/aim-analog-watch.html',
    price: {
      value: 4500,
      currency: 'GBP'
    },
    thumbnailImage: {
      alt: 'Aim Analog Watch',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/g/mg04-bk-0.jpg'
    }
  };

  beforeEach(() => {
    act(() => {
      cartIdVar('mock-cart-id');
      isMiniCartVisibleVar(false);
      messagesVar([]);
    });
  });

  afterEach(() => {
    act(() => {
      cartIdVar(null);
      isMiniCartVisibleVar(false);
      messagesVar([]);
    });
  });

  describe('When: product is a simple product', () => {
    it('Then: it has an add to cart button', () => {
      const { getByText } = renderWithProviders(<ProductCard {...product} />, { mocks: [] });
      expect(getByText('commerce:Cart.AddToCart')).not.toBeDisabled();
    });

    describe('When: add to cart button is clicked', () => {
      it('Then: it disables the button while loading', async () => {
        const { getByText } = renderWithProviders(<ProductCard {...product} />, { mocks: [] });
        act(() => {
          userEvent.click(getByText('commerce:Cart.AddToCart'));
        });
        await waitFor(() => expect(getByText('commerce:Cart.AddToCart')).toBeDisabled());
      });

      describe('When: add to cart was unsuccessful', () => {
        it('Then: it adds an error message', async () => {
          const { getByText } = renderWithProviders(<ProductCard {...product} />, { mocks: [] });
          act(() => {
            userEvent.click(getByText('commerce:Cart.AddToCart'));
          });

          expect(messagesVar()).toStrictEqual([]);
          await waitFor(() => expect(getByText('commerce:Cart.AddToCart')).not.toBeDisabled());
          expect(messagesVar()).toStrictEqual([
            {
              content: `Messages.UnexpectedError ${product.id},${product.name},${product.sku}`,
              id: `error-${product.id}-${product.name}-${product.sku}`,
              location: 'minicart',
              type: 'error'
            }
          ]);
        });
      });

      describe('When: add to cart was successful', () => {
        it('Then: it adds a success message', async () => {
          const { getByText } = renderWithProviders(<ProductCard {...product} />, { mocks: [addToCartMock()] });
          act(() => {
            userEvent.click(getByText('commerce:Cart.AddToCart'));
          });

          expect(messagesVar()).toStrictEqual([]);
          await waitFor(() => expect(getByText('commerce:Cart.AddToCart')).not.toBeDisabled());
          expect(messagesVar()).toStrictEqual([
            {
              content: `Messages.AddedToCart ${product.id},${product.name},${product.sku}`,
              id: `${product.id}-added-to-cart`,
              location: 'minicart',
              type: 'success'
            }
          ]);
        });
      });
    });

    describe('When: user has no cart', () => {
      describe('And: add to cart button is clicked', () => {
        it('Then: it adds an error message', async () => {
          act(() => {
            cartIdVar(null);
          });
          const { getByText } = renderWithProviders(<ProductCard {...product} />, { mocks: [] });
          act(() => {
            userEvent.click(getByText('commerce:Cart.AddToCart'));
          });

          expect(messagesVar()).toStrictEqual([
            {
              content: `Messages.UnexpectedError ${product.id},${product.name},${product.sku}`,
              id: `error-${product.id}-${product.name}-${product.sku}`,
              location: 'minicart',
              type: 'error'
            }
          ]);
        });
      });
    });
  });

  describe('When: product is not a simple product', () => {
    it('Then: it has a disabled add to cart button', () => {
      const { getByText } = renderWithProviders(<ProductCard {...product} type={ProductType.Other} />, { mocks: [] });
      expect(getByText('commerce:Cart.AddToCart')).toBeDisabled();
    });
  });
});
