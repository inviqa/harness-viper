import { useReactiveVar } from '@apollo/client';
import { useCallback } from 'react';
import {
  CartItemUpdateInput,
  Product,
  UpdateCartMutation,
  UpdateCartMutationVariables,
  useUpdateCartMutation
} from '~hooks/apollo';
import { MessageAction, MessageActionType } from '~hooks/useMessages';
import { useResponseHandler } from '~hooks/useResponseHandler';
import { useTranslation } from '~lib/createI18n';
import { MessageType } from '~types/message';
import { missingCartIdError } from './errors';
import { cartIdVar } from './useCartId';

export function useUpdateCartItem(product: Pick<Product, 'id' | 'name'>) {
  const cartId = useReactiveVar(cartIdVar);
  const { t } = useTranslation('commerce');
  const responseHandlers = useResponseHandler<UpdateCartMutation, UpdateCartMutationVariables>(
    product,
    'commerce',
    (data): MessageAction => {
      const updatedItem = data.updateCart.items.find(({ id }) => id === product.id);
      return {
        type: MessageActionType.AddMessage,
        payload: {
          id: `${product.id}-cart-item-updated`,
          type: MessageType.Success,
          content: updatedItem
            ? t('Messages.UpdatedCartQuantity', { ...product, quantity: updatedItem.quantity })
            : t('Messages.RemovedFromCart', product)
        }
      };
    }
  );
  const [updateCart, data] = useUpdateCartMutation(responseHandlers);

  const handleUpdateCartItem = useCallback(
    ({ quantity }: Omit<CartItemUpdateInput, 'id'>) => {
      if (cartId) {
        updateCart({ variables: { cartId, items: [{ id: product.id, quantity }] } });
      } else {
        responseHandlers.onError?.(missingCartIdError);
      }
    },
    [updateCart, responseHandlers, cartId, product.id]
  );

  // as is basically reinforcing that this is a tuple rather than an array of the two types
  return [handleUpdateCartItem, data] as [typeof handleUpdateCartItem, typeof data];
}
