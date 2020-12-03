import React, { FunctionComponent } from 'react';
import { Box } from 'theme-ui';
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
    <Box as="div" className="homepage">
      {productBanner && (
        <Box
          className="homepage__product-banner"
          as="section"
          sx={{
            mb: 4
          }}
        >
          <ProductBanner {...(productBanner as ProductBannerT)} />
        </Box>
      )}
      {productGrid && (
        <Box
          className="homepage__product-grid"
          as="section"
          sx={{
            mb: 4
          }}
        >
          <ProductGridBlock {...(productGrid as ProductGridBanner)} />
        </Box>
      )}
    </Box>
  );
};

export default CmsHomepage;
