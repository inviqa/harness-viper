import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { ProductSchema } from '@inviqa/viper-ui';
import { ProductPageFragmentFragment } from '~hooks/apollo';
import ProductContent from '../../organisms/ProductContent/ProductContent';
import DocumentTitle from '../../DocumentTitle';
import { PageProps } from '../types';

export const ProductPage: FunctionComponent<PageProps> = ({ queryResult }) => {
  const page = queryResult.data?.routeByPath?.page as ProductPageFragmentFragment;
  const { product } = page;

  return (
    <>
      <DocumentTitle title={product.title} />
      <Head>{ProductSchema(product)}</Head>
      <ProductContent {...product} />
    </>
  );
};

export default ProductPage;
