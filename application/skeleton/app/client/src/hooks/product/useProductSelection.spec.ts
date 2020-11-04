import { renderHook, act, HookResult } from '@testing-library/react-hooks';
import { Dispatch } from 'react';
import { Money, ProductVariant, Product } from '~hooks/apollo';
import { ProductSelectionChangeAction, ProductSelectionState } from './types';
import { useProductSelection } from './useProductSelection';

const sizeS = {
  id: 'size-s',
  option: 'size',
  label: 'Small'
};

const sizeM = {
  id: 'size-m',
  option: 'size',
  label: 'Medium'
};

const colorRed = {
  id: 'color-red',
  option: 'color',
  label: 'Red'
};

const colorBlue = {
  id: 'color-blue',
  option: 'color',
  label: 'Blue'
};

let variants: ProductVariant[];
let initialPrice: Money;

let hookResult: HookResult<[ProductSelectionState, Dispatch<ProductSelectionChangeAction>]>;

describe(useProductSelection, () => {
  beforeAll(() => {
    variants = [
      {
        options: [sizeS, colorRed],
        product: {
          sku: 'TEST-1',
          price: {
            value: 2000,
            currency: 'GBP'
          }
        } as Product
      },
      {
        options: [sizeM, colorBlue],
        product: {
          sku: 'TEST-2',
          price: {
            value: 3000,
            currency: 'GBP'
          }
        } as Product
      }
    ];
    initialPrice = {
      value: 1000,
      currency: 'GBP'
    };
  });

  describe('When: the component is rendered', () => {
    beforeEach(() => {
      const hookTest = renderHook(() => useProductSelection(variants, initialPrice));
      hookResult = hookTest.result;
    });

    it('Then: it sets the initial price as displayPrice', () => {
      expect(hookResult.current[0].displayPrice).toEqual(initialPrice);
    });
  });

  describe('When: a selection is set', () => {
    beforeEach(() => {
      const hookTest = renderHook(() => useProductSelection(variants, initialPrice));
      hookResult = hookTest.result;
      const dispatch = hookResult.current[1];
      act(() => {
        dispatch({ type: 'setselection', selection: [sizeS, colorRed] });
      });
    });

    it('Then: it sets the variant products price as displayPrice', () => {
      expect(hookResult.current[0].displayPrice).toEqual({
        value: 2000,
        currency: 'GBP'
      });
    });

    it('Then: it sets the variant products sku as variantSku', () => {
      expect(hookResult.current[0].variantSku).toEqual('TEST-1');
    });
  });

  describe('When: an invalid selection is set', () => {
    beforeEach(() => {
      const hookTest = renderHook(() => useProductSelection(variants, initialPrice));
      hookResult = hookTest.result;
      const dispatch = hookResult.current[1];
      act(() => {
        dispatch({ type: 'setselection', selection: [sizeS, colorBlue] });
      });
    });

    it('Then: it sets the initial price as displayPrice', () => {
      expect(hookResult.current[0].displayPrice).toEqual(initialPrice);
    });

    it('Then: it sets the variantSku as null', () => {
      expect(hookResult.current[0].variantSku).toEqual(null);
    });
  });
});
