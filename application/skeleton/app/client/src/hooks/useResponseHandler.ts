import type { ApolloError, MutationHookOptions } from '@apollo/client';
import { useCallback } from 'react';
import type { Namespace } from 'react-i18next';
import { useErrorHandler } from './useErrorHandler';
import { MessageAction, useMessages } from './useMessages';

export type ResponseHandlerOptions<Data> = {
  context?: Record<string, string>;
  i18nNs?: Namespace;
  createSuccessAction?: (data: Data) => MessageAction;
  createErrorAction?: (defaultErrorMessageAction: MessageAction, error: ApolloError) => MessageAction | null;
  successCallback?: (data: Data) => void;
  errorCallback?: (context: Record<string, string>, error: ApolloError) => void;
};

export type ResponseHandlerReturn<Data, Variables> = MutationHookOptions<Data, Variables>;

export function useResponseHandler<Data, Variables>({
  context = {},
  i18nNs = 'common',
  createSuccessAction,
  createErrorAction,
  successCallback,
  errorCallback
}: ResponseHandlerOptions<Data> = {}): ResponseHandlerReturn<Data, Variables> {
  const { dispatch } = useMessages();
  const handleError = useErrorHandler(i18nNs, createErrorAction);

  const onCompleted = useCallback(
    (data: Data) => {
      if (createSuccessAction) dispatch(createSuccessAction(data));
      successCallback?.(data);
    },
    [dispatch, createSuccessAction, successCallback]
  );

  const onError = useCallback(
    (error: ApolloError) => {
      handleError(context, error);
      errorCallback?.(context, error);
    },
    [handleError, context, errorCallback]
  );

  return {
    onCompleted,
    onError
  };
}
