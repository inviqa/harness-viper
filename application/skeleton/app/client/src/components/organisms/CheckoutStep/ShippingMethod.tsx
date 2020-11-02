import { StyledShippingMethodSelector, ShippingMethod as ShippingMethodUI } from '@inviqa/viper-ui-commerce';
import React, { FunctionComponent, useMemo } from 'react';
import {
  SetCheckoutShippingMethodMutation,
  SetCheckoutShippingMethodMutationVariables,
  ShippingMethod,
  useSetCheckoutShippingMethodMutation
} from '~hooks/apollo';
import { CheckoutStep, useCheckoutSteps } from '~hooks/checkout';
import { useResponseHandler } from '~hooks/useResponseHandler';
import useWebsiteConfig from '~hooks/useWebsiteConfig';
import { useTranslation } from '~lib/createI18n';
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
  const websiteConfig = useWebsiteConfig();
  const { t } = useTranslation('commerce');
  const { currentCheckoutStep, setCurrentCheckoutStep, goToNextCheckoutStep } = useCheckoutSteps();
  const responseHandlers = useResponseHandler<
    SetCheckoutShippingMethodMutation,
    SetCheckoutShippingMethodMutationVariables
  >({}, 'commerce', undefined, () => {
    goToNextCheckoutStep();
  });
  const [setShippingMethod, { loading }] = useSetCheckoutShippingMethodMutation(responseHandlers);

  const shippingMethods: ShippingMethodUI[] = useMemo(
    () =>
      availableShippingMethods.map(method => ({
        label: method.label,
        id: method.id,
        price: method.priceIncludingTax.value,
        currency: method.priceIncludingTax.currency,
        locale: websiteConfig?.locale
      })),
    [availableShippingMethods, websiteConfig?.locale]
  );

  return (
    <CheckoutStepWrapper
      name={CheckoutStep.ShippingMethod}
      heading={<Heading level={2}>{t('Checkout.ShippingMethod')}</Heading>}
      visible={currentCheckoutStep === CheckoutStep.ShippingMethod}
      preview={shippingMethod?.label}
      onEditCallback={() => setCurrentCheckoutStep(CheckoutStep.ShippingMethod)}
    >
      <StyledShippingMethodSelector
        shippingMethods={shippingMethods}
        buttonLabel={t('Checkout.SaveShippingMethod')}
        currentShippingMethod={shippingMethod?.id}
        isLoading={loading}
        onSubmit={values => {
          setShippingMethod({
            variables: { checkoutId, shippingMethodId: values['shipping-method'] }
          });
        }}
      />
    </CheckoutStepWrapper>
  );
};
