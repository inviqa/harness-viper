import { makeVar, useApolloClient, useReactiveVar } from '@apollo/client';
import { useCallback, useEffect } from 'react';

const CHECKOUT_EMAIL_KEY = 'viper-checkout-email';
const CHECKOUT_CURRENT_STEP_KEY = 'viper-checkout-current-step';

export enum CheckoutStep {
  Customer = 'customer',
  ShippingAddress = 'shipping-address',
  BillingAddress = 'billing-address',
  ShippingMethod = 'shipping-method',
  PaymentMethod = 'payment-method'
}

export const currentCheckoutStepVar = makeVar<CheckoutStep | undefined>(undefined);
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

const setCurrentCheckoutStep = (step?: CheckoutStep) => {
  currentCheckoutStepVar(step);
};

export function useCheckoutSteps() {
  const apolloClient = useApolloClient();
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

  useEffect(() => {
    const storedCurrentStep = localStorage.getItem(CHECKOUT_CURRENT_STEP_KEY) || CheckoutStep.Customer;

    currentCheckoutStepVar(storedCurrentStep as CheckoutStep);
  }, []);

  useEffect(() => {
    if (currentCheckoutStep) {
      localStorage.setItem(CHECKOUT_CURRENT_STEP_KEY, currentCheckoutStep);
    }
  }, [currentCheckoutStep]);

  useEffect(() => {
    const storedEmail = localStorage.getItem(CHECKOUT_EMAIL_KEY);

    if (storedEmail) {
      currentLocalCustomerEmailVar(storedEmail);
    }
  }, []);

  useEffect(() => {
    if (currentLocalCustomerEmail) {
      localStorage.setItem(CHECKOUT_EMAIL_KEY, currentLocalCustomerEmail);
    }
  }, [currentLocalCustomerEmail]);

  // TODO: combine this with resetCartId from useCartId file - maybe that file needs renaming?
  const clearCheckout = useCallback(() => {
    currentLocalCustomerEmailVar(undefined);
    localStorage.removeItem(CHECKOUT_EMAIL_KEY);
    currentCheckoutStepVar(undefined);
    localStorage.removeItem(CHECKOUT_CURRENT_STEP_KEY);
    apolloClient.cache.gc();
  }, [apolloClient]);

  return {
    currentCheckoutStep,
    currentLocalCustomerEmail,
    billingSameAsShipping,
    setCurrentCheckoutStep,
    goToNextCheckoutStep,
    clearCheckout
  };
}
