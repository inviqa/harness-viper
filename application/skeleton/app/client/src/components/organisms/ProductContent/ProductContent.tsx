/** @jsx jsx */
import { FunctionComponent } from 'react';
import { Flex, Box, jsx, BoxOwnProps } from 'theme-ui';
import {
  StyledProductGallery,
  StyledProductPrice as ProductPrice,
  StyledProductAddToCartForm as ProductAddToCartForm,
  styledProductAddToCartFormOverrides
} from '@inviqa/viper-ui-commerce';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { priceComponentOverrides } from '~lib/commonComponentOverrides';
import { useTranslation } from '~lib/createI18n';
import { ProductPageFragmentFragment, ProductType } from '~hooks/apollo';
import { parseHtml } from '~lib/parseHtml';
import { useAddToCart } from '~hooks/cart';

export const ProductContent: FunctionComponent<ProductPageFragmentFragment['product'] & { as?: BoxOwnProps['as'] }> = ({
  id,
  type,
  sku,
  name,
  description,
  price,
  gallery,
  image,
  as
}) => {
  const { i18n, t } = useTranslation('commerce');
  const [handleAddToCart, { loading }] = useAddToCart({ id, name, sku });
  const { Button } = styledProductAddToCartFormOverrides;

  return (
    <Flex sx={{ flexDirection: ['column', 'column', 'row'] }} as={as}>
      {gallery && image && <StyledProductGallery image={image} gallery={gallery} sx={{ width: '100%' }} />}
      <Box className="product-info" p={2} sx={{ width: ['100%', null, '50%'] }}>
        <Heading level={1} sx={{ marginTop: 0 }}>
          {name}
        </Heading>
        <ProductPrice price={price} locale={i18n.language} overrides={priceComponentOverrides} />
        <Paragraph>SKU: {sku}</Paragraph>
        {parseHtml(description)}
        <ProductAddToCartForm
          quantityLabel={t('Cart.Item.Quantity')}
          onSubmit={handleAddToCart}
          sx={{ marginTop: 4 }}
          overrides={{
            Button: buttonProps => (
              <Button {...buttonProps} disabled={type !== ProductType.Simple || loading}>
                {t('Cart.AddToCart')}
              </Button>
            )
          }}
        />
      </Box>
    </Flex>
  );
};

export default ProductContent;
