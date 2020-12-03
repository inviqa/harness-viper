import '@testing-library/jest-dom';
import { TransProps } from 'react-i18next';

export const mockPush = jest.fn();

jest.mock('../config/default');
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
    t: (text: string, values: Record<string, unknown>) =>
      `${text}${values ? ` ${Object.values(values).join(',')}` : ''}`,
    i18n: { language: 'cimode' }
  }),
  Trans: ({ i18nKey, ...props }: TransProps) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
    return require('react').createElement('span', props, i18nKey);
  }
}));
