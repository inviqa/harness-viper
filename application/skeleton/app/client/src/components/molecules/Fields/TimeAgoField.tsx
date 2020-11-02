import React, { FunctionComponent } from 'react';
import TimeAgo from 'timeago-react';
import { Text } from 'theme-ui';
import { DefaultFieldWrapper, DefaultLabelWrapper, FieldProps, DefaultValueWrapper } from './Utils';

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
        <Text>
          <TimeAgo datetime={value} locale="en_GB" />
        </Text>
      </DefaultValueWrapper>
    </DefaultFieldWrapper>
  );
};
