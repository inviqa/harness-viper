module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: ['@inviqa/viper-storybook-preset'],
  // compatibility with dompurify
  webpackFinal: async config => ({
    ...config,
    node: {
      fs: 'empty',
      child_process: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /i18next-fs-backend/,
          use: 'null-loader'
        },
        {
          test: /i18next-http-middleware/,
          use: 'null-loader'
        }
      ]
    }
  })
};
