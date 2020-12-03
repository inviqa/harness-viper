import React from 'react';
import { useTranslation } from 'react-i18next';
import { NextComponentType } from 'next';
import DocumentTitle from '../components/DocumentTitle';
import Heading from '../components/atoms/Heading/Heading';
import CartComponent from '../components/organisms/Cart/Cart';

export const Cart: NextComponentType = () => {
  const { t } = useTranslation('commerce');

  return (
    <>
      <DocumentTitle title={t('Cart.Title')} />
      <main>
        <Heading level={1}>{t('Cart.Title')}</Heading>
        <CartComponent />
      </main>
    </>
  );
};

Cart.getInitialProps = async () => ({
  namespacesRequired: ['common', 'commerce']
});

export default Cart;
