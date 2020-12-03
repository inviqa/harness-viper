/* @jsx jsx */
import { CartItemCardOverrides, CartItemCardProps, CartItemCard as UICartItemCard } from '@inviqa/viper-ui-commerce';
import { FunctionComponent, useMemo } from 'react';
import { IconButton, jsx } from 'theme-ui';
import { CgTrash as TrashIcon } from 'react-icons/cg';
import { useUpdateCartItem } from '~hooks/cart';

const CartItemCard: FunctionComponent<CartItemCardProps> = props => {
  const { id, name } = props;
  const [handleUpdateCartItem, { loading, error }] = useUpdateCartItem({ id, name }, 'minicart');

  const cartItemCardOverrides: CartItemCardOverrides = useMemo(
    () => ({
      RemoveAction: ({ id: _id, name: _name, ...removeActionProps }) => (
        <IconButton sx={{ position: 'absolute', top: 3, right: 3 }} {...removeActionProps}>
          <TrashIcon sx={{ width: '2rem', height: '2rem' }} />
        </IconButton>
      )
    }),
    []
  );

  return (
    <UICartItemCard
      sx={{ p: 3 }}
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
