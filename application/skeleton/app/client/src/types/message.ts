import type { ReactNode } from 'react';

export enum MessageType {
  Success = 'success',
  Error = 'error',
  Warning = 'warning'
}

export type Message = {
  type: MessageType;
  id: string;
  content: ReactNode;
};
