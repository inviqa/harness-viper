import { SelectElementOptionProps, StyledAddress, StyledBillingAddressForm } from '@inviqa/viper-ui-commerce';
import React, { FunctionComponent, useEffect } from 'react';
import { Box } from 'theme-ui';
import {
  Address,
  SetCheckoutBillingAddressMutation,
  SetCheckoutBillingAddressMutationVariables,
  useSetCheckoutBillingAddressMutation
} from '~hooks/apollo';
import { billingSameAsShippingVar, CheckoutStep, currentCheckoutStepVar, useCheckoutSteps } from '~hooks/checkout';
import { useResponseHandler } from '~hooks/useResponseHandler';
import { transformAddressForDisplay } from '~lib/address';
import { useTranslation } from '~lib/createI18n';
import Heading from '../../atoms/Heading/Heading';
import CheckoutStepWrapper from '../../templates/CheckoutStepWrapper/CheckoutStepWrapper';

type Props = {
  checkoutId: string;
  billingAddress?: Address;
  shippingAddress?: Address;
  countries?: SelectElementOptionProps[];
};

export const BillingAddressStep: FunctionComponent<Props> = ({
  checkoutId,
  countries,
  billingAddress,
  shippingAddress
}) => {
  const { t } = useTranslation('commerce');
  const {
    currentCheckoutStep,
    billingSameAsShipping,
    setCurrentCheckoutStep,
    goToNextCheckoutStep
  } = useCheckoutSteps();
  const responseHandlers = useResponseHandler<
    SetCheckoutBillingAddressMutation,
    SetCheckoutBillingAddressMutationVariables
  >({}, 'commerce', undefined, () => {
    if (!billingSameAsShipping) goToNextCheckoutStep();
  });
  const [setBillingAddress, { loading }] = useSetCheckoutBillingAddressMutation(responseHandlers);

  useEffect(() => {
    if (shippingAddress && billingSameAsShipping) {
      const { __typename, ...rest } = shippingAddress;
      setBillingAddress({ variables: { checkoutId, address: rest } });
    }
  }, [checkoutId, shippingAddress, billingSameAsShipping, setBillingAddress]);

  useEffect(() => {
    if (billingSameAsShipping && currentCheckoutStep === CheckoutStep.BillingAddress) {
      currentCheckoutStepVar(CheckoutStep.ShippingMethod);
    }
  }, [billingSameAsShipping, currentCheckoutStep, goToNextCheckoutStep]);

  return (
    <CheckoutStepWrapper
      name={CheckoutStep.BillingAddress}
      heading={<Heading level={2}>{t('Checkout.BillingAddressForm')}</Heading>}
      visible={currentCheckoutStep === CheckoutStep.BillingAddress}
      preview={
        billingAddress ? <StyledAddress address={transformAddressForDisplay(billingAddress, countries)} /> : null
      }
      onEditCallback={() => {
        billingSameAsShippingVar(false);
        setCurrentCheckoutStep(CheckoutStep.BillingAddress);
      }}
    >
      <Box className="checkout-billing-section">
        <StyledBillingAddressForm
          fieldsConfigOverrides={[
            {
              name: 'country',
              options: countries
            }
          ]}
          defaultValues={billingAddress}
          isLoading={loading}
          onSubmit={values => {
            if (values && values.address) {
              const { billing } = values.address;
              setBillingAddress({
                variables: { checkoutId, address: billing }
              });
            }
          }}
        />
      </Box>
    </CheckoutStepWrapper>
  );
};
