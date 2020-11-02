import { makeVar, useReactiveVar } from '@apollo/client';
import { useCallback } from 'react';

export enum CheckoutStep {
  Customer = 'customer',
  ShippingAddress = 'shipping-address',
  BillingAddress = 'billing-address',
  ShippingMethod = 'shipping-method',
  PaymentMethod = 'payment-method'
}

export const currentCheckoutStepVar = makeVar(CheckoutStep.Customer);
export const currentLocalCustomerEmailVar = makeVar<string | undefined>(undefined);
export const billingSameAsShippingVar = makeVar(true);

// This could be a useless attempt at making the checkout flexible, at the moment it is not truly flexible due to the need for shipping address to appear after Customer & before Billing Address
const stepOrder = [
  CheckoutStep.Customer,
  CheckoutStep.ShippingAddress,
  CheckoutStep.BillingAddress,
  CheckoutStep.ShippingMethod,
  CheckoutStep.PaymentMethod
];

const setCurrentCheckoutStep = (step: CheckoutStep) => {
  currentCheckoutStepVar(step);
};

export function useCheckoutSteps() {
  const currentCheckoutStep = useReactiveVar(currentCheckoutStepVar);
  const currentLocalCustomerEmail = useReactiveVar(currentLocalCustomerEmailVar);
  const billingSameAsShipping = useReactiveVar(billingSameAsShippingVar);

  const goToNextCheckoutStep = useCallback(() => {
    const currentIdx = stepOrder.findIndex(step => step === currentCheckoutStep);

    // TODO: should probably handle overflows here
    if (currentIdx < stepOrder.length - 1) {
      setCurrentCheckoutStep(stepOrder[currentIdx + 1]);
    }
  }, [currentCheckoutStep]);

  return {
    currentCheckoutStep,
    currentLocalCustomerEmail,
    billingSameAsShipping,
    setCurrentCheckoutStep,
    goToNextCheckoutStep
  };
}
