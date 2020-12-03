/* @jsx jsx */
import { useReactiveVar } from '@apollo/client';
import { FunctionComponent, HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { jsx, Alert, Close } from 'theme-ui';
import { MessageActionType, messagesVar, useMessages } from '~hooks/useMessages';

export type Props = HTMLAttributes<HTMLElement> & { location?: string };

const Messages: FunctionComponent<Props> = ({ location, ...props }) => {
  const { t } = useTranslation();
  const messages = useReactiveVar(messagesVar);
  const { dispatch } = useMessages();
  const localMessages = messages.filter(message => (!location && !message.location) || location === message.location);
  const currentMessage = localMessages.length ? localMessages[localMessages.length - 1] : null;

  return currentMessage ? (
    <Alert key={currentMessage.id} variant={currentMessage.type.toString()} sx={{ mb: 2 }} {...props}>
      {currentMessage.content}
      <Close
        sx={{ ml: 'auto' }}
        aria-label={t('Messages.Dismiss')}
        onClick={() => dispatch({ type: MessageActionType.RemoveMessage, payload: currentMessage.id })}
      />
    </Alert>
  ) : null;
};

export default Messages;
