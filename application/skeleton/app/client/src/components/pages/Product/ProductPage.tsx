import React, { FunctionComponent } from 'react';
import { ProductPageFragmentFragment } from '~hooks/apollo';
import ProductContent from '../../organisms/ProductContent/ProductContent';
import DocumentTitle from '../../DocumentTitle';
import ProductSchema from '../../atoms/ProductSchema/ProductSchema';
import { PageProps } from '../types';

export const ProductPage: FunctionComponent<PageProps> = ({ queryResult }) => {
  const page = queryResult.data?.routeByPath?.page as ProductPageFragmentFragment;
  const { product } = page;

  return (
    <>
      <DocumentTitle title={product.title} />
      <ProductSchema {...product} />
      <ProductContent as="main" {...product} />
    </>
  );
};

export default ProductPage;
