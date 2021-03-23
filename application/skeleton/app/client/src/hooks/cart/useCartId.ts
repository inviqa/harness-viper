import { makeVar, useReactiveVar } from '@apollo/client';
import { useCallback, useEffect } from 'react';
import { useCreateCartMutation, useCreateCheckoutMutation } from '../apollo';

const CART_ID_KEY = 'viper-cart-id';
const CHECKOUT_ID_KEY = 'viper-checkout-id';
const ORDER_ID_KEY = 'viper-order-id';

export const cartIdVar = makeVar<string | null>(null);
export const checkoutIdVar = makeVar<string | null>(null);
export const orderIdVar = makeVar<string | null>(null);

export function setOrderId(newOrderId?: string | null) {
  if (localStorage.getItem(ORDER_ID_KEY) !== (newOrderId ?? null)) {
    orderIdVar(newOrderId ?? null);
  }
}

export function useCartId() {
  const cartId = useReactiveVar(cartIdVar);
  const checkoutId = useReactiveVar(checkoutIdVar);
  const orderId = useReactiveVar(orderIdVar);

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
        // TODO: VIPER-448 - This is a workaround. Remove condition once the order ID issue is fixed by bigcommerce
        if ((localStorage.getItem(CHECKOUT_ID_KEY) ?? null) !== (checkoutData?.createCheckout?.id ?? null)) {
          setOrderId(checkoutData?.createCheckout?.order?.id);
        }
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
    if (orderId) {
      localStorage.setItem(ORDER_ID_KEY, orderId ?? '');
    }
  }, [orderId]);

  useEffect(() => {
    const localCartId = localStorage.getItem(CART_ID_KEY);
    const localCheckoutId = localStorage.getItem(CHECKOUT_ID_KEY);
    const localOrderId = localStorage.getItem(ORDER_ID_KEY);

    if (localCartId && localCheckoutId) {
      cartIdVar(localCartId);
      checkoutIdVar(localCheckoutId);
      if (localOrderId) {
        orderIdVar(localOrderId);
      }
    } else {
      createAndSetIds();
    }
  }, [createAndSetIds]);
}

export function resetCartId() {
  localStorage.removeItem(CART_ID_KEY);
  localStorage.removeItem(CHECKOUT_ID_KEY);
  localStorage.removeItem(ORDER_ID_KEY);
  checkoutIdVar(null);
  cartIdVar(null);
  orderIdVar(null);
}
