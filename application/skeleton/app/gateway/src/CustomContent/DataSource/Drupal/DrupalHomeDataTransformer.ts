import { DrupalImageDataTransformer } from '@inviqa/viper-gateway-service-content';
import { GetNodeHomepageByNodeIdQuery, NodeHomepageFragmentFragment } from '../../../Drupal';
import { CmsHomepage } from '../../typedef';

export class DrupalHomeDataTransformer {
  constructor(private imageTransformer: DrupalImageDataTransformer) {}

  public transformData(result: GetNodeHomepageByNodeIdQuery, locale: string): CmsHomepage | null {
    if (!result.nodeById?.entityTranslation) {
      return null;
    }
    if (result.nodeById.__typename === 'NodeHomepage') {
      return this.mapHomepegeResult(result.nodeById.entityTranslation as NodeHomepageFragmentFragment, locale);
    }
    return null;
  }

  private mapHomepegeResult(nodeArticle: NodeHomepageFragmentFragment, locale: string): CmsHomepage {
    const {
      entityId,
      fieldBannerImage,
      fieldBannerText,
      fieldProductSku,
      fieldProductGridTitle,
      fieldProductGridSkus
    } = nodeArticle;
    return {
      id: entityId,
      locale,
      productBanner: {
        text: {
          raw: fieldBannerText.value,
          html: fieldBannerText.processed
        },
        product: {
          sku: fieldProductSku,
          __typename: 'Product'
        },
        image: fieldBannerImage ? this.imageTransformer.transformImage(fieldBannerImage as any) : null
      },
      productGrid: {
        title: fieldProductGridTitle,
        products: fieldProductGridSkus.length ? fieldProductGridSkus.map(sku => ({ __typename: 'Product', sku })) : null
      }
    };
  }
}
