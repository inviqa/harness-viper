import { SelectElementOptionProps, Address as UIAddress, BillingAddressForm } from '@inviqa/viper-ui-commerce';
import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  >({
    i18nNs: 'commerce',
    successCallback: () => {
      if (!billingSameAsShipping) goToNextCheckoutStep();
    }
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

  const onSubmit = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (values: any) => {
      if (values && values.address) {
        const { billing } = values.address;
        setBillingAddress({
          variables: { checkoutId, address: billing }
        });
      }
    },
    [setBillingAddress, checkoutId]
  );

  const onEdit = useCallback(() => {
    billingSameAsShippingVar(false);
    setCurrentCheckoutStep(CheckoutStep.BillingAddress);
  }, [setCurrentCheckoutStep]);

  return (
    <CheckoutStepWrapper
      name={CheckoutStep.BillingAddress}
      heading={<Heading level={2}>{t('Checkout.BillingAddressForm')}</Heading>}
      visible={currentCheckoutStep === CheckoutStep.BillingAddress}
      preview={billingAddress ? <UIAddress address={transformAddressForDisplay(billingAddress, countries)} /> : null}
      onEditCallback={onEdit}
    >
      <Box className="checkout-billing-section">
        <BillingAddressForm
          fieldsConfigOverrides={[
            {
              name: 'country',
              options: countries
            }
          ]}
          defaultValues={billingAddress}
          isLoading={loading}
          onSubmit={onSubmit}
        />
      </Box>
    </CheckoutStepWrapper>
  );
};
