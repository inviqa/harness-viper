import { waitFor, act } from '@testing-library/react';
import React from 'react';
import { getCheckoutMock } from '~hooks/apollo/mocks/GetCheckout';
import { defaultCartTotals } from '~hooks/apollo/mocks/GetCart';
import { cartIdVar, checkoutIdVar } from '~hooks/cart';
import { cache } from '~lib/cache';
import { renderWithProviders } from '~test-helpers';
import Cart from './Cart';
import useContainerQuery from '../../../hooks/useContainerQuery';
import { messagesVar } from '~hooks/useMessages';

jest.mock('../../../hooks/useContainerQuery');

describe(Cart, () => {
  beforeEach(() => {
    cache.reset();
    (useContainerQuery as jest.Mock).mockReset();

    act(() => {
      cartIdVar('mock-cart-id');
      checkoutIdVar('mock-checkout-id');
      messagesVar([]);
    });
  });

  afterEach(() => {
    act(() => {
      messagesVar([]);
      cartIdVar(null);
      checkoutIdVar(null);
    });
  });

  describe('When: cart is empty', () => {
    it('Then: it renders an empty cart message', async () => {
      (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), false]);
      const { getByText } = renderWithProviders(<Cart />, {
        mocks: [
          getCheckoutMock({
            data: {
              checkout: {
                __typename: 'Checkout',
                id: 'mock-checkout-id',
                cart: {
                  __typename: 'Cart',
                  id: 'mock-cart-id',
                  numberOfItems: 0,
                  items: [],
                  totals: defaultCartTotals,
                  couponCodes: [
                    {
                      __typename: 'CouponCode',
                      code: 'my-gift'
                    }
                  ]
                },
                availableShippingMethods: [],
                availablePaymentMethods: [],
                customer: null,
                shippingAddress: null,
                billingAddress: null,
                shippingMethod: null,
                paymentMethod: null
              }
            }
          })
        ]
      });
      await waitFor(() => getByText('Cart.IsEmpty'));
    });
  });

  describe('When: cart has items', () => {
    describe('And: cart display is wide', () => {
      it('Then: it renders a table', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), true]);
        const { getByText, container } = renderWithProviders(<Cart />, {
          mocks: [getCheckoutMock()]
        });
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(container.querySelector('[data-cart-mode="table"]')).toBeInTheDocument();
      });

      it('And: it renders each cart item', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), true]);
        const { container, getByText } = renderWithProviders(<Cart />, {
          mocks: [getCheckoutMock()]
        });
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(container.querySelectorAll('[data-cart-mode="table"] tbody tr')).toHaveLength(8);
      });

      it('And: it renders the totals', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), true]);
        const { getByText } = renderWithProviders(<Cart />, {
          mocks: [getCheckoutMock()]
        });
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(getByText('Cart.Total.Subtotal')).toBeInTheDocument();
        expect(getByText('£1,000.00')).toBeInTheDocument();
        expect(getByText('Cart.Total.Shipping Standard Shipping')).toBeInTheDocument();
        expect(getByText('£5.00')).toBeInTheDocument();
        expect(getByText('Cart.Total.GrandTotal')).toBeInTheDocument();
        expect(getByText('£700.00')).toBeInTheDocument();
      });

      it('And: it renders each discount', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), true]);
        const { getByText } = renderWithProviders(<Cart />, {
          mocks: [getCheckoutMock()]
        });
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(getByText('Test coupon code')).toBeInTheDocument();
        expect(getByText('£200.00')).toBeInTheDocument();
        expect(getByText('Another test coupon code')).toBeInTheDocument();
        expect(getByText('£100.00')).toBeInTheDocument();
      });

      it('And: it renders a remove button with each item', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), true]);
        const { getByText, getAllByText } = renderWithProviders(<Cart />, {
          mocks: [getCheckoutMock()]
        });
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(getAllByText(/Cart.Item.Remove.Short/)).toHaveLength(8);
      });

      it('And: it renders the coupon form', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), true]);
        const { getByText } = renderWithProviders(<Cart />, {
          mocks: [getCheckoutMock()]
        });
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(getByText('Remove Coupon')).toBeInTheDocument();
      });

      it('And: it renders a link to the checkout', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), true]);
        const { getByText } = renderWithProviders(<Cart />, {
          mocks: [getCheckoutMock()]
        });
        await waitFor(() => getByText('Cart.ProceedToCheckout'));
        expect(getByText('Cart.ProceedToCheckout').tagName).toBe('A');
        expect(getByText('Cart.ProceedToCheckout')).toHaveAttribute('href', '/ci/checkout');
      });
    });

    describe('And: cart display is narrow', () => {
      it('Then: it renders a list', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), false]);
        const { getByText, container } = renderWithProviders(<Cart />, {
          mocks: [getCheckoutMock()]
        });
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(container.querySelector('[data-cart-mode="list"]')).toBeInTheDocument();
      });

      it('And: it renders each cart item', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), false]);
        const { container, getByText } = renderWithProviders(<Cart />, {
          mocks: [getCheckoutMock()]
        });
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(container.querySelectorAll('[data-cart-mode="list"] li')).toHaveLength(8);
      });

      it('And: it renders a remove button with each item', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), false]);
        const { getByText, getAllByLabelText } = renderWithProviders(<Cart />, {
          mocks: [getCheckoutMock()]
        });
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(getAllByLabelText(/Cart.Item.Remove.Full/)).toHaveLength(8);
      });

      it('And: it renders a link to the checkout', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), false]);
        const { getByText } = renderWithProviders(<Cart />, {
          mocks: [getCheckoutMock()]
        });
        await waitFor(() => getByText('Cart.ProceedToCheckout'));
        expect(getByText('Cart.ProceedToCheckout').tagName).toBe('A');
        expect(getByText('Cart.ProceedToCheckout')).toHaveAttribute('href', '/ci/checkout');
      });
    });
  });
});
