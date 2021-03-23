import { DocumentNode } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};





export type Query = {
  __typename?: 'Query';
  helloWorld: Scalars['String'];
  /** Get the route by path */
  routeByPath?: Maybe<Route>;
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

/** Route */
export type Route = {
  __typename?: 'Route';
  /** URL path */
  path: Scalars['String'];
  /** Page under the URL path */
  page: Page;
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

export type CmsHtmlField = {
  __typename?: 'CmsHtmlField';
  raw: Scalars['String'];
  html: Scalars['String'];
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

export type ProductFilterInput = {
  name: Scalars['String'];
  value: FilterValueInput;
};

export type FilterValueInput = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  match?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type ProductSortInput = {
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
export type ProductPaginationInput = {
  offset: Scalars['Int'];
  limit: Scalars['Int'];
};

export type ProductList = {
  __typename?: 'ProductList';
  total: Scalars['Int'];
  items: Array<Product>;
  facets: Array<Facet>;
  sortCriterias: Array<ProductSortCriteria>;
};

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
  color?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  /** All available product options for configurable types */
  options?: Maybe<Array<ProductOption>>;
  /** Product variants for each full product selection for configurable types */
  variants?: Maybe<Array<ProductVariant>>;
};

export type Money = {
  __typename?: 'Money';
  value: Scalars['Float'];
  currency: Scalars['String'];
};

export type ProductImage = {
  __typename?: 'ProductImage';
  alt: Scalars['String'];
  url: Scalars['String'];
};

export const ProductType = {
  Simple: 'SIMPLE',
  Configurable: 'CONFIGURABLE',
  Other: 'OTHER'
} as const;

export type ProductType = typeof ProductType[keyof typeof ProductType];
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

/** A product variant. */
export type ProductVariant = {
  __typename?: 'ProductVariant';
  /** A full selection of product options that define a variant */
  options: Array<ProductOptionValue>;
  /** The simple product that matches the selected options */
  product: Product;
};

export type Facet = {
  __typename?: 'Facet';
  name: Scalars['String'];
  label: Scalars['String'];
  options: Array<FacetOption>;
};

export type FacetOption = {
  __typename?: 'FacetOption';
  count: Scalars['Int'];
  facetName: Scalars['String'];
  isSelected: Scalars['Boolean'];
  label: Scalars['String'];
  value?: Maybe<FacetValue>;
};

export type FacetValue = FacetEqualValue | FacetMatchValue | FacetRangeValue;

export type FacetEqualValue = {
  __typename?: 'FacetEqualValue';
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FacetMatchValue = {
  __typename?: 'FacetMatchValue';
  match?: Maybe<Scalars['String']>;
};

export type FacetRangeValue = {
  __typename?: 'FacetRangeValue';
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
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

export type CartTotals = {
  __typename?: 'CartTotals';
  taxes: Array<MoneyWithLabel>;
  discounts: Array<MoneyWithLabel>;
  grandTotal: Money;
  subtotalExcludingTax: Money;
  subtotalIncludingTax: Money;
  subtotalWithDiscountExcludingTax: Money;
};

export type MoneyWithLabel = {
  __typename?: 'MoneyWithLabel';
  label: Scalars['String'];
  amount: Money;
};

export type CouponCode = {
  __typename?: 'CouponCode';
  code: Scalars['String'];
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
  order?: Maybe<Order>;
};

export type Customer = {
  __typename?: 'Customer';
  email?: Maybe<Scalars['String']>;
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

export type ShippingMethod = {
  __typename?: 'ShippingMethod';
  id: Scalars['String'];
  label: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  priceIncludingTax: Money;
  priceExcludingTax: Money;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  id: Scalars['String'];
  label: Scalars['String'];
  note?: Maybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  orderNumber: Scalars['String'];
};

export type WebsiteConfig = {
  __typename?: 'WebsiteConfig';
  id: Scalars['String'];
  locale: Scalars['String'];
  baseUrlPath: Scalars['String'];
  currency: Scalars['String'];
  countries: Array<Country>;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['String'];
  name: Scalars['String'];
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
  checkoutInput: CheckoutInput;
  address: AddressInput;
};


export type MutationSetCheckoutBillingAddressArgs = {
  checkoutInput: CheckoutInput;
  address: AddressInput;
};


export type MutationSetCheckoutShippingMethodArgs = {
  checkoutInput: CheckoutInput;
  shippingMethodId: Scalars['String'];
};


export type MutationSetCheckoutPaymentMethodArgs = {
  checkoutInput: CheckoutInput;
  paymentMethodId: Scalars['String'];
};


export type MutationPlaceOrderArgs = {
  checkoutInput: CheckoutInput;
};

export type AuthUser = {
  __typename?: 'AuthUser';
  authToken: Scalars['String'];
  refreshToken: Scalars['String'];
  user: User;
};

export type CartItemInput = {
  id: Scalars['String'];
  variantId?: Maybe<Scalars['String']>;
  quantity: Scalars['Float'];
};

export type CartItemUpdateInput = {
  id: Scalars['String'];
  quantity: Scalars['Float'];
};

export type CheckoutInput = {
  checkoutId: Scalars['ID'];
  orderId?: Maybe<Scalars['String']>;
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

export type PlaceOrderResult = {
  __typename?: 'PlaceOrderResult';
  order: Order;
  checkout: Checkout;
};

/** Category */
export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
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
  items: Array<CartItemInput> | CartItemInput;
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
  items: Array<CartItemUpdateInput> | CartItemUpdateInput;
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
  )>, order?: Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id'>
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
  checkoutInput: CheckoutInput;
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
  checkoutInput: CheckoutInput;
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
  checkoutInput: CheckoutInput;
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
  checkoutInput: CheckoutInput;
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
  checkoutInput: CheckoutInput;
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
    & MenuFragmentFragment
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
  )>, mainMenu?: Maybe<(
    { __typename?: 'Menu' }
    & MenuFragmentFragment
  )>, footerMenu?: Maybe<(
    { __typename?: 'Menu' }
    & MenuFragmentFragment
  )> }
);

export type MenuFragmentFragment = (
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
);

export type ProductListFragmentFragment = (
  { __typename?: 'ProductList' }
  & Pick<ProductList, 'total' | 'sortCriterias'>
  & { items: Array<(
    { __typename?: 'Product' }
    & ProductListItemFragmentFragment
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
);

export type ProductListItemFragmentFragment = (
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
        & Pick<Product, 'id' | 'sku'>
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
  filters?: Maybe<Array<ProductFilterInput> | ProductFilterInput>;
  sort?: Maybe<ProductSortInput>;
  pagination: ProductPaginationInput;
  searchTerm?: Maybe<Scalars['String']>;
}>;


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { products: (
    { __typename?: 'ProductList' }
    & ProductListFragmentFragment
  ) }
);

export const CartFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]};
export const CustomerFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]};
export const ShippingMethodFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]};
export const PaymentMethodFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]};
export const AddressFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"address1"}},{"kind":"Field","name":{"kind":"Name","value":"address2"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}}]};
export const CheckoutFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"address1"}},{"kind":"Field","name":{"kind":"Name","value":"address2"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]};
export const WebsiteConfigCountriesFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteConfigCountriesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebsiteConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};
export const CategoryPageFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]};
export const CmsArticlePageFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CmsArticlePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"cmsArticle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"regions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"configuration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"configuration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayLabel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"component"}}]}}]}}]}}]}}]}}]}}]};
export const CmsHomepagePageFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CmsHomepagePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsHomepagePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"homePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productBanner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productGrid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]};
export const CmsPagePageFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CmsPagePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsPagePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"cmsBasicContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const MenuFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Menu"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]}}]};
export const ProductListItemFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductListItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]};
export const ProductListFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductListItemFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facetName"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"isSelected"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}]},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetEqualValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eq"}},{"kind":"Field","name":{"kind":"Name","value":"in"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetMatchValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"match"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetRangeValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sortCriterias"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductListItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]};
export const ProductPageFragmentFragmentDoc: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]};
export const AddCouponCodeToCartDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCouponCodeToCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"couponCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCouponCodeToCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}},{"kind":"Argument","name":{"kind":"Name","value":"couponCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"couponCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]};

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
export const AddToCartDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"items"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CartItemInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}},{"kind":"Argument","name":{"kind":"Name","value":"items"},"value":{"kind":"Variable","name":{"kind":"Name","value":"items"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]};

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
export const GetCartDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]};

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
export function useGetCartQuery(baseOptions: Apollo.QueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
        return Apollo.useQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, baseOptions);
      }
