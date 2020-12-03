import type { ApolloError } from '@apollo/client';
import type { GraphQLError } from 'graphql';
import { useCallback } from 'react';
import { ResponseHandlerReturn, ResponseHandlerOptions, useResponseHandler } from '~hooks/useResponseHandler';
import { resetCartId } from './useCartId';

const CART_NOT_FOUND_ERRORS = ['NO_CHECKOUT_FOUND_ERROR', 'NO_CART_FOUND_ERROR'];

const hasCartNotFoundError = (graphQlErrors: readonly GraphQLError[] = []) =>
  graphQlErrors.find(error => CART_NOT_FOUND_ERRORS.includes(error.extensions?.code));

export function useCartResponseHandler<Data, Variables>({
  context,
  i18nNs = 'commerce',
  createSuccessAction,
  createErrorAction,
  successCallback,
  errorCallback
}: ResponseHandlerOptions<Data> = {}): ResponseHandlerReturn<Data, Variables> {
  const handleError = useCallback(
    (errorContext: Record<string, string>, error: ApolloError) => {
      if (hasCartNotFoundError(error.graphQLErrors)) {
        resetCartId();
      }

      errorCallback?.(errorContext, error);
    },
    [errorCallback]
  );

  const errorActionCreator = useCallback(
    (action, error) => {
      if (hasCartNotFoundError(error.graphQLErrors)) {
        return null;
      }

      return createErrorAction ? createErrorAction(action, error) : action;
    },
    [createErrorAction]
  );

  const responseHandler = useResponseHandler<Data, Variables>({
    context,
    i18nNs,
    createSuccessAction,
    createErrorAction: errorActionCreator,
    successCallback,
    errorCallback: handleError
  });

  return responseHandler;
}
