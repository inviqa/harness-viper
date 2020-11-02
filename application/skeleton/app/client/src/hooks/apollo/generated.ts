import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
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
  filters?: Maybe<Array<ProductFilter>>;
  sort?: Maybe<ProductSort>;
  pagination?: Maybe<ProductPagination>;
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

/** CMS article */
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

/** CMS HTML field */
export type CmsHtmlField = {
  __typename?: 'CmsHtmlField';
  /** Raw text format */
  raw: Scalars['String'];
  /** HTML format */
  html: Scalars['String'];
};

/** CMS Image with all its sizes (transforamtions) */
export type CmsImage = {
  __typename?: 'CmsImage';
  /** Image alt text */
  alt: Scalars['String'];
  /** The different sizes of the image */
  sizes: Array<CmsImageVersion>;
};

/** CMS Image version (transformed image) */
export type CmsImageVersion = {
  __typename?: 'CmsImageVersion';
  /** Size ID */
  size: Scalars['String'];
  /** Image URL for this size */
  url: Scalars['String'];
  /** Image width for this size */
  width?: Maybe<Scalars['Int']>;
  /** Image height for this size */
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
  /** The configuration for dispalying the layout item */
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

/** Configurable product */
export type ConfigurableProduct = Product & {
  __typename?: 'ConfigurableProduct';
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
  /** All available product options */
  options: Array<ProductOption>;
  /** Product variants for each full product selection */
  variants: Array<ProductVariant>;
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

export type FilterValue = {
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

/** Product interface */
export type Product = {
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
};

export type ProductFilter = {
  name: Scalars['String'];
  value: FilterValue;
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

export type ProductPagination = {
  offset: Scalars['Int'];
  limit: Scalars['Int'];
};

export type ProductSort = {
  criteria: ProductSortCriteria;
  order: ProductSortOrder;
};

export const ProductSortCriteria = {
  Relevance: 'RELEVANCE',
  Position: 'POSITION',
  Price: 'PRICE',
  Name: 'NAME'
} as const;

export type ProductSortCriteria = typeof ProductSortCriteria[keyof typeof ProductSortCriteria];
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
  product: SimpleProduct;
};

/** Simple product */
export type SimpleProduct = Product & {
  __typename?: 'SimpleProduct';
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
  productSku: Scalars['String'];
  product: Product;
};

export type CartItemInput = {
  sku: Scalars['String'];
  quantity: Scalars['Float'];
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
  filters?: Maybe<Array<ProductFilter>>;
  sort?: Maybe<ProductSort>;
  pagination?: Maybe<ProductPagination>;
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

export type FilterValueClient = {
  __typename?: 'FilterValueClient';
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  match?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type Filter = {
  __typename?: 'Filter';
  name: Scalars['String'];
  value: FilterValueClient;
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
      { __typename?: 'ConfigurableProduct' }
      & Pick<ConfigurableProduct, 'sku' | 'name' | 'url'>
      & { thumbnailImage?: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'alt' | 'url'>
      )> }
    ) | (
      { __typename?: 'SimpleProduct' }
      & Pick<SimpleProduct, 'sku' | 'name' | 'url'>
      & { thumbnailImage?: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'alt' | 'url'>
      )> }
    ) }
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
      { __typename?: 'ProductPage' }
      & ProductPageFragmentFragment
    ) }
  )> }
);

type ProductListFragment_ConfigurableProduct_Fragment = (
  { __typename?: 'ConfigurableProduct' }
  & Pick<ConfigurableProduct, 'id' | 'type' | 'sku' | 'name' | 'url'>
  & { price: (
    { __typename?: 'Money' }
    & Pick<Money, 'value' | 'currency'>
  ), thumbnailImage?: Maybe<(
    { __typename?: 'ProductImage' }
    & Pick<ProductImage, 'alt' | 'url'>
  )> }
);

type ProductListFragment_SimpleProduct_Fragment = (
  { __typename?: 'SimpleProduct' }
  & Pick<SimpleProduct, 'id' | 'type' | 'sku' | 'name' | 'url'>
  & { price: (
    { __typename?: 'Money' }
    & Pick<Money, 'value' | 'currency'>
  ), thumbnailImage?: Maybe<(
    { __typename?: 'ProductImage' }
    & Pick<ProductImage, 'alt' | 'url'>
  )> }
);

export type ProductListFragmentFragment = ProductListFragment_ConfigurableProduct_Fragment | ProductListFragment_SimpleProduct_Fragment;

