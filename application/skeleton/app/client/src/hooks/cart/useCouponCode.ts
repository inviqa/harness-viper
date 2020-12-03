import { useReactiveVar } from '@apollo/client';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AddCouponCodeToCartMutation,
  AddCouponCodeToCartMutationVariables,
  RemoveCouponCodeFromCartMutation,
  RemoveCouponCodeFromCartMutationVariables,
  useAddCouponCodeToCartMutation,
  useRemoveCouponCodeFromCartMutation
} from '~hooks/apollo';
import { MessageType } from '~types/message';
import { cartIdVar } from './useCartId';
import { MessageActionType } from '../useMessages';
import { missingCartIdError } from './errors';
import { useCartResponseHandler } from './useCartResponseHandler';

export function useCouponCode() {
  const { t } = useTranslation('commerce');
  const cartId = useReactiveVar(cartIdVar);

  const addCouponResponseHandlers = useCartResponseHandler<
    AddCouponCodeToCartMutation,
    AddCouponCodeToCartMutationVariables
  >({
    createSuccessAction: data => {
      const { code } = data.addCouponCodeToCart.couponCodes[0];
      return {
        type: MessageActionType.AddMessage,
        payload: {
          id: 'coupon-added',
          type: MessageType.Success,
          content: t('Messages.CouponCodeAddedToCart', { couponCode: code })
        }
      };
    }
  });
  const [addToCouponCode, data] = useAddCouponCodeToCartMutation(addCouponResponseHandlers);

  const removeCouponResponseHandlers = useCartResponseHandler<
    RemoveCouponCodeFromCartMutation,
    RemoveCouponCodeFromCartMutationVariables
  >({
    createSuccessAction: () => ({
      type: MessageActionType.AddMessage,
      payload: {
        id: 'coupon-removed',
        type: MessageType.Success,
        content: t('Messages.CouponCodeRemovedFromCart')
      }
    })
  });
  const [removeCouponCode] = useRemoveCouponCodeFromCartMutation(removeCouponResponseHandlers);

  const handleCouponCodeInCart = useCallback(
    ({ type, code = '' }) => {
      if (cartId) {
        if (type === 'add') {
          addToCouponCode({ variables: { cartId, couponCode: code } });
        } else if (type === 'remove') {
          removeCouponCode({ variables: { cartId } });
        }
      } else {
        // doesn't really matter which variant of response handlers we use here
        addCouponResponseHandlers.onError?.(missingCartIdError);
      }
    },
    [addToCouponCode, removeCouponCode, addCouponResponseHandlers, cartId]
  );

  // as is basically reinforcing that this is a tuple rather than an array of the two types
  return [handleCouponCodeInCart, data] as [typeof handleCouponCodeInCart, typeof data];
}
