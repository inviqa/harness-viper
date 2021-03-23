import { useReducer } from 'react';
import { Money, ProductVariant } from '~hooks/apollo';
import { ProductSelectionChangeAction, ProductSelectionState } from './types';

const createProductSelectionReducer = (variants: ProductVariant[] | null, initialPrice: Money) => {
  return (state: ProductSelectionState, action: ProductSelectionChangeAction) => {
    const doChangeSelection = (): ProductSelectionState => {
      const { selection } = action;
      if (!selection || !variants) {
        return {
          displayPrice: initialPrice,
          variantId: null
        };
      }

      const findVariantProduct = () => {
        const foundVariant = variants.find(
          variant =>
            variant.options.filter(
              optionValue =>
                !!selection.find(
                  selectionValue => selectionValue.option === optionValue.option && selectionValue.id === optionValue.id
                )
            ).length === selection.length
        );
        if (foundVariant) {
          return foundVariant.product;
        }
        return null;
      };

      const variant = findVariantProduct();

      return {
        displayPrice: variant?.price ?? initialPrice,
        variantId: variant?.id ?? null
      };
    };

    switch (action.type) {
      case 'setselection':
        return doChangeSelection();
      default:
        return state;
    }
  };
};

export const useProductSelection = (variants: ProductVariant[] | null, initialPrice: Money) => {
  return useReducer(createProductSelectionReducer(variants, initialPrice), {
    displayPrice: initialPrice,
    variantId: null
  });
};
