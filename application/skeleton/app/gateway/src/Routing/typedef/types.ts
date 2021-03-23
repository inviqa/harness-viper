import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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





/** CMS Homepage page */
export type CmsHomepagePage = Page & {
  __typename?: 'CmsHomepagePage';
  /** Page identifier */
  id: Scalars['String'];
  /** Page type */
  type: Scalars['String'];
  /** Page locale */
  locale: Scalars['String'];
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

/** CMS Article page */
export type CmsArticlePage = Page & {
  __typename?: 'CmsArticlePage';
  /** Page identifier */
  id: Scalars['String'];
  /** Page type */
  type: Scalars['String'];
  /** Page locale */
  locale: Scalars['String'];
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
};

/** Route */
export type Route = {
  __typename?: 'Route';
  /** URL path */
  path: Scalars['String'];
  /** Page under the URL path */
  page: Page;
};

export type Query = {
  __typename?: 'Query';
  /** Get the route by path */
  routeByPath?: Maybe<Route>;
};


export type QueryRouteByPathArgs = {
  path: Scalars['String'];
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
  CmsHomepagePage: ResolverTypeWrapper<CmsHomepagePage>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Page: ResolversTypes['CmsHomepagePage'] | ResolversTypes['CmsArticlePage'] | ResolversTypes['CmsPagePage'] | ResolversTypes['ProductPage'] | ResolversTypes['CategoryPage'];
  CmsArticlePage: ResolverTypeWrapper<CmsArticlePage>;
  CmsPagePage: ResolverTypeWrapper<CmsPagePage>;
  ProductPage: ResolverTypeWrapper<ProductPage>;
  CategoryPage: ResolverTypeWrapper<CategoryPage>;
  Route: ResolverTypeWrapper<Route>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CmsHomepagePage: CmsHomepagePage;
  String: Scalars['String'];
  Page: ResolversParentTypes['CmsHomepagePage'] | ResolversParentTypes['CmsArticlePage'] | ResolversParentTypes['CmsPagePage'] | ResolversParentTypes['ProductPage'] | ResolversParentTypes['CategoryPage'];
  CmsArticlePage: CmsArticlePage;
  CmsPagePage: CmsPagePage;
  ProductPage: ProductPage;
  CategoryPage: CategoryPage;
  Route: Route;
  Query: {};
  Boolean: Scalars['Boolean'];
};

export type CmsHomepagePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CmsHomepagePage'] = ResolversParentTypes['CmsHomepagePage']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['CmsHomepagePage']>, { __typename: 'CmsHomepagePage' } & GraphQLRecursivePick<ParentType, {"id":true,"type":true,"locale":true}>, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = {
  __resolveType: TypeResolveFn<'CmsHomepagePage' | 'CmsArticlePage' | 'CmsPagePage' | 'ProductPage' | 'CategoryPage', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CmsArticlePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CmsArticlePage'] = ResolversParentTypes['CmsArticlePage']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['CmsArticlePage']>, { __typename: 'CmsArticlePage' } & GraphQLRecursivePick<ParentType, {"id":true,"type":true,"locale":true}>, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CmsPagePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CmsPagePage'] = ResolversParentTypes['CmsPagePage']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['CmsPagePage']>, { __typename: 'CmsPagePage' } & GraphQLRecursivePick<ParentType, {"id":true,"type":true,"locale":true}>, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPage'] = ResolversParentTypes['ProductPage']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['ProductPage']>, { __typename: 'ProductPage' } & GraphQLRecursivePick<ParentType, {"id":true,"type":true,"locale":true}>, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryPage'] = ResolversParentTypes['CategoryPage']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['CategoryPage']>, { __typename: 'CategoryPage' } & GraphQLRecursivePick<ParentType, {"id":true,"type":true,"locale":true}>, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RouteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Route'] = ResolversParentTypes['Route']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Route']>, { __typename: 'Route' } & GraphQLRecursivePick<ParentType, {"path":true}>, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Page'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  routeByPath?: Resolver<Maybe<ResolversTypes['Route']>, ParentType, ContextType, RequireFields<QueryRouteByPathArgs, 'path'>>;
};

export type Resolvers<ContextType = any> = {
  CmsHomepagePage?: CmsHomepagePageResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  CmsArticlePage?: CmsArticlePageResolvers<ContextType>;
  CmsPagePage?: CmsPagePageResolvers<ContextType>;
  ProductPage?: ProductPageResolvers<ContextType>;
  CategoryPage?: CategoryPageResolvers<ContextType>;
  Route?: RouteResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
