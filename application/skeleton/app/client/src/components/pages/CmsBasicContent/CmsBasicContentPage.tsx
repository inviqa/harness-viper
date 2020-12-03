import React, { FunctionComponent } from 'react';
import CmsBasicContent from '../../organisms/CmsBasicContent/CmsBasicContent';
import DocumentTitle from '../../DocumentTitle';
import { PageProps } from '../types';
import { CmsPagePageFragmentFragment } from '~hooks/apollo';

export const CmsBasicContentPage: FunctionComponent<PageProps> = ({ queryResult }) => {
  const page = queryResult.data?.routeByPath?.page as CmsPagePageFragmentFragment;

  return (
    <>
      <DocumentTitle title={page.cmsBasicContent?.title ?? ''} />
      <CmsBasicContent basicContentData={page.cmsBasicContent} />
    </>
  );
};

export default CmsBasicContentPage;
