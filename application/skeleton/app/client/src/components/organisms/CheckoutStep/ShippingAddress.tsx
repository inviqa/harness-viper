import { SelectElementOptionProps, StyledAddress, StyledShippingAddressForm } from '@inviqa/viper-ui-commerce';
import React, { FunctionComponent } from 'react';
import { Box, Checkbox, Label } from 'theme-ui';
import {
  Address,
  Customer,
  SetCheckoutShippingAddressMutation,
  SetCheckoutShippingAddressMutationVariables,
  useSetCheckoutShippingAddressMutation
} from '~hooks/apollo';
import { billingSameAsShippingVar, CheckoutStep, useCheckoutSteps } from '~hooks/checkout';
import { useResponseHandler } from '~hooks/useResponseHandler';
import { transformAddressForDisplay } from '~lib/address';
import { useTranslation } from '~lib/createI18n';
import Heading from '../../atoms/Heading/Heading';
import CheckoutStepWrapper from '../../templates/CheckoutStepWrapper/CheckoutStepWrapper';

type Props = {
  checkoutId: string;
  customer?: Customer;
  shippingAddress?: Address;
  countries?: SelectElementOptionProps[];
};

export const ShippingAddressStep: FunctionComponent<Props> = ({
  checkoutId,
  countries = [],
  customer,
  shippingAddress
}) => {
  const { t } = useTranslation('commerce');
  const {
    currentCheckoutStep,
    currentLocalCustomerEmail,
    billingSameAsShipping,
    setCurrentCheckoutStep,
    goToNextCheckoutStep
  } = useCheckoutSteps();
  const responseHandlers = useResponseHandler<
    SetCheckoutShippingAddressMutation,
    SetCheckoutShippingAddressMutationVariables
  >({}, 'commerce', undefined, () => {
    goToNextCheckoutStep();
  });
  const [setShippingAddress, { loading }] = useSetCheckoutShippingAddressMutation(responseHandlers);

  return (
    <CheckoutStepWrapper
      name={CheckoutStep.ShippingAddress}
      heading={<Heading level={2}>{t('Checkout.ShippingAddressForm')}</Heading>}
      visible={currentCheckoutStep === CheckoutStep.ShippingAddress}
      preview={
        shippingAddress ? <StyledAddress address={transformAddressForDisplay(shippingAddress, countries)} /> : null
      }
      onEditCallback={() => setCurrentCheckoutStep(CheckoutStep.ShippingAddress)}
    >
      <Box className="checkout-shipping-section">
        <StyledShippingAddressForm
          fieldsConfigOverrides={[
            {
              name: 'country',
              options: countries
            }
          ]}
          defaultValues={shippingAddress}
          isLoading={loading}
          onSubmit={values => {
            if (values && values.address) {
              const { shipping } = values.address;
              const email = customer?.email ?? currentLocalCustomerEmail;
              setShippingAddress({
                variables: { checkoutId, address: { ...shipping, email } }
              });
            }
          }}
        />
      </Box>
      <Box className="checkout-use-shipping-for-billing" my={4}>
        <Label>
          <Checkbox
            defaultChecked={billingSameAsShipping}
            onChange={e => {
              billingSameAsShippingVar(e.currentTarget.checked);
            }}
          />
          {t('Checkout.UseShippingForBilling')}
        </Label>
      </Box>
    </CheckoutStepWrapper>
  );
};
