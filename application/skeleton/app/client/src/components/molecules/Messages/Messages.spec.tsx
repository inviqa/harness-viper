import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { messagesVar } from '~hooks/useMessages';
import { MessageType } from '~types/message';
import Messages from './Messages';

describe(Messages, () => {
  describe('When: no messages are passed', () => {
    it('Then: nothing is rendered', () => {
      messagesVar([]);
      const { container } = render(<Messages />);
      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('When: messages are passed', () => {
    beforeEach(() => {
      messagesVar([
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
      ]);
    });

    afterEach(() => {
      act(() => {
        messagesVar([]);
      });
    });

    it('Then: it renders the last message', () => {
      const { getByText, queryByText } = render(<Messages />);
      expect(getByText(/I am Error/)).toBeInTheDocument();
      expect(queryByText(/Hey! Listen!/)).not.toBeInTheDocument();
      expect(queryByText(/It's dangerous to go alone! take this/)).not.toBeInTheDocument();
    });

    it('And: it renders a close button for the message', () => {
      const { getByLabelText } = render(<Messages />);
      expect(getByLabelText('Messages.Dismiss')).toBeInTheDocument();
    });

    it('And: it allows messages to be dismissed', () => {
      const dismissMessage = jest.fn();
      const { getByLabelText, getByText, queryByText } = render(<Messages />);
      expect(dismissMessage).not.toHaveBeenCalled();
      userEvent.click(getByLabelText('Messages.Dismiss'));
      expect(messagesVar()).toEqual([
        {
          content: "It's dangerous to go alone! take this.",
          type: MessageType.Warning,
          id: 'message-1'
        },
        {
          content: 'Hey! Listen!',
          type: MessageType.Success,
          id: 'message-2'
        }
      ]);
      expect(getByText(/Hey! Listen!/)).toBeInTheDocument();
      expect(queryByText(/I am Error/)).not.toBeInTheDocument();
    });
  });
});
