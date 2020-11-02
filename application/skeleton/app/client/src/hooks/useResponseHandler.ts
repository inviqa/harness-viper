import type { ApolloError, MutationHookOptions } from '@apollo/client';
import { useCallback } from 'react';
import type { Namespace } from 'react-i18next';
import { useErrorHandler } from './useErrorHandler';
import { MessageAction, useMessages } from './useMessages';

/**
 * @param context Any additional context you want to pass with the translated message that's not related to the query. E.g. product name
 * @param i18nNs Namespace used for i18n translations - forwarded to error handler
 * @param createSuccessAction Create a success message from response data
 * @param successCallback Other actions to perform on success
 */
export function useResponseHandler<Data, Variables>(
  context: Record<string, string>,
  i18nNs: Namespace = 'common',
  createSuccessAction?: (data: Data) => MessageAction,
  successCallback?: (data: Data) => void
): MutationHookOptions<Data, Variables> {
  const { dispatch } = useMessages();
  const handleError = useErrorHandler(i18nNs);

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
    },
    [handleError, context]
  );

  return {
    onCompleted,
    onError
  };
}
