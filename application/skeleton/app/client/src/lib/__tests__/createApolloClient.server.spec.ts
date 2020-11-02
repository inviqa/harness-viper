/**
 * @jest-environment node
 */
import { NextPageContext } from 'next';
import { InMemoryCache, ApolloLink } from '@apollo/client';
import createApolloClient from '../createApolloClient';

describe(createApolloClient, () => {
  describe('Given: initial state and server environment', () => {
    const initialState = { some: { apollo: 'state' } };
    const client = createApolloClient(initialState, { asPath: '/en/' } as NextPageContext);

    it('Then: it populates cache', () => {
      expect(client.cache).toBeInstanceOf(InMemoryCache);
      expect(client.cache.extract()).toStrictEqual(initialState);
    });

    it('Then: it populates the link', () => {
      expect(client.link).toBeInstanceOf(ApolloLink);
    });
  });
});
