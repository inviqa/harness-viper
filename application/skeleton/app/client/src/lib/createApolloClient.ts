import { ApolloClient, ApolloLink, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import config from '../../config/default';
import { cache } from './cache';
import { Router } from './createI18n';
import { websiteConfig } from '../../websiteConfig';
import { getWebsiteIdFromPath } from './website';

export default function createApolloClient(initialState: NormalizedCacheObject, ctx?: NextPageContext) {
  // ctx is only defined on SSR and Router can only be used in CSR
  const basePath = getWebsiteIdFromPath(ctx?.asPath ?? Router.asPath);
  const configForCurrentWebsite = websiteConfig.find(({ baseUrlPath }) => baseUrlPath === `/${basePath}/`);

  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: ApolloLink.from([
      setContext((_, { headers }) => ({
        headers: {
          ...headers,
          'Content-Language': configForCurrentWebsite?.locale.replace('_', '-'),
          'Viper-Website': configForCurrentWebsite?.id,
          'Viper-Currency': configForCurrentWebsite?.currency
        }
      })),
      new HttpLink({
        uri: typeof window === 'undefined' ? config.gateway.ssr : config.gateway.csr,
        fetch
      })
    ]),
    cache: cache.restore(initialState)
  });
}
