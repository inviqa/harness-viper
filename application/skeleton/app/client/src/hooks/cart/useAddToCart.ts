import { useReactiveVar } from '@apollo/client';
import { useCallback } from 'react';
import {
  AddToCartMutation,
  AddToCartMutationVariables,
  CartItemInput,
  Product,
  useAddToCartMutation
} from '~hooks/apollo';
import { MessageAction, MessageActionType } from '~hooks/useMessages';
import { useResponseHandler } from '~hooks/useResponseHandler';
import { useTranslation } from '~lib/createI18n';
import { MessageType } from '~types/message';
import { missingCartIdError } from './errors';
import { cartIdVar } from './useCartId';

export function useAddToCart(product: Pick<Product, 'id' | 'name' | 'sku'>) {
  const cartId = useReactiveVar(cartIdVar);
  const { t } = useTranslation('commerce');
  const responseHandlers = useResponseHandler<AddToCartMutation, AddToCartMutationVariables>(
    product,
    'commerce',
    (): MessageAction => ({
      type: MessageActionType.AddMessage,
      payload: {
        id: `${product.id}-added-to-cart`,
        type: MessageType.Success,
        content: t('Messages.AddedToCart', product)
      }
    })
  );
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
