import React from 'react';
import {
  styledProductPriceOverrides,
  ProductPriceOverrides,
  styledQuantityInputOverrides,
  QuantityInputOverrides
} from '@inviqa/viper-ui-commerce';
import { useTranslation } from '~lib/createI18n';

const { Price, OriginalPrice } = styledProductPriceOverrides;
export const priceComponentOverrides: ProductPriceOverrides = {
  Price: props => {
    const { t } = useTranslation('catalog');
    const { hasOriginalPrice, formattedPrice } = props;
    return <Price {...props} aria-label={hasOriginalPrice ? t('Price.Now', { price: formattedPrice }) : undefined} />;
  },
  OriginalPrice: props => {
    const { t } = useTranslation('catalog');
    const { formattedPrice } = props;
    return <OriginalPrice {...props} aria-label={t('Price.Was', { price: formattedPrice })} />;
  }
};

const { Input } = styledQuantityInputOverrides;
export const quantityInputOverrides: QuantityInputOverrides = {
  Input: props => {
    const { t } = useTranslation('commerce');
    return <Input {...props} aria-label={t('Cart.Item.Quantity')} />;
  }
};
