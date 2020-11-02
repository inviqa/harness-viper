/* istanbul ignore file */

import React, { ReactElement } from 'react';
import { RenderOptions, render } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { ThemeProvider } from 'theme-ui';
import { defaultTheme } from '@inviqa/viper-ui';
import { createCache } from '~lib/cache';

export const when = (scenario: string, callback: () => void) => describe(`When: ${scenario}`, callback);
export const then = (expectedResult: string, callback: () => void) => it(`Then: ${expectedResult}`, callback);

type Options = Omit<RenderOptions, 'queries'> & {
  mocks: MockedResponse[];
};

const createProviders = (options: Options) => (props: unknown) => {
  const cache = createCache();
  return (
    <ThemeProvider theme={defaultTheme}>
      <MockedProvider cache={cache} mocks={options?.mocks ?? []} {...props} />
    </ThemeProvider>
  );
};

export const renderWithProviders = (ui: ReactElement<unknown>, options: Options) => {
  const wrapper = createProviders(options);
  return render(ui, { wrapper, ...options });
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
