/* @jsx jsx */
import {
  CartItemCardOverrides,
  CartItemCardProps,
  StyledCartItemCard,
  styledCartItemCardOverrides
} from '@inviqa/viper-ui-commerce';
import { forwardRef, FunctionComponent, useMemo } from 'react';
import { IconButton, jsx } from 'theme-ui';
import { CgTrash as TrashIcon } from 'react-icons/cg';
import useWebsiteConfig from '~hooks/useWebsiteConfig';
import { useUpdateCartItem } from '~hooks/cart';
import { Link, useTranslation } from '~lib/createI18n';

const { Link: ItemLink } = styledCartItemCardOverrides;

const CartItemCard: FunctionComponent<CartItemCardProps> = props => {
  const { id, name } = props;
  const websiteConfig = useWebsiteConfig();
  const { t } = useTranslation('commerce');
  const [handleUpdateCartItem, { loading, error }] = useUpdateCartItem({ id, name });

  const cartItemCardOverrides: CartItemCardOverrides = useMemo(
    () => ({
      Link: forwardRef(({ href, ...linkProps }, linkRef) =>
        href ? (
          <Link href="/[...all]" as={href} passHref>
            <ItemLink ref={linkRef} {...linkProps} />
          </Link>
        ) : (
          <ItemLink {...linkProps} />
        )
      ),
      RemoveAction: ({ id: _id, name: itemName, ...removeActionProps }) => (
        <IconButton
          sx={{ position: 'absolute', top: 3, right: 3 }}
          {...removeActionProps}
          aria-label={t('Cart.Item.Remove.Full', { name: itemName })}
        >
          <TrashIcon sx={{ width: '2rem', height: '2rem' }} />
        </IconButton>
      )
    }),
    [t]
  );

  return (
    <StyledCartItemCard
      sx={{ p: 3 }}
      handleUpdateItem={handleUpdateCartItem}
      isLoading={loading}
      hasError={!!error}
      locale={websiteConfig?.locale}
      overrides={cartItemCardOverrides}
      data-cart-item-card
      {...props}
    />
  );
};

export default CartItemCard;