export function useGetCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
          return Apollo.useLazyQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, baseOptions);
        }
export type GetCartQueryHookResult = ReturnType<typeof useGetCartQuery>;
export type GetCartLazyQueryHookResult = ReturnType<typeof useGetCartLazyQuery>;
export const CreateCartDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]};

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
export const RemoveCouponCodeFromCartDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveCouponCodeFromCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCouponCodeFromCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]};

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
export const UpdateCartDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"items"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CartItemUpdateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}},{"kind":"Argument","name":{"kind":"Name","value":"items"},"value":{"kind":"Variable","name":{"kind":"Name","value":"items"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]};

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
export const GetCheckoutDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCheckout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"address1"}},{"kind":"Field","name":{"kind":"Name","value":"address2"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]};

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
export function useGetCheckoutQuery(baseOptions: Apollo.QueryHookOptions<GetCheckoutQuery, GetCheckoutQueryVariables>) {
        return Apollo.useQuery<GetCheckoutQuery, GetCheckoutQueryVariables>(GetCheckoutDocument, baseOptions);
      }
export function useGetCheckoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCheckoutQuery, GetCheckoutQueryVariables>) {
          return Apollo.useLazyQuery<GetCheckoutQuery, GetCheckoutQueryVariables>(GetCheckoutDocument, baseOptions);
        }
