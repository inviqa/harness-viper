// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
const config = require('@inviqa/viper-preset-jest-react'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  preset: '@inviqa/viper-preset-jest-react',
  coveragePathIgnorePatterns: [
    ...config.coveragePathIgnorePatterns,
    'next.config.js',
    'babel.config.js',
    'next-env.d.ts',
    '.next',
    '/cypress/',
    '/types/',
    '/src/pages/',
    '/src/hooks/apollo/'
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  testPathIgnorePatterns: [...config.testPathIgnorePatterns, '<rootDir>/.next/', '<rootDir>/cypress/']
};
