import { MutationTuple } from '@apollo/client';
import {
  PaymentMethodSelector,
  PaymentMethod as PaymentMethodUI,
  PaymentMethodSelectorValues
} from '@inviqa/viper-ui-commerce';
import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  SetCheckoutPaymentMethodMutation,
  SetCheckoutPaymentMethodMutationVariables,
  PaymentMethod,
  useSetCheckoutPaymentMethodMutation,
  PlaceOrderMutation
} from '~hooks/apollo';
import { CheckoutStep, useCheckoutSteps } from '~hooks/checkout';
import { useResponseHandler } from '~hooks/useResponseHandler';
import Heading from '../../atoms/Heading/Heading';
import CheckoutStepWrapper from '../../templates/CheckoutStepWrapper/CheckoutStepWrapper';

type Props = {
  checkoutId: string;
  availablePaymentMethods?: PaymentMethod[];
  paymentMethod?: PaymentMethod;
  placeOrderMutation: MutationTuple<PlaceOrderMutation, { checkoutId: string }>;
};

export const PaymentMethodStep: FunctionComponent<Props> = ({
  checkoutId,
  availablePaymentMethods = [],
  paymentMethod,
  placeOrderMutation
}) => {
  const { t } = useTranslation('commerce');
  const { currentCheckoutStep, setCurrentCheckoutStep, clearCheckout } = useCheckoutSteps();
  const responseHandlers = useResponseHandler<
    SetCheckoutPaymentMethodMutation,
    SetCheckoutPaymentMethodMutationVariables
  >({
    i18nNs: 'commerce',
    successCallback: () => {
      clearCheckout();
    }
  });
  const [setPaymentMethod, { loading }] = useSetCheckoutPaymentMethodMutation(responseHandlers);
  const [placeOrder, { loading: placeOrderLoading }] = placeOrderMutation;

  const paymentMethods: PaymentMethodUI[] = useMemo(
    () =>
      (availablePaymentMethods ?? []).map(method => ({
        label: method.label,
        id: method.id
      })),
    [availablePaymentMethods]
  );

  const onSubmit = useCallback(
    async (values: PaymentMethodSelectorValues) => {
      await setPaymentMethod({ variables: { checkoutId, paymentMethodId: values['payment-method'] } });
      await placeOrder({ variables: { checkoutId } });
    },
    [setPaymentMethod, placeOrder, checkoutId]
  );

  const onEdit = useCallback(() => {
    setCurrentCheckoutStep(CheckoutStep.PaymentMethod);
  }, [setCurrentCheckoutStep]);

  return (
    <CheckoutStepWrapper
      name={CheckoutStep.PaymentMethod}
      heading={<Heading level={2}>{t('Checkout.PaymentMethod')}</Heading>}
      visible={currentCheckoutStep === CheckoutStep.PaymentMethod}
      preview={paymentMethod?.label}
      onEditCallback={onEdit}
    >
      <PaymentMethodSelector
        paymentMethods={paymentMethods}
        currentPaymentMethod={paymentMethod?.id}
        isLoading={loading || placeOrderLoading}
        onSubmit={onSubmit}
      />
    </CheckoutStepWrapper>
  );
};