export type GetCheckoutQueryHookResult = ReturnType<typeof useGetCheckoutQuery>;
export type GetCheckoutLazyQueryHookResult = ReturnType<typeof useGetCheckoutLazyQuery>;
export const CreateCheckoutDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCheckout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCheckout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"address1"}},{"kind":"Field","name":{"kind":"Name","value":"address2"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]};

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
export const SetCheckoutBillingAddressDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCheckoutBillingAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckoutInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCheckoutBillingAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"address1"}},{"kind":"Field","name":{"kind":"Name","value":"address2"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]};

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
 *      checkoutInput: // value for 'checkoutInput'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useSetCheckoutBillingAddressMutation(baseOptions?: Apollo.MutationHookOptions<SetCheckoutBillingAddressMutation, SetCheckoutBillingAddressMutationVariables>) {
        return Apollo.useMutation<SetCheckoutBillingAddressMutation, SetCheckoutBillingAddressMutationVariables>(SetCheckoutBillingAddressDocument, baseOptions);
      }
export type SetCheckoutBillingAddressMutationHookResult = ReturnType<typeof useSetCheckoutBillingAddressMutation>;
export type SetCheckoutBillingAddressMutationOptions = Apollo.BaseMutationOptions<SetCheckoutBillingAddressMutation, SetCheckoutBillingAddressMutationVariables>;
export const SetCheckoutPaymentMethodDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCheckoutPaymentMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckoutInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCheckoutPaymentMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"address1"}},{"kind":"Field","name":{"kind":"Name","value":"address2"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]};

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
 *      checkoutInput: // value for 'checkoutInput'
 *      paymentMethodId: // value for 'paymentMethodId'
 *   },
 * });
 */
export function useSetCheckoutPaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<SetCheckoutPaymentMethodMutation, SetCheckoutPaymentMethodMutationVariables>) {
        return Apollo.useMutation<SetCheckoutPaymentMethodMutation, SetCheckoutPaymentMethodMutationVariables>(SetCheckoutPaymentMethodDocument, baseOptions);
      }
