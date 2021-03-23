import { waitFor, act } from '@testing-library/react';
import React from 'react';
import { useContainerQuery, messagesVar } from '@inviqa/viper-react-hooks';
import Cart from './Cart';
import { useGetCheckoutLazyQuery } from '~hooks/apollo';
import { mockCheckoutData } from '~hooks/apollo/mocks/GetCheckout';
import { defaultCartTotals } from '~hooks/apollo/mocks/GetCart';
import { cartIdVar, checkoutIdVar } from '~hooks/cart';
import { renderWithProviders } from '~test-helpers';

jest.mock('@inviqa/viper-react-hooks', () => ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ...jest.requireActual('@inviqa/viper-react-hooks'),
  useContainerQuery: jest.fn()
}));

jest.mock('~hooks/apollo', () => {
  const actual = jest.requireActual('../../../hooks/apollo');
  return {
    ...actual,
    useGetCheckoutLazyQuery: jest.fn()
  };
});

describe(Cart, () => {
  beforeEach(() => {
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
      (useGetCheckoutLazyQuery as jest.Mock).mockImplementation(() => [
        jest.fn(),
        {
          called: true,
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
        }
      ]);
      const { getByText } = renderWithProviders(<Cart />);
      await waitFor(() => getByText('Cart.IsEmpty'));
    });
  });

  describe('When: cart has items', () => {
    describe('And: cart display is wide', () => {
      beforeAll(() => {
        (useGetCheckoutLazyQuery as jest.Mock).mockImplementation(() => [
          jest.fn(),
          {
            called: true,
            data: mockCheckoutData
          }
        ]);
      });

      it('Then: it renders a table', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), true]);
        const { getByText, container } = renderWithProviders(<Cart />);
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(container.querySelector('[data-cart-mode="table"]')).toBeInTheDocument();
      });

      it('And: it renders each cart item', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), true]);
        const { container, getByText } = renderWithProviders(<Cart />);
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(container.querySelectorAll('[data-cart-mode="table"] tbody tr')).toHaveLength(8);
      });

      it('And: it renders the totals', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), true]);
        const { getByText } = renderWithProviders(<Cart />);
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
        const { getByText } = renderWithProviders(<Cart />);
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(getByText('Test coupon code')).toBeInTheDocument();
        expect(getByText('£200.00')).toBeInTheDocument();
        expect(getByText('Another test coupon code')).toBeInTheDocument();
        expect(getByText('£100.00')).toBeInTheDocument();
      });

      it('And: it renders a remove button with each item', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), true]);
        const { getByText, getAllByText } = renderWithProviders(<Cart />);
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(getAllByText(/Cart.Item.Remove.Short/)).toHaveLength(8);
      });

      it('And: it renders the coupon form', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), true]);
        const { getByText } = renderWithProviders(<Cart />);
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(getByText('commerce:Cart.Coupon.Form.Remove')).toBeInTheDocument();
      });

      it('And: it renders a link to the checkout', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), true]);
        const { getByText } = renderWithProviders(<Cart />);
        await waitFor(() => getByText('Cart.ProceedToCheckout'));
        expect(getByText('Cart.ProceedToCheckout').tagName).toBe('A');
      });
    });

    describe('And: cart display is narrow', () => {
      it('Then: it renders a list', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), false]);
        const { getByText, container } = renderWithProviders(<Cart />);
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(container.querySelector('[data-cart-mode="list"]')).toBeInTheDocument();
      });

      it('And: it renders each cart item', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), false]);
        const { container, getByText } = renderWithProviders(<Cart />);
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(container.querySelectorAll('[data-cart-mode="list"] li')).toHaveLength(8);
      });

      it('And: it renders a remove button with each item', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), false]);
        const { getByText, getAllByLabelText } = renderWithProviders(<Cart />);
        await waitFor(() => getByText('Bolo Sport Watch'));
        expect(getAllByLabelText(/Cart.Item.Remove.Full/)).toHaveLength(8);
      });

      it('And: it renders a link to the checkout', async () => {
        (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), false]);
        const { getByText } = renderWithProviders(<Cart />);
        await waitFor(() => getByText('Cart.ProceedToCheckout'));
        expect(getByText('Cart.ProceedToCheckout').tagName).toBe('A');
      });
    });
  });
});
