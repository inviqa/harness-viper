/* @jsx jsx */
import { useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { jsx } from 'theme-ui';
import DocumentTitle from '../../../components/DocumentTitle';
import Heading from '../../../components/atoms/Heading/Heading';
import Paragraph from '../../../components/atoms/Paragraph/Paragraph';
import { useTranslation, Trans, Router } from '~lib/createI18n';

type Props = {
  orderNumber?: string;
  namespacesRequired?: string[];
};

export const CheckoutSuccess: NextComponentType<NextPageContext, Props, Props> = ({ orderNumber }) => {
  const { t } = useTranslation('commerce');

  useEffect(() => {
    if (!orderNumber) {
      Router.push('/');
    }
  }, [orderNumber]);

  return (
    <>
      <DocumentTitle title={t('CheckoutSuccess.Title')} />
      <main sx={{ textAlign: 'center' }}>
        <Heading level={1}>{t('CheckoutSuccess.Title')}</Heading>
        <Paragraph sx={{ fontSize: 3 }}>
          <Trans ns="commerce" i18nKey="CheckoutSuccess.OrderNumber" values={{ orderNumber }}>
            <strong />
          </Trans>
        </Paragraph>
        <Paragraph sx={{ fontSize: 3 }}>{t('CheckoutSuccess.Message')}</Paragraph>
      </main>
    </>
  );
};

CheckoutSuccess.getInitialProps = async (context: NextPageContext) => ({
  namespacesRequired: ['common', 'commerce'],
  orderNumber: context.query.orderNumber?.toString()
});

export default CheckoutSuccess;
