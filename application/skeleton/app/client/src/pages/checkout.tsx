import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { NextComponentType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Spinner, Link as ThemeLink, LinkProps, Alert } from 'theme-ui';
import { useReactiveVar } from '@apollo/client';
import { SelectElementOptionProps } from '@inviqa/viper-ui-commerce';
import OrderSummary from '../components/organisms/OrderSummary/OrderSummary';
import DocumentTitle from '../components/DocumentTitle';
import Heading from '../components/atoms/Heading/Heading';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import {
  BillingAddressStep,
  CustomerStep,
  ShippingAddressStep,
  ShippingMethodStep,
  PaymentMethodStep
} from '../components/organisms/CheckoutStep';
import SimplePageLayout from '../components/templates/SimplePageLayout/SimplePageLayout';
import TwoColumnsPageLayout from '../components/templates/TwoColumnContentLayout/TwoColumnContentLayout';

import { checkoutIdVar, resetCartId } from '~hooks/cart';
import {
  useGetCheckoutLazyQuery,
  usePlaceOrderMutation,
  useCountriesLazyQuery,
  PlaceOrderMutation,
  PlaceOrderMutationVariables
} from '~hooks/apollo';
import { useResponseHandler } from '~hooks/useResponseHandler';

const CatalogLink: FunctionComponent<LinkProps> = props => (
  <Link href="/search" passHref>
    <ThemeLink variant="inverted" {...props} />
  </Link>
);

export const Checkout: NextComponentType & { getLayout: (page: JSX.Element) => JSX.Element } = () => {
  const { t } = useTranslation('commerce');
  const router = useRouter();
  const checkoutId = useReactiveVar(checkoutIdVar);
  const responseHandlers = useResponseHandler<PlaceOrderMutation, PlaceOrderMutationVariables>({
    i18nNs: 'commerce'
  });
  const [getCheckout, { data, loading }] = useGetCheckoutLazyQuery();
  const [getCountries, { data: countryData }] = useCountriesLazyQuery();
  const placeOrder = usePlaceOrderMutation(responseHandlers);
  const [, { data: order }] = placeOrder;

  const isEmpty = data?.checkout?.cart?.numberOfItems === 0;

  const transformedCountries: SelectElementOptionProps[] = useMemo(
    () =>
      (countryData?.websiteConfig?.countries ?? [])
        .map(({ name, id }) => ({ label: name, value: id }))
        .sort((a, b) => {
          return a.label.localeCompare(b.label);
        }),
    [countryData?.websiteConfig?.countries]
  );

  useEffect(() => {
    if (checkoutId) {
      getCheckout({ variables: { checkoutId } });
      getCountries();
    }
  }, [getCheckout, checkoutId, getCountries]);

  useEffect(() => {
    const orderNumber = order?.placeOrder?.order?.orderNumber;
    if (orderNumber) {
      // TODO: this is duplicated in the checkout steps hook, figure out why this one isn't working as expected - was it just missing cache.gc?
      resetCartId();
      router.push(`/checkout/success/${orderNumber}`);
    }
  }, [order?.placeOrder?.order?.orderNumber, router]);

  return (
    <>
      <DocumentTitle title={t('Checkout.Title')} />
      <main>
        <Heading level={1}>{t('Checkout.Title')}</Heading>

        {loading && <Spinner sx={{ display: 'block', mx: 'auto' }} />}

        {!loading && isEmpty && (
          <Alert className="cart__message" sx={{ display: 'block' }}>
            <Trans i18nKey="Cart.IsEmpty" ns="commerce">
              <CatalogLink />
            </Trans>
          </Alert>
        )}

        {!loading && !isEmpty ? (
          <TwoColumnsPageLayout sidebarPos="right" sidebar={<OrderSummary />}>
            <CustomerStep
              checkoutId={checkoutId as string}
              customer={data?.checkout?.customer ?? undefined}
              shippingAddress={data?.checkout?.shippingAddress ?? undefined}
            />

            <ShippingAddressStep
              checkoutId={checkoutId as string}
              customer={data?.checkout?.customer ?? undefined}
              shippingAddress={data?.checkout?.shippingAddress ?? undefined}
              countries={transformedCountries}
            />

            <BillingAddressStep
              checkoutId={checkoutId as string}
              shippingAddress={data?.checkout?.shippingAddress ?? undefined}
              billingAddress={data?.checkout?.billingAddress ?? undefined}
              countries={transformedCountries}
            />

            <ShippingMethodStep
              checkoutId={checkoutId as string}
              availableShippingMethods={data?.checkout?.availableShippingMethods ?? undefined}
              shippingMethod={data?.checkout?.shippingMethod ?? undefined}
            />

            <PaymentMethodStep
              checkoutId={checkoutId as string}
              availablePaymentMethods={data?.checkout?.availablePaymentMethods ?? undefined}
              paymentMethod={data?.checkout?.paymentMethod ?? undefined}
              placeOrderMutation={placeOrder}
            />
          </TwoColumnsPageLayout>
        ) : null}
      </main>
    </>
  );
};

// demonstrates how we can provide a separate checkout header and footer
Checkout.getLayout = page => (
  <SimplePageLayout header={<Header />} footer={<Footer />}>
    {page}
  </SimplePageLayout>
);

Checkout.getInitialProps = async () => ({
  namespacesRequired: ['common', 'commerce']
});

export default Checkout;
