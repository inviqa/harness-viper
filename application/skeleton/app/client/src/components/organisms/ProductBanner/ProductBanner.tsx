import React, {
  AnchorHTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  FunctionComponent,
  RefAttributes
} from 'react';
import cx from 'classnames';
import { Banner, ProductPrice, defaultProductPriceOverrides } from '@inviqa/viper-ui';
import NextLink from 'next/link';
import { ProductBanner as ProductBannerT } from '~hooks/apollo';
import { parseHtml } from '~lib/parseHtml';

export const ProductBanner: FunctionComponent<ProductBannerT> = ({ product, image, text }) => {
  if (!product || !image) {
    return null;
  }

  const picture = {
    alt: image.alt || '',
    sources: image.sizes
  };

  const { name, url, price } = product;

  const ProductLink: ForwardRefExoticComponent<
    AnchorHTMLAttributes<HTMLAnchorElement> & RefAttributes<HTMLAnchorElement>
  > = forwardRef(({ children, ...props }, ref) => (
    <NextLink href={url} passHref>
      <a ref={ref} className="text-banner-white-text hover:text-banner-white-text" {...props}>
        {children}
      </a>
    </NextLink>
  ));

  const { Price: DefaultPrice } = defaultProductPriceOverrides;

  return (
    <Banner picture={picture}>
      {text?.html && (
        <div className="text-5xl text-right mb-8">
          <ProductLink>
            <span className="text-6xl bg-brand-accent text-black py-2 px-4">{parseHtml(text.html)}</span>
          </ProductLink>
        </div>
      )}
      <div className="text-3xl md:text-5xl text-right">
        <ProductLink>
          <span className="text-4xl bg-black py-2 px-4">{name}</span>
        </ProductLink>
      </div>
      <div className="text-right">
        <ProductLink>
          <ProductPrice
            price={price}
            className="inline-block text-right"
            overrides={{
              Price: ({ className, ...priceProps }) => (
                <DefaultPrice
                  className={cx(className, 'text-5xl inline-block bg-black py-2 px-4 text-right')}
                  {...priceProps}
                />
              )
            }}
          />
        </ProductLink>
      </div>
    </Banner>
  );
};

export default ProductBanner;
