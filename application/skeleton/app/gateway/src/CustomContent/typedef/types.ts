import { GraphQLResolveInfo } from 'graphql';
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





export type Product = {
  __typename?: 'Product';
  sku: Scalars['String'];
};

export type CmsImageVersion = {
  __typename?: 'CmsImageVersion';
  size: Scalars['String'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type CmsImage = {
  __typename?: 'CmsImage';
  alt: Scalars['String'];
  sizes: Array<CmsImageVersion>;
};

export type CmsHtmlField = {
  __typename?: 'CmsHtmlField';
  raw: Scalars['String'];
  html: Scalars['String'];
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

export type CmsHomepage = {
  __typename?: 'CmsHomepage';
  id: Scalars['String'];
  locale: Scalars['String'];
  productBanner: ProductBanner;
  productGrid: ProductGridBanner;
};

export type CmsHomepagePage = {
  __typename?: 'CmsHomepagePage';
  id: Scalars['String'];
  type: Scalars['String'];
  locale: Scalars['String'];
  /** Cms Homepage data */
  homePage?: Maybe<CmsHomepage>;
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

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  String: ResolverTypeWrapper<Scalars['String']>;
  CmsImageVersion: ResolverTypeWrapper<CmsImageVersion>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  CmsImage: ResolverTypeWrapper<CmsImage>;
  CmsHtmlField: ResolverTypeWrapper<CmsHtmlField>;
  ProductBanner: ResolverTypeWrapper<ProductBanner>;
  ProductGridBanner: ResolverTypeWrapper<ProductGridBanner>;
  CmsHomepage: ResolverTypeWrapper<CmsHomepage>;
  CmsHomepagePage: ResolverTypeWrapper<CmsHomepagePage>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Product: Product;
  String: Scalars['String'];
  CmsImageVersion: CmsImageVersion;
  Int: Scalars['Int'];
  CmsImage: CmsImage;
  CmsHtmlField: CmsHtmlField;
  ProductBanner: ProductBanner;
  ProductGridBanner: ProductGridBanner;
  CmsHomepage: CmsHomepage;
  CmsHomepagePage: CmsHomepagePage;
  Boolean: Scalars['Boolean'];
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Product']>, { __typename: 'Product' } & GraphQLRecursivePick<ParentType, {"sku":true}>, ContextType>;

  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CmsImageVersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CmsImageVersion'] = ResolversParentTypes['CmsImageVersion']> = {
  size?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CmsImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CmsImage'] = ResolversParentTypes['CmsImage']> = {
  alt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sizes?: Resolver<Array<ResolversTypes['CmsImageVersion']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CmsHtmlFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['CmsHtmlField'] = ResolversParentTypes['CmsHtmlField']> = {
  raw?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductBannerResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductBanner'] = ResolversParentTypes['ProductBanner']> = {
  text?: Resolver<ResolversTypes['CmsHtmlField'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['CmsImage']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProductGridBannerResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductGridBanner'] = ResolversParentTypes['ProductGridBanner']> = {
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CmsHomepageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CmsHomepage'] = ResolversParentTypes['CmsHomepage']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['CmsHomepage']>, { __typename: 'CmsHomepage' } & GraphQLRecursivePick<ParentType, {"id":true,"locale":true}>, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productBanner?: Resolver<ResolversTypes['ProductBanner'], ParentType, ContextType>;
  productGrid?: Resolver<ResolversTypes['ProductGridBanner'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CmsHomepagePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CmsHomepagePage'] = ResolversParentTypes['CmsHomepagePage']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['CmsHomepagePage']>, { __typename: 'CmsHomepagePage' } & GraphQLRecursivePick<ParentType, {"id":true,"type":true,"locale":true}>, ContextType>;



  homePage?: Resolver<Maybe<ResolversTypes['CmsHomepage']>, { __typename: 'CmsHomepagePage' } & GraphQLRecursivePick<ParentType, {"id":true,"type":true,"locale":true}>, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  Product?: ProductResolvers<ContextType>;
  CmsImageVersion?: CmsImageVersionResolvers<ContextType>;
  CmsImage?: CmsImageResolvers<ContextType>;
  CmsHtmlField?: CmsHtmlFieldResolvers<ContextType>;
  ProductBanner?: ProductBannerResolvers<ContextType>;
  ProductGridBanner?: ProductGridBannerResolvers<ContextType>;
  CmsHomepage?: CmsHomepageResolvers<ContextType>;
  CmsHomepagePage?: CmsHomepagePageResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
