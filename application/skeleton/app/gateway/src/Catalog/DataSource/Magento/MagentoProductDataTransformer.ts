import { MagentoProductDataTransformer as BaseMagentoProductDataTransformer } from '@inviqa/viper-gateway-service-catalog';
import { ProductFragmentFragment } from '../../../Magento/documents';
import { Product } from '../../typedef';

type MagentoProductDataTransformerContext = {
  name: string;
  value: string;
};

export class MagentoProductDataTransformer extends BaseMagentoProductDataTransformer {
  transformProductData(product: ProductFragmentFragment, context?: MagentoProductDataTransformerContext): Product {
    const { color, size, ...prevProduct } = product;
    return {
      ...super.transformProductData(prevProduct, context),
      color: color ?? null,
      size: size ? size.toString() : null
    };
  }
}
