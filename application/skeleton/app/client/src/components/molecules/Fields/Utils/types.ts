import { FunctionComponent } from 'react';

export interface FieldProps<ValueT = unknown> {
  component: string;
  value: ValueT;
  label: string;
  displayLabel?: boolean;
  inline?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RendererConfig = Record<string, FunctionComponent<FieldProps<any>>>;
