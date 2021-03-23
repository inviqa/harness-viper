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
    '/types/',
    '/storybook-static/',
    '/src/pages/',
    '/src/hooks/apollo/'
  ],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40
    }
  },
  testPathIgnorePatterns: [...config.testPathIgnorePatterns, '<rootDir>/.next/', '<rootDir>/cypress/']
};
