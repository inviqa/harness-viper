import React, { FunctionComponent, useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import App, { AppProps, AppContext, AppInitialProps } from 'next/app';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  defaultTheme,
  GlobalElementOverrideProvider,
  GlobalElementOverrides,
  defaultGlobalElementOverrides
} from '@inviqa/viper-ui';
import { ThemeProvider } from 'theme-ui';
import { withApollo, withTranslations, createI18n } from '@inviqa/viper-nextjs';
import { useCartId } from '~hooks/cart';
import { resetVarsOnPageChange } from '~lib/cache';
import createApolloClient from '~lib/createApolloClient';
import SimplePageLayout from '../components/templates/SimplePageLayout/SimplePageLayout';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import { websiteConfig } from '../../websiteConfig';

type MyAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, unknown, unknown> & { getLayout?: (page: JSX.Element) => JSX.Element };
};

const DefaultLayout: FunctionComponent = page => (
  <SimplePageLayout header={<Header />} footer={<Footer />}>
    {page}
  </SimplePageLayout>
);

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
  useCartId();

  useEffect(() => {
    router.events.on('routeChangeStart', resetVarsOnPageChange);

    return () => {
      router.events.off('routeChangeStart', resetVarsOnPageChange);
    };
  }, [router]);

  const getLayout = Component.getLayout || DefaultLayout;

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalElementOverrideProvider value={globalElementOverrides}>
        {getLayout(<Component {...pageProps} />)}
      </GlobalElementOverrideProvider>
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => ({ ...(await App.getInitialProps(appContext)) });

const { i18n, promise: i18nPromise } = createI18n({
  locales: websiteConfig.map(({ id }) => id),
  additionalNamespaces: ['catalog', 'commerce']
});

export default withApollo({ ssr: true, createApolloClient })(withTranslations({ i18n, i18nPromise })(MyApp as never));
