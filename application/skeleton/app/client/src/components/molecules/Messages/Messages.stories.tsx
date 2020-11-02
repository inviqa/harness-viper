import React from 'react';
import Messages, { Props } from './Messages';
import { MessageType } from '~types/message';

export default {
  component: Messages,
  title: 'Molecules/Messages',
  argTypes: { dismissMessage: { action: 'dismissMessage' } },
  args: {
    messages: [
      {
        content: "It's dangerous to go alone! take this.",
        type: MessageType.Warning,
        id: 'message-1'
      },
      {
        content: 'Hey! Listen!',
        type: MessageType.Success,
        id: 'message-2'
      },
      {
        content: 'I am Error.',
        type: MessageType.Error,
        id: 'message-3'
      }
    ]
  }
};

export const list = (args: Props) => <Messages {...args} />;
