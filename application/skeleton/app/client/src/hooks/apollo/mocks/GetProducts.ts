import {
  GetProductsDocument,
  ProductSortCriteria,
  ProductSortOrder,
  GetProductsQueryVariables,
  GetProductsQuery,
  GetProductsQueryHookResult,
  ProductType
} from '../generated';

export const defaultFacets: GetProductsQuery['products']['facets'] = [
  {
    name: 'price',
    label: 'Price',
    options: [
      {
        count: 12,
        label: '20-30',
        facetName: 'price',
        isSelected: false,
        value: {
          __typename: 'FacetRangeValue',
          from: '20',
          to: '30'
        }
      },
      {
        count: 15,
        label: '30-40',
        facetName: 'price',
        isSelected: false,
        value: {
          __typename: 'FacetRangeValue',
          from: '30',
          to: '40'
        }
      },
      {
        count: 4,
        label: '40-50',
        facetName: 'price',
        isSelected: false,
        value: {
          __typename: 'FacetRangeValue',
          from: '40',
          to: '50'
        }
      },
      {
        count: 10,
        label: '50-60',
        facetName: 'price',
        isSelected: false,
        value: {
          __typename: 'FacetRangeValue',
          from: '50',
          to: '60'
        }
      },
      {
        count: 5,
        label: '60-70',
        facetName: 'price',
        isSelected: false,
        value: {
          __typename: 'FacetRangeValue',
          from: '60',
          to: '70'
        }
      },
      {
        count: 3,
        label: '70-80',
        facetName: 'price',
        isSelected: false,
        value: {
          __typename: 'FacetRangeValue',
          from: '70',
          to: '80'
        }
      },
      {
        count: 1,
        label: '80-*',
        facetName: 'price',
        isSelected: false,
        value: {
          __typename: 'FacetRangeValue',
          from: '80',
          to: null
        }
      }
    ]
  },
  {
    name: 'category_id',
    label: 'Category',
    options: [
      {
        count: 13,
        label: 'New Luma Yoga Collection',
        facetName: 'category_id',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '8',
          in: null
        }
      },
      {
        count: 50,
        label: 'Women',
        facetName: 'category_id',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '20',
          in: null
        }
      },
      {
        count: 50,
        label: 'Tops',
        facetName: 'category_id',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '21',
          in: null
        }
      },
      {
        count: 12,
        label: 'Jackets',
        facetName: 'category_id',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '23',
          in: null
        }
      },
      {
        count: 12,
        label: 'Hoodies & Sweatshirts',
        facetName: 'category_id',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '24',
          in: null
        }
      },
      {
        count: 12,
        label: 'Tees',
        facetName: 'category_id',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '25',
          in: null
        }
      },
      {
        count: 14,
        label: 'Bras & Tanks',
        facetName: 'category_id',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '26',
          in: null
        }
      },
      {
        count: 12,
        label: 'Women Sale',
        facetName: 'category_id',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '30',
          in: null
        }
      },
      {
        count: 12,
        label: 'Tees',
        facetName: 'category_id',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '33',
          in: null
        }
      },
      {
        count: 11,
        label: 'Erin Recommends',
        facetName: 'category_id',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '34',
          in: null
        }
      },
      {
        count: 13,
        label: 'Performance Fabrics',
        facetName: 'category_id',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '35',
          in: null
        }
      },
      {
        count: 6,
        label: 'Eco Friendly',
        facetName: 'category_id',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '36',
          in: null
        }
      }
    ]
  },
  {
    name: 'color',
    label: 'Color',
    options: [
      {
        count: 12,
        label: 'Black',
        facetName: 'color',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5485',
          in: null
        }
      },
      {
        count: 22,
        label: 'Blue',
        facetName: 'color',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5486',
          in: null
        }
      },
      {
        count: 1,
        label: 'Brown',
        facetName: 'color',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5487',
          in: null
        }
      },
      {
        count: 8,
        label: 'Gray',
        facetName: 'color',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5488',
          in: null
        }
      },
      {
        count: 18,
        label: 'Green',
        facetName: 'color',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5489',
          in: null
        }
      },
      {
        count: 21,
        label: 'Orange',
        facetName: 'color',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5492',
          in: null
        }
      },
      {
        count: 23,
        label: 'Purple',
        facetName: 'color',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5493',
          in: null
        }
      },
      {
        count: 18,
        label: 'Red',
        facetName: 'color',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5494',
          in: null
        }
      },
      {
        count: 9,
        label: 'White',
        facetName: 'color',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5495',
          in: null
        }
      },
      {
        count: 16,
        label: 'Yellow',
        facetName: 'color',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5496',
          in: null
        }
      }
    ]
  },
  {
    name: 'material',
    label: 'Material',
    options: [
      {
        count: 16,
        label: 'Cotton',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5469',
          in: null
        }
      },
      {
        count: 2,
        label: 'Mesh',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5472',
          in: null
        }
      },
      {
        count: 10,
        label: 'Nylon',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5473',
          in: null
        }
      },
      {
        count: 22,
        label: 'Polyester',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5474',
          in: null
        }
      },
      {
        count: 9,
        label: 'Cocona&reg; performance fabric',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5578',
          in: null
        }
      },
      {
        count: 6,
        label: 'Fleece',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5580',
          in: null
        }
      },
      {
        count: 2,
        label: 'Hemp',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5581',
          in: null
        }
      },
      {
        count: 1,
        label: 'Jersey',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5582',
          in: null
        }
      },
      {
        count: 1,
        label: 'LumaTech&trade;',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5583',
          in: null
        }
      },
      {
        count: 6,
        label: 'Lycra&reg;',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5584',
          in: null
        }
      },
      {
        count: 1,
        label: 'Microfiber',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5585',
          in: null
        }
      },
      {
        count: 13,
        label: 'Spandex',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5586',
          in: null
        }
      },
      {
        count: 3,
        label: 'HeatTec&reg;',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5587',
          in: null
        }
      },
      {
        count: 5,
        label: 'EverCool&trade;',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5588',
          in: null
        }
      },
      {
        count: 9,
        label: 'Organic Cotton',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5589',
          in: null
        }
      },
      {
        count: 1,
        label: 'TENCEL',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5590',
          in: null
        }
      },
      {
        count: 6,
        label: 'CoolTech&trade;',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5591',
          in: null
        }
      },
      {
        count: 4,
        label: 'Wool',
        facetName: 'material',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5594',
          in: null
        }
      }
    ]
  },
  {
    name: 'size',
    label: 'Size',
    options: [
      {
        count: 49,
        label: 'XS',
        facetName: 'size',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5602',
          in: null
        }
      },
      {
        count: 50,
        label: 'S',
        facetName: 'size',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5603',
          in: null
        }
      },
      {
        count: 50,
        label: 'M',
        facetName: 'size',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5604',
          in: null
        }
      },
      {
        count: 50,
        label: 'L',
        facetName: 'size',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5605',
          in: null
        }
      },
      {
        count: 49,
        label: 'XL',
        facetName: 'size',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5606',
          in: null
        }
      }
    ]
  },
  {
    name: 'eco_collection',
    label: 'Eco Collection',
    options: [
      {
        count: 38,
        label: '0',
        facetName: 'eco_collection',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '0',
          in: null
        }
      },
      {
        count: 12,
        label: '1',
        facetName: 'eco_collection',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '1',
          in: null
        }
      }
    ]
  },
  {
    name: 'performance_fabric',
    label: 'Performance Fabric',
    options: [
      {
        count: 36,
        label: '0',
        facetName: 'performance_fabric',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '0',
          in: null
        }
      },
      {
        count: 15,
        label: '1',
        facetName: 'performance_fabric',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '1',
          in: null
        }
      }
    ]
  },
  {
    name: 'erin_recommends',
    label: 'Erin Recommends',
    options: [
      {
        count: 39,
        label: '0',
        facetName: 'erin_recommends',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '0',
          in: null
        }
      },
      {
        count: 11,
        label: '1',
        facetName: 'erin_recommends',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '1',
          in: null
        }
      }
    ]
  },
  {
    name: 'new',
    label: 'New',
    options: [
      {
        count: 37,
        label: '0',
        facetName: 'new',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '0',
          in: null
        }
      },
      {
        count: 13,
        label: '1',
        facetName: 'new',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '1',
          in: null
        }
      }
    ]
  },
  {
    name: 'sale',
    label: 'Sale',
    options: [
      {
        count: 39,
        label: '0',
        facetName: 'sale',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '0',
          in: null
        }
      },
      {
        count: 12,
        label: '1',
        facetName: 'sale',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '1',
          in: null
        }
      }
    ]
  },
  {
    name: 'style_general',
    label: 'Style General',
    options: [
      {
        count: 4,
        label: 'Insulated',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5552',
          in: null
        }
      },
      {
        count: 12,
        label: 'Jacket',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5553',
          in: null
        }
      },
      {
        count: 6,
        label: 'Lightweight',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5555',
          in: null
        }
      },
      {
        count: 5,
        label: 'Hooded',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5556',
          in: null
        }
      },
      {
        count: 1,
        label: 'Heavy Duty',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5557',
          in: null
        }
      },
      {
        count: 2,
        label: 'Rain Coat',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5558',
          in: null
        }
      },
      {
        count: 3,
        label: 'Hard Shell',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5559',
          in: null
        }
      },
      {
        count: 8,
        label: 'Soft Shell',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5560',
          in: null
        }
      },
      {
        count: 4,
        label: 'Windbreaker',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5561',
          in: null
        }
      },
      {
        count: 5,
        label: '&frac14; zip',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5563',
          in: null
        }
      },
      {
        count: 12,
        label: 'Full Zip',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5564',
          in: null
        }
      },
      {
        count: 2,
        label: 'Reversible',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5565',
          in: null
        }
      },
      {
        count: 5,
        label: 'Bra',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5566',
          in: null
        }
      },
      {
        count: 5,
        label: 'Sweatshirt',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5568',
          in: null
        }
      },
      {
        count: 9,
        label: 'Tank',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5570',
          in: null
        }
      },
      {
        count: 12,
        label: 'Tee',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5571',
          in: null
        }
      },
      {
        count: 10,
        label: 'Pullover',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5572',
          in: null
        }
      },
      {
        count: 9,
        label: 'Hoodie',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5573',
          in: null
        }
      },
      {
        count: 1,
        label: 'Camisole',
        facetName: 'style_general',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5577',
          in: null
        }
      }
    ]
  },
  {
    name: 'pattern',
    label: 'Pattern',
    options: [
      {
        count: 1,
        label: 'Checked',
        facetName: 'pattern',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5629',
          in: null
        }
      },
      {
        count: 2,
        label: 'Color-Blocked',
        facetName: 'pattern',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5630',
          in: null
        }
      },
      {
        count: 46,
        label: 'Solid',
        facetName: 'pattern',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5632',
          in: null
        }
      },
      {
        count: 1,
        label: 'Striped',
        facetName: 'pattern',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5634',
          in: null
        }
      }
    ]
  },
  {
    name: 'climate',
    label: 'Climate',
    options: [
      {
        count: 8,
        label: 'All-Weather',
        facetName: 'climate',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5637',
          in: null
        }
      },
      {
        count: 4,
        label: 'Cold',
        facetName: 'climate',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5638',
          in: null
        }
      },
      {
        count: 17,
        label: 'Cool',
        facetName: 'climate',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5639',
          in: null
        }
      },
      {
        count: 35,
        label: 'Indoor',
        facetName: 'climate',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5640',
          in: null
        }
      },
      {
        count: 16,
        label: 'Mild',
        facetName: 'climate',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5641',
          in: null
        }
      },
      {
        count: 2,
        label: 'Rainy',
        facetName: 'climate',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5642',
          in: null
        }
      },
      {
        count: 21,
        label: 'Spring',
        facetName: 'climate',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5643',
          in: null
        }
      },
      {
        count: 28,
        label: 'Warm',
        facetName: 'climate',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5644',
          in: null
        }
      },
      {
        count: 8,
        label: 'Windy',
        facetName: 'climate',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5645',
          in: null
        }
      },
      {
        count: 6,
        label: 'Wintry',
        facetName: 'climate',
        isSelected: false,
        value: {
          __typename: 'FacetEqualValue',
          eq: '5646',
          in: null
        }
      }
    ]
  }
];

