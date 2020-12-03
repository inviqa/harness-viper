import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};





/** Category page */
export type CategoryPage = Page & {
  __typename?: 'CategoryPage';
  /** Page identifier */
  id: Scalars['String'];
  /** Page type */
  type: Scalars['String'];
  /** Page locale */
  locale: Scalars['String'];
  /** Category */
  category: Category;
  /** Products in category */
  products: ProductList;
};


/** Category page */
export type CategoryPageProductsArgs = {
  filters?: Maybe<Array<ProductFilterInput>>;
  sort?: Maybe<ProductSortInput>;
  pagination?: Maybe<ProductPaginationInput>;
};

/** CMS Article page */
export type CmsArticlePage = Page & {
  __typename?: 'CmsArticlePage';
  /** Page identifier */
  id: Scalars['String'];
  /** Page type */
  type: Scalars['String'];
  /** Page locale */
  locale: Scalars['String'];
  /** Cms Article data */
  cmsArticle?: Maybe<CmsArticle>;
};

/** CMS Homepage page */
export type CmsHomepagePage = Page & {
  __typename?: 'CmsHomepagePage';
  /** Page identifier */
  id: Scalars['String'];
  /** Page type */
  type: Scalars['String'];
  /** Page locale */
  locale: Scalars['String'];
  /** Cms Homepage data */
  homePage?: Maybe<CmsHomepage>;
};

/** CMS Basic page */
export type CmsPagePage = Page & {
  __typename?: 'CmsPagePage';
  /** Page identifier */
  id: Scalars['String'];
  /** Page type */
  type: Scalars['String'];
  /** Page locale */
  locale: Scalars['String'];
  /** Cms basic content data */
  cmsBasicContent?: Maybe<CmsBasicContent>;
};

/** Page interface (all the pages should implement this) */
export type Page = {
  /** Page identifier */
  id: Scalars['String'];
  /** Page type */
  type: Scalars['String'];
  /** Page locale */
  locale: Scalars['String'];
};

/** Input containing basic page information */
export type PageInput = {
  /** Page identifier */
  id: Scalars['String'];
  /** Page type */
  type: Scalars['String'];
};

/** Product page */
export type ProductPage = Page & {
  __typename?: 'ProductPage';
  /** Page identifier */
  id: Scalars['String'];
  /** Page type */
  type: Scalars['String'];
  /** Page locale */
  locale: Scalars['String'];
  /** Product */
  product: Product;
};

/** Route */
export type Route = {
  __typename?: 'Route';
  /** URL path */
  path: Scalars['String'];
  /** Page under the URL path */
  page: Page;
};

export type Menu = {
  __typename?: 'Menu';
  name: Scalars['String'];
  items: Array<MenuItem>;
};

export type MenuItem = {
  __typename?: 'MenuItem';
  name: Scalars['String'];
  link: Scalars['String'];
  level: Scalars['Int'];
  items: Array<MenuItem>;
};

/** CMS article data */
export type CmsArticle = {
  __typename?: 'CmsArticle';
  /** ID */
  id: Scalars['String'];
  /** Article title */
  title: Scalars['String'];
  /** Article body */
  body: CmsHtmlField;
  /** Article summary (short text) */
  summary: CmsHtmlField;
  /** Article URL */
  url: CmsUrl;
  /** Created date */
  createdAt: Scalars['String'];
  /** Author */
  author: CmsUser;
  /** Article image */
  image?: Maybe<CmsImage>;
  /** Layout information passed to the client renderer */
  layout?: Maybe<CmsLayout>;
};

/** CMS basic page data */
export type CmsBasicContent = {
  __typename?: 'CmsBasicContent';
  /** ID */
  id: Scalars['String'];
  /** Article title */
  title: Scalars['String'];
  /** Article body */
  body: CmsHtmlField;
  /** Article summary (short text) */
  summary: CmsHtmlField;
  /** Article URL */
  url: CmsUrl;
  /** Created date */
  createdAt: Scalars['String'];
  /** Author */
  author: CmsUser;
};

export type CmsHtmlField = {
  __typename?: 'CmsHtmlField';
  raw: Scalars['String'];
  html: Scalars['String'];
};

export type CmsImage = {
  __typename?: 'CmsImage';
  alt: Scalars['String'];
  sizes: Array<CmsImageVersion>;
};

