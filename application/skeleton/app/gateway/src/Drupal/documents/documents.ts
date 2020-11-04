import { DocumentNode } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Int` scalar type represents non-fractional signed whole numeric
   * values. Int can represent values between -(2^31) and 2^31 - 1. 
   */
  Timestamp: any;
  Map: any;
  Upload: any;
  Integer: any;
  DateTime: any;
  Date: any;
  DateTimeTz: any;
  Any: any;
  Binary: any;
  DatetimeIso8601: any;
  Timespan: any;
  _FieldSet: any;
};





export type Query = {
  __typename?: 'Query';
  /** Loads 'Custom block' entity revision by their revision id. */
  blockContentRevisionById?: Maybe<BlockContent>;
  /** Loads 'Crop' entity revision by their revision id. */
  cropRevisionById?: Maybe<Crop>;
  /** Loads 'Custom menu link' entity revision by their revision id. */
  menuLinkContentRevisionById?: Maybe<MenuLinkContent>;
  /** Loads 'Content' entity revision by their revision id. */
  nodeRevisionById?: Maybe<Node>;
  /** Loads 'URL alias' entity revision by their revision id. */
  pathAliasRevisionById?: Maybe<PathAlias>;
  /** Loads 'Taxonomy term' entity revision by their revision id. */
  taxonomyTermRevisionById?: Maybe<TaxonomyTerm>;
  /** Loads 'Custom block' entities by their id. */
  blockContentById?: Maybe<BlockContent>;
  /** Loads 'Comment' entities by their id. */
  commentById?: Maybe<Comment>;
  /** Loads 'Contact message' entities by their id. */
  contactMessageById?: Maybe<ContactMessage>;
  /** Loads 'Crop' entities by their id. */
  cropById?: Maybe<Crop>;
  /** Loads 'File' entities by their id. */
  fileById?: Maybe<File>;
  /** Loads 'Custom menu link' entities by their id. */
  menuLinkContentById?: Maybe<MenuLinkContent>;
  /** Loads 'Content' entities by their id. */
  nodeById?: Maybe<Node>;
  /** Loads 'URL alias' entities by their id. */
  pathAliasById?: Maybe<PathAlias>;
  /** Loads 'Redirect' entities by their id. */
  redirectById?: Maybe<Redirect>;
  /** Loads 'Shortcut link' entities by their id. */
  shortcutById?: Maybe<Shortcut>;
  /** Loads 'Taxonomy term' entities by their id. */
  taxonomyTermById?: Maybe<TaxonomyTerm>;
  /** Loads 'User' entities by their id. */
  userById?: Maybe<User>;
  /** Loads 'Webform submission' entities by their id. */
  webformSubmissionById?: Maybe<WebformSubmission>;
  /** Loads 'Custom block' entities. */
  blockContentQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Comment' entities. */
  commentQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Contact message' entities. */
  contactMessageQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Crop' entities. */
  cropQuery?: Maybe<EntityQueryResult>;
  /** Loads 'File' entities. */
  fileQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Custom menu link' entities. */
  menuLinkContentQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Content' entities. */
  nodeQuery?: Maybe<EntityQueryResult>;
  /** Loads 'URL alias' entities. */
  pathAliasQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Redirect' entities. */
  redirectQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Shortcut link' entities. */
  shortcutQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Taxonomy term' entities. */
  taxonomyTermQuery?: Maybe<EntityQueryResult>;
  /** Loads 'User' entities. */
  userQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Webform submission' entities. */
  webformSubmissionQuery?: Maybe<EntityQueryResult>;
  /** Loads the list of available languages. */
  availableLanguages?: Maybe<Array<Maybe<Language>>>;
  /** Loads a route by its path. */
  route?: Maybe<Url>;
  languageInterfaceContext?: Maybe<Language>;
  languageContentContext?: Maybe<Language>;
  nodeContext?: Maybe<Node>;
  currentUserContext?: Maybe<User>;
  webformContext?: Maybe<Entity>;
  webformSubmissionContext?: Maybe<WebformSubmission>;
  /** Loads a menu by its machine-readable name. */
  menuByName?: Maybe<Menu>;
  webformById?: Maybe<Webform>;
};


export type QueryBlockContentRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryCropRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryMenuLinkContentRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryNodeRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryPathAliasRevisionByIdArgs = {
  id: Scalars['String'];
};


export type QueryTaxonomyTermRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryBlockContentByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryCommentByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryContactMessageByIdArgs = {
  id: Scalars['String'];
};


export type QueryCropByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryFileByIdArgs = {
  id: Scalars['String'];
};


export type QueryMenuLinkContentByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryNodeByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryPathAliasByIdArgs = {
  id: Scalars['String'];
};


export type QueryRedirectByIdArgs = {
  id: Scalars['String'];
};


export type QueryShortcutByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryTaxonomyTermByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryUserByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryWebformSubmissionByIdArgs = {
  id: Scalars['String'];
};


export type QueryBlockContentQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryCommentQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryContactMessageQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryCropQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryFileQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryMenuLinkContentQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryNodeQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryPathAliasQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryRedirectQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryShortcutQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryTaxonomyTermQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryUserQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryWebformSubmissionQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryRouteArgs = {
  path: Scalars['String'];
};


export type QueryMenuByNameArgs = {
  name: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryWebformByIdArgs = {
  webform_id: Scalars['String'];
};

export const LanguageId = {
  /** English */
  En: 'EN',
  /** German */
  De: 'DE'
} as const;

export type LanguageId = typeof LanguageId[keyof typeof LanguageId];
/** The 'Custom block' entity type. */
export type BlockContent = {
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  /** Query reference: The block type. */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Renders 'Custom block' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The custom block ID. */
  id?: Maybe<Scalars['Int']>;
  /** The custom block UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The revision ID. */
  revisionId?: Maybe<Scalars['Int']>;
  /** The custom block language code. */
  langcode?: Maybe<FieldBlockContentLangcode>;
  /** The block type. */
  type?: Maybe<FieldBlockContentType>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldBlockContentRevisionUser>;
  /** The log entry explaining the changes in this revision. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** A brief description of your block. */
  info?: Maybe<Scalars['String']>;
  /** The time that the custom block was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A boolean indicating whether this block is reusable. */
  reusable?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
};


/** The 'Custom block' entity type. */
export type BlockContentEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Custom block' entity type. */
export type BlockContentEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Custom block' entity type. */
export type BlockContentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Custom block' entity type. */
export type BlockContentEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom block' entity type. */
export type BlockContentEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom block' entity type. */
export type BlockContentEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Custom block' entity type. */
export type BlockContentQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Custom block' entity type. */
export type BlockContentQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Custom block' entity type. */
export type BlockContentEntityRenderedArgs = {
  mode?: Maybe<BlockContentDisplayModeId>;
};

/** Common interface for internal and external urls. */
export type Url = {
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
};


/** Common interface for internal and external urls. */
export type UrlTranslateArgs = {
  language: LanguageId;
};

export type EntityQueryFilterInput = {
  conditions?: Maybe<Array<Maybe<EntityQueryFilterConditionInput>>>;
  groups?: Maybe<Array<Maybe<EntityQueryFilterInput>>>;
  conjunction?: Maybe<QueryConjunction>;
};

export type EntityQueryFilterConditionInput = {
  field: Scalars['String'];
  value?: Maybe<Array<Maybe<Scalars['String']>>>;
  operator?: Maybe<QueryOperator>;
  language?: Maybe<LanguageId>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export const QueryOperator = {
  Equal: 'EQUAL',
  NotEqual: 'NOT_EQUAL',
  SmallerThan: 'SMALLER_THAN',
  SmallerThanOrEqual: 'SMALLER_THAN_OR_EQUAL',
  GreaterThan: 'GREATER_THAN',
  GreaterThanOrEqual: 'GREATER_THAN_OR_EQUAL',
  In: 'IN',
  NotIn: 'NOT_IN',
  Like: 'LIKE',
  NotLike: 'NOT_LIKE',
  Between: 'BETWEEN',
  NotBetween: 'NOT_BETWEEN',
  IsNull: 'IS_NULL',
  IsNotNull: 'IS_NOT_NULL'
} as const;

export type QueryOperator = typeof QueryOperator[keyof typeof QueryOperator];
export const QueryConjunction = {
  And: 'AND',
  Or: 'OR'
} as const;

export type QueryConjunction = typeof QueryConjunction[keyof typeof QueryConjunction];
export type EntityQuerySortInput = {
  field: Scalars['String'];
  direction?: Maybe<SortOrder>;
  language?: Maybe<LanguageId>;
};

export const SortOrder = {
  Asc: 'ASC',
  Desc: 'DESC'
} as const;

export type SortOrder = typeof SortOrder[keyof typeof SortOrder];
export const EntityQueryRevisionMode = {
  /** Loads the current (default) revisions. */
  Default: 'DEFAULT',
  /** Loads all revisions. */
  All: 'ALL',
  /** Loads latest revision. */
  Latest: 'LATEST'
} as const;

export type EntityQueryRevisionMode = typeof EntityQueryRevisionMode[keyof typeof EntityQueryRevisionMode];
export const EntityQueryBundleMode = {
  /** Loads only entities that share the same bundle with the parent entity. */
  Same: 'SAME',
  /** Loads entities across all bundles. */
  All: 'ALL'
} as const;

export type EntityQueryBundleMode = typeof EntityQueryBundleMode[keyof typeof EntityQueryBundleMode];
/** Wrapper type for entity query results containing the list of loaded entities and the full entity count for pagination purposes. */
export type EntityQueryResult = {
  __typename?: 'EntityQueryResult';
  count?: Maybe<Scalars['Int']>;
  entities?: Maybe<Array<Maybe<Entity>>>;
};


/** Wrapper type for entity query results containing the list of loaded entities and the full entity count for pagination purposes. */
export type EntityQueryResultEntitiesArgs = {
  language?: Maybe<LanguageId>;
};

/** Common entity interface containing generic entity properties. */
export type Entity = {
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityTranslationArgs = {
  language: LanguageId;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};

export type Language = {
  __typename?: 'Language';
  /** The language id prepared as a language enum value. */
  argument?: Maybe<Scalars['String']>;
  /** The language id. */
  id?: Maybe<Scalars['String']>;
  /** Boolean indicating if this language is locked. */
  isLocked?: Maybe<Scalars['Boolean']>;
  /** The human-readable name of the language. */
  name?: Maybe<Scalars['String']>;
  /** Boolean indicating if this is the configured default language. */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** The weight of the language. */
  weight?: Maybe<Scalars['Int']>;
  /** The language direction (rtl or ltr). */
  direction?: Maybe<Scalars['String']>;
};

/** The available display modes for 'Custom block' entities. */
export const BlockContentDisplayModeId = {
  /** The 'Full' display mode for 'Custom block' entities. */
  Full: 'FULL',
  /** The 'Token' display mode for 'Custom block' entities. */
  Token: 'TOKEN'
} as const;

export type BlockContentDisplayModeId = typeof BlockContentDisplayModeId[keyof typeof BlockContentDisplayModeId];
/** The custom block language code. */
export type FieldBlockContentLangcode = {
  __typename?: 'FieldBlockContentLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The block type. */
export type FieldBlockContentType = {
  __typename?: 'FieldBlockContentType';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};


/** The user ID of the author of the current revision. */
export type FieldBlockContentRevisionUser = {
  __typename?: 'FieldBlockContentRevisionUser';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The 'User' entity type. */
export type User = Entity & {
  __typename?: 'User';
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUserBlockContent: EntityQueryResult;
  /** Reverse reference: The user ID of the comment author. */
  reverseUidComment: EntityQueryResult;
  /** Reverse reference: The ID of the recipient user for personal contact messages. */
  reverseRecipientContactMessage: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUidCrop: EntityQueryResult;
  /** Reverse reference: The user ID of the file. */
  reverseUidFile: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUserMenuLinkContent: EntityQueryResult;
  /** Reverse reference: The author of this translation. */
  reverseContentTranslationUidMenuLinkContent: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUidNode: EntityQueryResult;
  /** Reverse reference: The username of the content author. */
  reverseUidNode: EntityQueryResult;
  /** Reverse reference: The user ID of the node author. */
  reverseUidRedirect: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUserTaxonomyTerm: EntityQueryResult;
  /** Reverse reference: The username of the user that submitted the webform. */
  reverseUidWebformSubmission: EntityQueryResult;
  /** Query reference: The roles the user has. */
  queryRoles?: Maybe<EntityQueryResult>;
  /** Renders 'User' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The user ID. */
  uid?: Maybe<Scalars['Int']>;
  /** The user UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The user language code. */
  langcode?: Maybe<FieldUserLangcode>;
  /** The user's preferred language code for receiving emails and viewing the site. */
  preferredLangcode?: Maybe<FieldUserPreferredLangcode>;
  /** The user's preferred language code for viewing administration pages. */
  preferredAdminLangcode?: Maybe<FieldUserPreferredAdminLangcode>;
  /** The name of this user. */
  name?: Maybe<Scalars['String']>;
  /** The password of this user (hashed). */
  pass?: Maybe<FieldUserPass>;
  /** The email of this user. */
  mail?: Maybe<Scalars['String']>;
  /** The timezone of this user. */
  timezone?: Maybe<Scalars['String']>;
  /** Whether the user is active or blocked. */
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the user was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the user was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** The time that the user last accessed the site. */
  access?: Maybe<Scalars['Timestamp']>;
  /** The time that the user last logged in. */
  login?: Maybe<Scalars['Timestamp']>;
  /** The email address used for initial account creation. */
  init?: Maybe<Scalars['String']>;
  /** The roles the user has. */
  roles?: Maybe<Array<Maybe<FieldUserRoles>>>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldUserPath>;
  fieldMyCustomInt?: Maybe<Scalars['Int']>;
  /** Your virtual face or picture. */
  userPicture?: Maybe<FieldUserUserPicture>;
};


/** The 'User' entity type. */
export type UserEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'User' entity type. */
export type UserEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'User' entity type. */
export type UserEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'User' entity type. */
export type UserEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'User' entity type. */
export type UserEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUserBlockContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseUidCommentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRecipientContactMessageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUidCropArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseUidFileArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUserMenuLinkContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseContentTranslationUidMenuLinkContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUidNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseUidNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseUidRedirectArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUserTaxonomyTermArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseUidWebformSubmissionArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserQueryRolesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserEntityRenderedArgs = {
  mode?: Maybe<UserDisplayModeId>;
};

/** The available display modes for 'User' entities. */
export const UserDisplayModeId = {
  /** The 'Compact' display mode for 'User' entities. */
  Compact: 'COMPACT',
  /** The 'User account' display mode for 'User' entities. */
  Full: 'FULL',
  /** The 'Token' display mode for 'User' entities. */
  Token: 'TOKEN'
} as const;

export type UserDisplayModeId = typeof UserDisplayModeId[keyof typeof UserDisplayModeId];
/** The user language code. */
export type FieldUserLangcode = {
  __typename?: 'FieldUserLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The user's preferred language code for receiving emails and viewing the site. */
export type FieldUserPreferredLangcode = {
  __typename?: 'FieldUserPreferredLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The user's preferred language code for viewing administration pages. */
export type FieldUserPreferredAdminLangcode = {
  __typename?: 'FieldUserPreferredAdminLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The password of this user (hashed). */
export type FieldUserPass = {
  __typename?: 'FieldUserPass';
  value?: Maybe<Scalars['String']>;
  existing?: Maybe<Scalars['String']>;
  preHashed?: Maybe<Scalars['Boolean']>;
};

/** The roles the user has. */
export type FieldUserRoles = {
  __typename?: 'FieldUserRoles';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

export type FieldUserPath = {
  __typename?: 'FieldUserPath';
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  /** Whether an automated alias should be created or not. */
  pathauto?: Maybe<Scalars['Int']>;
};

/** Your virtual face or picture. */
export type FieldUserUserPicture = {
  __typename?: 'FieldUserUserPicture';
  url?: Maybe<Scalars['String']>;
  derivative?: Maybe<ImageResource>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<File>;
  /** Alternative image text, for the image's 'alt' attribute. */
  alt?: Maybe<Scalars['String']>;
  /** Image title text, for the image's 'title' attribute. */
  title?: Maybe<Scalars['String']>;
};


/** Your virtual face or picture. */
export type FieldUserUserPictureDerivativeArgs = {
  style: ImageStyleId;
};

export const ImageStyleId = {
  /** Desktop (1024×768) */
  Desktop: 'DESKTOP',
  /** Desktop Retina (2048×1536) */
  Desktopretina: 'DESKTOPRETINA',
  /** Large (480×480) */
  Large: 'LARGE',
  /** Medium (220×220) */
  Medium: 'MEDIUM',
  /** Mobile (640×853) */
  Mobile: 'MOBILE',
  /** Mobile Retina (1280×1706) */
  Mobileretina: 'MOBILERETINA',
  /** Thumbnail (100×100) */
  Thumbnail: 'THUMBNAIL'
} as const;

export type ImageStyleId = typeof ImageStyleId[keyof typeof ImageStyleId];
export type ImageResource = {
  __typename?: 'ImageResource';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

/** The 'File' entity type. */
export type File = Entity & EntityOwnable & {
  __typename?: 'File';
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityOwner?: Maybe<User>;
  /** Query reference: The user ID of the file. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Renders 'File' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The file ID. */
  fid?: Maybe<Scalars['Int']>;
  /** The file UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The file language code. */
  langcode?: Maybe<FieldFileLangcode>;
  /** The user ID of the file. */
  uid?: Maybe<FieldFileUid>;
  /** Name of the file with no path components. */
  filename?: Maybe<Scalars['String']>;
  /** The URI to access the file (either local or remote). */
  uri?: Maybe<FieldFileUri>;
  /** The file's MIME type. */
  filemime?: Maybe<Scalars['String']>;
  /** The size of the file in bytes. */
  filesize?: Maybe<Scalars['Int']>;
  /** The status of the file, temporary (FALSE) and permanent (TRUE). */
  status?: Maybe<Scalars['Boolean']>;
  /** The timestamp that the file was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The timestamp that the file was last changed. */
  changed?: Maybe<Scalars['Timestamp']>;
  url?: Maybe<Scalars['String']>;
};


/** The 'File' entity type. */
export type FileEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'File' entity type. */
export type FileEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'File' entity type. */
export type FileEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'File' entity type. */
export type FileEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'File' entity type. */
export type FileEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'File' entity type. */
export type FileQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'File' entity type. */
export type FileEntityRenderedArgs = {
  mode?: Maybe<FileDisplayModeId>;
};

/** Common interface for entities that have a owner. */
export type EntityOwnable = {
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityOwner?: Maybe<User>;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityTranslationArgs = {
  language: LanguageId;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};

/** The available display modes for 'File' entities. */
export const FileDisplayModeId = {
  /** The 'Token' display mode for 'File' entities. */
  Token: 'TOKEN'
} as const;

export type FileDisplayModeId = typeof FileDisplayModeId[keyof typeof FileDisplayModeId];
/** The file language code. */
export type FieldFileLangcode = {
  __typename?: 'FieldFileLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The user ID of the file. */
export type FieldFileUid = {
  __typename?: 'FieldFileUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The URI to access the file (either local or remote). */
export type FieldFileUri = {
  __typename?: 'FieldFileUri';
  value?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** The 'Crop' entity type. */
export type Crop = {
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
  /** Query reference: The crop type. */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** The crop ID. */
  cid?: Maybe<Scalars['Int']>;
  /** The crop UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The crop revision ID. */
  vid?: Maybe<Scalars['Int']>;
  /** The crop type. */
  type?: Maybe<FieldCropType>;
  /** The node language code. */
  langcode?: Maybe<FieldCropLangcode>;
  /** The URI of the image crop belongs to. */
  uri?: Maybe<Scalars['String']>;
  /** The crop height. */
  height?: Maybe<Scalars['Int']>;
  /** The crop width. */
  width?: Maybe<Scalars['Int']>;
  /** The crop's X coordinate. */
  x?: Maybe<Scalars['Int']>;
  /** The crop's Y coordinate. */
  y?: Maybe<Scalars['Int']>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldCropRevisionUid>;
  /** The log entry explaining the changes in this revision. */
  revisionLog?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** ID of entity crop belongs to. */
  entityIdOfCrop?: Maybe<Scalars['Int']>;
  /** The type of entity crop belongs to. */
  entityTypeOfCrop?: Maybe<Scalars['String']>;
};


/** The 'Crop' entity type. */
export type CropEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Crop' entity type. */
export type CropEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Crop' entity type. */
export type CropEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Crop' entity type. */
export type CropEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Crop' entity type. */
export type CropEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Crop' entity type. */
export type CropEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Crop' entity type. */
export type CropQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Crop' entity type. */
export type CropQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The crop type. */
export type FieldCropType = {
  __typename?: 'FieldCropType';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The node language code. */
export type FieldCropLangcode = {
  __typename?: 'FieldCropLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The user ID of the author of the current revision. */
export type FieldCropRevisionUid = {
  __typename?: 'FieldCropRevisionUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The 'Custom menu link' entity type. */
export type MenuLinkContent = {
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: The author of this translation. */
  queryContentTranslationUid?: Maybe<EntityQueryResult>;
  /** Renders 'Custom menu link' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The entity ID for this menu link content entity. */
  id?: Maybe<Scalars['Int']>;
  /** The content menu link UUID. */
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The menu link language code. */
  langcode?: Maybe<FieldMenuLinkContentLangcode>;
  /** The content menu link bundle. */
  bundle?: Maybe<Scalars['String']>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMenuLinkContentRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  /** A flag for whether the link should be enabled in menus or hidden. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The text to be used for this link in the menu. */
  title?: Maybe<Scalars['String']>;
  /** Shown when hovering over the menu link. */
  description?: Maybe<Scalars['String']>;
  /** The menu name. All links with the same menu name (such as "tools") are part of the same menu. */
  menuName?: Maybe<Scalars['String']>;
  /** The location this menu link points to. */
  link?: Maybe<FieldMenuLinkContentLink>;
  /** A flag to indicate if the link points to a full URL starting with a protocol, like http:// (1 = external, 0 = internal). */
  external?: Maybe<Scalars['Boolean']>;
  rediscover?: Maybe<Scalars['Boolean']>;
  /** Link weight among links in the same menu at the same depth. In the menu, the links with high weight will sink and links with a low weight will be positioned nearer the top. */
  weight?: Maybe<Scalars['Int']>;
  /** If selected and this menu link has children, the menu will always appear expanded. This option may be overridden for the entire menu tree when placing a menu block. */
  expanded?: Maybe<Scalars['Boolean']>;
  /** The ID of the parent menu link plugin, or empty string when at the top level of the hierarchy. */
  parent?: Maybe<Scalars['String']>;
  /** The time that the menu link was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** The source language from which this translation was created. */
  contentTranslationSource?: Maybe<FieldMenuLinkContentContentTranslationSource>;
  /** A boolean indicating whether this translation needs to be updated. */
  contentTranslationOutdated?: Maybe<Scalars['Boolean']>;
  /** The author of this translation. */
  contentTranslationUid?: Maybe<FieldMenuLinkContentContentTranslationUid>;
  /** A boolean indicating whether the translation is visible to non-translators. */
  contentTranslationStatus?: Maybe<Scalars['Boolean']>;
  /** The Unix timestamp when the translation was created. */
  contentTranslationCreated?: Maybe<Scalars['Timestamp']>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentQueryContentTranslationUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityRenderedArgs = {
  mode?: Maybe<MenuLinkContentDisplayModeId>;
};

/** The available display modes for 'Custom menu link' entities. */
export const MenuLinkContentDisplayModeId = {
  /** The 'Token' display mode for 'Custom menu link' entities. */
  Token: 'TOKEN'
} as const;

export type MenuLinkContentDisplayModeId = typeof MenuLinkContentDisplayModeId[keyof typeof MenuLinkContentDisplayModeId];
/** The menu link language code. */
export type FieldMenuLinkContentLangcode = {
  __typename?: 'FieldMenuLinkContentLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The user ID of the author of the current revision. */
export type FieldMenuLinkContentRevisionUser = {
  __typename?: 'FieldMenuLinkContentRevisionUser';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The location this menu link points to. */
export type FieldMenuLinkContentLink = {
  __typename?: 'FieldMenuLinkContentLink';
  attribute?: Maybe<Scalars['String']>;
  url?: Maybe<Url>;
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
};


/** The location this menu link points to. */
export type FieldMenuLinkContentLinkAttributeArgs = {
  key: Scalars['String'];
};


/** The source language from which this translation was created. */
export type FieldMenuLinkContentContentTranslationSource = {
  __typename?: 'FieldMenuLinkContentContentTranslationSource';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The author of this translation. */
export type FieldMenuLinkContentContentTranslationUid = {
  __typename?: 'FieldMenuLinkContentContentTranslationUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The 'Content' entity type. */
export type Node = {
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  /** Reverse reference: The ID of the entity of which this comment is a reply. */
  reverseEntityIdComment: EntityQueryResult;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: The username of the content author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldNodePath>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  /** The source language from which this translation was created. */
  contentTranslationSource?: Maybe<FieldNodeContentTranslationSource>;
  /** A boolean indicating whether this translation needs to be updated. */
  contentTranslationOutdated?: Maybe<Scalars['Boolean']>;
};


/** The 'Content' entity type. */
export type NodeEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Content' entity type. */
export type NodeEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Content' entity type. */
export type NodeEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Content' entity type. */
export type NodeEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Content' entity type. */
export type NodeEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Content' entity type. */
export type NodeEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Content' entity type. */
export type NodeReverseEntityIdCommentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};

/** The available display modes for 'Content' entities. */
export const NodeDisplayModeId = {
  /** The 'Full content' display mode for 'Content' entities. */
  Full: 'FULL',
  /** The 'RSS' display mode for 'Content' entities. */
  Rss: 'RSS',
  /** The 'Search index' display mode for 'Content' entities. */
  Searchindex: 'SEARCHINDEX',
  /** The 'Search result highlighting input' display mode for 'Content' entities. */
  Searchresult: 'SEARCHRESULT',
  /** The 'Teaser' display mode for 'Content' entities. */
  Teaser: 'TEASER',
  /** The 'Token' display mode for 'Content' entities. */
  Token: 'TOKEN'
} as const;

export type NodeDisplayModeId = typeof NodeDisplayModeId[keyof typeof NodeDisplayModeId];
export type FieldNodeLangcode = {
  __typename?: 'FieldNodeLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

export type FieldNodeType = {
  __typename?: 'FieldNodeType';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The user ID of the author of the current revision. */
export type FieldNodeRevisionUid = {
  __typename?: 'FieldNodeRevisionUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The username of the content author. */
export type FieldNodeUid = {
  __typename?: 'FieldNodeUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

export type FieldNodePath = {
  __typename?: 'FieldNodePath';
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  /** Whether an automated alias should be created or not. */
  pathauto?: Maybe<Scalars['Int']>;
};

/** Computed menu link for the node (only available during node saving). */
export type FieldNodeMenuLink = {
  __typename?: 'FieldNodeMenuLink';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<MenuLinkContent>;
};

/** The source language from which this translation was created. */
export type FieldNodeContentTranslationSource = {
  __typename?: 'FieldNodeContentTranslationSource';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The 'URL alias' entity type. */
export type PathAlias = Entity & EntityPublishable & EntityRevisionable & {
  __typename?: 'PathAlias';
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  /** Renders 'URL alias' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldPathAliasLangcode>;
  /** The path that this alias belongs to. */
  path?: Maybe<Scalars['String']>;
  /** An alias used with this path. */
  alias?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'URL alias' entity type. */
export type PathAliasEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityRenderedArgs = {
  mode?: Maybe<PathAliasDisplayModeId>;
};

/** Common interface for entities that are publishable. */
export type EntityPublishable = {
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityTranslationArgs = {
  language: LanguageId;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};

/** Common interface for entities that are revisionable. */
export type EntityRevisionable = {
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityTranslationArgs = {
  language: LanguageId;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The available display modes for 'URL alias' entities. */
export const PathAliasDisplayModeId = {
  /** The 'Token' display mode for 'URL alias' entities. */
  Token: 'TOKEN'
} as const;

export type PathAliasDisplayModeId = typeof PathAliasDisplayModeId[keyof typeof PathAliasDisplayModeId];
export type FieldPathAliasLangcode = {
  __typename?: 'FieldPathAliasLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The 'Taxonomy term' entity type. */
export type TaxonomyTerm = {
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldTagsNode: EntityQueryResult;
  /** Reverse reference: The parents of this term. */
  reverseParentTaxonomyTerm: EntityQueryResult;
  /** Query reference: The vocabulary to which the term is assigned. */
  queryVid?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: The parents of this term. */
  queryParent?: Maybe<EntityQueryResult>;
  /** Renders 'Taxonomy term' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The term ID. */
  tid?: Maybe<Scalars['Int']>;
  /** The term UUID. */
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The term language code. */
  langcode?: Maybe<FieldTaxonomyTermLangcode>;
  /** The vocabulary to which the term is assigned. */
  vid?: Maybe<FieldTaxonomyTermVid>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldTaxonomyTermRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<FieldTaxonomyTermDescription>;
  /** The weight of this term in relation to other terms. */
  weight?: Maybe<Scalars['Int']>;
  /** The parents of this term. */
  parent?: Maybe<Array<Maybe<FieldTaxonomyTermParent>>>;
  /** The time that the term was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldTaxonomyTermPath>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermReverseFieldTagsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermReverseParentTaxonomyTermArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermQueryVidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermQueryParentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityRenderedArgs = {
  mode?: Maybe<TaxonomyTermDisplayModeId>;
};

/** The available display modes for 'Taxonomy term' entities. */
export const TaxonomyTermDisplayModeId = {
  /** The 'Taxonomy term page' display mode for 'Taxonomy term' entities. */
  Full: 'FULL',
  /** The 'Token' display mode for 'Taxonomy term' entities. */
  Token: 'TOKEN'
} as const;

export type TaxonomyTermDisplayModeId = typeof TaxonomyTermDisplayModeId[keyof typeof TaxonomyTermDisplayModeId];
/** The term language code. */
export type FieldTaxonomyTermLangcode = {
  __typename?: 'FieldTaxonomyTermLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The vocabulary to which the term is assigned. */
export type FieldTaxonomyTermVid = {
  __typename?: 'FieldTaxonomyTermVid';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The user ID of the author of the current revision. */
export type FieldTaxonomyTermRevisionUser = {
  __typename?: 'FieldTaxonomyTermRevisionUser';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

export type FieldTaxonomyTermDescription = {
  __typename?: 'FieldTaxonomyTermDescription';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
};

/** The parents of this term. */
export type FieldTaxonomyTermParent = {
  __typename?: 'FieldTaxonomyTermParent';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<TaxonomyTerm>;
};

export type FieldTaxonomyTermPath = {
  __typename?: 'FieldTaxonomyTermPath';
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  /** Whether an automated alias should be created or not. */
  pathauto?: Maybe<Scalars['Int']>;
};

/** The 'Comment' entity type. */
export type Comment = {
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  /** Reverse reference: The parent comment ID if this is a reply to a comment. */
  reversePidComment: EntityQueryResult;
  /** Query reference: The comment type. */
  queryCommentType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the comment author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Query reference: The parent comment ID if this is a reply to a comment. */
  queryPid?: Maybe<EntityQueryResult>;
  /** Query reference: The ID of the entity of which this comment is a reply. */
  queryEntityId?: Maybe<EntityQueryResult>;
  /** Renders 'Comment' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The comment ID. */
  cid?: Maybe<Scalars['Int']>;
  /** The comment UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The comment language code. */
  langcode?: Maybe<FieldCommentLangcode>;
  /** The comment type. */
  commentType?: Maybe<FieldCommentCommentType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The user ID of the comment author. */
  uid?: Maybe<FieldCommentUid>;
  /** The parent comment ID if this is a reply to a comment. */
  pid?: Maybe<FieldCommentPid>;
  subject?: Maybe<Scalars['String']>;
  /** The comment author's name. */
  name?: Maybe<Scalars['String']>;
  /** The comment author's email address. */
  mail?: Maybe<Scalars['String']>;
  /** The comment author's home page address. */
  homepage?: Maybe<Scalars['String']>;
  /** The comment author's hostname. */
  hostname?: Maybe<Scalars['String']>;
  /** The time that the comment was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the comment was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** The alphadecimal representation of the comment's place in a thread, consisting of a base 36 string prefixed by an integer indicating its length. */
  thread?: Maybe<Scalars['String']>;
  /** The field name through which this comment was added. */
  fieldName?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** The ID of the entity of which this comment is a reply. */
  entityIdOfComment?: Maybe<FieldCommentEntityId>;
  /** The entity type to which this comment is attached. */
  entityTypeOfComment?: Maybe<Scalars['String']>;
};


/** The 'Comment' entity type. */
export type CommentEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Comment' entity type. */
export type CommentEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Comment' entity type. */
export type CommentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Comment' entity type. */
export type CommentEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Comment' entity type. */
export type CommentEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Comment' entity type. */
export type CommentReversePidCommentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Comment' entity type. */
export type CommentQueryCommentTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Comment' entity type. */
export type CommentQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Comment' entity type. */
export type CommentQueryPidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Comment' entity type. */
export type CommentQueryEntityIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Comment' entity type. */
export type CommentEntityRenderedArgs = {
  mode?: Maybe<CommentDisplayModeId>;
};

/** The available display modes for 'Comment' entities. */
export const CommentDisplayModeId = {
  /** The 'Full comment' display mode for 'Comment' entities. */
  Full: 'FULL',
  /** The 'Token' display mode for 'Comment' entities. */
  Token: 'TOKEN'
} as const;

export type CommentDisplayModeId = typeof CommentDisplayModeId[keyof typeof CommentDisplayModeId];
/** The comment language code. */
export type FieldCommentLangcode = {
  __typename?: 'FieldCommentLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The comment type. */
export type FieldCommentCommentType = {
  __typename?: 'FieldCommentCommentType';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The user ID of the comment author. */
export type FieldCommentUid = {
  __typename?: 'FieldCommentUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The parent comment ID if this is a reply to a comment. */
export type FieldCommentPid = {
  __typename?: 'FieldCommentPid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Comment>;
};

/** The ID of the entity of which this comment is a reply. */
export type FieldCommentEntityId = {
  __typename?: 'FieldCommentEntityId';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Node>;
};

/** The 'Contact message' entity type. */
export type ContactMessage = {
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  /** Query reference: The ID of the associated form. */
  queryContactForm?: Maybe<EntityQueryResult>;
  /** Query reference: The ID of the recipient user for personal contact messages. */
  queryRecipient?: Maybe<EntityQueryResult>;
  /** Renders 'Contact message' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The message UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The message language code. */
  langcode?: Maybe<FieldContactMessageLangcode>;
  /** The ID of the associated form. */
  contactForm?: Maybe<FieldContactMessageContactForm>;
  /** The name of the person that is sending the contact message. */
  name?: Maybe<Scalars['String']>;
  /** The email of the person that is sending the contact message. */
  mail?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  /** Whether to send a copy of the message to the sender. */
  copy?: Maybe<Scalars['Boolean']>;
  /** The ID of the recipient user for personal contact messages. */
  recipient?: Maybe<FieldContactMessageRecipient>;
};


/** The 'Contact message' entity type. */
export type ContactMessageEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Contact message' entity type. */
export type ContactMessageEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Contact message' entity type. */
export type ContactMessageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Contact message' entity type. */
export type ContactMessageEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Contact message' entity type. */
export type ContactMessageEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Contact message' entity type. */
export type ContactMessageQueryContactFormArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Contact message' entity type. */
export type ContactMessageQueryRecipientArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Contact message' entity type. */
export type ContactMessageEntityRenderedArgs = {
  mode?: Maybe<ContactMessageDisplayModeId>;
};

/** The available display modes for 'Contact message' entities. */
export const ContactMessageDisplayModeId = {
  /** The 'Token' display mode for 'Contact message' entities. */
  Token: 'TOKEN'
} as const;

export type ContactMessageDisplayModeId = typeof ContactMessageDisplayModeId[keyof typeof ContactMessageDisplayModeId];
/** The message language code. */
export type FieldContactMessageLangcode = {
  __typename?: 'FieldContactMessageLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The ID of the associated form. */
export type FieldContactMessageContactForm = {
  __typename?: 'FieldContactMessageContactForm';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The ID of the recipient user for personal contact messages. */
export type FieldContactMessageRecipient = {
  __typename?: 'FieldContactMessageRecipient';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The 'Redirect' entity type. */
export type Redirect = {
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  /** Query reference: The user ID of the node author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** The redirect ID. */
  rid?: Maybe<Scalars['Int']>;
  /** The record UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The redirect hash. */
  hash?: Maybe<Scalars['String']>;
  /** The redirect type. */
  type?: Maybe<Scalars['String']>;
  /** The user ID of the node author. */
  uid?: Maybe<FieldRedirectUid>;
  /** Enter an internal Drupal path or path alias to redirect (e.g. <em class="placeholder">node/123</em> or <em class="placeholder">taxonomy/term/123</em>). Fragment anchors (e.g. <em class="placeholder">#anchor</em>) are <strong>not</strong> allowed. */
  redirectSource?: Maybe<FieldRedirectRedirectSource>;
  redirectRedirect?: Maybe<FieldRedirectRedirectRedirect>;
  /** The redirect language. */
  language?: Maybe<FieldRedirectLanguage>;
  /** The redirect status code. */
  statusCode?: Maybe<Scalars['Int']>;
  /** The date when the redirect was created. */
  created?: Maybe<Scalars['Timestamp']>;
};


/** The 'Redirect' entity type. */
export type RedirectEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Redirect' entity type. */
export type RedirectEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Redirect' entity type. */
export type RedirectEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Redirect' entity type. */
export type RedirectEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Redirect' entity type. */
export type RedirectEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Redirect' entity type. */
export type RedirectQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The user ID of the node author. */
export type FieldRedirectUid = {
  __typename?: 'FieldRedirectUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** Enter an internal Drupal path or path alias to redirect (e.g. <em class="placeholder">node/123</em> or <em class="placeholder">taxonomy/term/123</em>). Fragment anchors (e.g. <em class="placeholder">#anchor</em>) are <strong>not</strong> allowed. */
export type FieldRedirectRedirectSource = {
  __typename?: 'FieldRedirectRedirectSource';
  path?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['Map']>;
};

export type FieldRedirectRedirectRedirect = {
  __typename?: 'FieldRedirectRedirectRedirect';
  attribute?: Maybe<Scalars['String']>;
  url?: Maybe<Url>;
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
};


export type FieldRedirectRedirectRedirectAttributeArgs = {
  key: Scalars['String'];
};

/** The redirect language. */
export type FieldRedirectLanguage = {
  __typename?: 'FieldRedirectLanguage';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The 'Shortcut link' entity type. */
export type Shortcut = {
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  /** Query reference: The bundle of the shortcut. */
  queryShortcutSet?: Maybe<EntityQueryResult>;
  /** Renders 'Shortcut link' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The ID of the shortcut. */
  id?: Maybe<Scalars['Int']>;
  /** The UUID of the shortcut. */
  uuid?: Maybe<Scalars['String']>;
  /** The language code of the shortcut. */
  langcode?: Maybe<FieldShortcutLangcode>;
  /** The bundle of the shortcut. */
  shortcutSet?: Maybe<FieldShortcutShortcutSet>;
  /** The name of the shortcut. */
  title?: Maybe<Scalars['String']>;
  /** Weight among shortcuts in the same shortcut set. */
  weight?: Maybe<Scalars['Int']>;
  /** The location this shortcut points to. */
  link?: Maybe<FieldShortcutLink>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
};


/** The 'Shortcut link' entity type. */
export type ShortcutEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Shortcut link' entity type. */
export type ShortcutEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Shortcut link' entity type. */
export type ShortcutEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Shortcut link' entity type. */
export type ShortcutEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Shortcut link' entity type. */
export type ShortcutEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Shortcut link' entity type. */
export type ShortcutQueryShortcutSetArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Shortcut link' entity type. */
export type ShortcutEntityRenderedArgs = {
  mode?: Maybe<ShortcutDisplayModeId>;
};

/** The available display modes for 'Shortcut link' entities. */
export const ShortcutDisplayModeId = {
  /** The 'Token' display mode for 'Shortcut link' entities. */
  Token: 'TOKEN'
} as const;

export type ShortcutDisplayModeId = typeof ShortcutDisplayModeId[keyof typeof ShortcutDisplayModeId];
/** The language code of the shortcut. */
export type FieldShortcutLangcode = {
  __typename?: 'FieldShortcutLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The bundle of the shortcut. */
export type FieldShortcutShortcutSet = {
  __typename?: 'FieldShortcutShortcutSet';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The location this shortcut points to. */
export type FieldShortcutLink = {
  __typename?: 'FieldShortcutLink';
  attribute?: Maybe<Scalars['String']>;
  url?: Maybe<Url>;
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
};


/** The location this shortcut points to. */
export type FieldShortcutLinkAttributeArgs = {
  key: Scalars['String'];
};

/** The 'Webform submission' entity type. */
export type WebformSubmission = {
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityOwner?: Maybe<User>;
  /** Query reference: The username of the user that submitted the webform. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Query reference: The associated webform. */
  queryWebformId?: Maybe<EntityQueryResult>;
  /** The serial number of the webform submission entity. */
  serial?: Maybe<Scalars['Int']>;
  /** The ID of the webform submission entity. */
  sid?: Maybe<Scalars['Int']>;
  /** The UUID of the webform submission entity. */
  uuid?: Maybe<Scalars['String']>;
  /** A secure token used to look up a submission. */
  token?: Maybe<Scalars['String']>;
  /** The URI the user submitted the webform. */
  uri?: Maybe<Scalars['String']>;
  /** The time that the webform submission was first saved as draft or submitted. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was submitted as complete (not draft). */
  completed?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was last saved (complete or draft). */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Is this a draft of the submission? */
  inDraft?: Maybe<Scalars['Boolean']>;
  /** The current wizard page. */
  currentPage?: Maybe<Scalars['String']>;
  /** The IP address of the user that submitted the webform. */
  remoteAddr?: Maybe<Scalars['String']>;
  /** The username of the user that submitted the webform. */
  uid?: Maybe<FieldWebformSubmissionUid>;
  /** The submission language code. */
  langcode?: Maybe<FieldWebformSubmissionLangcode>;
  /** The associated webform. */
  webformId?: Maybe<FieldWebformSubmissionWebformId>;
  /** A flag that indicates a locked webform submission. */
  locked?: Maybe<Scalars['Boolean']>;
  /** A flag that indicate the status of the webform submission. */
  sticky?: Maybe<Scalars['Boolean']>;
  /** Administrative notes about the webform submission. */
  notes?: Maybe<Scalars['String']>;
  /** The entity type to which this submission was submitted from. */
  entityTypeOfWebformSubmission?: Maybe<Scalars['String']>;
  /** The ID of the entity of which this webform submission was submitted from. */
  entityIdOfWebformSubmission?: Maybe<Scalars['String']>;
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Webform submission' entity type. */
export type WebformSubmissionQueryWebformIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The username of the user that submitted the webform. */
export type FieldWebformSubmissionUid = {
  __typename?: 'FieldWebformSubmissionUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The submission language code. */
export type FieldWebformSubmissionLangcode = {
  __typename?: 'FieldWebformSubmissionLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The associated webform. */
export type FieldWebformSubmissionWebformId = {
  __typename?: 'FieldWebformSubmissionWebformId';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

export type Menu = {
  __typename?: 'Menu';
  links?: Maybe<Array<Maybe<MenuLink>>>;
  /** The menu's name. */
  name?: Maybe<Scalars['String']>;
  /** The menu's description. */
  description?: Maybe<Scalars['String']>;
};

export type MenuLink = {
  __typename?: 'MenuLink';
  url?: Maybe<Url>;
  attribute?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<MenuLink>>>;
  expanded?: Maybe<Scalars['Boolean']>;
};


export type MenuLinkAttributeArgs = {
  key: Scalars['String'];
};

export type Webform = {
  __typename?: 'Webform';
  /** Reverse reference: The associated webform. */
  reverseWebformIdWebformSubmission: EntityQueryResult;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  yaml?: Maybe<Scalars['String']>;
  elements?: Maybe<Array<Maybe<WebformElement>>>;
};


export type WebformReverseWebformIdWebformSubmissionArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

export type WebformElement = {
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  submitForm?: Maybe<WebformSubmissionOutput>;
  webformFileUpload?: Maybe<WebformFileUploadOutput>;
  updateUser: EntityCrudOutput;
};


export type MutationSubmitFormArgs = {
  values: Scalars['String'];
};


export type MutationWebformFileUploadArgs = {
  file: Scalars['Upload'];
  webform_id: Scalars['String'];
  webform_element_id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  id?: Maybe<Scalars['String']>;
  input?: Maybe<UserInput>;
};

export type WebformSubmissionOutput = {
  __typename?: 'WebformSubmissionOutput';
  submission?: Maybe<WebformSubmissionEntity>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WebformSubmissionEntity = WebformSubmission & Entity & EntityOwnable & {
  __typename?: 'WebformSubmissionEntity';
  /** Query reference: The username of the user that submitted the webform. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Query reference: The associated webform. */
  queryWebformId?: Maybe<EntityQueryResult>;
  /** The serial number of the webform submission entity. */
  serial?: Maybe<Scalars['Int']>;
  /** The ID of the webform submission entity. */
  sid?: Maybe<Scalars['Int']>;
  /** The UUID of the webform submission entity. */
  uuid?: Maybe<Scalars['String']>;
  /** A secure token used to look up a submission. */
  token?: Maybe<Scalars['String']>;
  /** The URI the user submitted the webform. */
  uri?: Maybe<Scalars['String']>;
  /** The time that the webform submission was first saved as draft or submitted. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was submitted as complete (not draft). */
  completed?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was last saved (complete or draft). */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Is this a draft of the submission? */
  inDraft?: Maybe<Scalars['Boolean']>;
  /** The current wizard page. */
  currentPage?: Maybe<Scalars['String']>;
  /** The IP address of the user that submitted the webform. */
  remoteAddr?: Maybe<Scalars['String']>;
  /** The username of the user that submitted the webform. */
  uid?: Maybe<FieldWebformSubmissionUid>;
  /** The submission language code. */
  langcode?: Maybe<FieldWebformSubmissionLangcode>;
  /** The associated webform. */
  webformId?: Maybe<FieldWebformSubmissionWebformId>;
  /** A flag that indicates a locked webform submission. */
  locked?: Maybe<Scalars['Boolean']>;
  /** A flag that indicate the status of the webform submission. */
  sticky?: Maybe<Scalars['Boolean']>;
  /** Administrative notes about the webform submission. */
  notes?: Maybe<Scalars['String']>;
  /** The entity type to which this submission was submitted from. */
  entityTypeOfWebformSubmission?: Maybe<Scalars['String']>;
  /** The ID of the entity of which this webform submission was submitted from. */
  entityIdOfWebformSubmission?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityOwner?: Maybe<User>;
  id?: Maybe<Scalars['Int']>;
};


export type WebformSubmissionEntityQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type WebformSubmissionEntityQueryWebformIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type WebformSubmissionEntityEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


export type WebformSubmissionEntityEntityTranslationArgs = {
  language: LanguageId;
};


export type WebformSubmissionEntityEntityAccessArgs = {
  operation: Scalars['String'];
};


export type WebformSubmissionEntityEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


export type WebformSubmissionEntityEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


export type WebformFileUploadOutput = {
  __typename?: 'WebformFileUploadOutput';
  violations?: Maybe<Array<Maybe<ConstraintViolation>>>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  entity?: Maybe<Entity>;
  fid?: Maybe<Scalars['Integer']>;
};

export type ConstraintViolation = {
  __typename?: 'ConstraintViolation';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};


export type UserInput = {
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  my_custom_int?: Maybe<Scalars['Int']>;
};

export type EntityCrudOutput = {
  __typename?: 'EntityCrudOutput';
  violations?: Maybe<Array<Maybe<ConstraintViolation>>>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  entity?: Maybe<Entity>;
};

/** Common interface for internal urls. */
export type InternalUrl = {
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  languageSwitchLinks?: Maybe<Array<Maybe<LanguageSwitchLink>>>;
  breadcrumb?: Maybe<Array<Maybe<Link>>>;
  blocksByRegion?: Maybe<Array<Maybe<Entity>>>;
  request?: Maybe<InternalResponse>;
  /** The route's internal path. */
  pathInternal?: Maybe<Scalars['String']>;
  /** The url's path alias if any. */
  pathAlias?: Maybe<Scalars['String']>;
  languageInterfaceContext?: Maybe<Language>;
  languageContentContext?: Maybe<Language>;
  nodeContext?: Maybe<Node>;
  currentUserContext?: Maybe<User>;
  webformContext?: Maybe<Entity>;
  webformSubmissionContext?: Maybe<WebformSubmission>;
};


/** Common interface for internal urls. */
export type InternalUrlTranslateArgs = {
  language: LanguageId;
};


/** Common interface for internal urls. */
export type InternalUrlLanguageSwitchLinksArgs = {
  language?: Maybe<LanguageId>;
};


/** Common interface for internal urls. */
export type InternalUrlBlocksByRegionArgs = {
  region: Scalars['String'];
};

export type LanguageSwitchLink = {
  __typename?: 'LanguageSwitchLink';
  active?: Maybe<Scalars['Boolean']>;
  url?: Maybe<InternalUrl>;
  language?: Maybe<Language>;
  title?: Maybe<Scalars['String']>;
};

export type Link = {
  __typename?: 'Link';
  /** The label of a link. */
  text?: Maybe<Scalars['String']>;
  /** The url of a link. */
  url?: Maybe<Url>;
};

export type InternalResponse = {
  __typename?: 'InternalResponse';
  code?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
};


export type InternalResponseHeaderArgs = {
  key?: Maybe<Scalars['String']>;
};

export type WebformElementManagedFileBase = {
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  maxFilesize?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  fileExtensions?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
  required?: Maybe<WebformElementValidationRequired>;
};

export type WebformElementValidationMultiple = {
  __typename?: 'WebformElementValidationMultiple';
  message?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Integer']>;
};

export type WebformElementValidationRequired = {
  __typename?: 'WebformElementValidationRequired';
  message?: Maybe<Scalars['String']>;
};

export type WebformElementOptionsBase = {
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<WebformElementOption>>>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
  required?: Maybe<WebformElementValidationRequired>;
};

export type WebformElementOption = {
  __typename?: 'WebformElementOption';
  value?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type WebformElementTextBase = {
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  maxLength?: Maybe<Scalars['Int']>;
  pattern?: Maybe<WebformElementValidationPattern>;
  defaultValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  minLength?: Maybe<Scalars['Int']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
  required?: Maybe<WebformElementValidationRequired>;
};

export type WebformElementValidationPattern = {
  __typename?: 'WebformElementValidationPattern';
  rule?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type WebformElementDateBase = {
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Scalars['String']>;
  dateMax?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  dateMin?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  step?: Maybe<Scalars['Int']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
  required?: Maybe<WebformElementValidationRequired>;
};

export type FieldBlockContentBasicBody = {
  __typename?: 'FieldBlockContentBasicBody';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** The summary text with the text format applied. */
  summaryProcessed?: Maybe<Scalars['String']>;
};

/** The user ID of the comment author. */
export type FieldCommentCommentUid = {
  __typename?: 'FieldCommentCommentUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The ID of the entity of which this comment is a reply. */
export type FieldCommentCommentEntityId = {
  __typename?: 'FieldCommentCommentEntityId';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Node>;
};

export type FieldCommentCommentCommentBody = {
  __typename?: 'FieldCommentCommentCommentBody';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
};

export type FieldNodeArticleBody = {
  __typename?: 'FieldNodeArticleBody';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** The summary text with the text format applied. */
  summaryProcessed?: Maybe<Scalars['String']>;
};

export type FieldNodeArticleComment = {
  __typename?: 'FieldNodeArticleComment';
  status?: Maybe<Scalars['Int']>;
  cid?: Maybe<Scalars['Int']>;
  /** The time that the last comment was created. */
  lastCommentTimestamp?: Maybe<Scalars['Int']>;
  /** The name of the user posting the last comment. */
  lastCommentName?: Maybe<Scalars['String']>;
  lastCommentUid?: Maybe<Scalars['Int']>;
  /** The number of comments. */
  commentCount?: Maybe<Scalars['Int']>;
};

export type FieldNodeArticleFieldImage = {
  __typename?: 'FieldNodeArticleFieldImage';
  url?: Maybe<Scalars['String']>;
  derivative?: Maybe<ImageResource>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<File>;
  /** Alternative image text, for the image's 'alt' attribute. */
  alt?: Maybe<Scalars['String']>;
  /** Image title text, for the image's 'title' attribute. */
  title?: Maybe<Scalars['String']>;
};


export type FieldNodeArticleFieldImageDerivativeArgs = {
  style: ImageStyleId;
};

/** Enter a comma-separated list. For example: Amsterdam, Mexico City, "Cleveland, Ohio" */
export type FieldNodeArticleFieldTags = {
  __typename?: 'FieldNodeArticleFieldTags';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<TaxonomyTerm>;
};

export type FieldNodeHomepageFieldBannerImage = {
  __typename?: 'FieldNodeHomepageFieldBannerImage';
  url?: Maybe<Scalars['String']>;
  derivative?: Maybe<ImageResource>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<File>;
  /** Alternative image text, for the image's 'alt' attribute. */
  alt?: Maybe<Scalars['String']>;
  /** Image title text, for the image's 'title' attribute. */
  title?: Maybe<Scalars['String']>;
};


export type FieldNodeHomepageFieldBannerImageDerivativeArgs = {
  style: ImageStyleId;
};

export type FieldNodeHomepageFieldBannerText = {
  __typename?: 'FieldNodeHomepageFieldBannerText';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
};

/** The username of the content author. */
export type FieldNodePageUid = {
  __typename?: 'FieldNodePageUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

export type FieldNodePagePath = {
  __typename?: 'FieldNodePagePath';
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  /** Whether an automated alias should be created or not. */
  pathauto?: Maybe<Scalars['Int']>;
};

export type FieldNodePageBody = {
  __typename?: 'FieldNodePageBody';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** The summary text with the text format applied. */
  summaryProcessed?: Maybe<Scalars['String']>;
};

export type FieldTaxonomyTermTagsDescription = {
  __typename?: 'FieldTaxonomyTermTagsDescription';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
};

/** The parents of this term. */
export type FieldTaxonomyTermTagsParent = {
  __typename?: 'FieldTaxonomyTermTagsParent';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<TaxonomyTerm>;
};

export type FieldTaxonomyTermTagsPath = {
  __typename?: 'FieldTaxonomyTermTagsPath';
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  /** Whether an automated alias should be created or not. */
  pathauto?: Maybe<Scalars['Int']>;
};

/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasic = BlockContent & Entity & EntityPublishable & EntityRevisionable & {
  __typename?: 'BlockContentBasic';
  /** Query reference: The block type. */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Renders 'Custom block' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The custom block ID. */
  id?: Maybe<Scalars['Int']>;
  /** The custom block UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The revision ID. */
  revisionId?: Maybe<Scalars['Int']>;
  /** The custom block language code. */
  langcode?: Maybe<FieldBlockContentLangcode>;
  /** The block type. */
  type?: Maybe<FieldBlockContentType>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldBlockContentRevisionUser>;
  /** The log entry explaining the changes in this revision. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** A brief description of your block. */
  info?: Maybe<Scalars['String']>;
  /** The time that the custom block was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A boolean indicating whether this block is reusable. */
  reusable?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  body?: Maybe<FieldBlockContentBasicBody>;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicEntityRenderedArgs = {
  mode?: Maybe<BlockContentDisplayModeId>;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Default comments' bundle of the 'Comment' entity type. */
export type CommentComment = Comment & Entity & EntityPublishable & EntityOwnable & {
  __typename?: 'CommentComment';
  /** Reverse reference: The parent comment ID if this is a reply to a comment. */
  reversePidComment: EntityQueryResult;
  /** Query reference: The comment type. */
  queryCommentType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the comment author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Query reference: The parent comment ID if this is a reply to a comment. */
  queryPid?: Maybe<EntityQueryResult>;
  /** Query reference: The ID of the entity of which this comment is a reply. */
  queryEntityId?: Maybe<EntityQueryResult>;
  /** Renders 'Comment' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The comment ID. */
  cid?: Maybe<Scalars['Int']>;
  /** The comment UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The comment language code. */
  langcode?: Maybe<FieldCommentLangcode>;
  /** The comment type. */
  commentType?: Maybe<FieldCommentCommentType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The user ID of the comment author. */
  uid?: Maybe<FieldCommentUid>;
  /** The parent comment ID if this is a reply to a comment. */
  pid?: Maybe<FieldCommentPid>;
  subject?: Maybe<Scalars['String']>;
  /** The comment author's name. */
  name?: Maybe<Scalars['String']>;
  /** The comment author's email address. */
  mail?: Maybe<Scalars['String']>;
  /** The comment author's home page address. */
  homepage?: Maybe<Scalars['String']>;
  /** The comment author's hostname. */
  hostname?: Maybe<Scalars['String']>;
  /** The time that the comment was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the comment was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** The alphadecimal representation of the comment's place in a thread, consisting of a base 36 string prefixed by an integer indicating its length. */
  thread?: Maybe<Scalars['String']>;
  /** The field name through which this comment was added. */
  fieldName?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** The ID of the entity of which this comment is a reply. */
  entityIdOfComment?: Maybe<FieldCommentEntityId>;
  /** The entity type to which this comment is attached. */
  entityTypeOfComment?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  commentBody?: Maybe<FieldCommentCommentCommentBody>;
  /** The user ID of the comment author. */
  uidOfCommentComment?: Maybe<FieldCommentCommentUid>;
  /** The ID of the entity of which this comment is a reply. */
  entityIdOfCommentComment?: Maybe<FieldCommentCommentEntityId>;
};


/** The 'Default comments' bundle of the 'Comment' entity type. */
export type CommentCommentReversePidCommentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Default comments' bundle of the 'Comment' entity type. */
export type CommentCommentQueryCommentTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Default comments' bundle of the 'Comment' entity type. */
export type CommentCommentQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Default comments' bundle of the 'Comment' entity type. */
export type CommentCommentQueryPidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Default comments' bundle of the 'Comment' entity type. */
export type CommentCommentQueryEntityIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Default comments' bundle of the 'Comment' entity type. */
export type CommentCommentEntityRenderedArgs = {
  mode?: Maybe<CommentDisplayModeId>;
};


/** The 'Default comments' bundle of the 'Comment' entity type. */
export type CommentCommentEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Default comments' bundle of the 'Comment' entity type. */
export type CommentCommentEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Default comments' bundle of the 'Comment' entity type. */
export type CommentCommentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Default comments' bundle of the 'Comment' entity type. */
export type CommentCommentEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Default comments' bundle of the 'Comment' entity type. */
export type CommentCommentEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};

/** The 'Website feedback' bundle of the 'Contact message' entity type. */
export type ContactMessageFeedback = ContactMessage & Entity & {
  __typename?: 'ContactMessageFeedback';
  /** Query reference: The ID of the associated form. */
  queryContactForm?: Maybe<EntityQueryResult>;
  /** Query reference: The ID of the recipient user for personal contact messages. */
  queryRecipient?: Maybe<EntityQueryResult>;
  /** Renders 'Contact message' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The message UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The message language code. */
  langcode?: Maybe<FieldContactMessageLangcode>;
  /** The ID of the associated form. */
  contactForm?: Maybe<FieldContactMessageContactForm>;
  /** The name of the person that is sending the contact message. */
  name?: Maybe<Scalars['String']>;
  /** The email of the person that is sending the contact message. */
  mail?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  /** Whether to send a copy of the message to the sender. */
  copy?: Maybe<Scalars['Boolean']>;
  /** The ID of the recipient user for personal contact messages. */
  recipient?: Maybe<FieldContactMessageRecipient>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
};


/** The 'Website feedback' bundle of the 'Contact message' entity type. */
export type ContactMessageFeedbackQueryContactFormArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Website feedback' bundle of the 'Contact message' entity type. */
export type ContactMessageFeedbackQueryRecipientArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Website feedback' bundle of the 'Contact message' entity type. */
export type ContactMessageFeedbackEntityRenderedArgs = {
  mode?: Maybe<ContactMessageDisplayModeId>;
};


/** The 'Website feedback' bundle of the 'Contact message' entity type. */
export type ContactMessageFeedbackEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Website feedback' bundle of the 'Contact message' entity type. */
export type ContactMessageFeedbackEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Website feedback' bundle of the 'Contact message' entity type. */
export type ContactMessageFeedbackEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Website feedback' bundle of the 'Contact message' entity type. */
export type ContactMessageFeedbackEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Website feedback' bundle of the 'Contact message' entity type. */
export type ContactMessageFeedbackEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};

/** The 'Personal contact form' bundle of the 'Contact message' entity type. */
export type ContactMessagePersonal = ContactMessage & Entity & {
  __typename?: 'ContactMessagePersonal';
  /** Query reference: The ID of the associated form. */
  queryContactForm?: Maybe<EntityQueryResult>;
  /** Query reference: The ID of the recipient user for personal contact messages. */
  queryRecipient?: Maybe<EntityQueryResult>;
  /** Renders 'Contact message' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The message UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The message language code. */
  langcode?: Maybe<FieldContactMessageLangcode>;
  /** The ID of the associated form. */
  contactForm?: Maybe<FieldContactMessageContactForm>;
  /** The name of the person that is sending the contact message. */
  name?: Maybe<Scalars['String']>;
  /** The email of the person that is sending the contact message. */
  mail?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  /** Whether to send a copy of the message to the sender. */
  copy?: Maybe<Scalars['Boolean']>;
  /** The ID of the recipient user for personal contact messages. */
  recipient?: Maybe<FieldContactMessageRecipient>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
};


/** The 'Personal contact form' bundle of the 'Contact message' entity type. */
export type ContactMessagePersonalQueryContactFormArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Personal contact form' bundle of the 'Contact message' entity type. */
export type ContactMessagePersonalQueryRecipientArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Personal contact form' bundle of the 'Contact message' entity type. */
export type ContactMessagePersonalEntityRenderedArgs = {
  mode?: Maybe<ContactMessageDisplayModeId>;
};


/** The 'Personal contact form' bundle of the 'Contact message' entity type. */
export type ContactMessagePersonalEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Personal contact form' bundle of the 'Contact message' entity type. */
export type ContactMessagePersonalEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Personal contact form' bundle of the 'Contact message' entity type. */
export type ContactMessagePersonalEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Personal contact form' bundle of the 'Contact message' entity type. */
export type ContactMessagePersonalEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Personal contact form' bundle of the 'Contact message' entity type. */
export type ContactMessagePersonalEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};

/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPoint = Crop & Entity & EntityRevisionable & {
  __typename?: 'CropFocalPoint';
  /** Query reference: The crop type. */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** The crop ID. */
  cid?: Maybe<Scalars['Int']>;
  /** The crop UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The crop revision ID. */
  vid?: Maybe<Scalars['Int']>;
  /** The crop type. */
  type?: Maybe<FieldCropType>;
  /** The node language code. */
  langcode?: Maybe<FieldCropLangcode>;
  /** The URI of the image crop belongs to. */
  uri?: Maybe<Scalars['String']>;
  /** The crop height. */
  height?: Maybe<Scalars['Int']>;
  /** The crop width. */
  width?: Maybe<Scalars['Int']>;
  /** The crop's X coordinate. */
  x?: Maybe<Scalars['Int']>;
  /** The crop's Y coordinate. */
  y?: Maybe<Scalars['Int']>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldCropRevisionUid>;
  /** The log entry explaining the changes in this revision. */
  revisionLog?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** ID of entity crop belongs to. */
  entityIdOfCrop?: Maybe<Scalars['Int']>;
  /** The type of entity crop belongs to. */
  entityTypeOfCrop?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityRevisions: EntityQueryResult;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContent = MenuLinkContent & Entity & EntityPublishable & EntityRevisionable & {
  __typename?: 'MenuLinkContentMenuLinkContent';
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: The author of this translation. */
  queryContentTranslationUid?: Maybe<EntityQueryResult>;
  /** Renders 'Custom menu link' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The entity ID for this menu link content entity. */
  id?: Maybe<Scalars['Int']>;
  /** The content menu link UUID. */
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The menu link language code. */
  langcode?: Maybe<FieldMenuLinkContentLangcode>;
  /** The content menu link bundle. */
  bundle?: Maybe<Scalars['String']>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMenuLinkContentRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  /** A flag for whether the link should be enabled in menus or hidden. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The text to be used for this link in the menu. */
  title?: Maybe<Scalars['String']>;
  /** Shown when hovering over the menu link. */
  description?: Maybe<Scalars['String']>;
  /** The menu name. All links with the same menu name (such as "tools") are part of the same menu. */
  menuName?: Maybe<Scalars['String']>;
  /** The location this menu link points to. */
  link?: Maybe<FieldMenuLinkContentLink>;
  /** A flag to indicate if the link points to a full URL starting with a protocol, like http:// (1 = external, 0 = internal). */
  external?: Maybe<Scalars['Boolean']>;
  rediscover?: Maybe<Scalars['Boolean']>;
  /** Link weight among links in the same menu at the same depth. In the menu, the links with high weight will sink and links with a low weight will be positioned nearer the top. */
  weight?: Maybe<Scalars['Int']>;
  /** If selected and this menu link has children, the menu will always appear expanded. This option may be overridden for the entire menu tree when placing a menu block. */
  expanded?: Maybe<Scalars['Boolean']>;
  /** The ID of the parent menu link plugin, or empty string when at the top level of the hierarchy. */
  parent?: Maybe<Scalars['String']>;
  /** The time that the menu link was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** The source language from which this translation was created. */
  contentTranslationSource?: Maybe<FieldMenuLinkContentContentTranslationSource>;
  /** A boolean indicating whether this translation needs to be updated. */
  contentTranslationOutdated?: Maybe<Scalars['Boolean']>;
  /** The author of this translation. */
  contentTranslationUid?: Maybe<FieldMenuLinkContentContentTranslationUid>;
  /** A boolean indicating whether the translation is visible to non-translators. */
  contentTranslationStatus?: Maybe<Scalars['Boolean']>;
  /** The Unix timestamp when the translation was created. */
  contentTranslationCreated?: Maybe<Scalars['Timestamp']>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentQueryContentTranslationUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityRenderedArgs = {
  mode?: Maybe<MenuLinkContentDisplayModeId>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Article' bundle of the 'Content' entity type. */
export type NodeArticle = Node & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'NodeArticle';
  /** Reverse reference: The ID of the entity of which this comment is a reply. */
  reverseEntityIdComment: EntityQueryResult;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: The username of the content author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldNodePath>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  /** The source language from which this translation was created. */
  contentTranslationSource?: Maybe<FieldNodeContentTranslationSource>;
  /** A boolean indicating whether this translation needs to be updated. */
  contentTranslationOutdated?: Maybe<Scalars['Boolean']>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  /** Query reference:  */
  queryFieldTags?: Maybe<EntityQueryResult>;
  body?: Maybe<FieldNodeArticleBody>;
  comment?: Maybe<FieldNodeArticleComment>;
  fieldImage?: Maybe<FieldNodeArticleFieldImage>;
  /** Enter a comma-separated list. For example: Amsterdam, Mexico City, "Cleveland, Ohio" */
  fieldTags?: Maybe<Array<Maybe<FieldNodeArticleFieldTags>>>;
  layoutBuilderLayout?: Maybe<Array<Maybe<Section>>>;
};


/** The 'Article' bundle of the 'Content' entity type. */
export type NodeArticleReverseEntityIdCommentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Article' bundle of the 'Content' entity type. */
export type NodeArticleQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Article' bundle of the 'Content' entity type. */
export type NodeArticleQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Article' bundle of the 'Content' entity type. */
export type NodeArticleQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Article' bundle of the 'Content' entity type. */
export type NodeArticleEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Article' bundle of the 'Content' entity type. */
export type NodeArticleEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Article' bundle of the 'Content' entity type. */
export type NodeArticleEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Article' bundle of the 'Content' entity type. */
export type NodeArticleEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Article' bundle of the 'Content' entity type. */
export type NodeArticleEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Article' bundle of the 'Content' entity type. */
export type NodeArticleEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Article' bundle of the 'Content' entity type. */
export type NodeArticleEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Article' bundle of the 'Content' entity type. */
export type NodeArticleQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

export type Section = {
  __typename?: 'Section';
  layoutId?: Maybe<Scalars['String']>;
  layoutSettings?: Maybe<LayoutSettings>;
  components?: Maybe<Array<Maybe<Component>>>;
};

export type LayoutSettings = {
  __typename?: 'LayoutSettings';
  columnWidths?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type Component = {
  __typename?: 'Component';
  configuration?: Maybe<Configuration>;
  region?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type Configuration = {
  __typename?: 'Configuration';
  id?: Maybe<Scalars['String']>;
  labelDisplay?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

/** The 'Homepage' bundle of the 'Content' entity type. */
export type NodeHomepage = Node & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'NodeHomepage';
  /** Reverse reference: The ID of the entity of which this comment is a reply. */
  reverseEntityIdComment: EntityQueryResult;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: The username of the content author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldNodePath>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  /** The source language from which this translation was created. */
  contentTranslationSource?: Maybe<FieldNodeContentTranslationSource>;
  /** A boolean indicating whether this translation needs to be updated. */
  contentTranslationOutdated?: Maybe<Scalars['Boolean']>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  fieldBannerImage?: Maybe<FieldNodeHomepageFieldBannerImage>;
  fieldBannerText?: Maybe<FieldNodeHomepageFieldBannerText>;
  /** Add product SKU-s that you would like to show in the grid. */
  fieldProductGridSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
  fieldProductGridTitle?: Maybe<Scalars['String']>;
  fieldProductSku?: Maybe<Scalars['String']>;
};


/** The 'Homepage' bundle of the 'Content' entity type. */
export type NodeHomepageReverseEntityIdCommentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Homepage' bundle of the 'Content' entity type. */
export type NodeHomepageQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Homepage' bundle of the 'Content' entity type. */
export type NodeHomepageQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Homepage' bundle of the 'Content' entity type. */
export type NodeHomepageQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Homepage' bundle of the 'Content' entity type. */
export type NodeHomepageEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Homepage' bundle of the 'Content' entity type. */
export type NodeHomepageEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Homepage' bundle of the 'Content' entity type. */
export type NodeHomepageEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Homepage' bundle of the 'Content' entity type. */
export type NodeHomepageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Homepage' bundle of the 'Content' entity type. */
export type NodeHomepageEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Homepage' bundle of the 'Content' entity type. */
export type NodeHomepageEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Homepage' bundle of the 'Content' entity type. */
export type NodeHomepageEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePage = Node & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'NodePage';
  /** Reverse reference: The ID of the entity of which this comment is a reply. */
  reverseEntityIdComment: EntityQueryResult;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: The username of the content author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldNodePath>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  /** The source language from which this translation was created. */
  contentTranslationSource?: Maybe<FieldNodeContentTranslationSource>;
  /** A boolean indicating whether this translation needs to be updated. */
  contentTranslationOutdated?: Maybe<Scalars['Boolean']>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  body?: Maybe<FieldNodePageBody>;
  /** The username of the content author. */
  uidOfNodePage?: Maybe<FieldNodePageUid>;
  pathOfNodePage?: Maybe<FieldNodePagePath>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageReverseEntityIdCommentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirect = Redirect & Entity & {
  __typename?: 'RedirectRedirect';
  /** Query reference: The user ID of the node author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** The redirect ID. */
  rid?: Maybe<Scalars['Int']>;
  /** The record UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The redirect hash. */
  hash?: Maybe<Scalars['String']>;
  /** The redirect type. */
  type?: Maybe<Scalars['String']>;
  /** The user ID of the node author. */
  uid?: Maybe<FieldRedirectUid>;
  /** Enter an internal Drupal path or path alias to redirect (e.g. <em class="placeholder">node/123</em> or <em class="placeholder">taxonomy/term/123</em>). Fragment anchors (e.g. <em class="placeholder">#anchor</em>) are <strong>not</strong> allowed. */
  redirectSource?: Maybe<FieldRedirectRedirectSource>;
  redirectRedirect?: Maybe<FieldRedirectRedirectRedirect>;
  /** The redirect language. */
  language?: Maybe<FieldRedirectLanguage>;
  /** The redirect status code. */
  statusCode?: Maybe<Scalars['Int']>;
  /** The date when the redirect was created. */
  created?: Maybe<Scalars['Timestamp']>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};

/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefault = Shortcut & Entity & {
  __typename?: 'ShortcutDefault';
  /** Query reference: The bundle of the shortcut. */
  queryShortcutSet?: Maybe<EntityQueryResult>;
  /** Renders 'Shortcut link' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The ID of the shortcut. */
  id?: Maybe<Scalars['Int']>;
  /** The UUID of the shortcut. */
  uuid?: Maybe<Scalars['String']>;
  /** The language code of the shortcut. */
  langcode?: Maybe<FieldShortcutLangcode>;
  /** The bundle of the shortcut. */
  shortcutSet?: Maybe<FieldShortcutShortcutSet>;
  /** The name of the shortcut. */
  title?: Maybe<Scalars['String']>;
  /** Weight among shortcuts in the same shortcut set. */
  weight?: Maybe<Scalars['Int']>;
  /** The location this shortcut points to. */
  link?: Maybe<FieldShortcutLink>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
};


/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefaultQueryShortcutSetArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefaultEntityRenderedArgs = {
  mode?: Maybe<ShortcutDisplayModeId>;
};


/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefaultEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefaultEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefaultEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefaultEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Default' bundle of the 'Shortcut link' entity type. */
export type ShortcutDefaultEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};

/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTags = TaxonomyTerm & Entity & EntityPublishable & EntityRevisionable & {
  __typename?: 'TaxonomyTermTags';
  /** Reverse reference:  */
  reverseFieldTagsNode: EntityQueryResult;
  /** Reverse reference: The parents of this term. */
  reverseParentTaxonomyTerm: EntityQueryResult;
  /** Query reference: The vocabulary to which the term is assigned. */
  queryVid?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: The parents of this term. */
  queryParent?: Maybe<EntityQueryResult>;
  /** Renders 'Taxonomy term' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The term ID. */
  tid?: Maybe<Scalars['Int']>;
  /** The term UUID. */
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The term language code. */
  langcode?: Maybe<FieldTaxonomyTermLangcode>;
  /** The vocabulary to which the term is assigned. */
  vid?: Maybe<FieldTaxonomyTermVid>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldTaxonomyTermRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<FieldTaxonomyTermDescription>;
  /** The weight of this term in relation to other terms. */
  weight?: Maybe<Scalars['Int']>;
  /** The parents of this term. */
  parent?: Maybe<Array<Maybe<FieldTaxonomyTermParent>>>;
  /** The time that the term was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldTaxonomyTermPath>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  descriptionOfTaxonomyTermTags?: Maybe<FieldTaxonomyTermTagsDescription>;
  /** The parents of this term. */
  parentOfTaxonomyTermTags?: Maybe<Array<Maybe<FieldTaxonomyTermTagsParent>>>;
  pathOfTaxonomyTermTags?: Maybe<FieldTaxonomyTermTagsPath>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsReverseFieldTagsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsReverseParentTaxonomyTermArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsQueryVidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsQueryParentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityRenderedArgs = {
  mode?: Maybe<TaxonomyTermDisplayModeId>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContact = WebformSubmission & Entity & EntityOwnable & {
  __typename?: 'WebformSubmissionContact';
  /** Query reference: The username of the user that submitted the webform. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Query reference: The associated webform. */
  queryWebformId?: Maybe<EntityQueryResult>;
  /** The serial number of the webform submission entity. */
  serial?: Maybe<Scalars['Int']>;
  /** The ID of the webform submission entity. */
  sid?: Maybe<Scalars['Int']>;
  /** The UUID of the webform submission entity. */
  uuid?: Maybe<Scalars['String']>;
  /** A secure token used to look up a submission. */
  token?: Maybe<Scalars['String']>;
  /** The URI the user submitted the webform. */
  uri?: Maybe<Scalars['String']>;
  /** The time that the webform submission was first saved as draft or submitted. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was submitted as complete (not draft). */
  completed?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was last saved (complete or draft). */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Is this a draft of the submission? */
  inDraft?: Maybe<Scalars['Boolean']>;
  /** The current wizard page. */
  currentPage?: Maybe<Scalars['String']>;
  /** The IP address of the user that submitted the webform. */
  remoteAddr?: Maybe<Scalars['String']>;
  /** The username of the user that submitted the webform. */
  uid?: Maybe<FieldWebformSubmissionUid>;
  /** The submission language code. */
  langcode?: Maybe<FieldWebformSubmissionLangcode>;
  /** The associated webform. */
  webformId?: Maybe<FieldWebformSubmissionWebformId>;
  /** A flag that indicates a locked webform submission. */
  locked?: Maybe<Scalars['Boolean']>;
  /** A flag that indicate the status of the webform submission. */
  sticky?: Maybe<Scalars['Boolean']>;
  /** Administrative notes about the webform submission. */
  notes?: Maybe<Scalars['String']>;
  /** The entity type to which this submission was submitted from. */
  entityTypeOfWebformSubmission?: Maybe<Scalars['String']>;
  /** The ID of the entity of which this webform submission was submitted from. */
  entityIdOfWebformSubmission?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityOwner?: Maybe<User>;
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactQueryWebformIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Contact' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionContactEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};

/** The 'Newsletter Subscription' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterSubscription = WebformSubmission & Entity & EntityOwnable & {
  __typename?: 'WebformSubmissionNewsletterSubscription';
  /** Query reference: The username of the user that submitted the webform. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Query reference: The associated webform. */
  queryWebformId?: Maybe<EntityQueryResult>;
  /** The serial number of the webform submission entity. */
  serial?: Maybe<Scalars['Int']>;
  /** The ID of the webform submission entity. */
  sid?: Maybe<Scalars['Int']>;
  /** The UUID of the webform submission entity. */
  uuid?: Maybe<Scalars['String']>;
  /** A secure token used to look up a submission. */
  token?: Maybe<Scalars['String']>;
  /** The URI the user submitted the webform. */
  uri?: Maybe<Scalars['String']>;
  /** The time that the webform submission was first saved as draft or submitted. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was submitted as complete (not draft). */
  completed?: Maybe<Scalars['Timestamp']>;
  /** The time that the webform submission was last saved (complete or draft). */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Is this a draft of the submission? */
  inDraft?: Maybe<Scalars['Boolean']>;
  /** The current wizard page. */
  currentPage?: Maybe<Scalars['String']>;
  /** The IP address of the user that submitted the webform. */
  remoteAddr?: Maybe<Scalars['String']>;
  /** The username of the user that submitted the webform. */
  uid?: Maybe<FieldWebformSubmissionUid>;
  /** The submission language code. */
  langcode?: Maybe<FieldWebformSubmissionLangcode>;
  /** The associated webform. */
  webformId?: Maybe<FieldWebformSubmissionWebformId>;
  /** A flag that indicates a locked webform submission. */
  locked?: Maybe<Scalars['Boolean']>;
  /** A flag that indicate the status of the webform submission. */
  sticky?: Maybe<Scalars['Boolean']>;
  /** Administrative notes about the webform submission. */
  notes?: Maybe<Scalars['String']>;
  /** The entity type to which this submission was submitted from. */
  entityTypeOfWebformSubmission?: Maybe<Scalars['String']>;
  /** The ID of the entity of which this webform submission was submitted from. */
  entityIdOfWebformSubmission?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
  entityOwner?: Maybe<User>;
};


/** The 'Newsletter Subscription' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterSubscriptionQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Newsletter Subscription' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterSubscriptionQueryWebformIdArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Newsletter Subscription' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterSubscriptionEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Newsletter Subscription' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterSubscriptionEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Newsletter Subscription' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterSubscriptionEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Newsletter Subscription' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterSubscriptionEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Newsletter Subscription' bundle of the 'Webform submission' entity type. */
export type WebformSubmissionNewsletterSubscriptionEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};

/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntity = Entity & {
  __typename?: 'UnexposedEntity';
  entityUrl?: Maybe<Url>;
  entityQueryExclusive: EntityQueryResult;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityLabel?: Maybe<Scalars['String']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityType?: Maybe<Scalars['String']>;
  entityCreated?: Maybe<Scalars['String']>;
  entityChanged?: Maybe<Scalars['String']>;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityTranslationArgs = {
  language: LanguageId;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};

/** The canonical entity url. */
export type EntityCanonicalUrl = InternalUrl & Url & {
  __typename?: 'EntityCanonicalUrl';
  languageSwitchLinks?: Maybe<Array<Maybe<LanguageSwitchLink>>>;
  breadcrumb?: Maybe<Array<Maybe<Link>>>;
  blocksByRegion?: Maybe<Array<Maybe<Entity>>>;
  request?: Maybe<InternalResponse>;
  /** The route's internal path. */
  pathInternal?: Maybe<Scalars['String']>;
  /** The url's path alias if any. */
  pathAlias?: Maybe<Scalars['String']>;
  languageInterfaceContext?: Maybe<Language>;
  languageContentContext?: Maybe<Language>;
  nodeContext?: Maybe<Node>;
  currentUserContext?: Maybe<User>;
  webformContext?: Maybe<Entity>;
  webformSubmissionContext?: Maybe<WebformSubmission>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** The entity belonging to the current url. */
  entity?: Maybe<Entity>;
};


/** The canonical entity url. */
export type EntityCanonicalUrlLanguageSwitchLinksArgs = {
  language?: Maybe<LanguageId>;
};


/** The canonical entity url. */
export type EntityCanonicalUrlBlocksByRegionArgs = {
  region: Scalars['String'];
};


/** The canonical entity url. */
export type EntityCanonicalUrlTranslateArgs = {
  language: LanguageId;
};

export type ExternalUrl = Url & {
  __typename?: 'ExternalUrl';
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  request?: Maybe<ExternalResponse>;
};


export type ExternalUrlTranslateArgs = {
  language: LanguageId;
};

export type ExternalResponse = {
  __typename?: 'ExternalResponse';
  code?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
};


export type ExternalResponseHeaderArgs = {
  key?: Maybe<Scalars['String']>;
};

export type RedirectUrl = Url & {
  __typename?: 'RedirectUrl';
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** The redirect target. */
  target?: Maybe<Url>;
  /** The redirect code. */
  code?: Maybe<Scalars['Int']>;
};


export type RedirectUrlTranslateArgs = {
  language: LanguageId;
};

export type DefaultInternalUrl = InternalUrl & Url & {
  __typename?: 'DefaultInternalUrl';
  languageSwitchLinks?: Maybe<Array<Maybe<LanguageSwitchLink>>>;
  breadcrumb?: Maybe<Array<Maybe<Link>>>;
  blocksByRegion?: Maybe<Array<Maybe<Entity>>>;
  request?: Maybe<InternalResponse>;
  /** The route's internal path. */
  pathInternal?: Maybe<Scalars['String']>;
  /** The url's path alias if any. */
  pathAlias?: Maybe<Scalars['String']>;
  languageInterfaceContext?: Maybe<Language>;
  languageContentContext?: Maybe<Language>;
  nodeContext?: Maybe<Node>;
  currentUserContext?: Maybe<User>;
  webformContext?: Maybe<Entity>;
  webformSubmissionContext?: Maybe<WebformSubmission>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
};


export type DefaultInternalUrlLanguageSwitchLinksArgs = {
  language?: Maybe<LanguageId>;
};


export type DefaultInternalUrlBlocksByRegionArgs = {
  region: Scalars['String'];
};


export type DefaultInternalUrlTranslateArgs = {
  language: LanguageId;
};

export type WebformElementTextarea = WebformElementTextBase & WebformElement & {
  __typename?: 'WebformElementTextarea';
  prefix?: Maybe<Scalars['String']>;
  maxLength?: Maybe<Scalars['Int']>;
  pattern?: Maybe<WebformElementValidationPattern>;
  defaultValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  minLength?: Maybe<Scalars['Int']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
  required?: Maybe<WebformElementValidationRequired>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  rows?: Maybe<Scalars['Int']>;
};

export type WebformElementCheckboxes = WebformElementOptionsBase & WebformElement & {
  __typename?: 'WebformElementCheckboxes';
  prefix?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<WebformElementOption>>>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
  required?: Maybe<WebformElementValidationRequired>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type WebformElementActions = WebformElement & {
  __typename?: 'WebformElementActions';
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  submitLabel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type WebformElementSelect = WebformElementOptionsBase & WebformElement & {
  __typename?: 'WebformElementSelect';
  prefix?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<WebformElementOption>>>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
  required?: Maybe<WebformElementValidationRequired>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  emptyOption?: Maybe<WebformElementOption>;
};

export type WebformElementEntitySelect = WebformElementOptionsBase & WebformElement & {
  __typename?: 'WebformElementEntitySelect';
  prefix?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<WebformElementOption>>>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
  required?: Maybe<WebformElementValidationRequired>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type WebformElementTextField = WebformElementTextBase & WebformElement & {
  __typename?: 'WebformElementTextField';
  prefix?: Maybe<Scalars['String']>;
  maxLength?: Maybe<Scalars['Int']>;
  pattern?: Maybe<WebformElementValidationPattern>;
  defaultValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  minLength?: Maybe<Scalars['Int']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
  required?: Maybe<WebformElementValidationRequired>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type WebformElementDate = WebformElementDateBase & WebformElement & {
  __typename?: 'WebformElementDate';
  prefix?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Scalars['String']>;
  dateMax?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  dateMin?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  step?: Maybe<Scalars['Int']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
  required?: Maybe<WebformElementValidationRequired>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type WebformElementRadios = WebformElementOptionsBase & WebformElement & {
  __typename?: 'WebformElementRadios';
  prefix?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<WebformElementOption>>>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
  required?: Maybe<WebformElementValidationRequired>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type WebformElementType = WebformElement & {
  __typename?: 'WebformElementType';
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type WebformElementMarkup = WebformElement & {
  __typename?: 'WebformElementMarkup';
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  markup?: Maybe<Scalars['String']>;
};

export type WebformElementEmail = WebformElementTextBase & WebformElement & {
  __typename?: 'WebformElementEmail';
  prefix?: Maybe<Scalars['String']>;
  maxLength?: Maybe<Scalars['Int']>;
  pattern?: Maybe<WebformElementValidationPattern>;
  defaultValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  minLength?: Maybe<Scalars['Int']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
  required?: Maybe<WebformElementValidationRequired>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type WebformElementComposite = WebformElement & {
  __typename?: 'WebformElementComposite';
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  elements?: Maybe<Array<Maybe<WebformElement>>>;
  suffix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
};

export type WebformElementTermSelect = WebformElementOptionsBase & WebformElement & {
  __typename?: 'WebformElementTermSelect';
  prefix?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<WebformElementOption>>>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
  required?: Maybe<WebformElementValidationRequired>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  termOptions?: Maybe<Array<Maybe<TaxonomyTerm>>>;
};


export type WebformElementTermSelectTermOptionsArgs = {
  depth?: Maybe<Scalars['Integer']>;
};

export type WebformElementHidden = WebformElement & {
  __typename?: 'WebformElementHidden';
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WebformElementManagedFile = WebformElementManagedFileBase & WebformElement & {
  __typename?: 'WebformElementManagedFile';
  maxFilesize?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  fileExtensions?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  multiple?: Maybe<WebformElementValidationMultiple>;
  required?: Maybe<WebformElementValidationRequired>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type WebformElementNumber = WebformElement & {
  __typename?: 'WebformElementNumber';
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  prefix?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  step?: Maybe<Scalars['Int']>;
  required?: Maybe<WebformElementValidationRequired>;
};








/** The available display modes for 'Block' entities. */
export const BlockDisplayModeId = {
  /** The 'Token' display mode for 'Block' entities. */
  Token: 'TOKEN'
} as const;

export type BlockDisplayModeId = typeof BlockDisplayModeId[keyof typeof BlockDisplayModeId];
/** The available display modes for 'Tour' entities. */
export const TourDisplayModeId = {
  /** The 'Token' display mode for 'Tour' entities. */
  Token: 'TOKEN'
} as const;

export type TourDisplayModeId = typeof TourDisplayModeId[keyof typeof TourDisplayModeId];

export type GetNodeHomepageByNodeIdQueryVariables = Exact<{
  id: Scalars['String'];
  language: LanguageId;
}>;


export type GetNodeHomepageByNodeIdQuery = (
  { __typename?: 'Query' }
  & { nodeById?: Maybe<(
    { __typename: 'NodeArticle' }
    & { entityTranslation?: Maybe<{ __typename?: 'User' } | { __typename?: 'File' } | { __typename?: 'PathAlias' } | { __typename?: 'WebformSubmissionEntity' } | { __typename?: 'BlockContentBasic' } | { __typename?: 'CommentComment' } | { __typename?: 'ContactMessageFeedback' } | { __typename?: 'ContactMessagePersonal' } | { __typename?: 'CropFocalPoint' } | { __typename?: 'MenuLinkContentMenuLinkContent' } | { __typename?: 'NodeArticle' } | (
      { __typename?: 'NodeHomepage' }
      & NodeHomepageFragmentFragment
    ) | { __typename?: 'NodePage' } | { __typename?: 'RedirectRedirect' } | { __typename?: 'ShortcutDefault' } | { __typename?: 'TaxonomyTermTags' } | { __typename?: 'WebformSubmissionContact' } | { __typename?: 'WebformSubmissionNewsletterSubscription' } | { __typename?: 'UnexposedEntity' }> }
  ) | (
    { __typename: 'NodeHomepage' }
    & { entityTranslation?: Maybe<{ __typename?: 'User' } | { __typename?: 'File' } | { __typename?: 'PathAlias' } | { __typename?: 'WebformSubmissionEntity' } | { __typename?: 'BlockContentBasic' } | { __typename?: 'CommentComment' } | { __typename?: 'ContactMessageFeedback' } | { __typename?: 'ContactMessagePersonal' } | { __typename?: 'CropFocalPoint' } | { __typename?: 'MenuLinkContentMenuLinkContent' } | { __typename?: 'NodeArticle' } | (
      { __typename?: 'NodeHomepage' }
      & NodeHomepageFragmentFragment
    ) | { __typename?: 'NodePage' } | { __typename?: 'RedirectRedirect' } | { __typename?: 'ShortcutDefault' } | { __typename?: 'TaxonomyTermTags' } | { __typename?: 'WebformSubmissionContact' } | { __typename?: 'WebformSubmissionNewsletterSubscription' } | { __typename?: 'UnexposedEntity' }> }
  ) | (
    { __typename: 'NodePage' }
    & { entityTranslation?: Maybe<{ __typename?: 'User' } | { __typename?: 'File' } | { __typename?: 'PathAlias' } | { __typename?: 'WebformSubmissionEntity' } | { __typename?: 'BlockContentBasic' } | { __typename?: 'CommentComment' } | { __typename?: 'ContactMessageFeedback' } | { __typename?: 'ContactMessagePersonal' } | { __typename?: 'CropFocalPoint' } | { __typename?: 'MenuLinkContentMenuLinkContent' } | { __typename?: 'NodeArticle' } | (
      { __typename?: 'NodeHomepage' }
      & NodeHomepageFragmentFragment
    ) | { __typename?: 'NodePage' } | { __typename?: 'RedirectRedirect' } | { __typename?: 'ShortcutDefault' } | { __typename?: 'TaxonomyTermTags' } | { __typename?: 'WebformSubmissionContact' } | { __typename?: 'WebformSubmissionNewsletterSubscription' } | { __typename?: 'UnexposedEntity' }> }
  )> }
);

export type NodeHomepageFragmentFragment = (
  { __typename?: 'NodeHomepage' }
  & Pick<NodeHomepage, 'entityId' | 'title' | 'fieldProductSku' | 'fieldProductGridSkus' | 'fieldProductGridTitle'>
  & { entityUrl?: Maybe<(
    { __typename?: 'EntityCanonicalUrl' }
    & { translate?: Maybe<(
      { __typename?: 'EntityCanonicalUrl' }
      & Pick<EntityCanonicalUrl, 'path'>
    ) | (
      { __typename?: 'ExternalUrl' }
      & Pick<ExternalUrl, 'path'>
    ) | (
      { __typename?: 'RedirectUrl' }
      & Pick<RedirectUrl, 'path'>
    ) | (
      { __typename?: 'DefaultInternalUrl' }
      & Pick<DefaultInternalUrl, 'path'>
    )> }
  ) | (
    { __typename?: 'ExternalUrl' }
    & { translate?: Maybe<(
      { __typename?: 'EntityCanonicalUrl' }
      & Pick<EntityCanonicalUrl, 'path'>
    ) | (
      { __typename?: 'ExternalUrl' }
      & Pick<ExternalUrl, 'path'>
    ) | (
      { __typename?: 'RedirectUrl' }
      & Pick<RedirectUrl, 'path'>
    ) | (
      { __typename?: 'DefaultInternalUrl' }
      & Pick<DefaultInternalUrl, 'path'>
    )> }
  ) | (
    { __typename?: 'RedirectUrl' }
    & { translate?: Maybe<(
      { __typename?: 'EntityCanonicalUrl' }
      & Pick<EntityCanonicalUrl, 'path'>
    ) | (
      { __typename?: 'ExternalUrl' }
      & Pick<ExternalUrl, 'path'>
    ) | (
      { __typename?: 'RedirectUrl' }
      & Pick<RedirectUrl, 'path'>
    ) | (
      { __typename?: 'DefaultInternalUrl' }
      & Pick<DefaultInternalUrl, 'path'>
    )> }
  ) | (
    { __typename?: 'DefaultInternalUrl' }
    & { translate?: Maybe<(
      { __typename?: 'EntityCanonicalUrl' }
      & Pick<EntityCanonicalUrl, 'path'>
    ) | (
      { __typename?: 'ExternalUrl' }
      & Pick<ExternalUrl, 'path'>
    ) | (
      { __typename?: 'RedirectUrl' }
      & Pick<RedirectUrl, 'path'>
    ) | (
      { __typename?: 'DefaultInternalUrl' }
      & Pick<DefaultInternalUrl, 'path'>
    )> }
  )>, langcode?: Maybe<(
    { __typename?: 'FieldNodeLangcode' }
    & Pick<FieldNodeLangcode, 'value'>
  )>, fieldBannerText?: Maybe<(
    { __typename?: 'FieldNodeHomepageFieldBannerText' }
    & Pick<FieldNodeHomepageFieldBannerText, 'value' | 'format' | 'processed'>
  )>, fieldBannerImage?: Maybe<(
    { __typename?: 'FieldNodeHomepageFieldBannerImage' }
    & Pick<FieldNodeHomepageFieldBannerImage, 'url' | 'alt' | 'height' | 'width'>
    & { thumbnail?: Maybe<(
      { __typename?: 'ImageResource' }
      & Pick<ImageResource, 'width' | 'height' | 'url'>
    )>, medium?: Maybe<(
      { __typename?: 'ImageResource' }
      & Pick<ImageResource, 'width' | 'height' | 'url'>
    )>, large?: Maybe<(
      { __typename?: 'ImageResource' }
      & Pick<ImageResource, 'width' | 'height' | 'url'>
    )>, mobile?: Maybe<(
      { __typename?: 'ImageResource' }
      & Pick<ImageResource, 'width' | 'height' | 'url'>
    )>, mobileRetina?: Maybe<(
      { __typename?: 'ImageResource' }
      & Pick<ImageResource, 'width' | 'height' | 'url'>
    )>, desktop?: Maybe<(
      { __typename?: 'ImageResource' }
      & Pick<ImageResource, 'width' | 'height' | 'url'>
    )>, desktopRetina?: Maybe<(
      { __typename?: 'ImageResource' }
      & Pick<ImageResource, 'width' | 'height' | 'url'>
    )> }
  )> }
);

export const NodeHomepageFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NodeHomepageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeHomepage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entityId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"entityUrl"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"langcode"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"fieldBannerText"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"format"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"processed"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"fieldProductSku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fieldBannerImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"thumbnail"},"name":{"kind":"Name","value":"derivative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"EnumValue","value":"THUMBNAIL"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"medium"},"name":{"kind":"Name","value":"derivative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"EnumValue","value":"MEDIUM"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"large"},"name":{"kind":"Name","value":"derivative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"EnumValue","value":"LARGE"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"mobile"},"name":{"kind":"Name","value":"derivative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"EnumValue","value":"MOBILE"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"mobileRetina"},"name":{"kind":"Name","value":"derivative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"EnumValue","value":"MOBILERETINA"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"desktop"},"name":{"kind":"Name","value":"derivative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"EnumValue","value":"DESKTOP"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"desktopRetina"},"name":{"kind":"Name","value":"derivative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"EnumValue","value":"DESKTOPRETINA"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fieldProductGridSkus"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fieldProductGridTitle"},"arguments":[],"directives":[]}]}}]};
export const GetNodeHomepageByNodeIdDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNodeHomepageByNodeId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LanguageId"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"entityTranslation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NodeHomepageFragment"},"directives":[]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NodeHomepageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeHomepage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entityId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"entityUrl"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"langcode"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"fieldBannerText"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"format"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"processed"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"fieldProductSku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fieldBannerImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"alt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"thumbnail"},"name":{"kind":"Name","value":"derivative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"EnumValue","value":"THUMBNAIL"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"medium"},"name":{"kind":"Name","value":"derivative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"EnumValue","value":"MEDIUM"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"large"},"name":{"kind":"Name","value":"derivative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"EnumValue","value":"LARGE"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"mobile"},"name":{"kind":"Name","value":"derivative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"EnumValue","value":"MOBILE"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"mobileRetina"},"name":{"kind":"Name","value":"derivative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"EnumValue","value":"MOBILERETINA"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"desktop"},"name":{"kind":"Name","value":"derivative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"EnumValue","value":"DESKTOP"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"desktopRetina"},"name":{"kind":"Name","value":"derivative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"EnumValue","value":"DESKTOPRETINA"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fieldProductGridSkus"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fieldProductGridTitle"},"arguments":[],"directives":[]}]}}]};