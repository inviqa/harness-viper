import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Flex, NavLink } from 'theme-ui';
import cx from 'classnames';
import useWebsiteSwitcher from '~hooks/useWebsiteSwitcher';

const WebsiteSwitcher: FunctionComponent<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  const { availableWebsites, currentWebsite } = useWebsiteSwitcher();

  return (
    <Flex
      as="ul"
      role="list"
      className={cx('website-switcher', className)}
      sx={{ variant: 'lists.plain', justifyContent: 'flex-end' }}
      {...props}
    >
      {availableWebsites.map(({ website, url }) => {
        const isCurrentWebsite = website === currentWebsite?.id;
        return (
          <li key={website} className="website-switcher__item">
            <NavLink
              href={url}
              className="website-switcher__link"
              sx={{
                marginRight: [3, 3],
                color: isCurrentWebsite ? 'primary' : undefined,
                '&:hover': isCurrentWebsite ? { color: 'primary', borderColor: 'transparent' } : undefined
              }}
            >
              {website.toUpperCase()}
            </NavLink>
          </li>
        );
      })}
    </Flex>
  );
};

export default WebsiteSwitcher;
