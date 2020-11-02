/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const withTranspileModules = require('next-transpile-modules')(['@inviqa/viper-ui', '@inviqa/viper-ui-commerce']);
const runtimeCaching = require('./src/cache');
const locales = require('./src/locales');

const { defaultLocale, availableLocales: localeSubpaths } = locales;

module.exports = withTranspileModules(
  withBundleAnalyzer(
    withPWA({
      publicRuntimeConfig: {
        localeSubpaths,
        defaultLocale
      },
      pwa: {
        dest: 'public',
        runtimeCaching
      },
      rewrites: async () => nextI18NextRewrites(localeSubpaths)
    })
  )
);
