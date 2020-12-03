import { EmailAddressFormValues, EmailAddressForm } from '@inviqa/viper-ui-commerce';
import React, { FunctionComponent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Address,
  Customer,
  SetCheckoutShippingAddressMutation,
  SetCheckoutShippingAddressMutationVariables,
  useSetCheckoutShippingAddressMutation
} from '~hooks/apollo';
import { CheckoutStep, currentLocalCustomerEmailVar, useCheckoutSteps } from '~hooks/checkout';
import { useResponseHandler } from '~hooks/useResponseHandler';
import Heading from '../../atoms/Heading/Heading';
import CheckoutStepWrapper from '../../templates/CheckoutStepWrapper/CheckoutStepWrapper';

type Props = {
  checkoutId: string;
  customer?: Customer;
  shippingAddress?: Address;
};

export const CustomerStep: FunctionComponent<Props> = ({ checkoutId, customer, shippingAddress }) => {
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
    successCallback: () => {
      goToNextCheckoutStep();
    }
  });
  const [setShippingAddress, { loading }] = useSetCheckoutShippingAddressMutation(responseHandlers);

  const onSubmit = useCallback(
    (values: EmailAddressFormValues) => {
      /**
       * We store the email locally so we can submit it when they fill in shipping address.
       * If they have filled in a shipping address, we can save it directly.
       */
      currentLocalCustomerEmailVar(values['email-address']);

      if (shippingAddress) {
        const { __typename, ...rest } = shippingAddress;
        setShippingAddress({
          variables: { checkoutId, address: { ...rest, email: values['email-address'] } }
        });
      } else {
        // no need to load here as it's a "fake" progression - we don't save shipping address yet
        goToNextCheckoutStep();
      }
    },
    [setShippingAddress, goToNextCheckoutStep, checkoutId, shippingAddress]
  );

  const onEdit = useCallback(() => {
    setCurrentCheckoutStep(CheckoutStep.Customer);
  }, [setCurrentCheckoutStep]);

  return (
    <CheckoutStepWrapper
      name={CheckoutStep.Customer}
      heading={<Heading level={2}>{t('Checkout.Customer')}</Heading>}
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