export type CmsImageVersion = {
  __typename?: 'CmsImageVersion';
  size: Scalars['String'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

/** Layout (a set of layout items (rows)) */
export type CmsLayout = {
  __typename?: 'CmsLayout';
  /** Layout items (rows) */
  items: Array<CmsLayoutItem>;
};

/** Layout item (most likely a row) */
export type CmsLayoutItem = {
  __typename?: 'CmsLayoutItem';
  /** Layout ID */
  layout: Scalars['String'];
  /** Label for the layout */
  label: Scalars['String'];
  /** The regions of the layout */
  regions: Array<CmsLayoutItemRegion>;
};

/** Layout item component (what component to render, and how) */
export type CmsLayoutItemComponent = {
  __typename?: 'CmsLayoutItemComponent';
  /** The configuration for displaying the layout item */
  configuration: CmsLayoutItemComponentConfig;
  /** The label of the layout item */
  label?: Maybe<Scalars['String']>;
  /** The component to be displayed (What should the client render in this place) */
  component: Scalars['String'];
};

/** Layout item component config (how to display a component) */
export type CmsLayoutItemComponentConfig = {
  __typename?: 'CmsLayoutItemComponentConfig';
  /** Whether the label should be displayed or not */
  displayLabel: Scalars['Boolean'];
};

/** Layout item region (most likely a column) */
export type CmsLayoutItemRegion = {
  __typename?: 'CmsLayoutItemRegion';
  /** Region ID */
  region: Scalars['String'];
  /** Region configuration */
  configuration: CmsLayoutItemRegionConfig;
  /** The components of the region */
  components: Array<CmsLayoutItemComponent>;
};

/** Layout item config */
export type CmsLayoutItemRegionConfig = {
  __typename?: 'CmsLayoutItemRegionConfig';
  /** The width of the region in percentage */
  width: Scalars['Int'];
};

/** CMS URL */
export type CmsUrl = {
  __typename?: 'CmsUrl';
  /** URL path "node/ID" */
  path: Scalars['String'];
  /** URL alias "/lorem-ipsum" */
  alias?: Maybe<Scalars['String']>;
};

/** CMS User */
export type CmsUser = {
  __typename?: 'CmsUser';
  /** User id */
  id: Scalars['String'];
  /** User name */
  name: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type Facet = {
  __typename?: 'Facet';
  name: Scalars['String'];
  label: Scalars['String'];
  options: Array<FacetOption>;
};

export type FacetEqualValue = {
  __typename?: 'FacetEqualValue';
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FacetMatchValue = {
  __typename?: 'FacetMatchValue';
  match?: Maybe<Scalars['String']>;
};

export type FacetOption = {
  __typename?: 'FacetOption';
  count: Scalars['Int'];
  facetName: Scalars['String'];
  isSelected: Scalars['Boolean'];
  label: Scalars['String'];
  value?: Maybe<FacetValue>;
};

export type FacetRangeValue = {
  __typename?: 'FacetRangeValue';
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type FacetValue = FacetEqualValue | FacetMatchValue | FacetRangeValue;

export type FilterValueInput = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  match?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type Money = {
  __typename?: 'Money';
  value: Scalars['Float'];
  currency: Scalars['String'];
};

/** Product */
export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  sku: Scalars['String'];
  name: Scalars['String'];
  title: Scalars['String'];
  price: Money;
  description: Scalars['String'];
  image?: Maybe<ProductImage>;
  thumbnailImage?: Maybe<ProductImage>;
  type: ProductType;
  url: Scalars['String'];
  gallery?: Maybe<Array<ProductImage>>;
  /** All available product options for configurable types */
  options?: Maybe<Array<ProductOption>>;
  /** Product variants for each full product selection for configurable types */
  variants?: Maybe<Array<ProductVariant>>;
};

export type ProductFilterInput = {
  name: Scalars['String'];
  value: FilterValueInput;
};

export type ProductImage = {
  __typename?: 'ProductImage';
  alt: Scalars['String'];
  url: Scalars['String'];
};

export type ProductList = {
  __typename?: 'ProductList';
  total: Scalars['Int'];
  items: Array<Product>;
  facets: Array<Facet>;
  sortCriterias: Array<ProductSortCriteria>;
};

/**
 * Product option.
 * E.g: color
 */
export type ProductOption = {
  __typename?: 'ProductOption';
  /** Product option name */
  name: Scalars['String'];
  /** Product option label */
  label: Scalars['String'];
  /** Possible product option values */
  values: Array<Maybe<ProductOptionValue>>;
};

/**
 * A concrete product option that you can select.
 * E.g: the color green
 */
export type ProductOptionValue = {
  __typename?: 'ProductOptionValue';
  /** Product option name (E.g: color) */
  option: Scalars['String'];
  /** Product option value id (E.g: green) */
  id: Scalars['String'];
  /** Product option value label */
  label: Scalars['String'];
};

export type ProductPaginationInput = {
  offset: Scalars['Int'];
  limit: Scalars['Int'];
};

export const ProductSortCriteria = {
  Relevance: 'RELEVANCE',
  Position: 'POSITION',
  Price: 'PRICE',
  Name: 'NAME'
} as const;

export type ProductSortCriteria = typeof ProductSortCriteria[keyof typeof ProductSortCriteria];
export type ProductSortInput = {
  criteria: ProductSortCriteria;
  order: ProductSortOrder;
};

export const ProductSortOrder = {
  Asc: 'ASC',
  Desc: 'DESC'
} as const;

export type ProductSortOrder = typeof ProductSortOrder[keyof typeof ProductSortOrder];
export const ProductType = {
  Simple: 'SIMPLE',
  Configurable: 'CONFIGURABLE',
  Other: 'OTHER'
} as const;

export type ProductType = typeof ProductType[keyof typeof ProductType];
/** A product variant. */
export type ProductVariant = {
  __typename?: 'ProductVariant';
  /** A full selection of product options that define a variant */
  options: Array<ProductOptionValue>;
  /** The simple product that matches the selected options */
  product: Product;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type AuthUser = {
  __typename?: 'AuthUser';
  authToken: Scalars['String'];
  refreshToken: Scalars['String'];
  user: User;
};

export type Address = {
  __typename?: 'Address';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  country: Scalars['String'];
  city: Scalars['String'];
  postcode: Scalars['String'];
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  country: Scalars['String'];
  city: Scalars['String'];
  postcode: Scalars['String'];
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['String'];
  numberOfItems: Scalars['Float'];
  items: Array<CartItem>;
  totals: CartTotals;
  couponCodes: Array<CouponCode>;
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['String'];
  quantity: Scalars['Float'];
  unitPrice: Money;
  rowTotal: Money;
  rowTotalDiscount: Money;
  product: Product;
  productOptions?: Maybe<Array<CartItemProductOptionValue>>;
};

export type CartItemInput = {
  sku: Scalars['String'];
  variantSku?: Maybe<Scalars['String']>;
  quantity: Scalars['Float'];
};

export type CartItemProductOptionValue = {
  __typename?: 'CartItemProductOptionValue';
  /** Product option name (E.g: color) */
  option: Scalars['String'];
  /** Product option label */
  optionLabel: Scalars['String'];
  /** Product option value id (E.g: green) */
  id: Scalars['String'];
  /** Product option value label */
  label: Scalars['String'];
};

export type CartItemUpdateInput = {
  id: Scalars['String'];
  quantity: Scalars['Float'];
};

export type CartTotals = {
  __typename?: 'CartTotals';
  taxes: Array<MoneyWithLabel>;
  discounts: Array<MoneyWithLabel>;
  grandTotal: Money;
  subtotalExcludingTax: Money;
  subtotalIncludingTax: Money;
  subtotalWithDiscountExcludingTax: Money;
};

export type Checkout = {
  __typename?: 'Checkout';
  id: Scalars['String'];
  cart: Cart;
  customer?: Maybe<Customer>;
  shippingAddress?: Maybe<Address>;
  billingAddress?: Maybe<Address>;
  shippingMethod?: Maybe<ShippingMethod>;
  paymentMethod?: Maybe<PaymentMethod>;
  availableShippingMethods?: Maybe<Array<ShippingMethod>>;
  availablePaymentMethods?: Maybe<Array<PaymentMethod>>;
};

export type CouponCode = {
  __typename?: 'CouponCode';
  code: Scalars['String'];
};

export type Customer = {
  __typename?: 'Customer';
  email?: Maybe<Scalars['String']>;
};

export type MoneyWithLabel = {
  __typename?: 'MoneyWithLabel';
  label: Scalars['String'];
  amount: Money;
};

export type Order = {
  __typename?: 'Order';
  orderNumber: Scalars['String'];
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  id: Scalars['String'];
  label: Scalars['String'];
  note?: Maybe<Scalars['String']>;
};

export type PlaceOrderResult = {
  __typename?: 'PlaceOrderResult';
  order: Order;
  checkout: Checkout;
};

export type ShippingMethod = {
  __typename?: 'ShippingMethod';
  id: Scalars['String'];
  label: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  priceIncludingTax: Money;
  priceExcludingTax: Money;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type WebsiteConfig = {
  __typename?: 'WebsiteConfig';
  id: Scalars['String'];
  locale: Scalars['String'];
  baseUrlPath: Scalars['String'];
  currency: Scalars['String'];
  countries: Array<Country>;
};

export type CmsHomepage = {
  __typename?: 'CmsHomepage';
  id: Scalars['String'];
  locale: Scalars['String'];
  productBanner: ProductBanner;
  productGrid: ProductGridBanner;
};

export type ProductBanner = {
  __typename?: 'ProductBanner';
  text: CmsHtmlField;
  image?: Maybe<CmsImage>;
  product?: Maybe<Product>;
};

export type ProductGridBanner = {
  __typename?: 'ProductGridBanner';
  title: Scalars['String'];
  products: Array<Maybe<Product>>;
};

export type Query = {
  __typename?: 'Query';
  helloWorld: Scalars['String'];
  /** Get the route by path */
  routeByPath?: Maybe<Route>;
  /** Get the route by basic page info */
  routeByPage?: Maybe<Route>;
  menu?: Maybe<Menu>;
  /** Get a CMS article */
  cmsArticle?: Maybe<CmsArticle>;
  products: ProductList;
  userById?: Maybe<User>;
  me?: Maybe<User>;
  cart: Cart;
  checkout: Checkout;
  websiteConfig?: Maybe<WebsiteConfig>;
};


export type QueryRouteByPathArgs = {
  path: Scalars['String'];
};


export type QueryRouteByPageArgs = {
  page: PageInput;
};


export type QueryMenuArgs = {
  name: Scalars['String'];
};


export type QueryCmsArticleArgs = {
  id: Scalars['String'];
};


export type QueryProductsArgs = {
  filters?: Maybe<Array<ProductFilterInput>>;
  sort?: Maybe<ProductSortInput>;
  pagination?: Maybe<ProductPaginationInput>;
  searchTerm?: Maybe<Scalars['String']>;
};


export type QueryUserByIdArgs = {
  id: Scalars['String'];
};


export type QueryCartArgs = {
  cartId: Scalars['String'];
};


export type QueryCheckoutArgs = {
  checkoutId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<AuthUser>;
  refreshAuthToken?: Maybe<AuthUser>;
  createCart: Cart;
  addToCart: Cart;
  updateCart: Cart;
  addCouponCodeToCart: Cart;
  removeCouponCodeFromCart: Cart;
  createCheckout: Checkout;
  setCheckoutShippingAddress: Checkout;
  setCheckoutBillingAddress: Checkout;
  setCheckoutShippingMethod: Checkout;
  setCheckoutPaymentMethod: Checkout;
  placeOrder: PlaceOrderResult;
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRefreshAuthTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationAddToCartArgs = {
  cartId: Scalars['String'];
  items: Array<CartItemInput>;
};


export type MutationUpdateCartArgs = {
  cartId: Scalars['String'];
  items: Array<CartItemUpdateInput>;
};


export type MutationAddCouponCodeToCartArgs = {
  cartId: Scalars['String'];
  couponCode: Scalars['String'];
};


export type MutationRemoveCouponCodeFromCartArgs = {
  cartId: Scalars['String'];
};


export type MutationCreateCheckoutArgs = {
  cartId: Scalars['String'];
};


export type MutationSetCheckoutShippingAddressArgs = {
  checkoutId: Scalars['String'];
  address: AddressInput;
};


export type MutationSetCheckoutBillingAddressArgs = {
  checkoutId: Scalars['String'];
  address: AddressInput;
};


export type MutationSetCheckoutShippingMethodArgs = {
  checkoutId: Scalars['String'];
  shippingMethodId: Scalars['String'];
};


export type MutationSetCheckoutPaymentMethodArgs = {
  checkoutId: Scalars['String'];
  paymentMethodId: Scalars['String'];
};


export type MutationPlaceOrderArgs = {
  checkoutId: Scalars['String'];
};

export type Sort = {
  __typename?: 'Sort';
  criteria: ProductSortCriteria;
  order: ProductSortOrder;
};

export type FilterValue = {
  __typename?: 'FilterValue';
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  match?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type Filter = {
  __typename?: 'Filter';
  name: Scalars['String'];
  value: FilterValue;
};


export type AddCouponCodeToCartMutationVariables = Exact<{
  cartId: Scalars['String'];
  couponCode: Scalars['String'];
}>;


export type AddCouponCodeToCartMutation = (
  { __typename?: 'Mutation' }
  & { addCouponCodeToCart: (
    { __typename?: 'Cart' }
    & CartFragmentFragment
  ) }
);

export type AddToCartMutationVariables = Exact<{
  cartId: Scalars['String'];
  items: Array<CartItemInput>;
}>;


export type AddToCartMutation = (
  { __typename?: 'Mutation' }
  & { addToCart: (
    { __typename?: 'Cart' }
    & CartFragmentFragment
  ) }
);

export type CartFragmentFragment = (
  { __typename?: 'Cart' }
  & Pick<Cart, 'id' | 'numberOfItems'>
  & { items: Array<(
    { __typename?: 'CartItem' }
    & Pick<CartItem, 'id' | 'quantity'>
    & { rowTotal: (
      { __typename?: 'Money' }
      & Pick<Money, 'value' | 'currency'>
    ), product: (
      { __typename?: 'Product' }
      & Pick<Product, 'sku' | 'name' | 'url'>
      & { thumbnailImage?: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'alt' | 'url'>
      )> }
    ), productOptions?: Maybe<Array<(
      { __typename?: 'CartItemProductOptionValue' }
      & Pick<CartItemProductOptionValue, 'option' | 'optionLabel' | 'id' | 'label'>
    )>> }
  )>, totals: (
    { __typename?: 'CartTotals' }
    & { subtotalIncludingTax: (
      { __typename?: 'Money' }
      & Pick<Money, 'value' | 'currency'>
    ), discounts: Array<(
      { __typename?: 'MoneyWithLabel' }
      & Pick<MoneyWithLabel, 'label'>
      & { amount: (
        { __typename?: 'Money' }
        & Pick<Money, 'value' | 'currency'>
      ) }
    )>, grandTotal: (
      { __typename?: 'Money' }
      & Pick<Money, 'value' | 'currency'>
    ) }
  ), couponCodes: Array<(
    { __typename?: 'CouponCode' }
    & Pick<CouponCode, 'code'>
  )> }
);

export type GetCartQueryVariables = Exact<{
  cartId: Scalars['String'];
}>;


export type GetCartQuery = (
  { __typename?: 'Query' }
  & { cart: (
    { __typename?: 'Cart' }
    & CartFragmentFragment
  ) }
);

export type CreateCartMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCartMutation = (
  { __typename?: 'Mutation' }
  & { createCart: (
    { __typename?: 'Cart' }
    & CartFragmentFragment
  ) }
);

export type RemoveCouponCodeFromCartMutationVariables = Exact<{
  cartId: Scalars['String'];
}>;


export type RemoveCouponCodeFromCartMutation = (
  { __typename?: 'Mutation' }
  & { removeCouponCodeFromCart: (
    { __typename?: 'Cart' }
    & CartFragmentFragment
  ) }
);

export type UpdateCartMutationVariables = Exact<{
  cartId: Scalars['String'];
  items: Array<CartItemUpdateInput>;
}>;


export type UpdateCartMutation = (
  { __typename?: 'Mutation' }
  & { updateCart: (
    { __typename?: 'Cart' }
    & CartFragmentFragment
  ) }
);

export type AddressFragmentFragment = (
  { __typename?: 'Address' }
  & Pick<Address, 'email' | 'firstName' | 'lastName' | 'country' | 'city' | 'postcode' | 'address1' | 'address2' | 'phoneNumber' | 'company'>
);

export type CheckoutFragmentFragment = (
  { __typename?: 'Checkout' }
  & Pick<Checkout, 'id'>
  & { cart: (
    { __typename?: 'Cart' }
    & CartFragmentFragment
  ), customer?: Maybe<(
    { __typename?: 'Customer' }
    & CustomerFragmentFragment
  )>, availableShippingMethods?: Maybe<Array<(
    { __typename?: 'ShippingMethod' }
    & ShippingMethodFragmentFragment
  )>>, availablePaymentMethods?: Maybe<Array<(
    { __typename?: 'PaymentMethod' }
    & PaymentMethodFragmentFragment
  )>>, shippingAddress?: Maybe<(
    { __typename?: 'Address' }
    & AddressFragmentFragment
  )>, shippingMethod?: Maybe<(
    { __typename?: 'ShippingMethod' }
    & ShippingMethodFragmentFragment
  )>, paymentMethod?: Maybe<(
    { __typename?: 'PaymentMethod' }
    & PaymentMethodFragmentFragment
  )>, billingAddress?: Maybe<(
    { __typename?: 'Address' }
    & AddressFragmentFragment
  )> }
);

export type GetCheckoutQueryVariables = Exact<{
  checkoutId: Scalars['String'];
}>;


export type GetCheckoutQuery = (
  { __typename?: 'Query' }
  & { checkout: (
    { __typename?: 'Checkout' }
    & CheckoutFragmentFragment
  ) }
);

export type CreateCheckoutMutationVariables = Exact<{
  cartId: Scalars['String'];
}>;


export type CreateCheckoutMutation = (
  { __typename?: 'Mutation' }
  & { createCheckout: (
    { __typename?: 'Checkout' }
    & CheckoutFragmentFragment
  ) }
);

export type CustomerFragmentFragment = (
  { __typename?: 'Customer' }
  & Pick<Customer, 'email'>
);

export type PaymentMethodFragmentFragment = (
  { __typename?: 'PaymentMethod' }
  & Pick<PaymentMethod, 'id' | 'label' | 'note'>
);

export type SetCheckoutBillingAddressMutationVariables = Exact<{
  checkoutId: Scalars['String'];
  address: AddressInput;
}>;


export type SetCheckoutBillingAddressMutation = (
  { __typename?: 'Mutation' }
  & { setCheckoutBillingAddress: (
    { __typename?: 'Checkout' }
    & CheckoutFragmentFragment
  ) }
);

export type SetCheckoutPaymentMethodMutationVariables = Exact<{
  checkoutId: Scalars['String'];
  paymentMethodId: Scalars['String'];
}>;


export type SetCheckoutPaymentMethodMutation = (
  { __typename?: 'Mutation' }
  & { setCheckoutPaymentMethod: (
    { __typename?: 'Checkout' }
    & CheckoutFragmentFragment
  ) }
);

export type SetCheckoutShippingAddressMutationVariables = Exact<{
  checkoutId: Scalars['String'];
  address: AddressInput;
}>;


export type SetCheckoutShippingAddressMutation = (
  { __typename?: 'Mutation' }
  & { setCheckoutShippingAddress: (
    { __typename?: 'Checkout' }
    & CheckoutFragmentFragment
  ) }
);

export type SetCheckoutShippingMethodMutationVariables = Exact<{
  checkoutId: Scalars['String'];
  shippingMethodId: Scalars['String'];
}>;


export type SetCheckoutShippingMethodMutation = (
  { __typename?: 'Mutation' }
  & { setCheckoutShippingMethod: (
    { __typename?: 'Checkout' }
    & CheckoutFragmentFragment
  ) }
);

export type ShippingMethodFragmentFragment = (
  { __typename?: 'ShippingMethod' }
  & Pick<ShippingMethod, 'id' | 'label'>
  & { priceIncludingTax: (
    { __typename?: 'Money' }
    & Pick<Money, 'value' | 'currency'>
  ) }
);

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesQuery = (
  { __typename?: 'Query' }
  & { websiteConfig?: Maybe<(
    { __typename?: 'WebsiteConfig' }
    & WebsiteConfigCountriesFragmentFragment
  )> }
);

export type WebsiteConfigCountriesFragmentFragment = (
  { __typename?: 'WebsiteConfig' }
  & { countries: Array<(
    { __typename?: 'Country' }
    & Pick<Country, 'id' | 'name'>
  )> }
);

export type PlaceOrderMutationVariables = Exact<{
  checkoutId: Scalars['String'];
}>;


export type PlaceOrderMutation = (
  { __typename?: 'Mutation' }
  & { placeOrder: (
    { __typename?: 'PlaceOrderResult' }
    & { checkout: (
      { __typename?: 'Checkout' }
      & CheckoutFragmentFragment
    ), order: (
      { __typename?: 'Order' }
      & Pick<Order, 'orderNumber'>
    ) }
  ) }
);

export type CategoryPageFragmentFragment = (
  { __typename?: 'CategoryPage' }
  & Pick<CategoryPage, 'id' | 'type' | 'locale'>
  & { category: (
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'title' | 'description'>
  ) }
);

export type CmsArticlePageFragmentFragment = (
  { __typename?: 'CmsArticlePage' }
  & Pick<CmsArticlePage, 'id' | 'type' | 'locale'>
  & { cmsArticle?: Maybe<(
    { __typename?: 'CmsArticle' }
    & Pick<CmsArticle, 'id' | 'title' | 'createdAt'>
    & { body: (
      { __typename?: 'CmsHtmlField' }
      & Pick<CmsHtmlField, 'raw' | 'html'>
    ), summary: (
      { __typename?: 'CmsHtmlField' }
      & Pick<CmsHtmlField, 'raw' | 'html'>
    ), url: (
      { __typename?: 'CmsUrl' }
      & Pick<CmsUrl, 'path' | 'alias'>
    ), author: (
      { __typename?: 'CmsUser' }
      & Pick<CmsUser, 'id' | 'name'>
    ), image?: Maybe<(
      { __typename?: 'CmsImage' }
      & Pick<CmsImage, 'alt'>
      & { sizes: Array<(
        { __typename?: 'CmsImageVersion' }
        & Pick<CmsImageVersion, 'width' | 'height' | 'size' | 'url'>
      )> }
    )>, layout?: Maybe<(
      { __typename?: 'CmsLayout' }
      & { items: Array<(
        { __typename?: 'CmsLayoutItem' }
        & Pick<CmsLayoutItem, 'layout' | 'label'>
        & { regions: Array<(
          { __typename?: 'CmsLayoutItemRegion' }
          & Pick<CmsLayoutItemRegion, 'region'>
          & { configuration: (
            { __typename?: 'CmsLayoutItemRegionConfig' }
            & Pick<CmsLayoutItemRegionConfig, 'width'>
          ), components: Array<(
            { __typename?: 'CmsLayoutItemComponent' }
            & Pick<CmsLayoutItemComponent, 'label' | 'component'>
            & { configuration: (
              { __typename?: 'CmsLayoutItemComponentConfig' }
              & Pick<CmsLayoutItemComponentConfig, 'displayLabel'>
            ) }
          )> }
        )> }
      )> }
    )> }
  )> }
);

export type CmsHomepagePageFragmentFragment = (
  { __typename?: 'CmsHomepagePage' }
  & Pick<CmsHomepagePage, 'id' | 'type' | 'locale'>
  & { homePage?: Maybe<(
    { __typename?: 'CmsHomepage' }
    & { productBanner: (
      { __typename?: 'ProductBanner' }
      & { text: (
        { __typename?: 'CmsHtmlField' }
        & Pick<CmsHtmlField, 'raw' | 'html'>
      ), image?: Maybe<(
        { __typename?: 'CmsImage' }
        & Pick<CmsImage, 'alt'>
        & { sizes: Array<(
          { __typename?: 'CmsImageVersion' }
          & Pick<CmsImageVersion, 'size' | 'url' | 'width' | 'height'>
        )> }
      )>, product?: Maybe<(
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'type' | 'sku' | 'name' | 'url'>
        & { price: (
          { __typename?: 'Money' }
          & Pick<Money, 'value' | 'currency'>
        ), thumbnailImage?: Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<ProductImage, 'alt' | 'url'>
        )> }
      )> }
    ), productGrid: (
      { __typename?: 'ProductGridBanner' }
      & Pick<ProductGridBanner, 'title'>
      & { products: Array<Maybe<(
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'type' | 'sku' | 'name' | 'url'>
        & { price: (
          { __typename?: 'Money' }
          & Pick<Money, 'value' | 'currency'>
        ), thumbnailImage?: Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<ProductImage, 'alt' | 'url'>
        )> }
      )>> }
    ) }
  )> }
);

export type CmsPagePageFragmentFragment = (
  { __typename?: 'CmsPagePage' }
  & Pick<CmsPagePage, 'id' | 'type' | 'locale'>
  & { cmsBasicContent?: Maybe<(
    { __typename?: 'CmsBasicContent' }
    & Pick<CmsBasicContent, 'id' | 'title' | 'createdAt'>
    & { body: (
      { __typename?: 'CmsHtmlField' }
      & Pick<CmsHtmlField, 'raw' | 'html'>
    ), summary: (
      { __typename?: 'CmsHtmlField' }
      & Pick<CmsHtmlField, 'raw' | 'html'>
    ), url: (
      { __typename?: 'CmsUrl' }
      & Pick<CmsUrl, 'path' | 'alias'>
    ), author: (
      { __typename?: 'CmsUser' }
      & Pick<CmsUser, 'id' | 'name'>
    ) }
  )> }
);

export type GetMenuQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetMenuQuery = (
  { __typename?: 'Query' }
  & { menu?: Maybe<(
    { __typename?: 'Menu' }
    & Pick<Menu, 'name'>
    & { items: Array<(
      { __typename?: 'MenuItem' }
      & Pick<MenuItem, 'name' | 'link' | 'level'>
      & { items: Array<(
        { __typename?: 'MenuItem' }
        & Pick<MenuItem, 'name' | 'link' | 'level'>
        & { items: Array<(
          { __typename?: 'MenuItem' }
          & Pick<MenuItem, 'name' | 'link' | 'level'>
        )> }
      )> }
    )> }
  )> }
);

export type GetPageByPathQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type GetPageByPathQuery = (
  { __typename?: 'Query' }
  & { routeByPath?: Maybe<(
    { __typename?: 'Route' }
    & Pick<Route, 'path'>
    & { page: (
      { __typename?: 'CategoryPage' }
      & CategoryPageFragmentFragment
    ) | (
      { __typename?: 'CmsArticlePage' }
      & CmsArticlePageFragmentFragment
    ) | (
      { __typename?: 'CmsHomepagePage' }
      & CmsHomepagePageFragmentFragment
    ) | (
      { __typename?: 'CmsPagePage' }
      & CmsPagePageFragmentFragment
    ) | (
      { __typename?: 'ProductPage' }
      & ProductPageFragmentFragment
    ) }
  )> }
);

export type ProductListFragmentFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'type' | 'sku' | 'name' | 'url'>
  & { price: (
    { __typename?: 'Money' }
    & Pick<Money, 'value' | 'currency'>
  ), thumbnailImage?: Maybe<(
    { __typename?: 'ProductImage' }
    & Pick<ProductImage, 'alt' | 'url'>
  )> }
);

export type ProductPageFragmentFragment = (
  { __typename?: 'ProductPage' }
  & Pick<ProductPage, 'id' | 'type' | 'locale'>
  & { product: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'sku' | 'name' | 'title' | 'url' | 'description' | 'type'>
    & { price: (
      { __typename?: 'Money' }
      & Pick<Money, 'value' | 'currency'>
    ), image?: Maybe<(
      { __typename?: 'ProductImage' }
      & Pick<ProductImage, 'alt' | 'url'>
    )>, gallery?: Maybe<Array<(
      { __typename?: 'ProductImage' }
      & Pick<ProductImage, 'alt' | 'url'>
    )>>, variants?: Maybe<Array<(
      { __typename?: 'ProductVariant' }
      & { options: Array<(
        { __typename?: 'ProductOptionValue' }
        & Pick<ProductOptionValue, 'option' | 'id' | 'label'>
      )>, product: (
        { __typename?: 'Product' }
        & Pick<Product, 'sku'>
        & { price: (
          { __typename?: 'Money' }
          & Pick<Money, 'value' | 'currency'>
        ) }
      ) }
    )>>, options?: Maybe<Array<(
      { __typename?: 'ProductOption' }
      & Pick<ProductOption, 'name' | 'label'>
      & { values: Array<Maybe<(
        { __typename?: 'ProductOptionValue' }
        & Pick<ProductOptionValue, 'option' | 'id' | 'label'>
      )>> }
    )>> }
  ) }
);

export type GetProductsQueryVariables = Exact<{
  filters?: Maybe<Array<ProductFilterInput>>;
  sort?: Maybe<ProductSortInput>;
  pagination: ProductPaginationInput;
  searchTerm?: Maybe<Scalars['String']>;
}>;


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { products: (
    { __typename?: 'ProductList' }
    & Pick<ProductList, 'total' | 'sortCriterias'>
    & { items: Array<(
      { __typename?: 'Product' }
      & ProductListFragmentFragment
    )>, facets: Array<(
      { __typename?: 'Facet' }
      & Pick<Facet, 'name' | 'label'>
      & { options: Array<(
        { __typename?: 'FacetOption' }
        & Pick<FacetOption, 'facetName' | 'count' | 'label' | 'isSelected'>
        & { value?: Maybe<(
          { __typename?: 'FacetEqualValue' }
          & Pick<FacetEqualValue, 'eq' | 'in'>
        ) | (
          { __typename?: 'FacetMatchValue' }
          & Pick<FacetMatchValue, 'match'>
        ) | (
          { __typename?: 'FacetRangeValue' }
          & Pick<FacetRangeValue, 'from' | 'to'>
        )> }
      )> }
    )> }
  ) }
);

export const CartFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]};
export const CustomerFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]};
export const ShippingMethodFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};
export const PaymentMethodFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}}]};
export const AddressFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}}]};
export const CheckoutFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};
export const WebsiteConfigCountriesFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteConfigCountriesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebsiteConfig"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]};
export const CategoryPageFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryPage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}]};
export const CmsArticlePageFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CmsArticlePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsArticlePage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cmsArticle"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"body"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"html"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"html"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"alias"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"regions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"region"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"configuration"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"configuration"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayLabel"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"component"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}}]};
export const CmsHomepagePageFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CmsHomepagePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsHomepagePage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"homePage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productBanner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"html"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productGrid"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]};
export const CmsPagePageFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CmsPagePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsPagePage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cmsBasicContent"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"body"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"html"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"html"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"alias"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}]};
export const ProductListFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]};
export const ProductPageFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductPage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"options"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"values"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}}]}}]}}]};
export const AddCouponCodeToCartDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCouponCodeToCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"couponCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCouponCodeToCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}},{"kind":"Argument","name":{"kind":"Name","value":"couponCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"couponCode"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useAddCouponCodeToCartMutation__
 *
 * To run a mutation, you first call `useAddCouponCodeToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCouponCodeToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCouponCodeToCartMutation, { data, loading, error }] = useAddCouponCodeToCartMutation({
 *   variables: {
 *      cartId: // value for 'cartId'
 *      couponCode: // value for 'couponCode'
 *   },
 * });
 */
export function useAddCouponCodeToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddCouponCodeToCartMutation, AddCouponCodeToCartMutationVariables>) {
        return Apollo.useMutation<AddCouponCodeToCartMutation, AddCouponCodeToCartMutationVariables>(AddCouponCodeToCartDocument, baseOptions);
      }
export type AddCouponCodeToCartMutationHookResult = ReturnType<typeof useAddCouponCodeToCartMutation>;
export type AddCouponCodeToCartMutationOptions = Apollo.BaseMutationOptions<AddCouponCodeToCartMutation, AddCouponCodeToCartMutationVariables>;
export const AddToCartDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"items"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CartItemInput"}}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}},{"kind":"Argument","name":{"kind":"Name","value":"items"},"value":{"kind":"Variable","name":{"kind":"Name","value":"items"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      cartId: // value for 'cartId'
 *      items: // value for 'items'
 *   },
 * });
 */
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, baseOptions);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
export const GetCartDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useGetCartQuery__
 *
 * To run a query within a React component, call `useGetCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartQuery({
 *   variables: {
 *      cartId: // value for 'cartId'
 *   },
 * });
 */
