import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Flex, NavLink } from 'theme-ui';
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
    <Flex
      as="ul"
      role="list"
      className={cx('website-switcher', className)}
      sx={{ variant: 'lists.plain', justifyContent: 'flex-end' }}
      {...props}
    >
      {locales.map(locale => {
        const isCurrentWebsite = locale === currentLocale;
        return (
          <li key={locale} className="website-switcher__item">
            <NavLink
              href={makeLink(locale)}
              className="website-switcher__link"
              sx={{
                marginRight: [3, 3],
                color: isCurrentWebsite ? 'primary' : undefined,
                '&:hover': isCurrentWebsite ? { color: 'primary', borderColor: 'transparent' } : undefined
              }}
            >
              {locale.toUpperCase()}
            </NavLink>
          </li>
        );
      })}
    </Flex>
  );
};

export default WebsiteSwitcher;
