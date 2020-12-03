/* @jsx jsx */
import { CartItem, CartTableRow as UICartTableRow } from '@inviqa/viper-ui-commerce';
import { FunctionComponent } from 'react';
import { jsx } from 'theme-ui';
import { useUpdateCartItem } from '~hooks/cart';

const CartTableRow: FunctionComponent<CartItem> = props => {
  const { id, name } = props;
  const [handleUpdateCartItem, { loading, error }] = useUpdateCartItem({ id, name });

  return (
    <UICartTableRow
      sx={{ p: 3 }}
      handleUpdateItem={handleUpdateCartItem}
      isLoading={loading}
      hasError={!!error}
      data-cart-item-row
      {...props}
    />
  );
};

export default CartTableRow;
