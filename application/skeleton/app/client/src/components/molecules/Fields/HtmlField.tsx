import React, { FunctionComponent } from 'react';
import { CmsHtmlField } from '~hooks/apollo';
import { parseHtml } from '~lib/parseHtml';
import { DefaultFieldWrapper, DefaultLabelWrapper, FieldProps, DefaultValueWrapper } from './Utils';

export const HtmlField: FunctionComponent<FieldProps<CmsHtmlField>> = ({
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
    <DefaultValueWrapper component={component}>{parseHtml(value.html)}</DefaultValueWrapper>
  </DefaultFieldWrapper>
);
