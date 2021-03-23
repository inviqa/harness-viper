import React, { FunctionComponent, HTMLAttributes } from 'react';
import { ProductCard as UIProductCard } from '@inviqa/viper-ui';

import { ProductListItemFragmentFragment, ProductType } from '~hooks/apollo';
import { useAddToCart } from '~hooks/cart';

export type Props = Omit<HTMLAttributes<HTMLElement>, 'color'> & ProductListItemFragmentFragment;

const ProductCard: FunctionComponent<Props> = ({ id, type, sku, name, thumbnailImage, price, url, ...props }) => {
  const [handleAddToCart, { loading }] = useAddToCart({ id, name, sku }, 'minicart');

  return (
    <UIProductCard
      key={id}
      name={name}
      image={thumbnailImage ?? undefined}
      price={price}
      url={url}
      handleAddToCart={() => handleAddToCart({ quantity: 1, variantId: null })}
      disableCartAction={type !== ProductType.Simple || loading}
      aria-busy={loading}
      {...props}
    />
  );
};

export default ProductCard;
