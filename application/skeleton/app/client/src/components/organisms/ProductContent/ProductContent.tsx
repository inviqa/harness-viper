import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ProductGallery,
  ProductOptions,
  ProductPrice,
  ProductAddToCartForm,
  defaultProductAddToCartFormOverrides,
  ProductOption,
  ProductOptionSelection,
  Alert
} from '@inviqa/viper-ui';
import { MessageType } from '@inviqa/viper-react-hooks';
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
  variants
}) => {
  const { t } = useTranslation('commerce');
  const [handleAddToCart, { loading }] = useAddToCart({ id, name, sku }, 'minicart');
  const { Button } = defaultProductAddToCartFormOverrides;

  const initialPrice = price;

  const [selectionState, dispatchSelectionChange] = useProductSelection(variants as ProductVariant[], initialPrice);
  const { displayPrice, variantId } = selectionState;

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
      if (type === ProductType.Configurable && !variantId) {
        setAddToCartError(t('Messages.Errors.NO_VARIANT_SELECTED_ERROR'));
      } else {
        handleAddToCart({ ...value, variantId });
      }
    },
    [handleAddToCart, type, variantId, t]
  );

  const validSelections = useMemo(() => (variants || []).map(variant => [...variant.options]), [variants]);

  const galleryImage = useMemo(() => (image?.url ? { alt: image?.alt, src: image?.url } : undefined), [image]);
  const galleryImages = useMemo(() => gallery?.map(({ url, alt }) => ({ alt, src: url })), [gallery]);

  return (
    <main className="flex flex-col lg:flex-row">
      {gallery && image && <ProductGallery image={galleryImage} gallery={galleryImages} className="w-full" />}
      <div className="product-info p-2 w-full">
        <h1 className="mb-8">{name}</h1>
        <ProductPrice price={displayPrice} className="mb-4" />
        <p className="mb-4">SKU: {sku}</p>
        {parseHtml(description)}
        {!!addCartToError && (
          <Alert type={MessageType.Error} onDismiss={() => setAddToCartError('')}>
            {addCartToError}
          </Alert>
        )}
        {!!options?.length && (
          <ProductOptions
            options={options as ProductOption[]}
            validSelections={validSelections}
            onSelection={onOptionSelection}
          />
        )}
        <ProductAddToCartForm
          onSubmit={onAddToCart}
          className="mt-4"
          overrides={{
            Button: buttonProps => (
              <Button {...buttonProps} disabled={loading || type === ProductType.Other}>
                {t('Cart.AddToCart')}
              </Button>
            )
          }}
        />
      </div>
    </main>
  );
};

export default ProductContent;
