/* @jsx jsx */
import { AnchorHTMLAttributes, forwardRef, ForwardRefExoticComponent, FunctionComponent, RefAttributes } from 'react';
import { Banner } from '@inviqa/viper-ui';
import { jsx, Box, Heading, Link, Text } from 'theme-ui';
import { ProductPrice } from '@inviqa/viper-ui-commerce';
import NextLink from 'next/link';
import { ProductBanner as ProductBannerT } from '~hooks/apollo';
import { parseHtml } from '~lib/parseHtml';

export const ProductBanner: FunctionComponent<ProductBannerT> = ({ product, image, text }) => {
  if (!product || !image) {
    return null;
  }

  const picture = {
    alt: image.alt || '',
    sizes: (image.sizes || []).map(({ size, url }) => ({ size, url }))
  };

  const { name, url, price } = product;

  const ProductLink: ForwardRefExoticComponent<
    AnchorHTMLAttributes<HTMLAnchorElement> & RefAttributes<HTMLAnchorElement>
  > = forwardRef((props, ref) => (
    <NextLink href={url} passHref>
      <Link
        ref={ref}
        sx={{
          color: 'darkOverlayText',
          textDecoration: 'none',
          ':hover': {
            opacity: 1
          }
        }}
        {...props}
      />
    </NextLink>
  ));

  return (
    <Banner
      picture={picture}
      sx={{
        '> .banner__content': {
          backgroundColor: 'transparent'
        }
      }}
    >
      {text?.html && (
        <Heading
          as="div"
          sx={{
            textAlign: 'right',
            mb: 4
          }}
        >
          <ProductLink>
            <Text
              as="span"
              sx={{
                fontSize: '4rem',
                color: 'darkText',
                backgroundColor: 'primary',
                p: 2,
                px: 4
              }}
            >
              {parseHtml(text.html)}
            </Text>
          </ProductLink>
        </Heading>
      )}
      <Heading
        as="div"
        sx={{
          textAlign: 'right'
        }}
      >
        <ProductLink>
          <Text
            as="span"
            sx={{
              fontSize: '2.5rem',
              backgroundColor: 'darkOverlay',
              p: 2
            }}
          >
            {name}
          </Text>
        </ProductLink>
      </Heading>
      <Box
        as="div"
        sx={{
          textAlign: 'right'
        }}
      >
        <ProductLink>
          <ProductPrice
            price={price}
            sx={{
              display: 'inline-block',
              textAlign: 'right',
              '> .product-price__price': {
                fontSize: '3rem',
                display: 'inline-block',
                backgroundColor: 'darkOverlay',
                p: 2
              }
            }}
          />
        </ProductLink>
      </Box>
    </Banner>
  );
};

export default ProductBanner;
