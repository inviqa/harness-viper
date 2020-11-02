import { MutationTuple } from '@apollo/client';
import { StyledPaymentMethodSelector, PaymentMethod as PaymentMethodUI } from '@inviqa/viper-ui-commerce';
import React, { FunctionComponent, useMemo } from 'react';
import {
  SetCheckoutPaymentMethodMutation,
  SetCheckoutPaymentMethodMutationVariables,
  PaymentMethod,
  useSetCheckoutPaymentMethodMutation,
  PlaceOrderMutation
} from '~hooks/apollo';
import { CheckoutStep, useCheckoutSteps } from '~hooks/checkout';
import { useResponseHandler } from '~hooks/useResponseHandler';
import { useTranslation } from '~lib/createI18n';
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
  const { currentCheckoutStep, setCurrentCheckoutStep, goToNextCheckoutStep } = useCheckoutSteps();
  const responseHandlers = useResponseHandler<
    SetCheckoutPaymentMethodMutation,
    SetCheckoutPaymentMethodMutationVariables
  >({}, 'commerce', undefined, () => {
    goToNextCheckoutStep();
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

  return (
    <CheckoutStepWrapper
      name={CheckoutStep.PaymentMethod}
      heading={<Heading level={2}>{t('Checkout.PaymentMethod')}</Heading>}
      visible={currentCheckoutStep === CheckoutStep.PaymentMethod}
      preview={paymentMethod?.label}
      onEditCallback={() => setCurrentCheckoutStep(CheckoutStep.PaymentMethod)}
    >
      <StyledPaymentMethodSelector
        paymentMethods={paymentMethods}
        buttonLabel={t('Checkout.PlaceOrder')}
        currentPaymentMethod={paymentMethod?.id}
        isLoading={loading || placeOrderLoading}
        onSubmit={async values => {
          await setPaymentMethod({ variables: { checkoutId, paymentMethodId: values['payment-method'] } });
          await placeOrder({ variables: { checkoutId } });
        }}
      />
    </CheckoutStepWrapper>
  );
};
