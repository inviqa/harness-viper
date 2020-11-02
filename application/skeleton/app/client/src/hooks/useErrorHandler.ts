import { ApolloError } from '@apollo/client';
import { useCallback } from 'react';
import type { Namespace } from 'react-i18next';
import { useTranslation } from '~lib/createI18n';
import { MessageType } from '~types/message';
import { MessageAction, MessageActionType, useMessages } from './useMessages';

export const createError = (name: string, message: string) => ({
  name,
  message,
  graphQLErrors: [],
  networkError: null,
  extraInfo: null
});

export function useErrorHandler(i18nNs: Namespace = 'common') {
  const { t } = useTranslation(i18nNs);
  const { dispatch } = useMessages();

  return useCallback(
    /**
     * @param context Any additional context you want to pass with the translated message that's not related to the query. E.g. product name
     * @param apolloError The actual error caused by the query or mutation
     */
    (context: Record<string, string>, apolloError: ApolloError) => {
      const { networkError, graphQLErrors = [] } = apolloError;
      const message: MessageAction = {
        type: MessageActionType.AddMessage,
        payload: {
          id: `error-${Object.values(context).join('-')}`,
          type: MessageType.Error,
          content: ''
        }
      } as const;

      if (networkError || graphQLErrors.length === 0) {
        message.payload.content = t('Messages.UnexpectedError', context);
        dispatch(message);
      }

      graphQLErrors.forEach((error, idx) => {
        message.payload.id += `-${error.path?.join('-')}-${idx}`;

        if (error.extensions?.code) {
          message.payload.content = t([`Messages.Errors.${error.extensions.code}`, 'Messages.UnexpectedError'], {
            ...context,
            ...(error.extensions.messageData ?? {})
          });
        } else {
          message.payload.content = t('Messages.UnexpectedError', context);
        }

        dispatch(message);
      });
    },
    [t, dispatch]
  );
}
