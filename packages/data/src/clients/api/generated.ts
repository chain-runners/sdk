/* AUTOMATICALLY GENERATED BY `yarn codegen`. DO NOT EDIT. */
/* eslint-disable */

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /** DateTime scalar type */
  LuxonDateTime: any;
};

export type Bio = {
  __typename?: 'Bio';
  createdAt: Scalars['LuxonDateTime'];
  id: Scalars['ID'];
  textContent: Array<RichTextBlock>;
  token: Token;
  tokenId: Scalars['Int'];
  updatedAt: Scalars['LuxonDateTime'];
};

export type InlineStyleRange = {
  __typename?: 'InlineStyleRange';
  length: Scalars['Int'];
  offset: Scalars['Int'];
  style: RichTextStyle;
};

export type InlineStyleRangeInput = {
  length: Scalars['Int'];
  offset: Scalars['Int'];
  style: RichTextStyle;
};

export type Mutation = {
  __typename?: 'Mutation';
  disconnectDiscordAccount: MutationResponse;
  linkDiscordAccount: MutationResponse;
  login: UserLoginResponse;
  logout: MutationResponse;
  refreshToken: RefreshTokenResponse;
  setBioForRunner: MutationResponse;
  syncDiscordRoles: MutationResponse;
};


export type MutationLinkDiscordAccountArgs = {
  code: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UserLoginArgs;
};


