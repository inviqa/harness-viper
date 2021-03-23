import React, { FunctionComponent } from 'react';
import { ProductGridBanner as ProductGridBannerT } from '~hooks/apollo';
import ProductCard from '../../molecules/ProductCard/ProductCard';

const ProductGridBlock: FunctionComponent<ProductGridBannerT> = ({ title, products }) => {
  return (
    <div>
      <h3 className="mb-8">
        <span className="text-4xl bg-black text-white font-bold py-2 px-4">{title}</span>
      </h3>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {products.map(product => product && <ProductCard key={product.id} data-product-card {...product} />)}
      </div>
    </div>
  );
};

export default ProductGridBlock;
