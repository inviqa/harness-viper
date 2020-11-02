import { GetCartQueryVariables, GetCartQueryHookResult, GetCartDocument, GetCartQuery } from '../generated';

export const defaultCartItems: GetCartQuery['cart']['items'] = [
  {
    id: '47',
    quantity: 3,
    rowTotal: {
      value: 14700,
      currency: 'GBP',
      __typename: 'Money'
    },
    product: {
      sku: '24-WG01',
      name: 'Bolo Sport Watch',
      url: '/bolo-sport-watch.html',
      thumbnailImage: {
        url:
          'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/w/g/wg01-bk-0.jpg',
        alt: 'Bolo Sport Watch',
        __typename: 'ProductImage'
      },
      __typename: 'SimpleProduct'
    },
    __typename: 'CartItem'
  },
  {
    id: '48',
    quantity: 2,
    rowTotal: {
      value: 18400,
      currency: 'GBP',
      __typename: 'Money'
    },
    product: {
      sku: '24-MG02',
      name: 'Dash Digital Watch',
      url: '/dash-digital-watch.html',
      thumbnailImage: {
        url:
          'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/g/mg02-bk-0.jpg',
        alt: 'Dash Digital Watch',
        __typename: 'ProductImage'
      },
      __typename: 'SimpleProduct'
    },
    __typename: 'CartItem'
  },
  {
    id: '49',
    quantity: 2,
    rowTotal: {
      value: 10800,
      currency: 'GBP',
      __typename: 'Money'
    },
    product: {
      sku: '24-WG03',
      name: 'Clamber Watch',
      url: '/clamber-watch.html',
      thumbnailImage: {
        url:
          'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/w/g/wg03-gr-0.jpg',
        alt: 'Image',
        __typename: 'ProductImage'
      },
      __typename: 'SimpleProduct'
    },
    __typename: 'CartItem'
  },
  {
    id: '50',
    quantity: 5,
    rowTotal: {
      value: 22500,
      currency: 'GBP',
      __typename: 'Money'
    },
    product: {
      sku: '24-MG04',
      name: 'Aim Analog Watch',
      url: '/aim-analog-watch.html',
      thumbnailImage: {
        url:
          'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/g/mg04-bk-0.jpg',
        alt: 'Aim Analog Watch',
        __typename: 'ProductImage'
      },
      __typename: 'SimpleProduct'
    },
    __typename: 'CartItem'
  },
  {
    id: '51',
    quantity: 2,
    rowTotal: {
      value: 9800,
      currency: 'GBP',
      __typename: 'Money'
    },
    product: {
      sku: '24-MG01',
      name: 'Endurance Watch',
      url: '/endurance-watch.html',
      thumbnailImage: {
        url:
          'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/g/mg01-bk-0.jpg',
        alt: 'Endurance Watch',
        __typename: 'ProductImage'
      },
      __typename: 'SimpleProduct'
    },
    __typename: 'CartItem'
  },
  {
    id: '52',
    quantity: 2,
    rowTotal: {
      value: 11000,
      currency: 'GBP',
      __typename: 'Money'
    },
    product: {
      sku: '24-MG05',
      name: 'Cruise Dual Analog Watch',
      url: '/cruise-dual-analog-watch.html',
      thumbnailImage: {
        url:
          'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/g/mg05-br-0.jpg',
        alt: 'Cruise Dual Analog Watch',
        __typename: 'ProductImage'
      },
      __typename: 'SimpleProduct'
    },
    __typename: 'CartItem'
  },
  {
    id: '53',
    quantity: 1,
    rowTotal: {
      value: 5400,
      currency: 'GBP',
      __typename: 'Money'
    },
    product: {
      sku: '24-MG03',
      name: 'Summit Watch',
      url: '/summit-watch.html',
      thumbnailImage: {
        url:
          'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/g/mg03-br-0.jpg',
        alt: 'Summit Watch',
        __typename: 'ProductImage'
      },
      __typename: 'SimpleProduct'
    },
    __typename: 'CartItem'
  },
  {
    id: '54',
    quantity: 2,
    rowTotal: {
      value: 8600,
      currency: 'GBP',
      __typename: 'Money'
    },
    product: {
      sku: '24-WG09',
      name: 'Luma Analog Watch',
      url: '/luma-analog-watch.html',
      thumbnailImage: {
        url:
          'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/w/g/wg09-gr-0.jpg',
        alt: 'Luma Analog Watch',
        __typename: 'ProductImage'
      },
      __typename: 'SimpleProduct'
    },
    __typename: 'CartItem'
  }
];

export const defaultCartTotals: GetCartQuery['cart']['totals'] = {
  __typename: 'CartTotals',
  grandTotal: {
    __typename: 'Money',
    currency: 'GBP',
    value: 70000
  },
  discounts: [
    {
      __typename: 'MoneyWithLabel',
      label: 'Test coupon code',
      amount: {
        value: 20000,
        currency: 'GBP'
      }
    },
    {
      __typename: 'MoneyWithLabel',
      label: 'Another test coupon code',
      amount: {
        value: 10000,
        currency: 'GBP'
      }
    }
  ],
  subtotalIncludingTax: {
    __typename: 'Money',
    currency: 'GBP',
    value: 100000
  }
};

export const defaultCouponCodes: GetCartQuery['cart']['couponCodes'] = [{ code: 'some-code' }];

export const getCartMock = ({
  cartId = 'mock-cart-id',
  data = {
    cart: {
      __typename: 'Cart',
      id: 'mock-cart-id',
      numberOfItems: defaultCartItems.length,
      items: defaultCartItems,
      totals: defaultCartTotals,
      couponCodes: defaultCouponCodes
    }
  },
  loading = false,
  error = undefined
}: Partial<GetCartQueryVariables> & Partial<GetCartQueryHookResult> = {}) => ({
  request: {
    query: GetCartDocument,
    variables: {
      cartId
    }
  },
  result: {
    data,
    loading,
    error
  }
});
