import React, {
  forwardRef,
  ForwardRefExoticComponent,
  FunctionComponent,
  HTMLAttributes,
  RefAttributes,
  useEffect,
  useMemo
} from 'react';
import { CgTrash as TrashIcon } from 'react-icons/cg';
import { Trans, useTranslation } from 'react-i18next';
import cx from 'classnames';
import { useReactiveVar } from '@apollo/client';
import Link from 'next/link';
import { Alert, Button, CartItem, CartTableTotal, CartTable, CouponCodeForm } from '@inviqa/viper-ui';
import {
  useContainerQuery,
  useMessages,
  useCartResponseHandler,
  MessageActionType,
  MessageType
} from '@inviqa/viper-react-hooks';
import { cartIdVar, useCouponCode, checkoutIdVar, resetCartId } from '~hooks/cart';
import {
  GetCheckoutQuery,
  GetCheckoutQueryVariables,
  UpdateCartMutation,
  UpdateCartMutationVariables,
  useGetCheckoutLazyQuery,
  useUpdateCartMutation
} from '~hooks/apollo';
import Result from '../../utility/Result/Result';
import CartItemCard from './CartItemCard';
import CartTableRow from './CartTableRow';

const CatalogLink: ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>> = forwardRef(
  ({ children, ...props }, ref) => (
    <Link href="/search" passHref>
      <a ref={ref} {...props}>
        {children}
      </a>
    </Link>
  )
);

const Cart: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  const getCheckoutResponseHandler = useCartResponseHandler<GetCheckoutQuery, GetCheckoutQueryVariables>({
    cartNotFoundCallback: resetCartId
  });
  const updateCartResponseHandler = useCartResponseHandler<UpdateCartMutation, UpdateCartMutationVariables>({
    cartNotFoundCallback: resetCartId
  });

  const { t } = useTranslation('commerce');

  const cartId = useReactiveVar(cartIdVar);
  const checkoutId = useReactiveVar(checkoutIdVar);

  const { dispatch } = useMessages();

  const [getCheckout, { data, loading, error, called }] = useGetCheckoutLazyQuery(getCheckoutResponseHandler);
  const [handleCouponCodeInCart] = useCouponCode();
  const [emptyCart, emptyCartResult] = useUpdateCartMutation(updateCartResponseHandler);
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
          : undefined,
        productOptions: item.productOptions || null
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
    <div ref={ref} className={cx('cart', className)} {...props}>
      <Result loading={loading || !called} error={error?.message}>
        {isEmpty && (
          <Alert type={MessageType.Error} className="cart__message">
            <Trans i18nKey="Cart.IsEmpty" ns="commerce">
              <CatalogLink />
            </Trans>
          </Alert>
        )}

        {!isEmpty && (
          <>
            {isLargeContainer ? (
              <CartTable totals={totals} className="cart__table" data-cart-mode="table">
                {items.map(item => (
                  <CartTableRow key={item.id} {...item} />
                ))}
              </CartTable>
            ) : (
              // voiceover will remove these semantics if list does not have list styling so role is necessary
              // eslint-disable-next-line jsx-a11y/no-redundant-roles
              <ul role="list" className="cart__list" data-cart-mode="list">
                {items.map(item => (
                  <li key={item.id} className="mb-3">
                    <CartItemCard {...item} />
                  </li>
                ))}
              </ul>
            )}

            <div
              className={cx(
                'flex',
                {
                  'flex-row': isLargeContainer,
                  'flex-col': !isLargeContainer
                },
                'mt-3',
                'items-start',
                'justify-between'
              )}
            >
              <Button
                type="button"
                variant="clear"
                disabled={emptyCartResult.loading}
                className={cx(
                  'inline-flex',
                  'items-center',
                  'justify-center',
                  {
                    'w-auto': isLargeContainer,
                    'w-full': !isLargeContainer
                  },
                  {
                    'mb-0': isLargeContainer,
                    'mb-3': !isLargeContainer
                  }
                )}
                onClick={handleEmptyCart}
              >
                {/* TODO: if we have more buttons like this, should extract this pattern to a component */}
                <TrashIcon className="mr-2" />
                <span>{t('Cart.Empty')}</span>
              </Button>

              <a
                href="/checkout"
                className={cx(
                  'button',
                  'bg-button-primary',
                  'hover:bg-button-primary-dark',
                  'text-button-primary-text',
                  'hover:text-button-primary-text',
                  'inline-flex',
                  'justify-center',
                  'mr-0',
                  {
                    'w-auto': isLargeContainer,
                    'w-full': !isLargeContainer
                  }
                )}
              >
                {t('Cart.ProceedToCheckout')}
              </a>
            </div>

            {isLargeContainer && (
              <CouponCodeForm
                couponCode={cart?.couponCodes?.[0]?.code ?? ''}
                onSubmit={handleCouponCodeInCart}
                className="mt-3 max-w-lg"
              />
            )}
          </>
        )}
      </Result>
    </div>
  );
};

export default Cart;
