import React, { FunctionComponent } from 'react';
import ProductContent from '../../organisms/ProductContent/ProductContent';
import DocumentTitle from '../../DocumentTitle';
import ProductSchema from '../../atoms/ProductSchema/ProductSchema';
import { PageProps } from '../types';
import { ProductPageFragmentFragment } from '~hooks/apollo';

export const ProductPage: FunctionComponent<PageProps> = ({ queryResult }) => {
  const page = queryResult.data?.routeByPath?.page as ProductPageFragmentFragment;

  return (
    <>
      <DocumentTitle title={page.product.title} />
      <ProductSchema {...page.product} />
      <ProductContent as="main" {...page.product} />
    </>
  );
};

export default ProductPage;
