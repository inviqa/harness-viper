import React, { FunctionComponent } from 'react';
import { CartItem, CartTableRow as UICartTableRow } from '@inviqa/viper-ui';
import { useUpdateCartItem } from '~hooks/cart';

const CartTableRow: FunctionComponent<CartItem> = props => {
  const { id, name } = props;
  const [handleUpdateCartItem, { loading, error }] = useUpdateCartItem({ id, name });

  return (
    <UICartTableRow
      className="p-3"
      handleUpdateItem={handleUpdateCartItem}
      isLoading={loading}
      hasError={!!error}
      data-cart-item-row
      {...props}
    />
  );
};

export default CartTableRow;
