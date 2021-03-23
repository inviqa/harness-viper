import { ApolloClientOptions, ApolloLink, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'isomorphic-unfetch';
import { createApolloCache } from '@inviqa/viper-nextjs';
import { clientSchema } from '../typedef/clientSchema';
import config from '../../config/default';
import { apolloCacheConfig } from './apolloCacheConfig';
import { websiteConfig } from '../../websiteConfig';

export default function createApolloClientConfig(locale: string): ApolloClientOptions<NormalizedCacheObject> {
  const configForCurrentWebsite = websiteConfig.find(({ id }) => id === locale);

  return {
    link: ApolloLink.from([
      setContext((_, { headers }) => ({
        headers: {
          ...headers,
          'Content-Language': configForCurrentWebsite?.locale.replace('_', '-'),
          'Viper-Website': configForCurrentWebsite?.id,
          'Viper-Currency': configForCurrentWebsite?.currency
        }
      })),
      // TODO: implement when gateway can be put on a CDN
      // createPersistedQueryLink({ sha256, useGETForHashedQueries: true }),
      new HttpLink({
        uri: typeof window === 'undefined' ? config.gateway.ssr : config.gateway.csr,
        fetch
      })
    ]),
    cache: createApolloCache(apolloCacheConfig),
    typeDefs: clientSchema
  };
}
