import React, { FunctionComponent } from 'react';
import { DefaultFieldWrapper, DefaultLabelWrapper, FieldProps, DefaultValueWrapper } from './Wrappers';

export const TitleField: FunctionComponent<FieldProps<string>> = ({
  component,
  value,
  label,
  displayLabel,
  inline
}) => {
  return (
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
        <h1>{value}</h1>
      </DefaultValueWrapper>
    </DefaultFieldWrapper>
  );
};
