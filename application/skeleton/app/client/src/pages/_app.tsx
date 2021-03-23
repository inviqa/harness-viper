import React, { FunctionComponent, useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { AppProps, AppContext, AppInitialProps } from 'next/app';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  GlobalElementOverrideProvider,
  GlobalElementOverrides,
  defaultGlobalElementOverrides,
  SimplePageLayout
} from '@inviqa/viper-ui';
import { TranslationsProvider, ApolloProvider } from '@inviqa/viper-nextjs';
import { useCartId } from '~hooks/cart';
import { resetVarsOnPageChange } from '~lib/apolloCacheConfig';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import createApolloClientConfig from '~lib/createApolloClientConfig';

import '../styles/main.css';

type MyAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, unknown, unknown> & { getLayout?: (page: JSX.Element) => JSX.Element };
};

const DefaultLayout = (page: JSX.Element): JSX.Element => (
  <SimplePageLayout header={<Header />} footer={<Footer />}>
    {page}
  </SimplePageLayout>
);

const CartIdProvider: FunctionComponent = ({ children }) => {
  useCartId();
  return <>{children}</>;
};

const globalElementOverrides: GlobalElementOverrides = {
  ...defaultGlobalElementOverrides,
  origin: 'next.js',
  Link: ({ LinkComponent = 'a', href, children, ...props }) =>
    // next/link requires the href attribute, so we want to have a fallback because HTML declares the href attribute as optional
    href ? (
      <Link href={href}>
        <LinkComponent href={href} {...props}>
          {children}
        </LinkComponent>
      </Link>
    ) : (
      <LinkComponent href={href} {...props}>
        {children}
      </LinkComponent>
    )
};

const MyApp: NextComponentType<AppContext, AppInitialProps, MyAppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', resetVarsOnPageChange);

    return () => {
      router.events.off('routeChangeStart', resetVarsOnPageChange);
    };
  }, [router]);

  const getLayout = Component.getLayout || DefaultLayout;

  return (
    <ApolloProvider createConfig={createApolloClientConfig} initialState={pageProps.apolloState}>
      <TranslationsProvider store={pageProps.i18nStore}>
        <GlobalElementOverrideProvider value={globalElementOverrides}>
          <CartIdProvider>{getLayout(<Component {...pageProps} />)}</CartIdProvider>
        </GlobalElementOverrideProvider>
      </TranslationsProvider>
    </ApolloProvider>
  );
};

export default MyApp;
