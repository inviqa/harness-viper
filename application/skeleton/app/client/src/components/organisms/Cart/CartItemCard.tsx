import React, { FunctionComponent, useMemo } from 'react';
import { Button, CartItemCardOverrides, CartItemCardProps, CartItemCard as UICartItemCard } from '@inviqa/viper-ui';
import { CgTrash as TrashIcon } from 'react-icons/cg';
import { useUpdateCartItem } from '~hooks/cart';

const CartItemCard: FunctionComponent<CartItemCardProps> = props => {
  const { id, name } = props;
  const [handleUpdateCartItem, { loading, error }] = useUpdateCartItem({ id, name }, 'minicart');

  const cartItemCardOverrides: CartItemCardOverrides = useMemo(
    () => ({
      RemoveAction: ({ id: _id, name: _name, ...removeActionProps }) => (
        <Button variant="clear" className="absolute top-3 right-3" {...removeActionProps}>
          <TrashIcon className="w-8 h-8" />
        </Button>
      )
    }),
    []
  );

  return (
    <UICartItemCard
      className="p-3"
      handleUpdateItem={handleUpdateCartItem}
      isLoading={loading}
      hasError={!!error}
      overrides={cartItemCardOverrides}
      data-cart-item-card
      {...props}
    />
  );
};

export default CartItemCard;
