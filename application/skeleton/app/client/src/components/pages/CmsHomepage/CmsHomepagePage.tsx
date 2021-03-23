import React, { FunctionComponent } from 'react';
import CmsHomepage from '../../organisms/CmsHomepage/CmsHomepage';
import { PageProps } from '../types';
import { CmsHomepagePageFragmentFragment } from '~hooks/apollo';

export const CmsHomepagePage: FunctionComponent<PageProps> = ({ queryResult }) => {
  const page = queryResult.data?.routeByPath?.page as CmsHomepagePageFragmentFragment;

  return <CmsHomepage homepageData={page.homePage} />;
};

export default CmsHomepagePage;
