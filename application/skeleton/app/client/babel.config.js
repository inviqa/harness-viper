/* eslint-disable @typescript-eslint/no-var-requires */
const pathAliases = require('./tsconfig.json').compilerOptions.paths;

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: Object.keys(pathAliases).reduce(
          (aliases, aliasKey) => ({
            ...aliases,
            [aliasKey.replace('/*', '')]: pathAliases[aliasKey][0].replace('/*', '')
          }),
          {}
        )
      }
    ]
  ]
};
