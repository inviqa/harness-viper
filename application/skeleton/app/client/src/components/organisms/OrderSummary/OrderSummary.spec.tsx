import { waitFor, act } from '@testing-library/react';
import { useContainerQuery } from '@inviqa/viper-react-hooks';
import React from 'react';
import { getCheckoutMock } from '~hooks/apollo/mocks/GetCheckout';
import { cartIdVar, checkoutIdVar } from '~hooks/cart';
import { renderWithProviders } from '~test-helpers';
import OrderSummary from './OrderSummary';

jest.mock('@inviqa/viper-react-hooks', () => ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ...jest.requireActual('@inviqa/viper-react-hooks'),
  useContainerQuery: jest.fn()
}));

describe(OrderSummary, () => {
  beforeEach(() => {
    (useContainerQuery as jest.Mock).mockReset();

    act(() => {
      cartIdVar('mock-cart-id');
      checkoutIdVar('mock-checkout-id');
    });
  });

  afterEach(() => {
    act(() => {
      cartIdVar(null);
      checkoutIdVar(null);
    });
  });

  describe('When: cart has items', () => {
    it('Then: it renders a list', async () => {
      (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), false]);
      const { getByText, container } = renderWithProviders(<OrderSummary />, {
        mocks: [getCheckoutMock()]
      });
      await waitFor(() => getByText('Bolo Sport Watch'));
      expect(container.querySelector('.order-summary')).toBeInTheDocument();
    });

    it('And: it renders each cart item', async () => {
      (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), false]);
      const { container, getByText } = renderWithProviders(<OrderSummary />, {
        mocks: [getCheckoutMock()]
      });
      await waitFor(() => getByText('Bolo Sport Watch'));
      expect(container.querySelectorAll('.order-summary__list li')).toHaveLength(8);
    });

    it('And: it renders the totals', async () => {
      (useContainerQuery as jest.Mock).mockImplementation(() => [React.createRef(), true]);
      const { getByText } = renderWithProviders(<OrderSummary />, {
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
      const { getByText } = renderWithProviders(<OrderSummary />, {
        mocks: [getCheckoutMock()]
      });
      await waitFor(() => getByText('Bolo Sport Watch'));
      expect(getByText('Test coupon code')).toBeInTheDocument();
      expect(getByText('£200.00')).toBeInTheDocument();
      expect(getByText('Another test coupon code')).toBeInTheDocument();
      expect(getByText('£100.00')).toBeInTheDocument();
    });
  });
});
