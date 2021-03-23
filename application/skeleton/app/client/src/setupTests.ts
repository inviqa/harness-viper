import '@testing-library/jest-dom';
import { FunctionComponent } from 'react';
import { TransProps } from 'react-i18next';

export const mockPush = jest.fn();

jest.mock('../config/default');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
jest.mock('next/link', (): FunctionComponent<any> => ({ children }) => children);
jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/test',
    locale: 'en',
    defaultLocale: 'en',
    locales: ['en', 'de'],
    push: mockPush,
    events: {
      on: jest.fn(),
      off: jest.fn()
    }
  })
}));
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (text: string | string[], { context: _context, ...values }: Record<string, unknown> = {}) =>
      `${Array.isArray(text) ? text[0] : text}${
        Object.values(values).length ? ` ${Object.values(values).join(',')}` : ''
      }`,
    i18n: { language: 'cimode' }
  }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Trans: ({ i18nKey, ...props }: TransProps<any>) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
    return require('react').createElement('span', props, i18nKey);
  }
}));
