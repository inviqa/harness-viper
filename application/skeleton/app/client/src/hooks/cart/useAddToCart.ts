import { useReactiveVar } from '@apollo/client';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AddToCartMutation,
  AddToCartMutationVariables,
  CartItemInput,
  Product,
  useAddToCartMutation
} from '~hooks/apollo';
import { MessageActionType } from '~hooks/useMessages';
import { MessageType } from '~types/message';
import { isMiniCartVisibleVar } from '~lib/cache';
import { missingCartIdError } from './errors';
import { cartIdVar } from './useCartId';
import { useCartResponseHandler } from './useCartResponseHandler';

export function useAddToCart(product: Pick<Product, 'id' | 'name' | 'sku'>, messageLocation?: string) {
  const cartId = useReactiveVar(cartIdVar);
  const { t } = useTranslation('commerce');
  const responseHandlers = useCartResponseHandler<AddToCartMutation, AddToCartMutationVariables>({
    context: product,
    i18nNs: 'commerce',
    createSuccessAction: () => ({
      type: MessageActionType.AddMessage,
      payload: {
        id: `${product.id}-added-to-cart`,
        location: messageLocation,
        type: MessageType.Success,
        content: t('Messages.AddedToCart', product)
      }
    }),
    createErrorAction: action =>
      action.type === MessageActionType.AddMessage
        ? {
            ...action,
            payload: {
              ...action.payload,
              location: messageLocation
            }
          }
        : action,
    successCallback: () => {
      isMiniCartVisibleVar(true);
    },
    errorCallback: () => {
      if (messageLocation === 'minicart') {
        isMiniCartVisibleVar(true);
      }
    }
  });
  const [addToCart, data] = useAddToCartMutation(responseHandlers);

  const handleAddToCart = useCallback(
    ({ quantity = 1, variantSku }: Omit<CartItemInput, 'sku'>) => {
      if (cartId)
        addToCart({ variables: { cartId, items: [{ sku: product.sku, quantity, variantSku: variantSku || null }] } });
      else {
        responseHandlers.onError?.(missingCartIdError);
      }
    },
    [addToCart, responseHandlers, cartId, product.sku]
  );

  // as is basically reinforcing that this is a tuple rather than an array of the two types
  return [handleAddToCart, data] as [typeof handleAddToCart, typeof data];
}
