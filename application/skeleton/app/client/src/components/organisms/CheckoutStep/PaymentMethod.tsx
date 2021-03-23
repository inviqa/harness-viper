import { MutationTuple } from '@apollo/client';
import { PaymentMethodSelector, PaymentMethod as PaymentMethodUI, PaymentMethodSelectorValues } from '@inviqa/viper-ui';
import { useResponseHandler } from '@inviqa/viper-react-hooks';
import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  SetCheckoutPaymentMethodMutation,
  SetCheckoutPaymentMethodMutationVariables,
  PaymentMethod,
  useSetCheckoutPaymentMethodMutation,
  PlaceOrderMutation,
  CheckoutInput
} from '~hooks/apollo';
import { CheckoutStep, useCheckoutSteps } from '~hooks/checkout';
import CheckoutStepWrapper from './CheckoutStepWrapper';
import { setOrderId } from '~hooks/cart';

type Props = {
  checkoutInput: CheckoutInput;
  availablePaymentMethods?: PaymentMethod[];
  paymentMethod?: PaymentMethod;
  placeOrderMutation: MutationTuple<PlaceOrderMutation, { checkoutInput: CheckoutInput }>;
};

export const PaymentMethodStep: FunctionComponent<Props> = ({
  checkoutInput,
  availablePaymentMethods = [],
  paymentMethod,
  placeOrderMutation
}) => {
  const { t } = useTranslation('commerce');
  const [placeOrder, { loading: placeOrderLoading }] = placeOrderMutation;
  const { currentCheckoutStep, setCurrentCheckoutStep, clearCheckout } = useCheckoutSteps();
  const responseHandlers = useResponseHandler<
    SetCheckoutPaymentMethodMutation,
    SetCheckoutPaymentMethodMutationVariables
  >({
    i18nNs: 'commerce',
    successCallback: async (data: SetCheckoutPaymentMethodMutation) => {
      const orderId = data.setCheckoutPaymentMethod.order?.id || null;
      setOrderId(orderId);
      await placeOrder({
        variables: {
          checkoutInput: {
            ...checkoutInput,
            orderId
          }
        }
      });
      clearCheckout();
    }
  });
  const [setPaymentMethod, { loading }] = useSetCheckoutPaymentMethodMutation(responseHandlers);

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
      await setPaymentMethod({ variables: { checkoutInput, paymentMethodId: values['payment-method'] } });
    },
    [setPaymentMethod, checkoutInput]
  );

  const onEdit = useCallback(() => {
    setCurrentCheckoutStep(CheckoutStep.PaymentMethod);
  }, [setCurrentCheckoutStep]);

  return (
    <CheckoutStepWrapper
      name={CheckoutStep.PaymentMethod}
      heading={<h2>{t('Checkout.PaymentMethod')}</h2>}
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