export function useGetCartQuery(baseOptions?: Apollo.QueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
        return Apollo.useQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, baseOptions);
      }
export function useGetCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
          return Apollo.useLazyQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, baseOptions);
        }
export type GetCartQueryHookResult = ReturnType<typeof useGetCartQuery>;
export type GetCartLazyQueryHookResult = ReturnType<typeof useGetCartLazyQuery>;
export const CreateCartDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCart"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useCreateCartMutation__
 *
 * To run a mutation, you first call `useCreateCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCartMutation, { data, loading, error }] = useCreateCartMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateCartMutation(baseOptions?: Apollo.MutationHookOptions<CreateCartMutation, CreateCartMutationVariables>) {
        return Apollo.useMutation<CreateCartMutation, CreateCartMutationVariables>(CreateCartDocument, baseOptions);
      }
export type CreateCartMutationHookResult = ReturnType<typeof useCreateCartMutation>;
export type CreateCartMutationOptions = Apollo.BaseMutationOptions<CreateCartMutation, CreateCartMutationVariables>;
export const RemoveCouponCodeFromCartDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveCouponCodeFromCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCouponCodeFromCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useRemoveCouponCodeFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveCouponCodeFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCouponCodeFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCouponCodeFromCartMutation, { data, loading, error }] = useRemoveCouponCodeFromCartMutation({
 *   variables: {
 *      cartId: // value for 'cartId'
 *   },
 * });
 */
export function useRemoveCouponCodeFromCartMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCouponCodeFromCartMutation, RemoveCouponCodeFromCartMutationVariables>) {
        return Apollo.useMutation<RemoveCouponCodeFromCartMutation, RemoveCouponCodeFromCartMutationVariables>(RemoveCouponCodeFromCartDocument, baseOptions);
      }
export type RemoveCouponCodeFromCartMutationHookResult = ReturnType<typeof useRemoveCouponCodeFromCartMutation>;
export type RemoveCouponCodeFromCartMutationOptions = Apollo.BaseMutationOptions<RemoveCouponCodeFromCartMutation, RemoveCouponCodeFromCartMutationVariables>;
export const UpdateCartDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"items"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CartItemUpdateInput"}}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}},{"kind":"Argument","name":{"kind":"Name","value":"items"},"value":{"kind":"Variable","name":{"kind":"Name","value":"items"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useUpdateCartMutation__
 *
 * To run a mutation, you first call `useUpdateCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCartMutation, { data, loading, error }] = useUpdateCartMutation({
 *   variables: {
 *      cartId: // value for 'cartId'
 *      items: // value for 'items'
 *   },
 * });
 */
