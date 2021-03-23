import React, {
  FunctionComponent,
  useState,
  useEffect,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  HTMLAttributes
} from 'react';
import { useRouter } from 'next/router';
import {
  CgMenu as MenuIcon,
  CgClose as CloseIcon,
  CgSearch as SearchIcon,
  CgShoppingBag as CartIcon
} from 'react-icons/cg';
import { FocusOn } from 'react-focus-on';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import cx from 'classnames';
import { Menu, SearchForm, Messages, SideSheet, Badge } from '@inviqa/viper-ui';
import { useBreakpoint } from '@inviqa/viper-react-hooks';
import { useReactiveVar } from '@apollo/client';
import { cartIdVar } from '~hooks/cart';
import { useGetCartLazyQuery, useGetMenuQuery } from '~hooks/apollo';
import { isMiniCartVisibleVar } from '~lib/apolloCacheConfig';
import InviqaLogo from '../../atoms/Icons/InviqaLogo';
import WebsiteSwitcher from '../../molecules/WebsiteSwitcher/WebsiteSwitcher';
import Cart from '../Cart/Cart';
import tailwindConfig from '../../../../tailwind.config';

const IconButton: ForwardRefExoticComponent<
  HTMLAttributes<HTMLButtonElement> & RefAttributes<HTMLButtonElement>
> = forwardRef(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={cx(className, 'block w-10 h-10 bg-transparent p-0 m-0 border-0')}
    {...props}
  >
    {children}
  </button>
));

const Header: FunctionComponent = () => {
  const router = useRouter();
  const { theme } = tailwindConfig;
  const { t } = useTranslation(['common', 'commerce']);
  const isMiniCartVisible = useReactiveVar(isMiniCartVisibleVar);
  const cartId = useReactiveVar(cartIdVar);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const isLargeFormat = useBreakpoint(String(theme.screens.md));
  const [getCart, { data: cartResult }] = useGetCartLazyQuery();
  const { data: menuResult } = useGetMenuQuery({ variables: { name: 'main' } });
  const numberOfItems = cartResult?.cart.numberOfItems;

  useEffect(() => {
    const handleRouteChange = () => {
      setMenuVisible(false);
      setSearchVisible(false);
      isMiniCartVisibleVar(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (cartId) getCart({ variables: { cartId } });
  }, [cartId, getCart]);

  return (
    <header className="header sticky top-0 py-2 md:py-3 bg-white z-header">
      <FocusOn enabled={!isLargeFormat && isMenuVisible} returnFocus>
        <div className="container relative flex flex-wrap md:flex-nowrap items-center justify-between md:justify-start">
          <Link href="/" passHref>
            <a className="header__logo md:mr-4" aria-label={t('Menu.Home')}>
              <InviqaLogo className="w-18	md:w-24" />
            </a>
          </Link>

          <nav className="header__nav md:mr-auto">
            <IconButton
              onClick={() => setMenuVisible(current => !current)}
              className={cx('header__nav-toggle md:hidden', {
                'header__nav-toggle--is-open': isMenuVisible
              })}
              aria-label={t('Menu.Toggle')}
              {...(isLargeFormat ? {} : { 'aria-haspopup': true, 'aria-expanded': isMenuVisible })}
            >
              {isMenuVisible ? <CloseIcon className="w-full h-full m-0" /> : <MenuIcon className="w-full h-full m-0" />}
            </IconButton>
            {!!menuResult?.menu && (
              <Menu
                name={menuResult.menu.name}
                items={menuResult.menu.items}
                className={cx(
                  'header__nav-menu',
                  'absolute md:static',
                  'inset-0 top-full',
                  'overflow-auto md:overflow-visible',
                  'bg-transparent p-4',
                  'text-center md:text-left',
                  'transition opacity-0 duration-500 md:transition-none md:opacity-100',
                  {
                    'header__nav-menu--visible z-menu opacity-100': isMenuVisible,
                    'invisible md:visible': !isMenuVisible
                  },
                  'md:z-auto',
                  'md:h-auto'
                )}
                aria-hidden={!isLargeFormat && !isMenuVisible}
              />
            )}
          </nav>

          <IconButton
            className={cx('header__search-toggle md:mr-4', {
              'header__search-toggle--is-open': isSearchVisible
            })}
            onClick={() => setSearchVisible(current => !current)}
            aria-label={t('Search.Toggle')}
            aria-haspopup
            aria-expanded={isSearchVisible}
          >
            {isSearchVisible ? (
              <CloseIcon className="w-full h-full m-0" />
            ) : (
              <SearchIcon className="w-full h-full m-0" />
            )}
          </IconButton>
          <div
            className={cx('container absolute top-full left-0 w-full bg-transparent', {
              invisible: !isSearchVisible,
              'z-menu': !isSearchVisible
            })}
          >
            <div
              aria-hidden={!isSearchVisible}
              className={cx('relative p-4 transition opacity-0 duration-500 bg-brand-primary rounded-lg', {
                'opacity-100': isSearchVisible
              })}
              role="search"
            >
              <SearchForm
                onSubmit={value => {
                  router.push(`/search?q=${encodeURIComponent(value)}`);
                  setSearchVisible(false);
                }}
              />
            </div>
          </div>

          <IconButton
            className={cx('header__cart-toggle block relative', {
              'header__cart-toggle--is-open': isMiniCartVisible
            })}
            onClick={() => isMiniCartVisibleVar(!isMiniCartVisible)}
            aria-label={t('commerce:Cart.Toggle')}
            aria-haspopup
            aria-expanded={isMiniCartVisible}
          >
            {isMiniCartVisible ? (
              <CloseIcon className="w-full h-full m-0" />
            ) : (
              <>
                <CartIcon className="w-full h-full m-0" />
                <Badge className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4">
                  {numberOfItems}
                </Badge>
              </>
            )}
          </IconButton>
          <SideSheet
            isVisible={isMiniCartVisible}
            dismissHandler={() => {
              isMiniCartVisibleVar(false);
            }}
            dismissLabel={t('commerce:Cart.Close')}
            className="header__cart"
          >
            <Messages className="m-3" location="minicart" />
            <Cart className="p-3 bg-white" />
            <Link href="/cart" passHref>
              <a className="block mt-3 text-center">{t('commerce:Cart.View')}</a>
            </Link>
          </SideSheet>

          <WebsiteSwitcher className="absolute -top-2 right-4 md:right-16" />
        </div>
      </FocusOn>
      <div className="container">
        <Messages className="mt-3" />
      </div>
    </header>
  );
};

export default Header;
