import React, { FunctionComponent, useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import App, { AppProps, AppContext } from 'next/app';
import { useRouter } from 'next/router';
import { defaultTheme } from '@inviqa/viper-ui';
import { ThemeProvider } from 'theme-ui';
import i18n from '~lib/createI18n';
import { withApollo } from '~lib/withApollo';
import { useCartId } from '~hooks/cart';
import SimplePageLayout from '../components/templates/SimplePageLayout/SimplePageLayout';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import { resetVarsOnPageChange } from '~lib/cache';

type MyAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, unknown, unknown> & { getLayout?: (page: JSX.Element) => JSX.Element };
};

const DefaultLayout: FunctionComponent = page => (
  <SimplePageLayout header={<Header />} footer={<Footer />}>
    {page}
  </SimplePageLayout>
);

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const router = useRouter();
  useCartId();

  useEffect(() => {
    router.events.on('routeChangeStart', resetVarsOnPageChange);

    return () => {
      router.events.off('routeChangeStart', resetVarsOnPageChange);
    };
  }, [router]);

  const getLayout = Component.getLayout || DefaultLayout;

  return <ThemeProvider theme={defaultTheme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>;
};

MyApp.getInitialProps = async (appContext: AppContext) => ({ ...(await App.getInitialProps(appContext)) });

export default withApollo({ ssr: true })(i18n.appWithTranslation(MyApp));
