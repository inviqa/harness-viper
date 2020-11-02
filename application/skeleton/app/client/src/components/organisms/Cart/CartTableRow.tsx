/* @jsx jsx */
import {
  CartItem,
  CartTableRowOverrides,
  StyledCartTableRow,
  styledCartTableRowOverrides
} from '@inviqa/viper-ui-commerce';
import { forwardRef, FunctionComponent, useMemo } from 'react';
import { jsx } from 'theme-ui';
import useWebsiteConfig from '~hooks/useWebsiteConfig';
import { useUpdateCartItem } from '~hooks/cart';
import { quantityInputOverrides } from '~lib/commonComponentOverrides';
import { Link, useTranslation } from '~lib/createI18n';

const { Product, Description, Quantity, RemoveAction } = styledCartTableRowOverrides;

const CartTableRow: FunctionComponent<CartItem> = props => {
  const { id, name } = props;
  const websiteConfig = useWebsiteConfig();
  const { t } = useTranslation('commerce');
  const [handleUpdateCartItem, { loading, error }] = useUpdateCartItem({ id, name });

  const overrides: CartTableRowOverrides = useMemo(
    () => ({
      Product: forwardRef((productProps, productRef) => (
        <Link href="/[...all]" as={productProps.url} passHref>
          <Product ref={productRef} {...productProps} />
        </Link>
      )),
      Description: forwardRef((descriptionProps, descriptionRef) => (
        <Link href="/[...all]" as={descriptionProps.url} passHref>
          <Description ref={descriptionRef} {...descriptionProps} />
        </Link>
      )),
      Quantity: quantityProps => <Quantity overrides={quantityInputOverrides} {...quantityProps} />,
      RemoveAction: ({ name: itemName, ...removeActionProps }) => (
        <RemoveAction name={itemName} {...removeActionProps}>
          {t('Cart.Item.Remove.Short', { name: itemName })}
        </RemoveAction>
      )
    }),
    [t]
  );

  return (
    <StyledCartTableRow
      sx={{ p: 3 }}
      handleUpdateItem={handleUpdateCartItem}
      isLoading={loading}
      hasError={!!error}
      locale={websiteConfig?.locale}
      overrides={overrides}
      data-cart-item-row
      {...props}
    />
  );
};

export default CartTableRow;