export function useUpdateCartMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCartMutation, UpdateCartMutationVariables>) {
        return Apollo.useMutation<UpdateCartMutation, UpdateCartMutationVariables>(UpdateCartDocument, baseOptions);
      }
export type UpdateCartMutationHookResult = ReturnType<typeof useUpdateCartMutation>;
export type UpdateCartMutationOptions = Apollo.BaseMutationOptions<UpdateCartMutation, UpdateCartMutationVariables>;
export const GetCheckoutDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCheckout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useGetCheckoutQuery__
 *
 * To run a query within a React component, call `useGetCheckoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCheckoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCheckoutQuery({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *   },
 * });
 */
export function useGetCheckoutQuery(baseOptions?: Apollo.QueryHookOptions<GetCheckoutQuery, GetCheckoutQueryVariables>) {
        return Apollo.useQuery<GetCheckoutQuery, GetCheckoutQueryVariables>(GetCheckoutDocument, baseOptions);
      }
export function useGetCheckoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCheckoutQuery, GetCheckoutQueryVariables>) {
          return Apollo.useLazyQuery<GetCheckoutQuery, GetCheckoutQueryVariables>(GetCheckoutDocument, baseOptions);
        }
export type GetCheckoutQueryHookResult = ReturnType<typeof useGetCheckoutQuery>;
export type GetCheckoutLazyQueryHookResult = ReturnType<typeof useGetCheckoutLazyQuery>;
export const CreateCheckoutDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCheckout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCheckout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useCreateCheckoutMutation__
 *
 * To run a mutation, you first call `useCreateCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCheckoutMutation, { data, loading, error }] = useCreateCheckoutMutation({
 *   variables: {
 *      cartId: // value for 'cartId'
 *   },
 * });
 */
