import React from 'react';
import CmsArticle from './CmsArticle';
import data from '../../pages/CmsArticle/mock.json';

export default {
  component: [CmsArticle],
  title: 'Organisms/CmsArticle'
};

export const withData = () => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <CmsArticle articleData={data.routeByPath.page.cmsArticle as any} />
);
