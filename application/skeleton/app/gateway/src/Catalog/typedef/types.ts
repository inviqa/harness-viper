import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
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

/** Category */
export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  products: ProductList;
};


export type QueryProductsArgs = {
  filters?: Maybe<Array<ProductFilterInput>>;
  sort?: Maybe<ProductSortInput>;
  pagination?: Maybe<ProductPaginationInput>;
  searchTerm?: Maybe<Scalars['String']>;
};

export type ProductPage = {
  __typename?: 'ProductPage';
  id: Scalars['String'];
  type: Scalars['String'];
  locale: Scalars['String'];
  /** Product */
  product: Product;
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
export type ProductSortInput = {
  criteria: ProductSortCriteria;
  order: ProductSortOrder;
};

export type FilterValueInput = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  match?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type ProductFilterInput = {
  name: Scalars['String'];
  value: FilterValueInput;
};

export type ProductPaginationInput = {
  offset: Scalars['Int'];
  limit: Scalars['Int'];
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

/** A product variant. */
export type ProductVariant = {
  __typename?: 'ProductVariant';
  /** A full selection of product options that define a variant */
  options: Array<ProductOptionValue>;
  /** The simple product that matches the selected options */
  product: Product;
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

export type FacetRangeValue = {
  __typename?: 'FacetRangeValue';
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type FacetValue = FacetEqualValue | FacetMatchValue | FacetRangeValue;

export type FacetOption = {
  __typename?: 'FacetOption';
  facetName: Scalars['String'];
  count: Scalars['Int'];
  label: Scalars['String'];
  value?: Maybe<FacetValue>;
};

export type Facet = {
  __typename?: 'Facet';
  name: Scalars['String'];
  label: Scalars['String'];
  options: Array<FacetOption>;
};

export type ProductList = {
  __typename?: 'ProductList';
  total: Scalars['Int'];
  items: Array<Product>;
  facets: Array<Facet>;
  sortCriterias: Array<ProductSortCriteria>;
};

export type CategoryPage = {
  __typename?: 'CategoryPage';
  id: Scalars['String'];
  type: Scalars['String'];
  locale: Scalars['String'];
  /** Category */
  category: Category;
  /** Products in category */
  products: ProductList;
};


export type CategoryPageProductsArgs = {
  filters?: Maybe<Array<ProductFilterInput>>;
  sort?: Maybe<ProductSortInput>;
  pagination?: Maybe<ProductPaginationInput>;
};




export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ReferenceResolver<TResult, TReference, TContext> = (
      reference: TReference,
      context: TContext,
      info: GraphQLResolveInfo
    ) => Promise<TResult> | TResult;

      type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>;
      type NullableCheck<T, S> = Maybe<T> extends T ? Maybe<ListCheck<NonNullable<T>, S>> : ListCheck<T, S>;
      type ListCheck<T, S> = T extends (infer U)[] ? NullableCheck<U, S>[] : GraphQLRecursivePick<T, S>;
      export type GraphQLRecursivePick<T, S> = { [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]> };
    
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Product: ResolverTypeWrapper<Product>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Category: ResolverTypeWrapper<Category>;
  Query: ResolverTypeWrapper<{}>;
  ProductPage: ResolverTypeWrapper<ProductPage>;
  ProductSortCriteria: ProductSortCriteria;
  ProductSortOrder: ProductSortOrder;
  ProductSortInput: ProductSortInput;
  FilterValueInput: FilterValueInput;
  ProductFilterInput: ProductFilterInput;
  ProductPaginationInput: ProductPaginationInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Money: ResolverTypeWrapper<Money>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ProductImage: ResolverTypeWrapper<ProductImage>;
  ProductType: ProductType;
  ProductOptionValue: ResolverTypeWrapper<ProductOptionValue>;
  ProductOption: ResolverTypeWrapper<ProductOption>;
  ProductVariant: ResolverTypeWrapper<ProductVariant>;
  FacetEqualValue: ResolverTypeWrapper<FacetEqualValue>;
  FacetMatchValue: ResolverTypeWrapper<FacetMatchValue>;
  FacetRangeValue: ResolverTypeWrapper<FacetRangeValue>;
  FacetValue: ResolversTypes['FacetEqualValue'] | ResolversTypes['FacetMatchValue'] | ResolversTypes['FacetRangeValue'];
  FacetOption: ResolverTypeWrapper<Omit<FacetOption, 'value'> & { value?: Maybe<ResolversTypes['FacetValue']> }>;
  Facet: ResolverTypeWrapper<Facet>;
  ProductList: ResolverTypeWrapper<ProductList>;
  CategoryPage: ResolverTypeWrapper<CategoryPage>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Product: Product;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Category: Category;
  Query: {};
  ProductPage: ProductPage;
  ProductSortInput: ProductSortInput;
  FilterValueInput: FilterValueInput;
  ProductFilterInput: ProductFilterInput;
  ProductPaginationInput: ProductPaginationInput;
  Int: Scalars['Int'];
  Money: Money;
  Float: Scalars['Float'];
  ProductImage: ProductImage;
  ProductOptionValue: ProductOptionValue;
  ProductOption: ProductOption;
  ProductVariant: ProductVariant;
  FacetEqualValue: FacetEqualValue;
  FacetMatchValue: FacetMatchValue;
  FacetRangeValue: FacetRangeValue;
  FacetValue: ResolversParentTypes['FacetEqualValue'] | ResolversParentTypes['FacetMatchValue'] | ResolversParentTypes['FacetRangeValue'];
  FacetOption: Omit<FacetOption, 'value'> & { value?: Maybe<ResolversParentTypes['FacetValue']> };
  Facet: Facet;
  ProductList: ProductList;
  CategoryPage: CategoryPage;
  Boolean: Scalars['Boolean'];
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Product']>, { __typename: 'Product' } & (GraphQLRecursivePick<ParentType, {"id":true}> | GraphQLRecursivePick<ParentType, {"sku":true}>), ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  thumbnailImage?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gallery?: Resolver<Maybe<Array<ResolversTypes['ProductImage']>>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<ResolversTypes['ProductOption']>>, ParentType, ContextType>;
  variants?: Resolver<Maybe<Array<ResolversTypes['ProductVariant']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Category']>, { __typename: 'Category' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  products?: Resolver<ResolversTypes['ProductList'], ParentType, ContextType, RequireFields<QueryProductsArgs, never>>;
};

export type ProductPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPage'] = ResolversParentTypes['ProductPage']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['ProductPage']>, { __typename: 'ProductPage' } & GraphQLRecursivePick<ParentType, {"id":true,"type":true,"locale":true}>, ContextType>;



  product?: Resolver<ResolversTypes['Product'], { __typename: 'ProductPage' } & GraphQLRecursivePick<ParentType, {"id":true,"type":true,"locale":true}>, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoneyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money'] = ResolversParentTypes['Money']> = {
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductImage'] = ResolversParentTypes['ProductImage']> = {
  alt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionValue'] = ResolversParentTypes['ProductOptionValue']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['ProductOptionValue']>, { __typename: 'ProductOptionValue' } & GraphQLRecursivePick<ParentType, {"option":true,"id":true}>, ContextType>;
  option?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOption'] = ResolversParentTypes['ProductOption']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['ProductOption']>, { __typename: 'ProductOption' } & GraphQLRecursivePick<ParentType, {"name":true}>, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<ResolversTypes['ProductOptionValue']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariant'] = ResolversParentTypes['ProductVariant']> = {
  options?: Resolver<Array<ResolversTypes['ProductOptionValue']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetEqualValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacetEqualValue'] = ResolversParentTypes['FacetEqualValue']> = {
  eq?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  in?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetMatchValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacetMatchValue'] = ResolversParentTypes['FacetMatchValue']> = {
  match?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetRangeValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacetRangeValue'] = ResolversParentTypes['FacetRangeValue']> = {
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacetValue'] = ResolversParentTypes['FacetValue']> = {
  __resolveType: TypeResolveFn<'FacetEqualValue' | 'FacetMatchValue' | 'FacetRangeValue', ParentType, ContextType>;
};

export type FacetOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacetOption'] = ResolversParentTypes['FacetOption']> = {
  facetName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['FacetValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Facet'] = ResolversParentTypes['Facet']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['FacetOption']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductListResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductList'] = ResolversParentTypes['ProductList']> = {
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  facets?: Resolver<Array<ResolversTypes['Facet']>, ParentType, ContextType>;
  sortCriterias?: Resolver<Array<ResolversTypes['ProductSortCriteria']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryPage'] = ResolversParentTypes['CategoryPage']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['CategoryPage']>, { __typename: 'CategoryPage' } & GraphQLRecursivePick<ParentType, {"id":true,"type":true,"locale":true}>, ContextType>;



  category?: Resolver<ResolversTypes['Category'], { __typename: 'CategoryPage' } & GraphQLRecursivePick<ParentType, {"id":true,"type":true,"locale":true}>, ContextType>;
  products?: Resolver<ResolversTypes['ProductList'], { __typename: 'CategoryPage' } & GraphQLRecursivePick<ParentType, {"id":true,"type":true,"locale":true}>, ContextType, RequireFields<CategoryPageProductsArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Product?: ProductResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ProductPage?: ProductPageResolvers<ContextType>;
  Money?: MoneyResolvers<ContextType>;
  ProductImage?: ProductImageResolvers<ContextType>;
  ProductOptionValue?: ProductOptionValueResolvers<ContextType>;
  ProductOption?: ProductOptionResolvers<ContextType>;
  ProductVariant?: ProductVariantResolvers<ContextType>;
  FacetEqualValue?: FacetEqualValueResolvers<ContextType>;
  FacetMatchValue?: FacetMatchValueResolvers<ContextType>;
  FacetRangeValue?: FacetRangeValueResolvers<ContextType>;
  FacetValue?: FacetValueResolvers<ContextType>;
  FacetOption?: FacetOptionResolvers<ContextType>;
  Facet?: FacetResolvers<ContextType>;
  ProductList?: ProductListResolvers<ContextType>;
  CategoryPage?: CategoryPageResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
