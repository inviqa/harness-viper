import { ProductFragmentFragment } from '@inviqa/viper-backend-bigcommerce';
import { BigcommerceProductDataTransformer as BaseBigcommerceProductDataTransformer } from '@inviqa/viper-gateway-service-catalog';
import { Product, ProductVariant, ProductOptionValue } from '../../typedef';

export class BigcommerceProductDataTransformer extends BaseBigcommerceProductDataTransformer {
  transformProductData(product: ProductFragmentFragment): Product {
    const productBefore = super.transformProductData(product);

    const getOptionValueIdByName = (options: ProductOptionValue[], name: string) => {
      const optionValue = options.find(option => option.option === name);
      return optionValue ? optionValue.id : null;
    };

    const addColorAndSizeToVariants = (variants: ProductVariant[]) => {
      return variants.map(({ options, product: variantProduct }) => ({
        options,
        product: {
          ...variantProduct,
          color: getOptionValueIdByName(options, 'color'),
          size: getOptionValueIdByName(options, 'size')
        }
      }));
    };

    return {
      ...productBefore,
      color: null,
      size: null,
      variants: productBefore.variants ? addColorAndSizeToVariants(productBefore.variants) : null
    };
  }
}