export type SetCheckoutPaymentMethodMutationHookResult = ReturnType<typeof useSetCheckoutPaymentMethodMutation>;
export type SetCheckoutPaymentMethodMutationOptions = Apollo.BaseMutationOptions<SetCheckoutPaymentMethodMutation, SetCheckoutPaymentMethodMutationVariables>;
export const SetCheckoutShippingAddressDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCheckoutShippingAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckoutInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCheckoutShippingAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"address1"}},{"kind":"Field","name":{"kind":"Name","value":"address2"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]};

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
 *      checkoutInput: // value for 'checkoutInput'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useSetCheckoutShippingAddressMutation(baseOptions?: Apollo.MutationHookOptions<SetCheckoutShippingAddressMutation, SetCheckoutShippingAddressMutationVariables>) {
        return Apollo.useMutation<SetCheckoutShippingAddressMutation, SetCheckoutShippingAddressMutationVariables>(SetCheckoutShippingAddressDocument, baseOptions);
      }
export type SetCheckoutShippingAddressMutationHookResult = ReturnType<typeof useSetCheckoutShippingAddressMutation>;
export type SetCheckoutShippingAddressMutationOptions = Apollo.BaseMutationOptions<SetCheckoutShippingAddressMutation, SetCheckoutShippingAddressMutationVariables>;
export const SetCheckoutShippingMethodDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCheckoutShippingMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckoutInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shippingMethodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCheckoutShippingMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"shippingMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shippingMethodId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"address1"}},{"kind":"Field","name":{"kind":"Name","value":"address2"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]};

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
 *      checkoutInput: // value for 'checkoutInput'
 *      shippingMethodId: // value for 'shippingMethodId'
 *   },
 * });
 */
export function useSetCheckoutShippingMethodMutation(baseOptions?: Apollo.MutationHookOptions<SetCheckoutShippingMethodMutation, SetCheckoutShippingMethodMutationVariables>) {
        return Apollo.useMutation<SetCheckoutShippingMethodMutation, SetCheckoutShippingMethodMutationVariables>(SetCheckoutShippingMethodDocument, baseOptions);
      }
export type SetCheckoutShippingMethodMutationHookResult = ReturnType<typeof useSetCheckoutShippingMethodMutation>;
export type SetCheckoutShippingMethodMutationOptions = Apollo.BaseMutationOptions<SetCheckoutShippingMethodMutation, SetCheckoutShippingMethodMutationVariables>;
export const CountriesDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"websiteConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WebsiteConfigCountriesFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteConfigCountriesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebsiteConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};

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
export const PlaceOrderDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PlaceOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckoutInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderNumber"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItems"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rowTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"optionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtotalIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"couponCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"address1"}},{"kind":"Field","name":{"kind":"Name","value":"address2"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availableShippingMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"availablePaymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShippingMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AddressFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShippingMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShippingMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"priceIncludingTax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]};

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
 *      checkoutInput: // value for 'checkoutInput'
 *   },
 * });
 */
export function usePlaceOrderMutation(baseOptions?: Apollo.MutationHookOptions<PlaceOrderMutation, PlaceOrderMutationVariables>) {
        return Apollo.useMutation<PlaceOrderMutation, PlaceOrderMutationVariables>(PlaceOrderDocument, baseOptions);
      }
export type PlaceOrderMutationHookResult = ReturnType<typeof usePlaceOrderMutation>;
export type PlaceOrderMutationOptions = Apollo.BaseMutationOptions<PlaceOrderMutation, PlaceOrderMutationVariables>;
export const GetMenuDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMenu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Menu"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]}}]};

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
export function useGetMenuQuery(baseOptions: Apollo.QueryHookOptions<GetMenuQuery, GetMenuQueryVariables>) {
        return Apollo.useQuery<GetMenuQuery, GetMenuQueryVariables>(GetMenuDocument, baseOptions);
      }
