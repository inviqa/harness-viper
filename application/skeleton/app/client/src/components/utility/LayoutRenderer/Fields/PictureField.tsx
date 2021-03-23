import React, { FunctionComponent } from 'react';
import { BannerPicture } from '@inviqa/viper-ui';
import { CmsImage } from '~hooks/apollo';
import { DefaultFieldWrapper, DefaultLabelWrapper, FieldProps, DefaultValueWrapper } from './Wrappers';

export const PictureField: FunctionComponent<FieldProps<CmsImage>> = ({
  component,
  value,
  label,
  displayLabel,
  inline
}) => {
  const { sizes, alt } = value;
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
        <BannerPicture sources={sizes} alt={alt} />
      </DefaultValueWrapper>
    </DefaultFieldWrapper>
  );
};
