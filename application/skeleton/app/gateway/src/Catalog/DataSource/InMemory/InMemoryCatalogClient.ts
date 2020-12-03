import { InMemoryCatalogClient as BaseInMemoryCatalogClient } from '@inviqa/viper-gateway-service-catalog';
import { Repository } from '@inviqa/viper-testing';
import { Product } from '../../typedef';

export class InMemoryCatalogClient extends BaseInMemoryCatalogClient {
  constructor() {
    super();
    (async () => {
      await Promise.all(
        ['en', 'de'].map(async websiteId => {
          const products = await this.productRepo.getFiltererEntities(() => true, websiteId);

          return Promise.all(
            products.map(product =>
              (this.productRepo as Repository<Product>).update(product.id, { color: null, size: null }, websiteId)
            )
          );
        })
      );
    })();
  }
}
