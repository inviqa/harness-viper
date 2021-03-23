/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { LayoutRenderer } from './LayoutRenderer';
import data from '../../../pages/CmsArticle/mock.json';
import { fieldRenderers } from '../FieldRenderer/default-field-renderers.config';

export default {
  component: [LayoutRenderer],
  title: 'Utils/LayoutRenderer'
};

export const Default = () => (
  <LayoutRenderer
    fieldRenderers={fieldRenderers}
    data={data.routeByPath.page.cmsArticle as any}
    layoutItems={data.routeByPath.page.cmsArticle.layout.items as any}
  />
);
