import { useRouter } from 'next/router';
import locales from '../locales';
import useWebsiteConfig from './useWebsiteConfig';

export type WebsiteSwitcherWebsite = {
  locale: string;
  website: string;
  url: string;
};

// TODO: url used for website switcher should probably come from page query
function useWebsiteSwitcher() {
  const { asPath } = useRouter();
  const currentWebsite = useWebsiteConfig();
  const availableLocales = locales.availableLocales as { [key: string]: string };
  const availableWebsites = Object.keys(availableLocales).reduce((websites, locale) => {
    const website = availableLocales[locale];
    return [
      ...websites,
      { locale, website: availableLocales[locale], url: asPath.replace(`/${currentWebsite?.id}`, `/${website}`) }
    ];
  }, [] as WebsiteSwitcherWebsite[]);

  return { availableWebsites, currentWebsite };
}

export default useWebsiteSwitcher;
