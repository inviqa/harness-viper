/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import CmsLayoutRenderer from './CmsLayoutRenderer';
import data from '../../pages/CmsArticle/mock.json';
import { fieldRenderers } from '../../molecules/FieldRenderer/default-field-renderers.config';

export default {
  component: [CmsLayoutRenderer],
  title: 'Organisms/Content/CmsLayoutRenderer'
};

export const cmsLayoutRenderer = () => (
  <CmsLayoutRenderer
    fieldRenderers={fieldRenderers}
    data={data.routeByPath.page.cmsArticle as any}
    layoutItems={data.routeByPath.page.cmsArticle.layout.items as any}
  />
);
