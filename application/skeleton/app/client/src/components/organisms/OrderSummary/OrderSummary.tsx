/* @jsx jsx */
import { FunctionComponent, useEffect, useMemo } from 'react';
import { jsx, Box, BoxProps } from 'theme-ui';
import cx from 'classnames';
import { useReactiveVar } from '@apollo/client';
import { CartItem, CartTableTotal, StyledProductPrice } from '@inviqa/viper-ui-commerce';
import { useTranslation } from '~lib/createI18n';
import { checkoutIdVar } from '~hooks/cart';
import { useGetCheckoutLazyQuery } from '~hooks/apollo';
import CartItemCard from '../Cart/CartItemCard';
import Result from '../../utility/Result/Result';
import useWebsiteConfig from '~hooks/useWebsiteConfig';
import Heading from '../../atoms/Heading/Heading';

const OrderSummary: FunctionComponent<BoxProps> = ({ className, ...props }) => {
  const { t } = useTranslation('commerce');
  const websiteConfig = useWebsiteConfig();
  const checkoutId = useReactiveVar(checkoutIdVar);
  const [getCheckout, { data, loading, error, called }] = useGetCheckoutLazyQuery();
  const cart = data?.checkout?.cart;

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

  return (
    <Box className={cx('order-summary', className)} {...props}>
      <Result loading={loading || !called} error={error?.message}>
        <Heading level={2}>{t('Order Summary')}</Heading>
        {/* voiceover will remove these semantics if list does not have list styling so role is necessary */}
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
        <ul role="list" sx={{ variant: 'lists.plain' }} className="order-summary__list">
          {items.map(item => (
            <li key={item.id} sx={{ ':not(:last-of-type)': { marginBottom: 3 } }}>
              <CartItemCard readonly {...item} />
            </li>
          ))}
        </ul>

        <table>
          <tbody>
            {totals.map(({ label, price }) => (
              <tr key={label}>
                <th>{label}</th>
                <td>
                  <StyledProductPrice locale={websiteConfig?.locale} price={price} sx={{ fontSize: 1 }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Result>
    </Box>
  );
};

export default OrderSummary;
