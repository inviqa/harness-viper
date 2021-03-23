import React, { FunctionComponent } from 'react';
import { DefaultFieldWrapper, DefaultLabelWrapper, FieldProps, DefaultValueWrapper } from './Wrappers';

export const Field: FunctionComponent<FieldProps<string>> = ({ component, value, label, displayLabel, inline }) => (
  <DefaultFieldWrapper
    component={component}
    inline={inline}
    displayLabel={displayLabel}
    label={
      <DefaultLabelWrapper component={component} inline={inline}>
        {label}
      </DefaultLabelWrapper>
    }
  >
    <DefaultValueWrapper component={component}>{value}</DefaultValueWrapper>
  </DefaultFieldWrapper>
);
