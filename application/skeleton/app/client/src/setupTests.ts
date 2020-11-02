import '@testing-library/jest-dom';

jest.mock('./lib/createI18n');
jest.mock('../config/default');
jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    localeSubpaths: { cimode: 'cimode' },
    defaultLocale: 'cimode'
  }
}));
jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/en/test',
    events: {
      on: jest.fn(),
      off: jest.fn()
    }
  })
}));