export function useCreateCheckoutMutation(baseOptions?: Apollo.MutationHookOptions<CreateCheckoutMutation, CreateCheckoutMutationVariables>) {
        return Apollo.useMutation<CreateCheckoutMutation, CreateCheckoutMutationVariables>(CreateCheckoutDocument, baseOptions);
      }
export type CreateCheckoutMutationHookResult = ReturnType<typeof useCreateCheckoutMutation>;
export type CreateCheckoutMutationOptions = Apollo.BaseMutationOptions<CreateCheckoutMutation, CreateCheckoutMutationVariables>;
export const SetCheckoutBillingAddressDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCheckoutBillingAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddressInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCheckoutBillingAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}},{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useSetCheckoutBillingAddressMutation__
 *
 * To run a mutation, you first call `useSetCheckoutBillingAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCheckoutBillingAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCheckoutBillingAddressMutation, { data, loading, error }] = useSetCheckoutBillingAddressMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useSetCheckoutBillingAddressMutation(baseOptions?: Apollo.MutationHookOptions<SetCheckoutBillingAddressMutation, SetCheckoutBillingAddressMutationVariables>) {
        return Apollo.useMutation<SetCheckoutBillingAddressMutation, SetCheckoutBillingAddressMutationVariables>(SetCheckoutBillingAddressDocument, baseOptions);
      }
export type SetCheckoutBillingAddressMutationHookResult = ReturnType<typeof useSetCheckoutBillingAddressMutation>;
export type SetCheckoutBillingAddressMutationOptions = Apollo.BaseMutationOptions<SetCheckoutBillingAddressMutation, SetCheckoutBillingAddressMutationVariables>;
export const SetCheckoutPaymentMethodDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCheckoutPaymentMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCheckoutPaymentMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useSetCheckoutPaymentMethodMutation__
 *
 * To run a mutation, you first call `useSetCheckoutPaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCheckoutPaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCheckoutPaymentMethodMutation, { data, loading, error }] = useSetCheckoutPaymentMethodMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      paymentMethodId: // value for 'paymentMethodId'
 *   },
 * });
 */
export function useSetCheckoutPaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<SetCheckoutPaymentMethodMutation, SetCheckoutPaymentMethodMutationVariables>) {
        return Apollo.useMutation<SetCheckoutPaymentMethodMutation, SetCheckoutPaymentMethodMutationVariables>(SetCheckoutPaymentMethodDocument, baseOptions);
      }
export type SetCheckoutPaymentMethodMutationHookResult = ReturnType<typeof useSetCheckoutPaymentMethodMutation>;
export type SetCheckoutPaymentMethodMutationOptions = Apollo.BaseMutationOptions<SetCheckoutPaymentMethodMutation, SetCheckoutPaymentMethodMutationVariables>;
export const SetCheckoutShippingAddressDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCheckoutShippingAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddressInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCheckoutShippingAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}},{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useSetCheckoutShippingAddressMutation__
 *
 * To run a mutation, you first call `useSetCheckoutShippingAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCheckoutShippingAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCheckoutShippingAddressMutation, { data, loading, error }] = useSetCheckoutShippingAddressMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useSetCheckoutShippingAddressMutation(baseOptions?: Apollo.MutationHookOptions<SetCheckoutShippingAddressMutation, SetCheckoutShippingAddressMutationVariables>) {
        return Apollo.useMutation<SetCheckoutShippingAddressMutation, SetCheckoutShippingAddressMutationVariables>(SetCheckoutShippingAddressDocument, baseOptions);
      }
export type SetCheckoutShippingAddressMutationHookResult = ReturnType<typeof useSetCheckoutShippingAddressMutation>;
export type SetCheckoutShippingAddressMutationOptions = Apollo.BaseMutationOptions<SetCheckoutShippingAddressMutation, SetCheckoutShippingAddressMutationVariables>;
export const SetCheckoutShippingMethodDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCheckoutShippingMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shippingMethodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCheckoutShippingMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}},{"kind":"Argument","name":{"kind":"Name","value":"shippingMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shippingMethodId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useSetCheckoutShippingMethodMutation__
 *
 * To run a mutation, you first call `useSetCheckoutShippingMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCheckoutShippingMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCheckoutShippingMethodMutation, { data, loading, error }] = useSetCheckoutShippingMethodMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      shippingMethodId: // value for 'shippingMethodId'
 *   },
 * });
 */
