import NextI18Next from 'next-i18next';
import getConfig from 'next/config';
import path from 'path';

const { publicRuntimeConfig } = getConfig();

const i18nInstance = new NextI18Next({
  browserLanguageDetection: false,
  serverLanguageDetection: false,
  defaultLanguage: publicRuntimeConfig.defaultLocale,
  otherLanguages: Object.keys(publicRuntimeConfig.localeSubpaths),
  localeSubpaths: publicRuntimeConfig.localeSubpaths,
  localePath: path.resolve('./public/locales'),
  debug: process.env.NODE_ENV === 'development',
  saveMissing: process.env.NODE_ENV === 'development'
});

export const { useTranslation, Link, Router, Trans } = i18nInstance;

export default i18nInstance;
