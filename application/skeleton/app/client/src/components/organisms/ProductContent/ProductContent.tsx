/** @jsx jsx */
import { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { Flex, Box, jsx, Alert, Close } from 'theme-ui';
import { useTranslation } from 'react-i18next';
import {
  ProductGallery,
  ProductOptions,
  ProductPrice,
  ProductAddToCartForm,
  defaultProductAddToCartFormOverrides,
  ProductOption,
  ProductOptionSelection
} from '@inviqa/viper-ui-commerce';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { ProductType, ProductVariant } from '~hooks/apollo';
import { parseHtml } from '~lib/parseHtml';
import { useAddToCart } from '~hooks/cart';
import { ProductContentProps } from './types';
import { useProductSelection } from '~hooks/product';

export const ProductContent: FunctionComponent<ProductContentProps> = ({
  id,
  type,
  sku,
  name,
  description,
  price,
  gallery,
  image,
  options,
  variants,
  as
}) => {
  const { t } = useTranslation('commerce');
  const [handleAddToCart, { loading }] = useAddToCart({ id, name, sku }, 'minicart');
  const { Button } = defaultProductAddToCartFormOverrides;

  const initialPrice = price;

  const [selectionState, dispatchSelectionChange] = useProductSelection(variants as ProductVariant[], initialPrice);
  const { displayPrice, variantSku } = selectionState;

  const [addCartToError, setAddToCartError] = useState('');

  const onOptionSelection = useCallback(
    (selection: ProductOptionSelection) => {
      setAddToCartError('');
      dispatchSelectionChange({ type: 'setselection', selection });
    },
    [dispatchSelectionChange]
  );

  const onAddToCart = useCallback(
    (value: { quantity: number }) => {
      if (type === ProductType.Configurable && !variantSku) {
        setAddToCartError(t('Messages.Errors.NO_VARIANT_SELECTED_ERROR'));
      } else {
        handleAddToCart({ ...value, variantSku });
      }
    },
    [handleAddToCart, type, variantSku, t]
  );

  const validSelections = useMemo(() => (variants || []).map(variant => [...variant.options]), [variants]);

  const galleryImage = useMemo(() => (image?.url ? { alt: image?.alt, src: image?.url } : undefined), [image]);
  const galleryImages = useMemo(() => gallery?.map(({ url, alt }) => ({ alt, src: url })), [gallery]);

  return (
    <Flex sx={{ flexDirection: ['column', 'column', 'row'] }} as={as}>
      {gallery && image && <ProductGallery image={galleryImage} gallery={galleryImages} sx={{ width: '100%' }} />}
      <Box className="product-info" p={2} sx={{ width: '100%' }}>
        <Heading level={1} sx={{ marginTop: 0 }}>
          {name}
        </Heading>
        <ProductPrice price={displayPrice} />
        <Paragraph>SKU: {sku}</Paragraph>
        {parseHtml(description)}
        {!!addCartToError && (
          <Alert sx={{ mb: 2 }} variant="error">
            {addCartToError}
            <Close sx={{ ml: 'auto' }} aria-label={t('Messages.Dismiss')} onClick={() => setAddToCartError('')} />
          </Alert>
        )}
        {options?.length && (
          <ProductOptions
            options={options as ProductOption[]}
            validSelections={validSelections}
            onSelection={onOptionSelection}
          />
        )}
        <ProductAddToCartForm
          onSubmit={onAddToCart}
          sx={{ marginTop: 4 }}
          overrides={{
            Button: buttonProps => (
              <Button {...buttonProps} disabled={loading || type === ProductType.Other}>
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
