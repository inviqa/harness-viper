import React from 'react';
import CmsBasicContent from './CmsBasicContent';
import data from '../../pages/CmsBasicContent/mock.json';

export default {
  component: [CmsBasicContent],
  title: 'Organisms/CmsBasicContent'
};

export const withData = () => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <CmsBasicContent basicContentData={data.routeByPath.page.cmsBasicContent as any} />
);
