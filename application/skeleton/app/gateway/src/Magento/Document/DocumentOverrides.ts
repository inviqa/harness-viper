import { DocumentOverrides as BaseDocumentOverrides } from '@inviqa/viper-backend-graphql';
import { GetProductsDocument } from '../documents';

export class DocumentOverrides extends BaseDocumentOverrides {
  constructor() {
    super();
    this.setOverrides([GetProductsDocument]);
  }
}
