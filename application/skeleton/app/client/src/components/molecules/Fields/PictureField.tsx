import React, { FunctionComponent } from 'react';
import { CmsImage, CmsImageVersion } from '~hooks/apollo';
import { DefaultFieldWrapper, DefaultLabelWrapper, FieldProps, DefaultValueWrapper } from './Utils';
import FullsizePicture from '../../atoms/Picture/FullsizePicture';

export const PictureField: FunctionComponent<FieldProps<CmsImage>> = ({
  component,
  value,
  label,
  displayLabel,
  inline
}) => {
  const getImageBySize = (size: string) => value.sizes.find(version => version.size === size) as CmsImageVersion;
  const mobile = getImageBySize('mobile');
  const mobileRetina = getImageBySize('mobileRetina');
  const desktop = getImageBySize('desktop');
  const desktopRetina = getImageBySize('desktopRetina');
  const sources = [
    {
      srcSet: `${mobile.url} 1x, ${mobileRetina.url} 2x`,
      media: `(max-width: ${mobile.width}px)`
    },
    {
      srcSet: `${desktop.url} 1x, ${desktopRetina.url} 2x`
    }
  ];
  // TODO: Eliminate style tag. FullsizePicture only works with style tag on the wrapper  :(
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
        <div style={{ height: '60vh' }}>
          <FullsizePicture sources={sources} alt={value.alt} />
        </div>
      </DefaultValueWrapper>
    </DefaultFieldWrapper>
  );
};
