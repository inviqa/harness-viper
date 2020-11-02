import React from 'react';
import { withApollo } from '@inviqa/viper-storybook-addons';
import OrderSummary from './OrderSummary';
import { getCheckoutMock } from '~hooks/apollo/mocks/GetCheckout';

export default {
  component: OrderSummary,
  title: 'Organisms/OrderSummary',
  decorators: [withApollo]
};

export const orderSummary = () => <OrderSummary />;
orderSummary.parameters = { apollo: { mocks: [getCheckoutMock()] } };
