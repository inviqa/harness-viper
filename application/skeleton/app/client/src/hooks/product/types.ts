import { ProductOptionSelection } from '@inviqa/viper-ui-commerce';
import { Money } from '~hooks/apollo';

export type ProductSelectionChangeAction = {
  type: 'setselection';
  selection: ProductOptionSelection | null;
};

export type ProductSelectionState = {
  displayPrice: Money;
  variantSku: string | null;
};
