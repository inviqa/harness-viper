import { withI18n, createI18nToolbar } from '@inviqa/viper-storybook-addons';
import { storybook } from '@inviqa/viper-ui';
import { createI18n } from '@inviqa/viper-nextjs';
import withNextRouter from './decorators/withNextRouter';
import withCartId from './decorators/withCartId';
import { websiteConfig } from '../websiteConfig';

const { i18n } = createI18n({
  locales: websiteConfig.map(({ id }) => id),
  additionalNamespaces: ['catalog', 'commerce']
});

export const decorators = [withI18n, withNextRouter, storybook.withTheme, withCartId];
export const parameters = {
  i18n: {
    i18nInstance: i18n
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
