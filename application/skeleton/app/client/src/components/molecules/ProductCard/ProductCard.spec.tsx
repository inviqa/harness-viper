import { act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { messagesVar } from '@inviqa/viper-react-hooks';
import { ProductType, useAddToCartMutation } from '~hooks/apollo';
import { cartIdVar } from '~hooks/cart';
import { isMiniCartVisibleVar } from '~lib/apolloCacheConfig';
import { renderWithProviders } from '~test-helpers';
import ProductCard from './ProductCard';

jest.mock('~hooks/apollo', () => {
  const actual = jest.requireActual('../../../hooks/apollo');
  return {
    ...actual,
    useAddToCartMutation: jest.fn()
  };
});

describe(ProductCard, () => {
  const product = {
    type: ProductType.Simple,
    id: 'mock-id',
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

  beforeEach(async () => {
    act(() => {
      cartIdVar('mock-cart-id');
      isMiniCartVisibleVar(false);
      messagesVar([]);
    });

    // awaiting because reactive var changes are async
    await waitFor(() => cartIdVar() === 'mock-cart-id');
    await waitFor(() => isMiniCartVisibleVar() === false);
    await waitFor(() => messagesVar().length === 0);
  });

  describe('When: product is a simple product', () => {
    it('Then: it has an add to cart button', () => {
      (useAddToCartMutation as jest.Mock).mockImplementation(() => [jest.fn(), {}]);
      const { getByText } = renderWithProviders(<ProductCard {...product} />);
      expect(getByText('commerce:Cart.AddToCart')).not.toBeDisabled();
    });

    describe('When: add to cart button is clicked', () => {
      it('Then: it disables the button while loading', async () => {
        (useAddToCartMutation as jest.Mock).mockImplementation(() => [jest.fn(), { loading: true }]);
        const { getByText } = renderWithProviders(<ProductCard {...product} />);
        act(() => {
          userEvent.click(getByText('commerce:Cart.AddToCart'));
        });
        await waitFor(() => expect(getByText('commerce:Cart.AddToCart')).toBeDisabled());
      });
    });

    describe('When: user has no cart', () => {
      describe('And: add to cart button is clicked', () => {
        it('Then: it adds an error message', async () => {
          (useAddToCartMutation as jest.Mock).mockImplementation(() => [jest.fn(), {}]);
          act(() => {
            cartIdVar(null);
          });
          const { getByText } = renderWithProviders(<ProductCard {...product} />);
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
      (useAddToCartMutation as jest.Mock).mockImplementation(() => [jest.fn(), {}]);
      const { getByText } = renderWithProviders(<ProductCard {...product} type={ProductType.Other} />);
      expect(getByText('commerce:Cart.AddToCart')).toBeDisabled();
    });
  });
});
