import React from 'react';
import ProductBanner from './ProductBanner';
import data from '../../pages/CmsHomepage/mock.json';

export default {
  component: [ProductBanner],
  title: 'Organisms/ProductBanner'
};

export const withData = () => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <ProductBanner {...(data.routeByPath.page.homePage.productBanner as any)} />
);
