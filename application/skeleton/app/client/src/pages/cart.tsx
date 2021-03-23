import React from 'react';
import { useTranslation } from 'react-i18next';
import type { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import { getApolloProps, GetContextWithApollo, getI18nProps, isDataOnlyRequest } from '@inviqa/viper-nextjs';
import DocumentTitle from '../components/DocumentTitle';
import CartComponent from '../components/organisms/Cart/Cart';
import createApolloClientConfig from '~lib/createApolloClientConfig';
import { GetMenuDocument, GetMenuQuery, GetMenuQueryVariables } from '~hooks/apollo';

export const Cart: NextPage = () => {
  const { t } = useTranslation('commerce');

  return (
    <>
      <DocumentTitle title={t('Cart.Title')} />
      <main>
        <h1 className="my-8">{t('Cart.Title')}</h1>
        <CartComponent />
      </main>
    </>
  );
};

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

export default Cart;
