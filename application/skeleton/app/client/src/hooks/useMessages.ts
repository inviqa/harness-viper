import { makeVar } from '@apollo/client';
import { Message } from '~types/message';

export enum MessageActionType {
  AddMessage = 'AddMessage',
  RemoveMessage = 'RemoveMessage',
  ClearAllMessages = 'ClearAllMessages'
}

export type MessageAction =
  | {
      type: MessageActionType.AddMessage;
      payload: Message;
    }
  | { type: MessageActionType.RemoveMessage; payload: Message['id'] }
  | { type: MessageActionType.ClearAllMessages };

export const messagesVar = makeVar<Message[]>([]);

const reducer = (state: Message[], action: MessageAction) => {
  switch (action.type) {
    case MessageActionType.AddMessage:
      return [...state, action.payload];
    case MessageActionType.RemoveMessage:
      return state.filter(({ id }) => id !== action.payload);
    case MessageActionType.ClearAllMessages:
      return state.length === 0 ? state : [];
    default:
      return state;
  }
};

export function useMessages() {
  const dispatch = (action: MessageAction) => {
    const messages = messagesVar();
    const newState = reducer(messagesVar(), action);

    if (newState !== messages) {
      messagesVar(newState);
    }
  };

  return { dispatch };
}
