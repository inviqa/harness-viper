import React, { FunctionComponent } from 'react';
import { CmsUser } from '~hooks/apollo';
import { DefaultFieldWrapper, DefaultLabelWrapper, FieldProps, DefaultValueWrapper } from './Wrappers';

export const AuthorField: FunctionComponent<FieldProps<CmsUser>> = ({
  component,
  value,
  label,
  displayLabel,
  inline
}) => (
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
    <DefaultValueWrapper component={component}>{value.name || 'Anonymous'}</DefaultValueWrapper>
  </DefaultFieldWrapper>
);
