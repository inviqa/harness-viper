import React, { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { GetServerSidePropsContext, GetServerSidePropsResult, NextComponentType, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { getApolloProps, GetContextWithApollo, getI18nProps, isDataOnlyRequest } from '@inviqa/viper-nextjs';
import { MessageType } from '@inviqa/viper-react-hooks';
import { Alert } from '@inviqa/viper-ui';
import DocumentTitle from '../../../components/DocumentTitle';
import createApolloClientConfig from '~lib/createApolloClientConfig';
import { GetMenuDocument, GetMenuQuery, GetMenuQueryVariables } from '~hooks/apollo';

type Props = {
  orderNumber?: string;
};

export const CheckoutSuccess: NextComponentType<NextPageContext, Props, Props> = ({ orderNumber }) => {
  const { t } = useTranslation('commerce');
  const router = useRouter();

  useEffect(() => {
    if (!orderNumber) {
      router.push('/');
    }
  }, [orderNumber, router]);

  return (
    <>
      <DocumentTitle title={t('CheckoutSuccess.Title')} />
      <main className="text-center">
        <h1 className="my-8">{t('CheckoutSuccess.Title')}</h1>
        <p className="text-xl">
          <Trans ns="commerce" i18nKey="CheckoutSuccess.OrderNumber" values={{ orderNumber }}>
            <strong />
          </Trans>
        </p>
        <Alert type={MessageType.Success}>{t('CheckoutSuccess.Message')}</Alert>
      </main>
    </>
  );
};

const getPageProps = async ({
  apolloClient,
  query,
  req
}: GetContextWithApollo<GetServerSidePropsContext>): Promise<GetServerSidePropsResult<Props>> => {
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
    props: {
      orderNumber: query.orderNumber?.toString()
    }
  };
};

export const getServerSideProps = getI18nProps(
  ['commerce'],
  undefined,
  getApolloProps(createApolloClientConfig, getPageProps)
);

export default CheckoutSuccess;
