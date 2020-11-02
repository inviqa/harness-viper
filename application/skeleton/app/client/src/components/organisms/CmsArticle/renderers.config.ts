import { FunctionComponent } from 'react';
import { FieldProps } from '../../molecules/Fields/Utils';
import { fieldRenderers as defaultFieldRenderers } from '../../molecules/FieldRenderer/default-field-renderers.config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fieldRenderers: Record<string, FunctionComponent<FieldProps<any>>> = {
  ...defaultFieldRenderers
};
