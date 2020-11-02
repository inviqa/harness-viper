import React, { FunctionComponent } from 'react';
import { Text } from 'theme-ui';
import { DefaultFieldWrapper, DefaultLabelWrapper, FieldProps, DefaultValueWrapper } from './Utils';

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
    <DefaultValueWrapper component={component}>
      <Text>{value}</Text>
    </DefaultValueWrapper>
  </DefaultFieldWrapper>
);
