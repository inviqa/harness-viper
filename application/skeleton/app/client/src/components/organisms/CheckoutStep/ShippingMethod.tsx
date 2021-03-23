import {
  ShippingMethodSelector,
  ShippingMethod as ShippingMethodUIType,
  ShippingMethodSelectorValues
} from '@inviqa/viper-ui';
import { useResponseHandler } from '@inviqa/viper-react-hooks';
import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CheckoutInput,
  SetCheckoutShippingMethodMutation,
  SetCheckoutShippingMethodMutationVariables,
  ShippingMethod,
  useSetCheckoutShippingMethodMutation
} from '~hooks/apollo';
import { CheckoutStep, useCheckoutSteps } from '~hooks/checkout';
import CheckoutStepWrapper from './CheckoutStepWrapper';
import { setOrderId } from '~hooks/cart';

type Props = {
  checkoutInput: CheckoutInput;
  availableShippingMethods?: Omit<ShippingMethod, 'priceExcludingTax'>[];
  shippingMethod?: Omit<ShippingMethod, 'priceExcludingTax'>;
};

export const ShippingMethodStep: FunctionComponent<Props> = ({
  checkoutInput,
  availableShippingMethods = [],
  shippingMethod
}) => {
  const { t } = useTranslation('commerce');
  const { currentCheckoutStep, setCurrentCheckoutStep, goToNextCheckoutStep } = useCheckoutSteps();
  const responseHandlers = useResponseHandler<
    SetCheckoutShippingMethodMutation,
    SetCheckoutShippingMethodMutationVariables
  >({
    i18nNs: 'commerce',
    successCallback: (data: SetCheckoutShippingMethodMutation) => {
      setOrderId(data.setCheckoutShippingMethod.order?.id || null);
      goToNextCheckoutStep();
    }
  });
  const [setShippingMethod, { loading }] = useSetCheckoutShippingMethodMutation(responseHandlers);

  const shippingMethods: ShippingMethodUIType[] = useMemo(
    () =>
      availableShippingMethods.map(method => ({
        label: method.label,
        id: method.id,
        price: method.priceIncludingTax.value,
        currency: method.priceIncludingTax.currency
      })),
    [availableShippingMethods]
  );

  const onSubmit = useCallback(
    (values: ShippingMethodSelectorValues) => {
      setShippingMethod({
        variables: { checkoutInput, shippingMethodId: values['shipping-method'] }
      });
    },
    [setShippingMethod, checkoutInput]
  );

  const onEdit = useCallback(() => {
    setCurrentCheckoutStep(CheckoutStep.ShippingMethod);
  }, [setCurrentCheckoutStep]);

  return (
    <CheckoutStepWrapper
      name={CheckoutStep.ShippingMethod}
      heading={<h2>{t('Checkout.ShippingMethod')}</h2>}
      visible={currentCheckoutStep === CheckoutStep.ShippingMethod}
      preview={shippingMethod?.label}
      onEditCallback={onEdit}
    >
      <ShippingMethodSelector
        shippingMethods={shippingMethods}
        currentShippingMethod={shippingMethod?.id}
        isLoading={loading}
        onSubmit={onSubmit}
      />
    </CheckoutStepWrapper>
  );
};
