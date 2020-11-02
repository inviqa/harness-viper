import React, { FunctionComponent } from 'react';
import Heading from '../../atoms/Heading/Heading';
import { DefaultFieldWrapper, DefaultLabelWrapper, FieldProps, DefaultValueWrapper } from './Utils';

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
        <Heading level={1}>{value}</Heading>
      </DefaultValueWrapper>
    </DefaultFieldWrapper>
  );
};