export const defaultProducts: GetProductsQuery['products']['items'] = [
  {
    __typename: 'SimpleProduct',
    type: ProductType.Simple,
    id: '36',
    name: 'Aim Analog Watch',
    sku: 'mock-sku',
    url: '/gear/watches/aim-analog-watch.html',
    price: {
      value: 4500,
      currency: 'GBP'
    },
    thumbnailImage: {
      alt: 'Aim Analog Watch',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/g/mg04-bk-0.jpg'
    }
  },
  {
    __typename: 'SimpleProduct',
    type: ProductType.Simple,
    id: '37',
    name: 'Endurance Watch',
    sku: 'mock-sku',
    url: '/gear/watches/endurance-watch.html',
    price: {
      value: 4900,
      currency: 'GBP'
    },
    thumbnailImage: {
      alt: 'Endurance Watch',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/g/mg01-bk-0.jpg'
    }
  },
  {
    __typename: 'SimpleProduct',
    type: ProductType.Simple,
    id: '38',
    name: 'Summit Watch',
    sku: 'mock-sku',
    url: '/gear/watches/summit-watch.html',
    price: {
      value: 5400,
      currency: 'GBP'
    },
    thumbnailImage: {
      alt: 'Summit Watch',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/g/mg03-br-0.jpg'
    }
  },
  {
    __typename: 'SimpleProduct',
    type: ProductType.Simple,
    id: '39',
    name: 'Cruise Dual Analog Watch',
    sku: 'mock-sku',
    url: '/gear/watches/cruise-dual-analog-watch.html',
    price: {
      value: 5500,
      currency: 'GBP'
    },
    thumbnailImage: {
      alt: 'Cruise Dual Analog Watch',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/g/mg05-br-0.jpg'
    }
  },
  {
    __typename: 'SimpleProduct',
    type: ProductType.Simple,
    id: '40',
    name: 'Dash Digital Watch',
    sku: 'mock-sku',
    url: '/gear/watches/dash-digital-watch.html',
    price: {
      value: 9200,
      currency: 'GBP'
    },
    thumbnailImage: {
      alt: 'Dash Digital Watch',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/m/g/mg02-bk-0.jpg'
    }
  },
  {
    __typename: 'SimpleProduct',
    type: ProductType.Simple,
    id: '41',
    name: 'Luma Analog Watch',
    sku: 'mock-sku',
    url: '/gear/watches/luma-analog-watch.html',
    price: {
      value: 4300,
      currency: 'GBP'
    },
    thumbnailImage: {
      alt: 'Luma Analog Watch',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/w/g/wg09-gr-0.jpg'
    }
  },
  {
    __typename: 'SimpleProduct',
    type: ProductType.Simple,
    id: '42',
    name: 'Bolo Sport Watch',
    sku: 'mock-sku',
    url: '/gear/watches/bolo-sport-watch.html',
    price: {
      value: 4900,
      currency: 'GBP'
    },
    thumbnailImage: {
      alt: 'Bolo Sport Watch',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/w/g/wg01-bk-0.jpg'
    }
  },
  {
    __typename: 'SimpleProduct',
    type: ProductType.Simple,
    id: '43',
    name: 'Clamber Watch',
    sku: 'mock-sku',
    url: '/gear/watches/clamber-watch.html',
    price: {
      value: 5400,
      currency: 'GBP'
    },
    thumbnailImage: {
      alt: 'Clamber Watch',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/w/g/wg03-gr-0.jpg'
    }
  },
  {
    __typename: 'SimpleProduct',
    type: ProductType.Simple,
    id: '44',
    name: 'Didi Sport Watch',
    sku: 'mock-sku',
    url: '/gear/watches/didi-sport-watch.html',
    price: {
      value: 9200,
      currency: 'GBP'
    },
    thumbnailImage: {
      alt: 'Didi Sport Watch',
      url:
        'https://magento-int.viper.webpipeline.net/media/catalog/product/cache/e73f31ae33f68f0f603b4fb488de3756/w/g/wg02-bk-0.jpg'
    }
  }
];

export const defaultProductsAlphaSorted: GetProductsQuery['products']['items'] = [
  defaultProducts[0],
  defaultProducts[6],
  defaultProducts[7],
  defaultProducts[3],
  defaultProducts[4],
  defaultProducts[8],
  defaultProducts[1],
  defaultProducts[5],
  defaultProducts[2]
];

export const defaultProductsFiltered: GetProductsQuery['products']['items'] = [
  defaultProducts[0],
  defaultProducts[2],
  defaultProducts[7]
];

export const getProductsMock = ({
  filters = [],
  pagination = { offset: 0, limit: 12 },
  sort = { criteria: ProductSortCriteria.Position, order: ProductSortOrder.Asc },
  searchTerm,
  data = {
    products: {
      __typename: 'ProductList',
      items: defaultProducts,
      total: defaultProducts.length * 3,
      facets: defaultFacets
    }
  },
  loading = false,
  error = undefined
}: Partial<GetProductsQueryVariables> & Partial<GetProductsQueryHookResult> = {}) => ({
  request: {
    query: GetProductsDocument,
    variables: {
      filters,
      pagination,
      sort,
      searchTerm
    }
  },
  result: {
    data,
    loading,
    error
  }
});
