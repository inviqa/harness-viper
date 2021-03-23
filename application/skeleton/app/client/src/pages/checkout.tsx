import React, { forwardRef, ForwardRefExoticComponent, RefAttributes, useEffect, useMemo, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import type { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useReactiveVar } from '@apollo/client';
import { SimplePageLayout, TwoColumnContentLayout, BillingAddressFormProps, Alert } from '@inviqa/viper-ui';
import { PacmanLoader as Spinner } from 'react-spinners';
import { MessageType, useResponseHandler } from '@inviqa/viper-react-hooks';
import { getApolloProps, GetContextWithApollo, getI18nProps, isDataOnlyRequest } from '@inviqa/viper-nextjs';
import OrderSummary from '../components/organisms/OrderSummary/OrderSummary';
import DocumentTitle from '../components/DocumentTitle';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import {
  BillingAddressStep,
  CustomerStep,
  ShippingAddressStep,
  ShippingMethodStep,
  PaymentMethodStep
} from '../components/organisms/CheckoutStep';
import { checkoutIdVar, orderIdVar, resetCartId } from '~hooks/cart';
import {
  useGetCheckoutLazyQuery,
  usePlaceOrderMutation,
  useCountriesLazyQuery,
  PlaceOrderMutation,
  PlaceOrderMutationVariables,
  CheckoutInput,
  GetMenuQuery,
  GetMenuQueryVariables,
  GetMenuDocument
} from '~hooks/apollo';
import createApolloClientConfig from '~lib/createApolloClientConfig';

const CatalogLink: ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>> = forwardRef(
  ({ children, ...props }, ref) => (
    <Link href="/search" passHref>
      <a ref={ref} {...props}>
        {children}
      </a>
    </Link>
  )
);

export const Checkout: NextPage & {
  getLayout: (page: JSX.Element) => JSX.Element;
} = () => {
  const { t } = useTranslation('commerce');
  const router = useRouter();
  const checkoutId = useReactiveVar(checkoutIdVar);
  const orderId = useReactiveVar(orderIdVar);
  const responseHandlers = useResponseHandler<PlaceOrderMutation, PlaceOrderMutationVariables>({
    i18nNs: 'commerce'
  });
  const [getCheckout, { data, loading }] = useGetCheckoutLazyQuery();
  const [getCountries, { data: countryData }] = useCountriesLazyQuery();
  const placeOrder = usePlaceOrderMutation(responseHandlers);
  const [, { data: order }] = placeOrder;

  const isEmpty = data?.checkout?.cart?.numberOfItems === 0;

  const [checkoutInput, setCheckoutInput] = useState<CheckoutInput>({
    checkoutId: checkoutId ?? '',
    orderId: null
  });

  useEffect(() => {
    setCheckoutInput({
      checkoutId: checkoutId ?? '',
      orderId
    });
  }, [checkoutId, orderId]);

  // TODO: make a more generic type for countries
  const transformedCountries: BillingAddressFormProps['countries'] = useMemo(
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
        <h1 className="my-8">{t('Checkout.Title')}</h1>

        {loading && <Spinner loading={loading} css="display:block; margin: 0 auto;" aria-label={t('Loading')} />}

        {!loading && isEmpty && checkoutInput && (
          <Alert type={MessageType.Warning} className="cart__message">
            <Trans i18nKey="Cart.IsEmpty" ns="commerce">
              <CatalogLink />
            </Trans>
          </Alert>
        )}

        {!loading && !isEmpty && checkoutInput ? (
          <TwoColumnContentLayout sidebarPosition="right" sidebar={<OrderSummary />}>
            <CustomerStep
              checkoutInput={checkoutInput}
              customer={data?.checkout?.customer ?? undefined}
              shippingAddress={data?.checkout?.shippingAddress ?? undefined}
            />

            <ShippingAddressStep
              checkoutInput={checkoutInput}
              customer={data?.checkout?.customer ?? undefined}
              shippingAddress={data?.checkout?.shippingAddress ?? undefined}
              countries={transformedCountries}
            />

            <BillingAddressStep
              checkoutInput={checkoutInput}
              shippingAddress={data?.checkout?.shippingAddress ?? undefined}
              billingAddress={data?.checkout?.billingAddress ?? undefined}
              countries={transformedCountries}
            />

            <ShippingMethodStep
              checkoutInput={checkoutInput}
              availableShippingMethods={data?.checkout?.availableShippingMethods ?? undefined}
              shippingMethod={data?.checkout?.shippingMethod ?? undefined}
            />

            <PaymentMethodStep
              checkoutInput={checkoutInput}
              availablePaymentMethods={data?.checkout?.availablePaymentMethods ?? undefined}
              paymentMethod={data?.checkout?.paymentMethod ?? undefined}
              placeOrderMutation={placeOrder}
            />
          </TwoColumnContentLayout>
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

const getPageProps = async ({
  apolloClient,
  req
}: GetContextWithApollo<GetServerSidePropsContext>): Promise<GetServerSidePropsResult<unknown>> => {
  if (!isDataOnlyRequest(req)) {
    // ssr queries for page - ssr for main menu as it's 'above the fold', leave footer menu for csr
    await Promise.all([
      apolloClient.query<GetMenuQuery, GetMenuQueryVariables>({
        query: GetMenuDocument,
        variables: { name: 'main' }
      })
    ]);
  }

  return {
    props: {}
  };
};

export const getServerSideProps = getI18nProps(
  ['commerce'],
  undefined,
  getApolloProps(createApolloClientConfig, getPageProps)
);

export default Checkout;
