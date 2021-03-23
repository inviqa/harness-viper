import React, { FunctionComponent } from 'react';
import { CmsHomepagePageFragmentFragment, ProductBanner as ProductBannerT, ProductGridBanner } from '~hooks/apollo';

import ProductBanner from '../ProductBanner/ProductBanner';
import ProductGridBlock from '../ProductGridBlock/ProductGridBlock';

export const CmsHomepage: FunctionComponent<{
  homepageData?: CmsHomepagePageFragmentFragment['homePage'];
}> = ({ homepageData }) => {
  if (!homepageData) {
    return null;
  }
  const { productBanner, productGrid } = homepageData;

  return (
    <div className="homepage">
      {productBanner && (
        <section className="homepage__product-banner mb-8">
          <ProductBanner {...(productBanner as ProductBannerT)} />
        </section>
      )}
      {productGrid && (
        <section className="homepage__product-grid mb-8">
          <ProductGridBlock {...(productGrid as ProductGridBanner)} />
        </section>
      )}
    </div>
  );
};

export default CmsHomepage;
