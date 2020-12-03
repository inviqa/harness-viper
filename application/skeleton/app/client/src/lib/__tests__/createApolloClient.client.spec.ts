import { ApolloLink, InMemoryCache } from '@apollo/client';
import { NextRouter } from 'next/router';
import createApolloClient from '../createApolloClient';

describe(createApolloClient, () => {
  describe('Given: initial state and client environment', () => {
    const initialState = { some: { apollo: 'state' } };
    const client = createApolloClient(initialState, { locale: 'cimode' } as NextRouter);

    it('Then: it populates cache', () => {
      expect(client.cache).toBeInstanceOf(InMemoryCache);
      expect(client.cache.extract()).toStrictEqual(initialState);
    });

    it('Then: it populates the link', () => {
      expect(client.link).toBeInstanceOf(ApolloLink);
    });
  });
});
