import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { Product } from 'schema-dts';
import { jsonLdScriptProps } from 'react-schemaorg';
import { ProductPageFragmentFragment } from '~hooks/apollo';

const ProductSchema: FunctionComponent<ProductPageFragmentFragment['product']> = ({
  id,
  sku,
  name,
  description,
  price,
  image
}) => {
  const priceFormatted = (priceValue: number) => {
    return (priceValue / 100).toFixed(2);
  };

  return (
    <Head>
      <script
        {...jsonLdScriptProps<Product>({
          '@context': 'https://schema.org',
          '@type': 'Product',
          productID: id,
          sku,
          description,
          image: image ? image.url : '',
          name,
          offers: {
            '@type': 'Offer',
            price: priceFormatted(price.value),
            priceCurrency: price.currency
          }
        })}
      />
    </Head>
  );
};

export default ProductSchema;
