/* istanbul ignore file */

import React, { ReactElement } from 'react';
import { RenderOptions, render } from '@testing-library/react';
import { InMemoryCache } from '@apollo/client';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { apolloCacheConfig } from '~lib/apolloCacheConfig';

export const when = (scenario: string, callback: () => void) => describe(`When: ${scenario}`, callback);
export const then = (expectedResult: string, callback: () => void) => it(`Then: ${expectedResult}`, callback);

type Options = Omit<RenderOptions, 'queries'> & {
  mocks: MockedResponse[];
};

const defaultOptions: Options = {
  mocks: []
};

const createProviders = (options: Options, cache: InMemoryCache) => (props: unknown) => {
  return <MockedProvider cache={cache} mocks={options?.mocks ?? []} {...props} />;
};

export const renderWithProviders = (ui: ReactElement<unknown>, options: Partial<Options> = {}) => {
  const mergedOptions = { ...defaultOptions, ...options };
  const cache = new InMemoryCache(apolloCacheConfig);
  const wrapper = createProviders(mergedOptions, cache);
  return render(ui, { wrapper, ...mergedOptions });
};

export const setupMatchMediaMock = (matches = false): { reset: () => void } => {
  const originalMatchMedia = window.matchMedia;
  window.matchMedia = (): {
    matches: boolean;
    addListener: () => void;
    removeListener: () => void;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  } => ({
    matches,
    addListener: jest.fn(),
    removeListener: jest.fn()
  });

  const reset = (): void => {
    window.matchMedia = originalMatchMedia;
  };

  return {
    reset
  };
};
