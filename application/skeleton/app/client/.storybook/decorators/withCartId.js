import React from 'react';
import { cartIdVar, checkoutIdVar } from '../../src/hooks/cart/useCartId';

export default (Story, context) => {
  cartIdVar('mock-cart-id');
  checkoutIdVar('mock-checkout-id');

  return <Story {...context} />;
};
