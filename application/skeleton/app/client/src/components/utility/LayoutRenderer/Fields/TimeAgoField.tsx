import React, { FunctionComponent } from 'react';
import { TimeAgo } from '@inviqa/viper-ui';
import { DefaultFieldWrapper, DefaultLabelWrapper, FieldProps, DefaultValueWrapper } from './Wrappers';

export const TimeAgoField: FunctionComponent<FieldProps<string>> = ({
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
        <span>
          <TimeAgo datetime={value} locale="en_GB" />
        </span>
      </DefaultValueWrapper>
    </DefaultFieldWrapper>
  );
};
