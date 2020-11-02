import { makeVar, useReactiveVar } from '@apollo/client';
import { useCallback, useEffect } from 'react';
import { useCreateCartMutation, useCreateCheckoutMutation } from '../apollo';

const CART_ID_KEY = 'viper-cart-id';
const CHECKOUT_ID_KEY = 'viper-checkout-id';

export const cartIdVar = makeVar<string | null>(null);
export const checkoutIdVar = makeVar<string | null>(null);

export function useCartId() {
  const cartId = useReactiveVar(cartIdVar);
  const checkoutId = useReactiveVar(checkoutIdVar);
  const [createCart] = useCreateCartMutation();
  const [createCheckout] = useCreateCheckoutMutation();

  const createAndSetIds = useCallback(async () => {
    if (!cartId) {
      const { data: cartData } = await createCart();
      const id = cartData?.createCart.id ?? null;
      cartIdVar(id);

      if (id) {
        const { data: checkoutData } = await createCheckout({ variables: { cartId: id } });
        checkoutIdVar(checkoutData?.createCheckout?.id);
      }
    }
  }, [createCart, createCheckout, cartId]);

  useEffect(() => {
    if (cartId) {
      localStorage.setItem(CART_ID_KEY, cartId);
    }
  }, [cartId]);

  useEffect(() => {
    if (checkoutId) {
      localStorage.setItem(CHECKOUT_ID_KEY, checkoutId);
    }
  }, [checkoutId]);

  useEffect(() => {
    const localCartId = localStorage.getItem(CART_ID_KEY);
    const localCheckoutId = localStorage.getItem(CHECKOUT_ID_KEY);

    if (localCartId && localCheckoutId) {
      cartIdVar(localCartId);
      checkoutIdVar(localCheckoutId);
    } else {
      createAndSetIds();
    }
  }, [createAndSetIds]);
}

export function resetCartId() {
  localStorage.removeItem(CART_ID_KEY);
  localStorage.removeItem(CHECKOUT_ID_KEY);
  checkoutIdVar(null);
  cartIdVar(null);
}
