import React, { FunctionComponent } from 'react';
import ProductPage from './pages/Product/ProductPage';
import CmsArticlePage from './pages/CmsArticle/CmsArticlePage';
import { PageProps } from './pages';
import CategoryPage from './pages/Category/CategoryPage';

export const PageDistribution: FunctionComponent<PageProps> = ({ queryResult }) => {
  let PageComponent: FunctionComponent<PageProps>;
  switch (queryResult.data?.routeByPath?.page?.type) {
    case 'CmsArticlePage':
      PageComponent = CmsArticlePage;
      break;
    case 'ProductPage':
      PageComponent = ProductPage;
      break;
    case 'CategoryPage':
      PageComponent = CategoryPage;
      break;
    default:
      return <></>;
  }
  return <PageComponent queryResult={queryResult} />;
};

export default PageDistribution;