export function useSetCheckoutShippingMethodMutation(baseOptions?: Apollo.MutationHookOptions<SetCheckoutShippingMethodMutation, SetCheckoutShippingMethodMutationVariables>) {
        return Apollo.useMutation<SetCheckoutShippingMethodMutation, SetCheckoutShippingMethodMutationVariables>(SetCheckoutShippingMethodDocument, baseOptions);
      }
export type SetCheckoutShippingMethodMutationHookResult = ReturnType<typeof useSetCheckoutShippingMethodMutation>;
export type SetCheckoutShippingMethodMutationOptions = Apollo.BaseMutationOptions<SetCheckoutShippingMethodMutation, SetCheckoutShippingMethodMutationVariables>;
export const CountriesDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Countries"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"websiteConfig"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WebsiteConfigCountriesFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteConfigCountriesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebsiteConfig"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useCountriesQuery__
 *
 * To run a query within a React component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesQuery(baseOptions?: Apollo.QueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
        return Apollo.useQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, baseOptions);
      }
export function useCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
          return Apollo.useLazyQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, baseOptions);
        }
export type CountriesQueryHookResult = ReturnType<typeof useCountriesQuery>;
export type CountriesLazyQueryHookResult = ReturnType<typeof useCountriesLazyQuery>;
export const PlaceOrderDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PlaceOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderNumber"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __usePlaceOrderMutation__
 *
 * To run a mutation, you first call `usePlaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeOrderMutation, { data, loading, error }] = usePlaceOrderMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *   },
 * });
 */
export function usePlaceOrderMutation(baseOptions?: Apollo.MutationHookOptions<PlaceOrderMutation, PlaceOrderMutationVariables>) {
        return Apollo.useMutation<PlaceOrderMutation, PlaceOrderMutationVariables>(PlaceOrderDocument, baseOptions);
      }
export type PlaceOrderMutationHookResult = ReturnType<typeof usePlaceOrderMutation>;
export type PlaceOrderMutationOptions = Apollo.BaseMutationOptions<PlaceOrderMutation, PlaceOrderMutationVariables>;
export const GetMenuDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMenu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"level"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"level"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"level"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]};

/**
 * __useGetMenuQuery__
 *
 * To run a query within a React component, call `useGetMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetMenuQuery(baseOptions?: Apollo.QueryHookOptions<GetMenuQuery, GetMenuQueryVariables>) {
        return Apollo.useQuery<GetMenuQuery, GetMenuQueryVariables>(GetMenuDocument, baseOptions);
      }
export function useGetMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMenuQuery, GetMenuQueryVariables>) {
          return Apollo.useLazyQuery<GetMenuQuery, GetMenuQueryVariables>(GetMenuDocument, baseOptions);
        }
export type GetMenuQueryHookResult = ReturnType<typeof useGetMenuQuery>;
export type GetMenuLazyQueryHookResult = ReturnType<typeof useGetMenuLazyQuery>;
export const GetPageByPathDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"routeByPath"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CmsHomepagePageFragment"},"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CmsPagePageFragment"},"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CmsArticlePageFragment"},"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductPageFragment"},"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryPageFragment"},"directives":[]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryPage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CmsArticlePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsArticlePage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cmsArticle"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"body"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"html"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"html"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"alias"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"regions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"region"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"configuration"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"configuration"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayLabel"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"component"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CmsHomepagePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsHomepagePage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"homePage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productBanner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"html"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productGrid"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CmsPagePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsPagePage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cmsBasicContent"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"body"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"html"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"html"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"alias"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductPage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"options"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"values"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}}]}}]}}]};

