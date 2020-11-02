import React, { FunctionComponent } from 'react';
import CmsArticle from '../../organisms/CmsArticle/CmsArticle';
import DocumentTitle from '../../DocumentTitle';
import { PageProps } from '../types';
import { CmsArticlePageFragmentFragment } from '~hooks/apollo';

export const CmsArticlePage: FunctionComponent<PageProps> = ({ queryResult }) => {
  const page = queryResult.data?.routeByPath?.page as CmsArticlePageFragmentFragment;

  return (
    <>
      <DocumentTitle title={page.cmsArticle?.title ?? ''} />
      <CmsArticle articleData={page.cmsArticle} />
    </>
  );
};

export default CmsArticlePage;
