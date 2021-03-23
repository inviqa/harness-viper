import { withI18n, createI18nToolbar } from '@inviqa/viper-storybook-addons';
import { createI18nInstance } from '@inviqa/viper-nextjs';
import withNextRouter from './decorators/withNextRouter';
import withCartId from './decorators/withCartId';
import { websiteConfig } from '../websiteConfig';

import '../src/styles/main.css';

const { instance: i18nInstance } = createI18nInstance({
  /* eslint-disable global-require */
  resources: {
    en: {
      common: require('../public/locales/en/common.json'),
      catalog: require('../public/locales/en/catalog.json'),
      commerce: require('../public/locales/en/commerce.json')
    },
    de: {
      common: require('../public/locales/de/common.json'),
      catalog: require('../public/locales/de/catalog.json'),
      commerce: require('../public/locales/de/commerce.json')
    }
  }
  /* eslint-enable global-require */
});

export const decorators = [withI18n, withNextRouter, withCartId];
export const parameters = {
  i18n: {
    i18nInstance
  }
};

export const globalTypes = {
  ...createI18nToolbar({
    defaultLocale: websiteConfig[0].id,
    availableLocales: websiteConfig.reduce(
      (availableLocales, website) => ({ ...availableLocales, [website.id]: website.id }),
      {}
    )
  })
};
