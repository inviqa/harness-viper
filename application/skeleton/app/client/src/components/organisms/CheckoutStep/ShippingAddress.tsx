import {
  Address as UIAddress,
  ShippingAddressForm,
  ShippingAddressFormProps,
  ShippingAddressFormValues,
  Checkbox
} from '@inviqa/viper-ui';
import { useResponseHandler } from '@inviqa/viper-react-hooks';
import React, { FunctionComponent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Address,
  CheckoutInput,
  Customer,
  SetCheckoutShippingAddressMutation,
  SetCheckoutShippingAddressMutationVariables,
  useSetCheckoutShippingAddressMutation
} from '~hooks/apollo';
import { billingSameAsShippingVar, CheckoutStep, useCheckoutSteps } from '~hooks/checkout';
import { transformAddressForDisplay } from '~lib/address';
import CheckoutStepWrapper from './CheckoutStepWrapper';
import { setOrderId } from '~hooks/cart';

type Props = {
  checkoutInput: CheckoutInput;
  customer?: Customer;
  shippingAddress?: Address;
  countries?: ShippingAddressFormProps['countries'];
};

export const ShippingAddressStep: FunctionComponent<Props> = ({
  checkoutInput,
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
  >({
    i18nNs: 'commerce',
    successCallback: (data: SetCheckoutShippingAddressMutation) => {
      setOrderId(data.setCheckoutShippingAddress.order?.id || null);
      goToNextCheckoutStep();
    }
  });
  const [setShippingAddress, { loading }] = useSetCheckoutShippingAddressMutation(responseHandlers);

  const onSubmit = useCallback(
    (address: ShippingAddressFormValues) => {
      const email = customer?.email ?? currentLocalCustomerEmail;
      setShippingAddress({
        variables: { checkoutInput, address: { ...address, email } }
      });
    },
    [setShippingAddress, checkoutInput, currentLocalCustomerEmail, customer?.email]
  );

  const onEdit = useCallback(() => {
    setCurrentCheckoutStep(CheckoutStep.ShippingAddress);
  }, [setCurrentCheckoutStep]);

  return (
    <CheckoutStepWrapper
      name={CheckoutStep.ShippingAddress}
      heading={<h2>{t('Checkout.ShippingAddressForm')}</h2>}
      visible={currentCheckoutStep === CheckoutStep.ShippingAddress}
      preview={shippingAddress ? <UIAddress address={transformAddressForDisplay(shippingAddress, countries)} /> : null}
      onEditCallback={onEdit}
    >
      <div className="checkout-shipping-section">
        <ShippingAddressForm
          countries={countries}
          defaultValues={shippingAddress}
          isLoading={loading}
          onSubmit={onSubmit}
        />
      </div>
      <div className="checkout-use-shipping-for-billing my-4">
        <Checkbox
          defaultChecked={billingSameAsShipping}
          onChange={e => {
            billingSameAsShippingVar(e.currentTarget.checked);
          }}
          label={t('Checkout.UseShippingForBilling')}
        />
      </div>
    </CheckoutStepWrapper>
  );
};
