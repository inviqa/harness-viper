import React from 'react';
import CmsHomepage from './CmsHomepage';
import data from '../../pages/CmsHomepage/mock.json';

export default {
  component: [CmsHomepage],
  title: 'Organisms/CmsHomepage'
};

export const withData = () => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <CmsHomepage homepageData={data.routeByPath.page.homePage as any} />
);
