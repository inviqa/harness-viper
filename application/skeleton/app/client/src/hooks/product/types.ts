import { ProductOptionSelection } from '@inviqa/viper-ui';
import { GetProductsQueryVariables, Money } from '~hooks/apollo';

export type ProductSelectionChangeAction = {
  type: 'setselection';
  selection: ProductOptionSelection | null;
};

export type ProductSelectionState = {
  displayPrice: Money;
  variantId: string | null;
};

export type ProductListInitialVariables = Pick<GetProductsQueryVariables, 'filters' | 'searchTerm'>;
