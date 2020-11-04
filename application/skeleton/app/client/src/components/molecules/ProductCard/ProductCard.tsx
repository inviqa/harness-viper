/* @jsx jsx */
import { ProductCardOverrides, StyledProductCard, styledProductCardOverrides } from '@inviqa/viper-ui-commerce';
import { forwardRef, FunctionComponent, HTMLAttributes, useMemo } from 'react';
import { jsx } from 'theme-ui';
import { ProductListFragmentFragment, ProductType } from '~hooks/apollo';
import { useAddToCart } from '~hooks/cart';
import { priceComponentOverrides } from '~lib/commonComponentOverrides';
import { Link as NextLink, useTranslation } from '~lib/createI18n';

const { Link, Price, Wrapper, AddToCart } = styledProductCardOverrides;

export type Props = HTMLAttributes<HTMLElement> & ProductListFragmentFragment;

const ProductCard: FunctionComponent<Props> = ({ id, type, sku, name, thumbnailImage, price, url, ...props }) => {
  const { i18n, t } = useTranslation(['catalog', 'commerce']);
  const [handleAddToCart, { loading }] = useAddToCart({ id, name, sku });

  const overrides: ProductCardOverrides = useMemo(
    () => ({
      Wrapper: wrapperProps => <Wrapper sx={{ pb: 2 }} {...wrapperProps} />,
      Link: forwardRef(({ href, ...rest }, ref) => (
        <NextLink href="/[...all]" as={href} passHref>
          <Link ref={ref} {...rest}>
            {t('catalog:ViewProduct')}
          </Link>
        </NextLink>
      )),
      ImageLink: forwardRef(({ href, ...rest }, ref) => (
        <NextLink href="/[...all]" as={href} passHref>
          <Link ref={ref} {...rest} {...rest} />
        </NextLink>
      )),
      Price: priceProps => <Price {...priceProps} overrides={priceComponentOverrides} locale={i18n.language} />,
      AddToCart: addProps => <AddToCart {...addProps}>{t('commerce:Cart.AddToCart')}</AddToCart>
    }),
    [i18n.language, t]
  );

  return (
    <StyledProductCard
      key={id}
      name={name}
      image={thumbnailImage ?? undefined}
      price={price}
      url={url}
      handleAddToCart={() => handleAddToCart({ quantity: 1, variantSku: null })}
      disableCartAction={type !== ProductType.Simple || loading}
      overrides={overrides}
      aria-busy={loading}
      {...props}
    />
  );
};

export default ProductCard;