export type MutationSetBioForRunnerArgs = {
  content: Array<RichTextBlockInput>;
  runnerId: Scalars['Int'];
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type ObjectProperty = {
  __typename?: 'ObjectProperty';
  name: Scalars['String'];
  type: Scalars['String'];
};

export type PaginationArgs = {
  limit: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  bioForRunner?: Maybe<Bio>;
  getObjectProperties?: Maybe<Array<ObjectProperty>>;
  token?: Maybe<Token>;
  tokens: TokenListResponse;
  trait?: Maybe<Trait>;
  traits: TraitListResponse;
  wallet?: Maybe<Wallet>;
  wallets: WalletListResponse;
  whoAmI?: Maybe<User>;
};


export type QueryBioForRunnerArgs = {
  runnerId: Scalars['Int'];
};


export type QueryGetObjectPropertiesArgs = {
  objectName: Scalars['String'];
};


export type QueryTokenArgs = {
  id: Scalars['ID'];
};


export type QueryTokensArgs = {
  options?: InputMaybe<TokenQueryOptions>;
};


export type QueryTraitArgs = {
  id: Scalars['ID'];
};


export type QueryTraitsArgs = {
  pagination?: InputMaybe<PaginationArgs>;
};


export type QueryWalletArgs = {
  id: Scalars['ID'];
};


export type QueryWalletsArgs = {
  pagination?: InputMaybe<PaginationArgs>;
};

export type RefreshTokenResponse = {
  __typename?: 'RefreshTokenResponse';
  message: Scalars['String'];
  success: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type RichTextBlock = {
  __typename?: 'RichTextBlock';
  inlineStyleRanges: Array<InlineStyleRange>;
  text: Scalars['String'];
};

export type RichTextBlockInput = {
  inlineStyleRanges: Array<InlineStyleRangeInput>;
  text: Scalars['String'];
};

export enum RichTextStyle {
  Bold = 'BOLD',
  Italic = 'ITALIC',
  Monospace = 'MONOSPACE',
  Strikethrough = 'STRIKETHROUGH',
  Underline = 'UNDERLINE'
}

export type Token = {
  __typename?: 'Token';
  attributes: Array<TokenAttribute>;
  createdAt: Scalars['LuxonDateTime'];
  dnaHexString: Scalars['String'];
  id: Scalars['Int'];
  ownerAddress: Scalars['String'];
  rawMetadata: Scalars['String'];
  svg: Scalars['String'];
  traitIds: Array<Scalars['Int']>;
  traits: Array<Trait>;
  updatedAt: Scalars['LuxonDateTime'];
};

export type TokenAttribute = {
  __typename?: 'TokenAttribute';
  createdAt: Scalars['LuxonDateTime'];
  id: Scalars['ID'];
  token: Token;
  tokenId: Scalars['Int'];
  trait: Trait;
  traitId: Scalars['String'];
  updatedAt: Scalars['LuxonDateTime'];
};

export type TokenFilters = {
  ownedBy?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Array<TokenTraitFilter>>;
  withBioOnly?: InputMaybe<Scalars['Boolean']>;
};

export type TokenListResponse = {
  __typename?: 'TokenListResponse';
  count: Scalars['Float'];
  records: Array<Token>;
};

export type TokenQueryOptions = {
  filters?: InputMaybe<TokenFilters>;
  pagination?: InputMaybe<PaginationArgs>;
};

export type TokenTraitFilter = {
  traitType: TraitType;
  values: Array<Scalars['String']>;
};

export type Trait = {
  __typename?: 'Trait';
  displayName: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  svgContent: Scalars['String'];
  tokenCount: Scalars['Int'];
  traitIndex: Scalars['Int'];
  type: TraitType;
};

export type TraitListResponse = {
  __typename?: 'TraitListResponse';
  count: Scalars['Float'];
  records: Array<Trait>;
};

export enum TraitType {
  Background = 'Background',
  EarAccessory = 'EarAccessory',
  EyeAccessory = 'EyeAccessory',
  Eyes = 'Eyes',
  Face = 'Face',
  FaceAccessory = 'FaceAccessory',
  HeadAbove = 'HeadAbove',
  HeadBelow = 'HeadBelow',
  Mask = 'Mask',
  Mouth = 'Mouth',
  MouthAccessory = 'MouthAccessory',
  Nose = 'Nose',
  Race = 'Race'
}

export type User = {
  __typename?: 'User';
  address: Scalars['String'];
  createdAt: Scalars['LuxonDateTime'];
  discordAccountId?: Maybe<Scalars['String']>;
  discordAccountName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role: UserRole;
  updatedAt: Scalars['LuxonDateTime'];
};

export type UserLoginArgs = {
  address: Scalars['String'];
  signature: Scalars['String'];
};

export type UserLoginResponse = {
  __typename?: 'UserLoginResponse';
  message: Scalars['String'];
  success: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export enum UserRole {
  SuperAdmin = 'SuperAdmin',
  User = 'User'
}

export type Wallet = {
  __typename?: 'Wallet';
  createdAt: Scalars['LuxonDateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['LuxonDateTime'];
};

export type WalletListResponse = {
  __typename?: 'WalletListResponse';
  count: Scalars['Float'];
  records: Array<Wallet>;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', whoAmI?: { __typename: 'User', id: string, address: string, role: UserRole, updatedAt: any, createdAt: any, discordAccountId?: string | null | undefined, discordAccountName?: string | null | undefined } | null | undefined };

export type DisconnectDiscordAccountMutationVariables = Exact<{ [key: string]: never; }>;


export type DisconnectDiscordAccountMutation = { __typename?: 'Mutation', disconnectDiscordAccount: { __typename?: 'MutationResponse', message: string, success: boolean } };

export type RunnerFragment = { __typename: 'Token', id: number, rawMetadata: string, ownerAddress: string, dnaHexString: string, traitIds: Array<number>, updatedAt: any, createdAt: any };

export type TraitFragment = { __typename: 'Trait', id: number, name: string, displayName: string, type: TraitType, traitIndex: number, svgContent: string, tokenCount: number };

export type UserFragment = { __typename: 'User', id: string, address: string, role: UserRole, updatedAt: any, createdAt: any, discordAccountId?: string | null | undefined, discordAccountName?: string | null | undefined };

export type GetAllTraitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTraitsQuery = { __typename?: 'Query', traits: { __typename?: 'TraitListResponse', count: number, records: Array<{ __typename: 'Trait', id: number, name: string, displayName: string, type: TraitType, traitIndex: number, svgContent: string, tokenCount: number }> } };

export type GetBioForRunnerQueryVariables = Exact<{
  runnerId: Scalars['Int'];
}>;


export type GetBioForRunnerQuery = { __typename?: 'Query', bioForRunner?: { __typename?: 'Bio', textContent: Array<{ __typename?: 'RichTextBlock', text: string, inlineStyleRanges: Array<{ __typename?: 'InlineStyleRange', length: number, style: RichTextStyle, offset: number }> }> } | null | undefined };

export type GetRunnerByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetRunnerByIdQuery = { __typename?: 'Query', token?: { __typename: 'Token', id: number, rawMetadata: string, ownerAddress: string, dnaHexString: string, traitIds: Array<number>, updatedAt: any, createdAt: any } | null | undefined };

export type GetRunnersQueryVariables = Exact<{
  options?: InputMaybe<TokenQueryOptions>;
}>;


export type GetRunnersQuery = { __typename?: 'Query', tokens: { __typename?: 'TokenListResponse', count: number, records: Array<{ __typename: 'Token', id: number, rawMetadata: string, ownerAddress: string, dnaHexString: string, traitIds: Array<number>, updatedAt: any, createdAt: any }> } };

export type GetRunnersByOwnerQueryVariables = Exact<{
  owner: Scalars['String'];
}>;


export type GetRunnersByOwnerQuery = { __typename?: 'Query', tokens: { __typename?: 'TokenListResponse', count: number, records: Array<{ __typename: 'Token', id: number, rawMetadata: string, ownerAddress: string, dnaHexString: string, traitIds: Array<number>, updatedAt: any, createdAt: any }> } };

export type LinkDiscordAccountMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type LinkDiscordAccountMutation = { __typename?: 'Mutation', linkDiscordAccount: { __typename?: 'MutationResponse', message: string, success: boolean } };

export type LoginMutationVariables = Exact<{
  address: Scalars['String'];
  signature: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserLoginResponse', message: string, success: boolean, token?: string | null | undefined, user?: { __typename: 'User', id: string, address: string, role: UserRole, updatedAt: any, createdAt: any, discordAccountId?: string | null | undefined, discordAccountName?: string | null | undefined } | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'MutationResponse', message: string, success: boolean } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'RefreshTokenResponse', message: string, success: boolean, token?: string | null | undefined } };

export type SetBioForRunnerMutationVariables = Exact<{
  runnerId: Scalars['Int'];
  content: Array<RichTextBlockInput> | RichTextBlockInput;
}>;


export type SetBioForRunnerMutation = { __typename?: 'Mutation', setBioForRunner: { __typename?: 'MutationResponse', message: string, success: boolean } };

export type SyncDiscordRolesMutationVariables = Exact<{ [key: string]: never; }>;


export type SyncDiscordRolesMutation = { __typename?: 'Mutation', syncDiscordRoles: { __typename?: 'MutationResponse', message: string, success: boolean } };

export const RunnerFragmentDoc = gql`
    fragment runner on Token {
  __typename
  id
  rawMetadata
  ownerAddress
  dnaHexString
  traitIds
  updatedAt
  createdAt
}
    `;
export const TraitFragmentDoc = gql`
    fragment trait on Trait {
  __typename
  id
  name
  displayName
  type
  traitIndex
  svgContent
  tokenCount
}
    `;
export const UserFragmentDoc = gql`
    fragment user on User {
  __typename
  id
  address
  role
  updatedAt
  createdAt
  discordAccountId
  discordAccountName
}
    `;
export const CurrentUserDocument = gql`
    query currentUser {
  whoAmI {
    ...user
  }
}
    ${UserFragmentDoc}`;
export const DisconnectDiscordAccountDocument = gql`
    mutation disconnectDiscordAccount {
  disconnectDiscordAccount {
    message
    success
  }
}
    `;
export const GetAllTraitsDocument = gql`
    query getAllTraits {
  traits {
    records {
      ...trait
    }
    count
  }
}
    ${TraitFragmentDoc}`;
export const GetBioForRunnerDocument = gql`
    query getBioForRunner($runnerId: Int!) {
  bioForRunner(runnerId: $runnerId) {
    textContent {
      text
      inlineStyleRanges {
        length
        style
        offset
      }
    }
  }
}
    `;
export const GetRunnerByIdDocument = gql`
    query getRunnerById($id: ID!) {
  token(id: $id) {
    ...runner
  }
}
    ${RunnerFragmentDoc}`;
export const GetRunnersDocument = gql`
    query getRunners($options: TokenQueryOptions) {
  tokens(options: $options) {
    count
    records {
      ...runner
    }
  }
}
    ${RunnerFragmentDoc}`;
export const GetRunnersByOwnerDocument = gql`
    query getRunnersByOwner($owner: String!) {
  tokens(options: {filters: {ownedBy: $owner}}) {
    count
    records {
      ...runner
    }
  }
}
    ${RunnerFragmentDoc}`;
export const LinkDiscordAccountDocument = gql`
    mutation linkDiscordAccount($code: String!) {
  linkDiscordAccount(code: $code) {
    message
    success
  }
}
    `;
export const LoginDocument = gql`
    mutation login($address: String!, $signature: String!) {
  login(input: {address: $address, signature: $signature}) {
    message
    success
    token
    user {
      ...user
    }
  }
}
    ${UserFragmentDoc}`;
export const LogoutDocument = gql`
    mutation logout {
  logout {
    message
    success
  }
}
    `;
export const RefreshTokenDocument = gql`
    mutation refreshToken {
  refreshToken {
    message
    success
    token
  }
}
    `;
export const SetBioForRunnerDocument = gql`
    mutation setBioForRunner($runnerId: Int!, $content: [RichTextBlockInput!]!) {
  setBioForRunner(runnerId: $runnerId, content: $content) {
    message
    success
  }
}
    `;
export const SyncDiscordRolesDocument = gql`
    mutation syncDiscordRoles {
  syncDiscordRoles {
    message
    success
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    currentUser(variables?: CurrentUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CurrentUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CurrentUserQuery>(CurrentUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'currentUser');
    },
    disconnectDiscordAccount(variables?: DisconnectDiscordAccountMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DisconnectDiscordAccountMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DisconnectDiscordAccountMutation>(DisconnectDiscordAccountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'disconnectDiscordAccount');
    },
    getAllTraits(variables?: GetAllTraitsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllTraitsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllTraitsQuery>(GetAllTraitsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllTraits');
    },
    getBioForRunner(variables: GetBioForRunnerQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBioForRunnerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBioForRunnerQuery>(GetBioForRunnerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBioForRunner');
    },
    getRunnerById(variables: GetRunnerByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRunnerByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRunnerByIdQuery>(GetRunnerByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRunnerById');
    },
    getRunners(variables?: GetRunnersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRunnersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRunnersQuery>(GetRunnersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRunners');
    },
    getRunnersByOwner(variables: GetRunnersByOwnerQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRunnersByOwnerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRunnersByOwnerQuery>(GetRunnersByOwnerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRunnersByOwner');
    },
    linkDiscordAccount(variables: LinkDiscordAccountMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LinkDiscordAccountMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LinkDiscordAccountMutation>(LinkDiscordAccountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'linkDiscordAccount');
    },
    login(variables: LoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutation>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'login');
    },
    logout(variables?: LogoutMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LogoutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LogoutMutation>(LogoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'logout');
    },
    refreshToken(variables?: RefreshTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RefreshTokenMutation>(RefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'refreshToken');
    },
    setBioForRunner(variables: SetBioForRunnerMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SetBioForRunnerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetBioForRunnerMutation>(SetBioForRunnerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setBioForRunner');
    },
    syncDiscordRoles(variables?: SyncDiscordRolesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SyncDiscordRolesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SyncDiscordRolesMutation>(SyncDiscordRolesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'syncDiscordRoles');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;