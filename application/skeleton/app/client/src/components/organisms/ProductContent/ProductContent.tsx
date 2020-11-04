/** @jsx jsx */
import { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { Flex, Box, jsx, Alert, Close } from 'theme-ui';
import {
  StyledProductGallery,
  StyledProductOptions,
  StyledProductPrice as ProductPrice,
  StyledProductAddToCartForm as ProductAddToCartForm,
  styledProductAddToCartFormOverrides,
  ProductOption as ProductOptionOption,
  ProductOptionSelection
} from '@inviqa/viper-ui-commerce';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { priceComponentOverrides } from '~lib/commonComponentOverrides';
import { useTranslation } from '~lib/createI18n';
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
  const { i18n, t } = useTranslation('commerce');
  const [handleAddToCart, { loading }] = useAddToCart({ id, name, sku });
  const { Button } = styledProductAddToCartFormOverrides;

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

  return (
    <Flex sx={{ flexDirection: ['column', 'column', 'row'] }} as={as}>
      {gallery && image && <StyledProductGallery image={image} gallery={gallery} sx={{ width: '100%' }} />}
      <Box className="product-info" p={2} sx={{ width: '100%' }}>
        <Heading level={1} sx={{ marginTop: 0 }}>
          {name}
        </Heading>
        <ProductPrice price={displayPrice} locale={i18n.language} overrides={priceComponentOverrides} />
        <Paragraph>SKU: {sku}</Paragraph>
        {parseHtml(description)}
        {!!addCartToError && (
          <Alert sx={{ mb: 2 }} variant="error">
            {addCartToError}
            <Close sx={{ ml: 'auto' }} aria-label={t('Messages.Dismiss')} onClick={() => setAddToCartError('')} />
          </Alert>
        )}
        {options?.length && (
          <StyledProductOptions
            options={options as ProductOptionOption[]}
            validSelections={validSelections}
            onSelection={onOptionSelection}
          />
        )}
        <ProductAddToCartForm
          quantityLabel={t('Cart.Item.Quantity')}
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
