import React from 'react';
import { withApollo } from '@inviqa/viper-storybook-addons';
import Cart from './Cart';
import { defaultCartTotals } from '~hooks/apollo/mocks/GetCart';
import { getCheckoutMock } from '~hooks/apollo/mocks/GetCheckout';

export default {
  component: Cart,
  title: 'Organisms/Cart',
  decorators: [withApollo]
};

export const emptyCart = () => <Cart />;
emptyCart.parameters = {
  apollo: {
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
  }
};

export const populatedCart = () => <Cart />;
populatedCart.parameters = { apollo: { mocks: [getCheckoutMock()] } };
