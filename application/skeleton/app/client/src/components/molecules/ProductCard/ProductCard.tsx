/* @jsx jsx */
import { ProductCard as UIProductCard } from '@inviqa/viper-ui-commerce';
import { FunctionComponent, HTMLAttributes } from 'react';
import { jsx } from 'theme-ui';
import { ProductListFragmentFragment, ProductType } from '~hooks/apollo';
import { useAddToCart } from '~hooks/cart';

export type Props = HTMLAttributes<HTMLElement> & ProductListFragmentFragment;

const ProductCard: FunctionComponent<Props> = ({ id, type, sku, name, thumbnailImage, price, url, ...props }) => {
  const [handleAddToCart, { loading }] = useAddToCart({ id, name, sku }, 'minicart');

  return (
    <UIProductCard
      key={id}
      name={name}
      image={thumbnailImage ?? undefined}
      price={price}
      url={url}
      handleAddToCart={() => handleAddToCart({ quantity: 1, variantSku: null })}
      disableCartAction={type !== ProductType.Simple || loading}
      aria-busy={loading}
      {...props}
    />
  );
};

export default ProductCard;
