import React, { FunctionComponent } from 'react';
import { Box, Grid, Heading, Text } from 'theme-ui';
import { ProductGridBanner as ProductGridBannerT } from '~hooks/apollo';
import ProductCard from '../../molecules/ProductCard/ProductCard';

const ProductGridBlock: FunctionComponent<ProductGridBannerT> = ({ title, products }) => {
  return (
    <Box as="div">
      <Heading as="h3" sx={{ mb: 4 }}>
        <Text
          as="span"
          sx={{
            fontSize: '2.5rem',
            color: 'darkOverlayText',
            backgroundColor: 'darkOverlay',
            p: 2,
            px: 4
          }}
        >
          {title}
        </Text>
      </Heading>
      <Grid columns={[2, 2, 4]}>
        {products.map(product => product && <ProductCard key={product.id} data-product-card {...product} />)}
      </Grid>
    </Box>
  );
};

export default ProductGridBlock;