export function useGetMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMenuQuery, GetMenuQueryVariables>) {
          return Apollo.useLazyQuery<GetMenuQuery, GetMenuQueryVariables>(GetMenuDocument, baseOptions);
        }
export type GetMenuQueryHookResult = ReturnType<typeof useGetMenuQuery>;
export type GetMenuLazyQueryHookResult = ReturnType<typeof useGetMenuLazyQuery>;
export const GetPageByPathDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"routeByPath"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CmsHomepagePageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CmsPagePageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CmsArticlePageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductPageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryPageFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"mainMenu"},"name":{"kind":"Name","value":"menu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"main","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuFragment"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"footerMenu"},"name":{"kind":"Name","value":"menu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"footer","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CmsArticlePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"cmsArticle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"regions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"configuration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"configuration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayLabel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"component"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CmsHomepagePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsHomepagePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"homePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productBanner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productGrid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CmsPagePageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsPagePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"cmsBasicContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Menu"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]};

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
export function useGetPageByPathQuery(baseOptions: Apollo.QueryHookOptions<GetPageByPathQuery, GetPageByPathQueryVariables>) {
        return Apollo.useQuery<GetPageByPathQuery, GetPageByPathQueryVariables>(GetPageByPathDocument, baseOptions);
      }
export function useGetPageByPathLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageByPathQuery, GetPageByPathQueryVariables>) {
          return Apollo.useLazyQuery<GetPageByPathQuery, GetPageByPathQueryVariables>(GetPageByPathDocument, baseOptions);
        }
