import React, { FunctionComponent } from 'react';
import { CmsBasicContent as CmsBasicContentData } from '~hooks/apollo';
import { LayoutRenderer } from '../../utility/LayoutRenderer/LayoutRenderer/LayoutRenderer';
import { fieldRenderers, fixedLayoutItems } from './renderers.config';

export const CmsBasicContent: FunctionComponent<{
  basicContentData?: CmsBasicContentData | null;
}> = ({ basicContentData }) => {
  if (!basicContentData) {
    return null;
  }
  return <LayoutRenderer fieldRenderers={fieldRenderers} data={basicContentData} layoutItems={fixedLayoutItems} />;
};

export default CmsBasicContent;
