import React, { FunctionComponent, HTMLAttributes } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';

// TODO: actual links should probably come from services - this will break with translated urls
const WebsiteSwitcher: FunctionComponent<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  const { locale: currentLocale, locales, defaultLocale, asPath } = useRouter();

  const makeLink = (locale: string) => (locale === defaultLocale ? asPath : `/${locale}${asPath}`);

  if (!locales || locales.length === 1) {
    return null;
  }

  return (
    <ul className={cx('website-switcher', 'flex', 'justify-end', className)} {...props}>
      {locales.map(locale => {
        const isCurrentWebsite = locale === currentLocale;
        return (
          <li key={locale} className="website-switcher__item">
            <a
              href={makeLink(locale)}
              className={`website-switcher__link ml-3 text-base ${
                !isCurrentWebsite ? 'text-black hover:text-gray-600 hover:border-transparent' : ''
              }
              `}
            >
              {locale.toUpperCase()}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default WebsiteSwitcher;
