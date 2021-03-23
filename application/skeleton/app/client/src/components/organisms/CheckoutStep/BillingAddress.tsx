import {
  Address as UIAddress,
  BillingAddressForm,
  BillingAddressFormProps,
  BillingAddressFormValues
} from '@inviqa/viper-ui';
import { useResponseHandler } from '@inviqa/viper-react-hooks';
import isEqual from 'react-fast-compare';
import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Address,
  CheckoutInput,
  SetCheckoutBillingAddressMutation,
  SetCheckoutBillingAddressMutationVariables,
  useSetCheckoutBillingAddressMutation
} from '~hooks/apollo';
import { billingSameAsShippingVar, CheckoutStep, currentCheckoutStepVar, useCheckoutSteps } from '~hooks/checkout';
import { transformAddressForDisplay } from '~lib/address';
import CheckoutStepWrapper from './CheckoutStepWrapper';
import { setOrderId } from '~hooks/cart';

type Props = {
  checkoutInput: CheckoutInput;
  billingAddress?: Address;
  shippingAddress?: Address;
  countries?: BillingAddressFormProps['countries'];
};

export const BillingAddressStep: FunctionComponent<Props> = ({
  checkoutInput,
  countries = [],
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
    successCallback: (data: SetCheckoutBillingAddressMutation) => {
      setOrderId(data.setCheckoutBillingAddress.order?.id || null);
      if (!billingSameAsShipping) {
        goToNextCheckoutStep();
      }
    }
  });
  const [setBillingAddress, { loading }] = useSetCheckoutBillingAddressMutation(responseHandlers);

  useEffect(() => {
    if (shippingAddress && billingSameAsShipping && !isEqual(billingAddress, shippingAddress)) {
      const { __typename, ...address } = shippingAddress;
      setBillingAddress({ variables: { checkoutInput, address } });
    }
  }, [checkoutInput, shippingAddress, billingSameAsShipping, setBillingAddress, billingAddress]);

  useEffect(() => {
    if (billingSameAsShipping && currentCheckoutStep === CheckoutStep.BillingAddress) {
      currentCheckoutStepVar(CheckoutStep.ShippingMethod);
    }
  }, [billingSameAsShipping, currentCheckoutStep, goToNextCheckoutStep]);

  const onSubmit = useCallback(
    (address: BillingAddressFormValues) => {
      setBillingAddress({
        variables: { checkoutInput, address }
      });
    },
    [setBillingAddress, checkoutInput]
  );

  const onEdit = useCallback(() => {
    billingSameAsShippingVar(false);
    setCurrentCheckoutStep(CheckoutStep.BillingAddress);
  }, [setCurrentCheckoutStep]);

  return (
    <CheckoutStepWrapper
      name={CheckoutStep.BillingAddress}
      heading={<h2>{t('Checkout.BillingAddressForm')}</h2>}
      visible={currentCheckoutStep === CheckoutStep.BillingAddress}
      preview={billingAddress ? <UIAddress address={transformAddressForDisplay(billingAddress, countries)} /> : null}
      onEditCallback={onEdit}
    >
      <div className="checkout-billing-section">
        <BillingAddressForm
          countries={countries}
          defaultValues={billingAddress}
          isLoading={loading}
          onSubmit={onSubmit}
        />
      </div>
    </CheckoutStepWrapper>
  );
};
