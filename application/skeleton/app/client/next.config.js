/* eslint-disable @typescript-eslint/no-var-requires, no-param-reassign */
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withTranspileModules = require('next-transpile-modules')([
  '@inviqa/viper-ui',
  '@inviqa/viper-nextjs',
  '@inviqa/viper-react-hooks'
]);
const runtimeCaching = require('./src/cache');
const { websiteConfig } = require('./websiteConfig');

module.exports = withTranspileModules(
  withBundleAnalyzer(
    withPWA({
      pwa: {
        dest: 'public',
        runtimeCaching
      },
      i18n: {
        defaultLocale: websiteConfig[0].id,
        locales: websiteConfig.map(({ id }) => id)
      },
      webpack: (config, { isServer }) => {
        config.node = {
          fs: 'empty'
        };

        // TODO: it's simpler to leave this for now - plan to remove when we move to getServerSideProps when
        // translations will only be fetched server-side
        if (!isServer) {
          config.module.rules.push({
            test: /i18next-fs-backend/,
            use: 'null-loader'
          });
        }

        return config;
      }
    })
  )
);
