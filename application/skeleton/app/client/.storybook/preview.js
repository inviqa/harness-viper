import { setConfig } from 'next/config';
import { withI18n, createI18nToolbar } from '@inviqa/viper-storybook-addons';
import { storybook } from '@inviqa/viper-ui';
import withNextRouter from './decorators/withNextRouter';
import withCartId from './decorators/withCartId';
import locales from '../src/locales';

setConfig({
  publicRuntimeConfig: {
    localeSubpaths: locales.availableLocales,
    defaultLocale: locales.defaultLocale
  }
});

const {
  default: { i18n }
} = require('../src/lib/createI18n'); // eslint-disable-line @typescript-eslint/no-var-requires

export const decorators = [withI18n, withNextRouter, storybook.withTheme, withCartId];
export const parameters = {
  i18n: {
    i18nInstance: i18n
  }
};

export const globalTypes = {
  ...createI18nToolbar(locales)
};