export type GetPageByPathQueryHookResult = ReturnType<typeof useGetPageByPathQuery>;
export type GetPageByPathLazyQueryHookResult = ReturnType<typeof useGetPageByPathLazyQuery>;
export const GetProductsDocument: DocumentNode = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductFilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductSortInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductPaginationInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"connection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"products","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"filters","block":false},{"kind":"StringValue","value":"sort","block":false},{"kind":"StringValue","value":"searchTerm","block":false}]}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductListFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductListItemFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facetName"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"isSelected"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}]},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetEqualValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eq"}},{"kind":"Field","name":{"kind":"Name","value":"in"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetMatchValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"match"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FacetRangeValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sortCriterias"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductListItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]};

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
export function useGetProductsQuery(baseOptions: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type QueryKeySpecifier = ('helloWorld' | 'routeByPath' | 'menu' | 'cmsArticle' | 'products' | 'userById' | 'me' | 'cart' | 'checkout' | 'websiteConfig' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	helloWorld?: FieldPolicy<any> | FieldReadFunction<any>,
	routeByPath?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	cmsArticle?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	userById?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteConfig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteKeySpecifier = ('path' | 'page' | RouteKeySpecifier)[];
export type RouteFieldPolicy = {
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageKeySpecifier = ('id' | 'type' | 'locale' | PageKeySpecifier)[];
export type PageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>
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
export type CmsHtmlFieldKeySpecifier = ('raw' | 'html' | CmsHtmlFieldKeySpecifier)[];
export type CmsHtmlFieldFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>,
	html?: FieldPolicy<any> | FieldReadFunction<any>
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
export type ProductListKeySpecifier = ('total' | 'items' | 'facets' | 'sortCriterias' | ProductListKeySpecifier)[];
export type ProductListFieldPolicy = {
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	facets?: FieldPolicy<any> | FieldReadFunction<any>,
	sortCriterias?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('id' | 'sku' | 'name' | 'title' | 'price' | 'description' | 'image' | 'thumbnailImage' | 'type' | 'url' | 'gallery' | 'color' | 'size' | 'options' | 'variants' | ProductKeySpecifier)[];
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
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoneyKeySpecifier = ('value' | 'currency' | MoneyKeySpecifier)[];
export type MoneyFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageKeySpecifier = ('alt' | 'url' | ProductImageKeySpecifier)[];
export type ProductImageFieldPolicy = {
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
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
export type FacetKeySpecifier = ('name' | 'label' | 'options' | FacetKeySpecifier)[];
export type FacetFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FacetOptionKeySpecifier = ('count' | 'facetName' | 'isSelected' | 'label' | 'value' | FacetOptionKeySpecifier)[];
export type FacetOptionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	facetName?: FieldPolicy<any> | FieldReadFunction<any>,
	isSelected?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
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
export type FacetRangeValueKeySpecifier = ('from' | 'to' | FacetRangeValueKeySpecifier)[];
export type FacetRangeValueFieldPolicy = {
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('id' | 'firstName' | 'lastName' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>
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
export type MoneyWithLabelKeySpecifier = ('label' | 'amount' | MoneyWithLabelKeySpecifier)[];
export type MoneyWithLabelFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CouponCodeKeySpecifier = ('code' | CouponCodeKeySpecifier)[];
export type CouponCodeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutKeySpecifier = ('id' | 'cart' | 'customer' | 'shippingAddress' | 'billingAddress' | 'shippingMethod' | 'paymentMethod' | 'availableShippingMethods' | 'availablePaymentMethods' | 'order' | CheckoutKeySpecifier)[];
export type CheckoutFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	billingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	availableShippingMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	availablePaymentMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerKeySpecifier = ('email' | CustomerKeySpecifier)[];
export type CustomerFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>
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
export type ShippingMethodKeySpecifier = ('id' | 'label' | 'note' | 'priceIncludingTax' | 'priceExcludingTax' | ShippingMethodKeySpecifier)[];
export type ShippingMethodFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	priceIncludingTax?: FieldPolicy<any> | FieldReadFunction<any>,
	priceExcludingTax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentMethodKeySpecifier = ('id' | 'label' | 'note' | PaymentMethodKeySpecifier)[];
export type PaymentMethodFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('id' | 'orderNumber' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	orderNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebsiteConfigKeySpecifier = ('id' | 'locale' | 'baseUrlPath' | 'currency' | 'countries' | WebsiteConfigKeySpecifier)[];
export type WebsiteConfigFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	baseUrlPath?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryKeySpecifier = ('id' | 'name' | CountryKeySpecifier)[];
export type CountryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
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
export type AuthUserKeySpecifier = ('authToken' | 'refreshToken' | 'user' | AuthUserKeySpecifier)[];
export type AuthUserFieldPolicy = {
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceOrderResultKeySpecifier = ('order' | 'checkout' | PlaceOrderResultKeySpecifier)[];
export type PlaceOrderResultFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryKeySpecifier = ('id' | 'name' | 'title' | 'description' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>
};
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
export type ProductPageKeySpecifier = ('id' | 'type' | 'locale' | 'product' | ProductPageKeySpecifier)[];
export type ProductPageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
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
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Route?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteKeySpecifier | (() => undefined | RouteKeySpecifier),
		fields?: RouteFieldPolicy,
	},
	Page?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageKeySpecifier | (() => undefined | PageKeySpecifier),
		fields?: PageFieldPolicy,
	},
	Menu?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuKeySpecifier | (() => undefined | MenuKeySpecifier),
		fields?: MenuFieldPolicy,
	},
	MenuItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemKeySpecifier | (() => undefined | MenuItemKeySpecifier),
		fields?: MenuItemFieldPolicy,
	},
	CmsArticle?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsArticleKeySpecifier | (() => undefined | CmsArticleKeySpecifier),
		fields?: CmsArticleFieldPolicy,
	},
	CmsHtmlField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsHtmlFieldKeySpecifier | (() => undefined | CmsHtmlFieldKeySpecifier),
		fields?: CmsHtmlFieldFieldPolicy,
	},
	CmsUrl?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsUrlKeySpecifier | (() => undefined | CmsUrlKeySpecifier),
		fields?: CmsUrlFieldPolicy,
	},
	CmsUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsUserKeySpecifier | (() => undefined | CmsUserKeySpecifier),
		fields?: CmsUserFieldPolicy,
	},
	CmsImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsImageKeySpecifier | (() => undefined | CmsImageKeySpecifier),
		fields?: CmsImageFieldPolicy,
	},
	CmsImageVersion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsImageVersionKeySpecifier | (() => undefined | CmsImageVersionKeySpecifier),
		fields?: CmsImageVersionFieldPolicy,
	},
	CmsLayout?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsLayoutKeySpecifier | (() => undefined | CmsLayoutKeySpecifier),
		fields?: CmsLayoutFieldPolicy,
	},
	CmsLayoutItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsLayoutItemKeySpecifier | (() => undefined | CmsLayoutItemKeySpecifier),
		fields?: CmsLayoutItemFieldPolicy,
	},
	CmsLayoutItemRegion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsLayoutItemRegionKeySpecifier | (() => undefined | CmsLayoutItemRegionKeySpecifier),
		fields?: CmsLayoutItemRegionFieldPolicy,
	},
	CmsLayoutItemRegionConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsLayoutItemRegionConfigKeySpecifier | (() => undefined | CmsLayoutItemRegionConfigKeySpecifier),
		fields?: CmsLayoutItemRegionConfigFieldPolicy,
	},
	CmsLayoutItemComponent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsLayoutItemComponentKeySpecifier | (() => undefined | CmsLayoutItemComponentKeySpecifier),
		fields?: CmsLayoutItemComponentFieldPolicy,
	},
	CmsLayoutItemComponentConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsLayoutItemComponentConfigKeySpecifier | (() => undefined | CmsLayoutItemComponentConfigKeySpecifier),
		fields?: CmsLayoutItemComponentConfigFieldPolicy,
	},
	ProductList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductListKeySpecifier | (() => undefined | ProductListKeySpecifier),
		fields?: ProductListFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	Money?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoneyKeySpecifier | (() => undefined | MoneyKeySpecifier),
		fields?: MoneyFieldPolicy,
	},
	ProductImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductImageKeySpecifier | (() => undefined | ProductImageKeySpecifier),
		fields?: ProductImageFieldPolicy,
	},
	ProductOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductOptionKeySpecifier | (() => undefined | ProductOptionKeySpecifier),
		fields?: ProductOptionFieldPolicy,
	},
	ProductOptionValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductOptionValueKeySpecifier | (() => undefined | ProductOptionValueKeySpecifier),
		fields?: ProductOptionValueFieldPolicy,
	},
	ProductVariant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantKeySpecifier | (() => undefined | ProductVariantKeySpecifier),
		fields?: ProductVariantFieldPolicy,
	},
	Facet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FacetKeySpecifier | (() => undefined | FacetKeySpecifier),
		fields?: FacetFieldPolicy,
	},
	FacetOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FacetOptionKeySpecifier | (() => undefined | FacetOptionKeySpecifier),
		fields?: FacetOptionFieldPolicy,
	},
	FacetEqualValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FacetEqualValueKeySpecifier | (() => undefined | FacetEqualValueKeySpecifier),
		fields?: FacetEqualValueFieldPolicy,
	},
	FacetMatchValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FacetMatchValueKeySpecifier | (() => undefined | FacetMatchValueKeySpecifier),
		fields?: FacetMatchValueFieldPolicy,
	},
	FacetRangeValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FacetRangeValueKeySpecifier | (() => undefined | FacetRangeValueKeySpecifier),
		fields?: FacetRangeValueFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	Cart?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartKeySpecifier | (() => undefined | CartKeySpecifier),
		fields?: CartFieldPolicy,
	},
	CartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemKeySpecifier | (() => undefined | CartItemKeySpecifier),
		fields?: CartItemFieldPolicy,
	},
	CartItemProductOptionValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemProductOptionValueKeySpecifier | (() => undefined | CartItemProductOptionValueKeySpecifier),
		fields?: CartItemProductOptionValueFieldPolicy,
	},
	CartTotals?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartTotalsKeySpecifier | (() => undefined | CartTotalsKeySpecifier),
		fields?: CartTotalsFieldPolicy,
	},
	MoneyWithLabel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoneyWithLabelKeySpecifier | (() => undefined | MoneyWithLabelKeySpecifier),
		fields?: MoneyWithLabelFieldPolicy,
	},
	CouponCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CouponCodeKeySpecifier | (() => undefined | CouponCodeKeySpecifier),
		fields?: CouponCodeFieldPolicy,
	},
	Checkout?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutKeySpecifier | (() => undefined | CheckoutKeySpecifier),
		fields?: CheckoutFieldPolicy,
	},
	Customer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerKeySpecifier | (() => undefined | CustomerKeySpecifier),
		fields?: CustomerFieldPolicy,
	},
	Address?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressKeySpecifier | (() => undefined | AddressKeySpecifier),
		fields?: AddressFieldPolicy,
	},
	ShippingMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingMethodKeySpecifier | (() => undefined | ShippingMethodKeySpecifier),
		fields?: ShippingMethodFieldPolicy,
	},
	PaymentMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentMethodKeySpecifier | (() => undefined | PaymentMethodKeySpecifier),
		fields?: PaymentMethodFieldPolicy,
	},
	Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		fields?: OrderFieldPolicy,
	},
	WebsiteConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebsiteConfigKeySpecifier | (() => undefined | WebsiteConfigKeySpecifier),
		fields?: WebsiteConfigFieldPolicy,
	},
	Country?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountryKeySpecifier | (() => undefined | CountryKeySpecifier),
		fields?: CountryFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	AuthUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthUserKeySpecifier | (() => undefined | AuthUserKeySpecifier),
		fields?: AuthUserFieldPolicy,
	},
	PlaceOrderResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceOrderResultKeySpecifier | (() => undefined | PlaceOrderResultKeySpecifier),
		fields?: PlaceOrderResultFieldPolicy,
	},
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	CategoryPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryPageKeySpecifier | (() => undefined | CategoryPageKeySpecifier),
		fields?: CategoryPageFieldPolicy,
	},
	CmsArticlePage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsArticlePageKeySpecifier | (() => undefined | CmsArticlePageKeySpecifier),
		fields?: CmsArticlePageFieldPolicy,
	},
	CmsBasicContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsBasicContentKeySpecifier | (() => undefined | CmsBasicContentKeySpecifier),
		fields?: CmsBasicContentFieldPolicy,
	},
	CmsHomepage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsHomepageKeySpecifier | (() => undefined | CmsHomepageKeySpecifier),
		fields?: CmsHomepageFieldPolicy,
	},
	ProductBanner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductBannerKeySpecifier | (() => undefined | ProductBannerKeySpecifier),
		fields?: ProductBannerFieldPolicy,
	},
	ProductGridBanner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductGridBannerKeySpecifier | (() => undefined | ProductGridBannerKeySpecifier),
		fields?: ProductGridBannerFieldPolicy,
	},
	CmsHomepagePage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsHomepagePageKeySpecifier | (() => undefined | CmsHomepagePageKeySpecifier),
		fields?: CmsHomepagePageFieldPolicy,
	},
	CmsPagePage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsPagePageKeySpecifier | (() => undefined | CmsPagePageKeySpecifier),
		fields?: CmsPagePageFieldPolicy,
	},
	ProductPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductPageKeySpecifier | (() => undefined | ProductPageKeySpecifier),
		fields?: ProductPageFieldPolicy,
	},
	Sort?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SortKeySpecifier | (() => undefined | SortKeySpecifier),
		fields?: SortFieldPolicy,
	},
	FilterValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FilterValueKeySpecifier | (() => undefined | FilterValueKeySpecifier),
		fields?: FilterValueFieldPolicy,
	},
	Filter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FilterKeySpecifier | (() => undefined | FilterKeySpecifier),
		fields?: FilterFieldPolicy,
	}
};