/* @jsx jsx */
import { FunctionComponent, useEffect, useMemo } from 'react';
import { jsx, LinkProps, Link as ThemeLink, Alert, Box, BoxProps, Button, Flex } from 'theme-ui';
import { CgTrash as TrashIcon } from 'react-icons/cg';
import cx from 'classnames';
import { useReactiveVar } from '@apollo/client';
import {
  CartItem,
  CartTableOverrides,
  CartTableTotal,
  StyledCartTable,
  StyledCouponCodeForm
} from '@inviqa/viper-ui-commerce';
import { Link, Trans, useTranslation } from '~lib/createI18n';
import { cartIdVar, useCouponCode, checkoutIdVar } from '~hooks/cart';
import { MessageActionType, useMessages } from '~hooks/useMessages';
import {
  UpdateCartMutation,
  UpdateCartMutationVariables,
  useGetCheckoutLazyQuery,
  useUpdateCartMutation
} from '~hooks/apollo';
import useContainerQuery from '~hooks/useContainerQuery';
import CartItemCard from './CartItemCard';
import Result from '../../utility/Result/Result';
import CartTableRow from './CartTableRow';
import { MessageType } from '~types/message';
import { useResponseHandler } from '~hooks/useResponseHandler';

const CatalogLink: FunctionComponent<LinkProps> = props => (
  <Link href="/search" passHref>
    <ThemeLink variant="inverted" {...props} />
  </Link>
);

const Cart: FunctionComponent<BoxProps> = ({ className, ...props }) => {
  const { i18n, t } = useTranslation('commerce');
  const cartId = useReactiveVar(cartIdVar);
  const checkoutId = useReactiveVar(checkoutIdVar);
  const { dispatch } = useMessages();
  const [getCheckout, { data, loading, error, called }] = useGetCheckoutLazyQuery();
  const [handleCouponCodeInCart] = useCouponCode();
  const responseHandlers = useResponseHandler<UpdateCartMutation, UpdateCartMutationVariables>({}, 'commerce');
  const [emptyCart, emptyCartResult] = useUpdateCartMutation(responseHandlers);
  const [ref, isLargeContainer] = useContainerQuery<HTMLDivElement>(500);
  const cart = data?.checkout?.cart;
  const isEmpty = cart && cart?.numberOfItems === 0;

  useEffect(() => {
    if (checkoutId) {
      getCheckout({ variables: { checkoutId } });
    }
  }, [getCheckout, checkoutId]);

  const items: CartItem[] = useMemo(
    () =>
      (cart?.items ?? []).map(item => ({
        id: item.id,
        name: item.product.name,
        totalPrice: item.rowTotal,
        quantity: item.quantity,
        url: item.product.url,
        image: item.product.thumbnailImage?.url
          ? {
              url: item.product.thumbnailImage?.url,
              alt: item.product.thumbnailImage?.alt ?? ''
            }
          : undefined
      })),
    [cart?.items]
  );

  const totals: CartTableTotal[] = useMemo(() => {
    if (!cart?.totals) return [];

    const { grandTotal, subtotalIncludingTax, discounts } = cart.totals;
    const shippingMethod = data?.checkout?.shippingMethod;

    return [
      { label: t('Cart.Total.Subtotal'), price: subtotalIncludingTax },
      ...discounts.map(({ label, amount }) => ({ label, price: amount })),
      ...(shippingMethod
        ? [
            {
              label: t('Cart.Total.Shipping', { method: shippingMethod.label }),
              price: shippingMethod.priceIncludingTax
            }
          ]
        : []),
      { label: t('Cart.Total.GrandTotal'), price: grandTotal }
    ];
  }, [cart?.totals, data?.checkout?.shippingMethod, t]);

  const cartTableOverrides: CartTableOverrides = useMemo(
    () => ({
      headingLabels: [
        t('Cart.Table.Product'),
        t('Cart.Table.Description'),
        t('Cart.Table.Quantity'),
        t('Cart.Table.Total'),
        ''
      ]
    }),
    [t]
  );

  const handleEmptyCart = () => {
    if (cartId) {
      emptyCart({
        variables: {
          cartId,
          items: items.map(({ id }) => ({ id, quantity: 0 }))
        }
      });
    } else {
      dispatch({
        type: MessageActionType.AddMessage,
        payload: {
          id: 'empty-error',
          type: MessageType.Error,
          content: t('commerce:Messages.EmptyCartFailed')
        }
      });
    }
  };

  return (
    <Box ref={ref} className={cx('cart', className)} {...props}>
      <Result loading={loading || !called} error={error?.message}>
        {isEmpty && (
          <Alert className="cart__message" sx={{ display: 'block' }}>
            <Trans i18nKey="Cart.IsEmpty" ns="commerce">
              <CatalogLink />
            </Trans>
          </Alert>
        )}

        {!isEmpty && (
          <>
            {isLargeContainer ? (
              <StyledCartTable
                totals={totals}
                className="cart__table"
                overrides={cartTableOverrides}
                locale={i18n.language}
                data-cart-mode="table"
              >
                {items.map(item => (
                  <CartTableRow key={item.id} {...item} />
                ))}
              </StyledCartTable>
            ) : (
              // voiceover will remove these semantics if list does not have list styling so role is necessary
              // eslint-disable-next-line jsx-a11y/no-redundant-roles
              <ul role="list" sx={{ variant: 'lists.plain' }} className="cart__list" data-cart-mode="list">
                {items.map(item => (
                  <li key={item.id} sx={{ ':not(:last-of-type)': { marginBottom: 3 } }}>
                    <CartItemCard {...item} />
                  </li>
                ))}
              </ul>
            )}

            <Flex
              sx={{
                flexDirection: isLargeContainer ? 'row' : 'column',
                marginTop: 3,
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                '> *:not(:last-child)': {
                  marginBottom: isLargeContainer ? 0 : 3
                }
              }}
            >
              <Button
                type="button"
                variant="transparent"
                disabled={emptyCartResult.loading}
                sx={{ variant: 'withIcon', width: isLargeContainer ? 'auto' : '100%' }}
                onClick={handleEmptyCart}
              >
                {/* TODO: if we have more buttons like this, should extract this pattern to a component */}
                <TrashIcon />
                <span>{t('Cart.Empty')}</span>
              </Button>

              <Link as="/checkout" href="/checkout" passHref>
                <Button as="a" variant="primary" sx={{ width: isLargeContainer ? 'auto' : '100%' }}>
                  {t('Cart.ProceedToCheckout')}
                </Button>
              </Link>
            </Flex>

            {isLargeContainer && (
              <StyledCouponCodeForm
                couponCode={cart?.couponCodes?.[0]?.code ?? ''}
                onSubmit={handleCouponCodeInCart}
                sx={{ marginTop: 3 }}
              />
            )}
          </>
        )}
      </Result>
    </Box>
  );
};

export default Cart;
