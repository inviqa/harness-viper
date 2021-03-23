import { EmailAddressFormValues, EmailAddressForm } from '@inviqa/viper-ui';
import { useResponseHandler } from '@inviqa/viper-react-hooks';
import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Address,
  CheckoutInput,
  Customer,
  SetCheckoutShippingAddressMutation,
  SetCheckoutShippingAddressMutationVariables,
  useSetCheckoutShippingAddressMutation
} from '~hooks/apollo';
import { CheckoutStep, currentLocalCustomerEmailVar, useCheckoutSteps } from '~hooks/checkout';
import CheckoutStepWrapper from './CheckoutStepWrapper';
import { setOrderId } from '~hooks/cart';

type Props = {
  checkoutInput: CheckoutInput;
  customer?: Customer;
  shippingAddress?: Address;
};

export const CustomerStep: FunctionComponent<Props> = ({ checkoutInput, customer, shippingAddress }) => {
  const { t } = useTranslation('commerce');
  const {
    currentCheckoutStep,
    currentLocalCustomerEmail,
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

  useEffect(() => {
    const customerEmail = customer?.email || currentLocalCustomerEmail;
    if (!customerEmail && currentCheckoutStep !== CheckoutStep.Customer) {
      setCurrentCheckoutStep(CheckoutStep.Customer);
    }
  }, [customer?.email, currentLocalCustomerEmail, currentCheckoutStep, setCurrentCheckoutStep]);

  const onSubmit = useCallback(
    (values: EmailAddressFormValues) => {
      /**
       * We store the email locally so we can submit it when they fill in shipping address.
       * If they have filled in a shipping address, we can save it directly.
       */
      currentLocalCustomerEmailVar(values.emailAddress);

      if (shippingAddress) {
        const { __typename, ...rest } = shippingAddress;
        setShippingAddress({
          variables: { checkoutInput, address: { ...rest, email: values.emailAddress } }
        });
      } else {
        // no need to load here as it's a "fake" progression - we don't save shipping address yet
        goToNextCheckoutStep();
      }
    },
    [setShippingAddress, goToNextCheckoutStep, checkoutInput, shippingAddress]
  );

  const onEdit = useCallback(() => {
    setCurrentCheckoutStep(CheckoutStep.Customer);
  }, [setCurrentCheckoutStep]);

  return (
    <CheckoutStepWrapper
      name={CheckoutStep.Customer}
      heading={<h2>{t('Checkout.Customer')}</h2>}
      visible={currentCheckoutStep === CheckoutStep.Customer}
      preview={customer?.email ?? currentLocalCustomerEmail}
      onEditCallback={onEdit}
    >
      <EmailAddressForm
        currentEmailAddress={customer?.email ?? currentLocalCustomerEmail}
        isLoading={loading}
        onSubmit={onSubmit}
      />
    </CheckoutStepWrapper>
  );
};
