import { ApolloClient, ApolloLink, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import type { AppContext } from 'next/app';
import { NextRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { clientSchema } from '../typedef/clientSchema';
import config from '../../config/default';
import { cache } from './cache';
import { websiteConfig } from '../../websiteConfig';

export default function createApolloClient(
  initialState: NormalizedCacheObject | undefined = {},
  router: NextRouter,
  ctx?: AppContext
) {
  const configForCurrentWebsite = websiteConfig.find(({ id }) => id === router.locale);

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
    cache: cache.restore(initialState),
    typeDefs: clientSchema
  });
}