/**
 * __useGetPageByPathQuery__
 *
 * To run a query within a React component, call `useGetPageByPathQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageByPathQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageByPathQuery({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useGetPageByPathQuery(baseOptions?: Apollo.QueryHookOptions<GetPageByPathQuery, GetPageByPathQueryVariables>) {
        return Apollo.useQuery<GetPageByPathQuery, GetPageByPathQueryVariables>(GetPageByPathDocument, baseOptions);
      }
export function useGetPageByPathLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageByPathQuery, GetPageByPathQueryVariables>) {
          return Apollo.useLazyQuery<GetPageByPathQuery, GetPageByPathQueryVariables>(GetPageByPathDocument, baseOptions);
        }
export type GetPageByPathQueryHookResult = ReturnType<typeof useGetPageByPathQuery>;
export type GetPageByPathLazyQueryHookResult = ReturnType<typeof useGetPageByPathLazyQuery>;
export const GetProductsDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductFilterInput"}}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductSortInput"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductPaginationInput"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"connection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"products","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"filters","block":false},{"kind":"StringValue","value":"sort","block":false},{"kind":"StringValue","value":"searchTerm","block":false}]}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductListFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"facets"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"options"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facetName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isSelected"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"},"arguments":[]}]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetEqualValue"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eq"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"in"},"arguments":[],"directives":[]}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetMatchValue"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"match"},"arguments":[],"directives":[]}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetRangeValue"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"to"},"arguments":[],"directives":[]}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sortCriterias"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type CategoryPageKeySpecifier = ('id' | 'type' | 'locale' | 'category' | 'products' | CategoryPageKeySpecifier)[];
export type CategoryPageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsArticlePageKeySpecifier = ('id' | 'type' | 'locale' | 'cmsArticle' | CmsArticlePageKeySpecifier)[];
export type CmsArticlePageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	cmsArticle?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsHomepagePageKeySpecifier = ('id' | 'type' | 'locale' | 'homePage' | CmsHomepagePageKeySpecifier)[];
export type CmsHomepagePageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	homePage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsPagePageKeySpecifier = ('id' | 'type' | 'locale' | 'cmsBasicContent' | CmsPagePageKeySpecifier)[];
export type CmsPagePageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	cmsBasicContent?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageKeySpecifier = ('id' | 'type' | 'locale' | PageKeySpecifier)[];
export type PageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductPageKeySpecifier = ('id' | 'type' | 'locale' | 'product' | ProductPageKeySpecifier)[];
export type ProductPageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteKeySpecifier = ('path' | 'page' | RouteKeySpecifier)[];
export type RouteFieldPolicy = {
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuKeySpecifier = ('name' | 'items' | MenuKeySpecifier)[];
export type MenuFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemKeySpecifier = ('name' | 'link' | 'level' | 'items' | MenuItemKeySpecifier)[];
export type MenuItemFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsArticleKeySpecifier = ('id' | 'title' | 'body' | 'summary' | 'url' | 'createdAt' | 'author' | 'image' | 'layout' | CmsArticleKeySpecifier)[];
export type CmsArticleFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	layout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsBasicContentKeySpecifier = ('id' | 'title' | 'body' | 'summary' | 'url' | 'createdAt' | 'author' | CmsBasicContentKeySpecifier)[];
export type CmsBasicContentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsHtmlFieldKeySpecifier = ('raw' | 'html' | CmsHtmlFieldKeySpecifier)[];
export type CmsHtmlFieldFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>,
	html?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsImageKeySpecifier = ('alt' | 'sizes' | CmsImageKeySpecifier)[];
export type CmsImageFieldPolicy = {
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	sizes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsImageVersionKeySpecifier = ('size' | 'url' | 'width' | 'height' | CmsImageVersionKeySpecifier)[];
export type CmsImageVersionFieldPolicy = {
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsLayoutKeySpecifier = ('items' | CmsLayoutKeySpecifier)[];
export type CmsLayoutFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsLayoutItemKeySpecifier = ('layout' | 'label' | 'regions' | CmsLayoutItemKeySpecifier)[];
export type CmsLayoutItemFieldPolicy = {
	layout?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	regions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsLayoutItemComponentKeySpecifier = ('configuration' | 'label' | 'component' | CmsLayoutItemComponentKeySpecifier)[];
export type CmsLayoutItemComponentFieldPolicy = {
	configuration?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	component?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsLayoutItemComponentConfigKeySpecifier = ('displayLabel' | CmsLayoutItemComponentConfigKeySpecifier)[];
export type CmsLayoutItemComponentConfigFieldPolicy = {
	displayLabel?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsLayoutItemRegionKeySpecifier = ('region' | 'configuration' | 'components' | CmsLayoutItemRegionKeySpecifier)[];
export type CmsLayoutItemRegionFieldPolicy = {
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	configuration?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsLayoutItemRegionConfigKeySpecifier = ('width' | CmsLayoutItemRegionConfigKeySpecifier)[];
export type CmsLayoutItemRegionConfigFieldPolicy = {
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsUrlKeySpecifier = ('path' | 'alias' | CmsUrlKeySpecifier)[];
export type CmsUrlFieldPolicy = {
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsUserKeySpecifier = ('id' | 'name' | CmsUserKeySpecifier)[];
export type CmsUserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryKeySpecifier = ('id' | 'name' | 'title' | 'description' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FacetKeySpecifier = ('name' | 'label' | 'options' | FacetKeySpecifier)[];
export type FacetFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FacetEqualValueKeySpecifier = ('eq' | 'in' | FacetEqualValueKeySpecifier)[];
export type FacetEqualValueFieldPolicy = {
	eq?: FieldPolicy<any> | FieldReadFunction<any>,
	in?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FacetMatchValueKeySpecifier = ('match' | FacetMatchValueKeySpecifier)[];
export type FacetMatchValueFieldPolicy = {
	match?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FacetOptionKeySpecifier = ('count' | 'facetName' | 'isSelected' | 'label' | 'value' | FacetOptionKeySpecifier)[];
export type FacetOptionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	facetName?: FieldPolicy<any> | FieldReadFunction<any>,
	isSelected?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FacetRangeValueKeySpecifier = ('from' | 'to' | FacetRangeValueKeySpecifier)[];
export type FacetRangeValueFieldPolicy = {
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoneyKeySpecifier = ('value' | 'currency' | MoneyKeySpecifier)[];
export type MoneyFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('id' | 'sku' | 'name' | 'title' | 'price' | 'description' | 'image' | 'thumbnailImage' | 'type' | 'url' | 'gallery' | 'options' | 'variants' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailImage?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageKeySpecifier = ('alt' | 'url' | ProductImageKeySpecifier)[];
export type ProductImageFieldPolicy = {
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductListKeySpecifier = ('total' | 'items' | 'facets' | 'sortCriterias' | ProductListKeySpecifier)[];
export type ProductListFieldPolicy = {
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	facets?: FieldPolicy<any> | FieldReadFunction<any>,
	sortCriterias?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductOptionKeySpecifier = ('name' | 'label' | 'values' | ProductOptionKeySpecifier)[];
export type ProductOptionFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductOptionValueKeySpecifier = ('option' | 'id' | 'label' | ProductOptionValueKeySpecifier)[];
export type ProductOptionValueFieldPolicy = {
	option?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantKeySpecifier = ('options' | 'product' | ProductVariantKeySpecifier)[];
export type ProductVariantFieldPolicy = {
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('id' | 'firstName' | 'lastName' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthUserKeySpecifier = ('authToken' | 'refreshToken' | 'user' | AuthUserKeySpecifier)[];
export type AuthUserFieldPolicy = {
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressKeySpecifier = ('firstName' | 'lastName' | 'country' | 'city' | 'postcode' | 'address1' | 'address2' | 'phoneNumber' | 'company' | 'email' | AddressKeySpecifier)[];
export type AddressFieldPolicy = {
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	postcode?: FieldPolicy<any> | FieldReadFunction<any>,
	address1?: FieldPolicy<any> | FieldReadFunction<any>,
	address2?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartKeySpecifier = ('id' | 'numberOfItems' | 'items' | 'totals' | 'couponCodes' | CartKeySpecifier)[];
export type CartFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	numberOfItems?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	totals?: FieldPolicy<any> | FieldReadFunction<any>,
	couponCodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemKeySpecifier = ('id' | 'quantity' | 'unitPrice' | 'rowTotal' | 'rowTotalDiscount' | 'product' | 'productOptions' | CartItemKeySpecifier)[];
export type CartItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	unitPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	rowTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	rowTotalDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productOptions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemProductOptionValueKeySpecifier = ('option' | 'optionLabel' | 'id' | 'label' | CartItemProductOptionValueKeySpecifier)[];
export type CartItemProductOptionValueFieldPolicy = {
	option?: FieldPolicy<any> | FieldReadFunction<any>,
	optionLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartTotalsKeySpecifier = ('taxes' | 'discounts' | 'grandTotal' | 'subtotalExcludingTax' | 'subtotalIncludingTax' | 'subtotalWithDiscountExcludingTax' | CartTotalsKeySpecifier)[];
export type CartTotalsFieldPolicy = {
	taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	grandTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotalExcludingTax?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotalIncludingTax?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotalWithDiscountExcludingTax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutKeySpecifier = ('id' | 'cart' | 'customer' | 'shippingAddress' | 'billingAddress' | 'shippingMethod' | 'paymentMethod' | 'availableShippingMethods' | 'availablePaymentMethods' | CheckoutKeySpecifier)[];
export type CheckoutFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	billingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	availableShippingMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	availablePaymentMethods?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CouponCodeKeySpecifier = ('code' | CouponCodeKeySpecifier)[];
export type CouponCodeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerKeySpecifier = ('email' | CustomerKeySpecifier)[];
export type CustomerFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoneyWithLabelKeySpecifier = ('label' | 'amount' | MoneyWithLabelKeySpecifier)[];
export type MoneyWithLabelFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('orderNumber' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	orderNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentMethodKeySpecifier = ('id' | 'label' | 'note' | PaymentMethodKeySpecifier)[];
export type PaymentMethodFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceOrderResultKeySpecifier = ('order' | 'checkout' | PlaceOrderResultKeySpecifier)[];
export type PlaceOrderResultFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingMethodKeySpecifier = ('id' | 'label' | 'note' | 'priceIncludingTax' | 'priceExcludingTax' | ShippingMethodKeySpecifier)[];
export type ShippingMethodFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	priceIncludingTax?: FieldPolicy<any> | FieldReadFunction<any>,
	priceExcludingTax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryKeySpecifier = ('id' | 'name' | CountryKeySpecifier)[];
export type CountryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebsiteConfigKeySpecifier = ('id' | 'locale' | 'baseUrlPath' | 'currency' | 'countries' | WebsiteConfigKeySpecifier)[];
export type WebsiteConfigFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	baseUrlPath?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsHomepageKeySpecifier = ('id' | 'locale' | 'productBanner' | 'productGrid' | CmsHomepageKeySpecifier)[];
export type CmsHomepageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	productBanner?: FieldPolicy<any> | FieldReadFunction<any>,
	productGrid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductBannerKeySpecifier = ('text' | 'image' | 'product' | ProductBannerKeySpecifier)[];
export type ProductBannerFieldPolicy = {
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductGridBannerKeySpecifier = ('title' | 'products' | ProductGridBannerKeySpecifier)[];
export type ProductGridBannerFieldPolicy = {
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('helloWorld' | 'routeByPath' | 'routeByPage' | 'menu' | 'cmsArticle' | 'products' | 'userById' | 'me' | 'cart' | 'checkout' | 'websiteConfig' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	helloWorld?: FieldPolicy<any> | FieldReadFunction<any>,
	routeByPath?: FieldPolicy<any> | FieldReadFunction<any>,
	routeByPage?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	cmsArticle?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	userById?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteConfig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('login' | 'refreshAuthToken' | 'createCart' | 'addToCart' | 'updateCart' | 'addCouponCodeToCart' | 'removeCouponCodeFromCart' | 'createCheckout' | 'setCheckoutShippingAddress' | 'setCheckoutBillingAddress' | 'setCheckoutShippingMethod' | 'setCheckoutPaymentMethod' | 'placeOrder' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshAuthToken?: FieldPolicy<any> | FieldReadFunction<any>,
	createCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addCouponCodeToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	removeCouponCodeFromCart?: FieldPolicy<any> | FieldReadFunction<any>,
	createCheckout?: FieldPolicy<any> | FieldReadFunction<any>,
	setCheckoutShippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	setCheckoutBillingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	setCheckoutShippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	setCheckoutPaymentMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	placeOrder?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SortKeySpecifier = ('criteria' | 'order' | SortKeySpecifier)[];
export type SortFieldPolicy = {
	criteria?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FilterValueKeySpecifier = ('eq' | 'in' | 'match' | 'from' | 'to' | FilterValueKeySpecifier)[];
export type FilterValueFieldPolicy = {
	eq?: FieldPolicy<any> | FieldReadFunction<any>,
	in?: FieldPolicy<any> | FieldReadFunction<any>,
	match?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FilterKeySpecifier = ('name' | 'value' | FilterKeySpecifier)[];
export type FilterFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	CategoryPage?: {
		keyFields?: false | CategoryPageKeySpecifier | (() => undefined | CategoryPageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CategoryPageFieldPolicy,
	},
	CmsArticlePage?: {
		keyFields?: false | CmsArticlePageKeySpecifier | (() => undefined | CmsArticlePageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsArticlePageFieldPolicy,
	},
	CmsHomepagePage?: {
		keyFields?: false | CmsHomepagePageKeySpecifier | (() => undefined | CmsHomepagePageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsHomepagePageFieldPolicy,
	},
	CmsPagePage?: {
		keyFields?: false | CmsPagePageKeySpecifier | (() => undefined | CmsPagePageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsPagePageFieldPolicy,
	},
	Page?: {
		keyFields?: false | PageKeySpecifier | (() => undefined | PageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PageFieldPolicy,
	},
	ProductPage?: {
		keyFields?: false | ProductPageKeySpecifier | (() => undefined | ProductPageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductPageFieldPolicy,
	},
	Route?: {
		keyFields?: false | RouteKeySpecifier | (() => undefined | RouteKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: RouteFieldPolicy,
	},
	Menu?: {
		keyFields?: false | MenuKeySpecifier | (() => undefined | MenuKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: MenuFieldPolicy,
	},
	MenuItem?: {
		keyFields?: false | MenuItemKeySpecifier | (() => undefined | MenuItemKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: MenuItemFieldPolicy,
	},
	CmsArticle?: {
		keyFields?: false | CmsArticleKeySpecifier | (() => undefined | CmsArticleKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsArticleFieldPolicy,
	},
	CmsBasicContent?: {
		keyFields?: false | CmsBasicContentKeySpecifier | (() => undefined | CmsBasicContentKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsBasicContentFieldPolicy,
	},
	CmsHtmlField?: {
		keyFields?: false | CmsHtmlFieldKeySpecifier | (() => undefined | CmsHtmlFieldKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsHtmlFieldFieldPolicy,
	},
	CmsImage?: {
		keyFields?: false | CmsImageKeySpecifier | (() => undefined | CmsImageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsImageFieldPolicy,
	},
	CmsImageVersion?: {
		keyFields?: false | CmsImageVersionKeySpecifier | (() => undefined | CmsImageVersionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsImageVersionFieldPolicy,
	},
	CmsLayout?: {
		keyFields?: false | CmsLayoutKeySpecifier | (() => undefined | CmsLayoutKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsLayoutFieldPolicy,
	},
	CmsLayoutItem?: {
		keyFields?: false | CmsLayoutItemKeySpecifier | (() => undefined | CmsLayoutItemKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsLayoutItemFieldPolicy,
	},
	CmsLayoutItemComponent?: {
		keyFields?: false | CmsLayoutItemComponentKeySpecifier | (() => undefined | CmsLayoutItemComponentKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsLayoutItemComponentFieldPolicy,
	},
	CmsLayoutItemComponentConfig?: {
		keyFields?: false | CmsLayoutItemComponentConfigKeySpecifier | (() => undefined | CmsLayoutItemComponentConfigKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsLayoutItemComponentConfigFieldPolicy,
	},
	CmsLayoutItemRegion?: {
		keyFields?: false | CmsLayoutItemRegionKeySpecifier | (() => undefined | CmsLayoutItemRegionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsLayoutItemRegionFieldPolicy,
	},
	CmsLayoutItemRegionConfig?: {
		keyFields?: false | CmsLayoutItemRegionConfigKeySpecifier | (() => undefined | CmsLayoutItemRegionConfigKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsLayoutItemRegionConfigFieldPolicy,
	},
	CmsUrl?: {
		keyFields?: false | CmsUrlKeySpecifier | (() => undefined | CmsUrlKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsUrlFieldPolicy,
	},
	CmsUser?: {
		keyFields?: false | CmsUserKeySpecifier | (() => undefined | CmsUserKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsUserFieldPolicy,
	},
	Category?: {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CategoryFieldPolicy,
	},
	Facet?: {
		keyFields?: false | FacetKeySpecifier | (() => undefined | FacetKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FacetFieldPolicy,
	},
	FacetEqualValue?: {
		keyFields?: false | FacetEqualValueKeySpecifier | (() => undefined | FacetEqualValueKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FacetEqualValueFieldPolicy,
	},
	FacetMatchValue?: {
		keyFields?: false | FacetMatchValueKeySpecifier | (() => undefined | FacetMatchValueKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FacetMatchValueFieldPolicy,
	},
	FacetOption?: {
		keyFields?: false | FacetOptionKeySpecifier | (() => undefined | FacetOptionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FacetOptionFieldPolicy,
	},
	FacetRangeValue?: {
		keyFields?: false | FacetRangeValueKeySpecifier | (() => undefined | FacetRangeValueKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FacetRangeValueFieldPolicy,
	},
	Money?: {
		keyFields?: false | MoneyKeySpecifier | (() => undefined | MoneyKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: MoneyFieldPolicy,
	},
	Product?: {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductFieldPolicy,
	},
	ProductImage?: {
		keyFields?: false | ProductImageKeySpecifier | (() => undefined | ProductImageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductImageFieldPolicy,
	},
	ProductList?: {
		keyFields?: false | ProductListKeySpecifier | (() => undefined | ProductListKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductListFieldPolicy,
	},
	ProductOption?: {
		keyFields?: false | ProductOptionKeySpecifier | (() => undefined | ProductOptionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductOptionFieldPolicy,
	},
	ProductOptionValue?: {
		keyFields?: false | ProductOptionValueKeySpecifier | (() => undefined | ProductOptionValueKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductOptionValueFieldPolicy,
	},
	ProductVariant?: {
		keyFields?: false | ProductVariantKeySpecifier | (() => undefined | ProductVariantKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductVariantFieldPolicy,
	},
	User?: {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserFieldPolicy,
	},
	AuthUser?: {
		keyFields?: false | AuthUserKeySpecifier | (() => undefined | AuthUserKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AuthUserFieldPolicy,
	},
	Address?: {
		keyFields?: false | AddressKeySpecifier | (() => undefined | AddressKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AddressFieldPolicy,
	},
	Cart?: {
		keyFields?: false | CartKeySpecifier | (() => undefined | CartKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CartFieldPolicy,
	},
	CartItem?: {
		keyFields?: false | CartItemKeySpecifier | (() => undefined | CartItemKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CartItemFieldPolicy,
	},
	CartItemProductOptionValue?: {
		keyFields?: false | CartItemProductOptionValueKeySpecifier | (() => undefined | CartItemProductOptionValueKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CartItemProductOptionValueFieldPolicy,
	},
	CartTotals?: {
		keyFields?: false | CartTotalsKeySpecifier | (() => undefined | CartTotalsKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CartTotalsFieldPolicy,
	},
	Checkout?: {
		keyFields?: false | CheckoutKeySpecifier | (() => undefined | CheckoutKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CheckoutFieldPolicy,
	},
	CouponCode?: {
		keyFields?: false | CouponCodeKeySpecifier | (() => undefined | CouponCodeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CouponCodeFieldPolicy,
	},
	Customer?: {
		keyFields?: false | CustomerKeySpecifier | (() => undefined | CustomerKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CustomerFieldPolicy,
	},
	MoneyWithLabel?: {
		keyFields?: false | MoneyWithLabelKeySpecifier | (() => undefined | MoneyWithLabelKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: MoneyWithLabelFieldPolicy,
	},
	Order?: {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: OrderFieldPolicy,
	},
	PaymentMethod?: {
		keyFields?: false | PaymentMethodKeySpecifier | (() => undefined | PaymentMethodKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PaymentMethodFieldPolicy,
	},
	PlaceOrderResult?: {
		keyFields?: false | PlaceOrderResultKeySpecifier | (() => undefined | PlaceOrderResultKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PlaceOrderResultFieldPolicy,
	},
	ShippingMethod?: {
		keyFields?: false | ShippingMethodKeySpecifier | (() => undefined | ShippingMethodKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ShippingMethodFieldPolicy,
	},
	Country?: {
		keyFields?: false | CountryKeySpecifier | (() => undefined | CountryKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CountryFieldPolicy,
	},
	WebsiteConfig?: {
		keyFields?: false | WebsiteConfigKeySpecifier | (() => undefined | WebsiteConfigKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: WebsiteConfigFieldPolicy,
	},
	CmsHomepage?: {
		keyFields?: false | CmsHomepageKeySpecifier | (() => undefined | CmsHomepageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CmsHomepageFieldPolicy,
	},
	ProductBanner?: {
		keyFields?: false | ProductBannerKeySpecifier | (() => undefined | ProductBannerKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductBannerFieldPolicy,
	},
	ProductGridBanner?: {
		keyFields?: false | ProductGridBannerKeySpecifier | (() => undefined | ProductGridBannerKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProductGridBannerFieldPolicy,
	},
	Query?: {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: QueryFieldPolicy,
	},
	Mutation?: {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: MutationFieldPolicy,
	},
	Sort?: {
		keyFields?: false | SortKeySpecifier | (() => undefined | SortKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SortFieldPolicy,
	},
	FilterValue?: {
		keyFields?: false | FilterValueKeySpecifier | (() => undefined | FilterValueKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FilterValueFieldPolicy,
	},
	Filter?: {
		keyFields?: false | FilterKeySpecifier | (() => undefined | FilterKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FilterFieldPolicy,
	}
};