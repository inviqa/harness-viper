import {
  ShippingMethodSelector,
  ShippingMethod as ShippingMethodUIType,
  ShippingMethodSelectorValues
} from '@inviqa/viper-ui-commerce';
import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  SetCheckoutShippingMethodMutation,
  SetCheckoutShippingMethodMutationVariables,
  ShippingMethod,
  useSetCheckoutShippingMethodMutation
} from '~hooks/apollo';
import { CheckoutStep, useCheckoutSteps } from '~hooks/checkout';
import { useResponseHandler } from '~hooks/useResponseHandler';
import Heading from '../../atoms/Heading/Heading';
import CheckoutStepWrapper from '../../templates/CheckoutStepWrapper/CheckoutStepWrapper';

type Props = {
  checkoutId: string;
  availableShippingMethods?: Omit<ShippingMethod, 'priceExcludingTax'>[];
  shippingMethod?: Omit<ShippingMethod, 'priceExcludingTax'>;
};

export const ShippingMethodStep: FunctionComponent<Props> = ({
  checkoutId,
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
    successCallback: () => {
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
        variables: { checkoutId, shippingMethodId: values['shipping-method'] }
      });
    },
    [setShippingMethod, checkoutId]
  );

  const onEdit = useCallback(() => {
    setCurrentCheckoutStep(CheckoutStep.ShippingMethod);
  }, [setCurrentCheckoutStep]);

  return (
    <CheckoutStepWrapper
      name={CheckoutStep.ShippingMethod}
      heading={<Heading level={2}>{t('Checkout.ShippingMethod')}</Heading>}
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
