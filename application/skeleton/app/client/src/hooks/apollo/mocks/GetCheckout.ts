import { GetCheckoutDocument, GetCheckoutQueryHookResult, GetCheckoutQueryVariables } from '../generated';
import { defaultCartItems, defaultCartTotals, defaultCouponCodes } from './GetCart';

export const getCheckoutMock = ({
  checkoutId = 'mock-checkout-id',
  data = {
    checkout: {
      __typename: 'Checkout',
      id: 'mock-checkout-id',
      cart: {
        __typename: 'Cart',
        id: 'mock-cart-id',
        numberOfItems: defaultCartItems.length,
        items: defaultCartItems,
        totals: defaultCartTotals,
        couponCodes: defaultCouponCodes
      },
      availableShippingMethods: [],
      availablePaymentMethods: [],
      customer: null,
      shippingAddress: null,
      billingAddress: null,
      shippingMethod: {
        __typename: 'ShippingMethod',
        id: 'mock-shipping-method',
        label: 'Standard Shipping',
        priceIncludingTax: {
          __typename: 'Money',
          value: 500,
          currency: 'GBP'
        }
      },
      paymentMethod: null
    }
  },
  loading = false,
  error = undefined
}: Partial<GetCheckoutQueryVariables> & Partial<GetCheckoutQueryHookResult> = {}) => {
  return {
    request: {
      query: GetCheckoutDocument,
      variables: {
        checkoutId
      }
    },
    result: {
      data,
      loading,
      error
    }
  };
};
