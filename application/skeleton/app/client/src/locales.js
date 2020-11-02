/* istanbul ignore file */
/* eslint-disable @typescript-eslint/no-var-requires */
const { websiteConfig } = require('../websiteConfig');

module.exports = {
  defaultLocale: 'en_GB',
  availableLocales: websiteConfig.reduce(
    (locales, config) => ({
      ...locales,
      [config.locale]: config.baseUrlPath.replace(/\//g, '')
    }),
    {}
  )
};
