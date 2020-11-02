/* @jsx jsx */
import { useReactiveVar } from '@apollo/client';
import { FunctionComponent, HTMLAttributes } from 'react';
import { jsx, Alert, Close } from 'theme-ui';
import { MessageActionType, messagesVar, useMessages } from '~hooks/useMessages';
import { useTranslation } from '~lib/createI18n';

export type Props = HTMLAttributes<HTMLElement>;

const Messages: FunctionComponent<Props> = props => {
  const { t } = useTranslation();
  const messages = useReactiveVar(messagesVar);
  const { dispatch } = useMessages();
  const currentMessage = messages.length ? messages[messages.length - 1] : null;

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
