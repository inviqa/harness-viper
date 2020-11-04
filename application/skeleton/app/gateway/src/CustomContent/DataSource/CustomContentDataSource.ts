import { CmsHomepage } from '../typedef';

export interface CustomContentDataSource {
  fetchCmsHomeById(id: string): Promise<CmsHomepage>;
}
