import { FunctionComponent } from 'react';
import { FieldProps } from '../../utility/LayoutRenderer/Fields/Wrappers';
import { fieldRenderers as defaultFieldRenderers } from '../../utility/LayoutRenderer/FieldRenderer/default-field-renderers.config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fieldRenderers: Record<string, FunctionComponent<FieldProps<any>>> = {
  ...defaultFieldRenderers
};