export type ProductPageFragmentFragment = (
  { __typename?: 'ProductPage' }
  & Pick<ProductPage, 'id' | 'type' | 'locale'>
  & { product: (
    { __typename?: 'ConfigurableProduct' }
    & Pick<ConfigurableProduct, 'id' | 'sku' | 'name' | 'title' | 'description' | 'type'>
    & { variants: Array<(
      { __typename?: 'ProductVariant' }
      & { options: Array<(
        { __typename?: 'ProductOptionValue' }
        & Pick<ProductOptionValue, 'option' | 'id' | 'label'>
      )>, product: (
        { __typename?: 'SimpleProduct' }
        & Pick<SimpleProduct, 'sku'>
        & { price: (
          { __typename?: 'Money' }
          & Pick<Money, 'value' | 'currency'>
        ) }
      ) }
    )>, options: Array<(
      { __typename?: 'ProductOption' }
      & Pick<ProductOption, 'name' | 'label'>
      & { values: Array<Maybe<(
        { __typename?: 'ProductOptionValue' }
        & Pick<ProductOptionValue, 'option' | 'id' | 'label'>
      )>> }
    )>, price: (
      { __typename?: 'Money' }
      & Pick<Money, 'value' | 'currency'>
    ), image?: Maybe<(
      { __typename?: 'ProductImage' }
      & Pick<ProductImage, 'alt' | 'url'>
    )>, gallery?: Maybe<Array<(
      { __typename?: 'ProductImage' }
      & Pick<ProductImage, 'alt' | 'url'>
    )>> }
  ) | (
    { __typename?: 'SimpleProduct' }
    & Pick<SimpleProduct, 'id' | 'sku' | 'name' | 'title' | 'description' | 'type'>
    & { price: (
      { __typename?: 'Money' }
      & Pick<Money, 'value' | 'currency'>
    ), image?: Maybe<(
      { __typename?: 'ProductImage' }
      & Pick<ProductImage, 'alt' | 'url'>
    )>, gallery?: Maybe<Array<(
      { __typename?: 'ProductImage' }
      & Pick<ProductImage, 'alt' | 'url'>
    )>> }
  ) }
);

export type GetProductsQueryVariables = Exact<{
  filters?: Maybe<Array<ProductFilter>>;
  sort?: Maybe<ProductSort>;
  pagination: ProductPagination;
  searchTerm?: Maybe<Scalars['String']>;
}>;


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { products: (
    { __typename?: 'ProductList' }
    & Pick<ProductList, 'total'>
    & { items: Array<(
      { __typename?: 'ConfigurableProduct' }
      & Pick<ConfigurableProduct, 'id' | 'type' | 'sku' | 'name' | 'url'>
      & { price: (
        { __typename?: 'Money' }
        & Pick<Money, 'value' | 'currency'>
      ), thumbnailImage?: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'alt' | 'url'>
      )> }
    ) | (
      { __typename?: 'SimpleProduct' }
      & Pick<SimpleProduct, 'id' | 'type' | 'sku' | 'name' | 'url'>
      & { price: (
        { __typename?: 'Money' }
        & Pick<Money, 'value' | 'currency'>
      ), thumbnailImage?: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'alt' | 'url'>
      )> }
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

export const CartFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]};
export const CustomerFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]};
export const ShippingMethodFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};
export const PaymentMethodFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}}]};
export const AddressFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}}]};
export const CheckoutFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};
export const WebsiteConfigCountriesFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteConfigCountriesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebsiteConfig"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]};
export const CategoryPageFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryPage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}]};
export const CmsArticlePageFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CmsArticlePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsArticlePage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cmsArticle"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"body"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"html"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"html"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"alias"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"regions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"region"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"configuration"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"configuration"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayLabel"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"component"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}}]};
export const ProductListFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]};
export const ProductPageFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductPage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableProduct"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"options"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"values"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]};
export const AddCouponCodeToCartDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCouponCodeToCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"couponCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCouponCodeToCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}},{"kind":"Argument","name":{"kind":"Name","value":"couponCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"couponCode"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]};

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
export const AddToCartDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"items"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CartItemInput"}}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}},{"kind":"Argument","name":{"kind":"Name","value":"items"},"value":{"kind":"Variable","name":{"kind":"Name","value":"items"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]};

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
export const GetCartDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]};

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
export const CreateCartDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCart"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]};

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
export const RemoveCouponCodeFromCartDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveCouponCodeFromCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCouponCodeFromCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]};

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
export const UpdateCartDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"items"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CartItemUpdateInput"}}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}},{"kind":"Argument","name":{"kind":"Name","value":"items"},"value":{"kind":"Variable","name":{"kind":"Name","value":"items"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]};

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
export const GetCheckoutDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCheckout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};

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
export const CreateCheckoutDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCheckout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCheckout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};

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
export const SetCheckoutBillingAddressDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCheckoutBillingAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddressInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCheckoutBillingAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}},{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};

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
export const SetCheckoutPaymentMethodDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCheckoutPaymentMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCheckoutPaymentMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};

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
export const SetCheckoutShippingAddressDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCheckoutShippingAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddressInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCheckoutShippingAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}},{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};

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
export const SetCheckoutShippingMethodDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCheckoutShippingMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shippingMethodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCheckoutShippingMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}},{"kind":"Argument","name":{"kind":"Name","value":"shippingMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shippingMethodId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};

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
export const PlaceOrderDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PlaceOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderNumber"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postcode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]};

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
export const GetPageByPathDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"routeByPath"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CmsArticlePageFragment"},"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductPageFragment"},"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryPageFragment"},"directives":[]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryPage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CmsArticlePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsArticlePage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cmsArticle"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"body"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"html"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"html"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"alias"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"size"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"regions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"region"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"configuration"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"configuration"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayLabel"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"component"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductPage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigurableProduct"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"options"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"values"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]};

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
export const GetProductsDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductFilter"}}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductSort"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductPagination"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"connection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"products","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"filters","block":false},{"kind":"StringValue","value":"sort","block":false},{"kind":"StringValue","value":"searchTerm","block":false}]}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"facets"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"options"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facetName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isSelected"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"},"arguments":[]}]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetEqualValue"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eq"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"in"},"arguments":[],"directives":[]}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetMatchValue"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"match"},"arguments":[],"directives":[]}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetRangeValue"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"to"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}}]};

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