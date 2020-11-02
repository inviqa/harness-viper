/** @jsx jsx */
import { FunctionComponent, useState, forwardRef, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Flex, Box, IconButton, Link as ThemeLink, jsx, useThemeUI, Badge } from 'theme-ui';
import {
  CgMenu as MenuIcon,
  CgClose as CloseIcon,
  CgSearch as SearchIcon,
  CgShoppingBag as CartIcon
} from 'react-icons/cg';
import { FocusOn } from 'react-focus-on';
import cx from 'classnames';
import {
  StyledMenu,
  styledMenuOverrides,
  MenuOverrides,
  StyledSearchForm,
  styledSearchFormOverrides,
  SearchFormOverrides
} from '@inviqa/viper-ui';
import { useReactiveVar } from '@apollo/client';
import { useTranslation, Link, Router } from '~lib/createI18n';
import useBreakpoint from '~hooks/useBreakpoint';
import { cartIdVar } from '~hooks/cart';
import { useGetCartLazyQuery, useGetMenuQuery } from '~hooks/apollo';
import { isMiniCartVisibleVar } from '~lib/cache';
import InviqaLogo from '../../atoms/Icons/InviqaLogo';
import WebsiteSwitcher from '../../molecules/WebsiteSwitcher/WebsiteSwitcher';
import SideSheet from '../../templates/SideSheet/SideSheet';
import Cart from '../Cart/Cart';
import Messages from '../../molecules/Messages/Messages';

const { Link: DefaultMenuLink } = styledMenuOverrides;
const menuOverrides: MenuOverrides = {
  Link: forwardRef(({ href, ...props }, ref) => (
    <Link href="/[...all]" as={href} passHref>
      <DefaultMenuLink ref={ref} {...props} />
    </Link>
  ))
};

const { Button, Input } = styledSearchFormOverrides;

const Header: FunctionComponent = () => {
  const router = useRouter();
  const { theme } = useThemeUI();
  const { t } = useTranslation(['common', 'commerce']);
  const isMiniCartVisible = useReactiveVar(isMiniCartVisibleVar);
  const cartId = useReactiveVar(cartIdVar);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const isLargeFormat = useBreakpoint(String(theme.breakpoints?.[0]));
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

  const searchFormOverrides: SearchFormOverrides = useMemo(
    () => ({
      Input: props => <Input aria-label={t('Search.Label')} placeholder={t('Search.Placeholder')} {...props} />,
      Button: props => <Button {...props}>{t('Search.Submit')}</Button>
    }),
    [t]
  );

  return (
    <Container
      className="header"
      as="header"
      sx={{ position: 'sticky', top: 0, py: [2, 3], backgroundColor: 'background', zIndex: 1 }}
    >
      <FocusOn enabled={!isLargeFormat && isMenuVisible} returnFocus>
        <Flex sx={{ flexWrap: ['wrap', 'nowrap'], alignItems: 'center', justifyContent: ['space-between', 'start'] }}>
          <Link href="/" as="/" passHref>
            <a className="header__logo" aria-label={t('Menu.Home')} sx={{ mr: [null, 4] }}>
              <InviqaLogo sx={{ width: [75, 90], height: [75, 90] }} />
            </a>
          </Link>

          <Box as="nav" className="header__nav" sx={{ marginRight: [null, 'auto'] }}>
            <IconButton
              sx={{ display: ['block', 'none'] }}
              variant="header"
              onClick={() => setMenuVisible(current => !current)}
              className={cx('header__nav-toggle', { 'header__nav-toggle--is-open': isMenuVisible })}
              aria-label={t('Menu.Toggle')}
              {...(isLargeFormat ? {} : { 'aria-haspopup': true, 'aria-expanded': isMenuVisible })}
            >
              {isMenuVisible ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            {!!menuResult?.menu && (
              <StyledMenu
                name={menuResult.menu.name}
                items={menuResult.menu.items}
                className="header__nav-menu"
                aria-hidden={!isLargeFormat && !isMenuVisible}
                overrides={menuOverrides}
                sx={{
                  position: ['absolute', 'static'],
                  top: '100%',
                  right: 0,
                  bottom: 0,
                  left: 0,
                  overflow: ['auto', 'visible'],
                  backgroundColor: 'background',
                  height: [isMenuVisible ? 'calc(100vh - (75px + 1rem))' : 0, 'auto'],
                  px: 4,
                  fontSize: [5, 2],
                  textAlign: ['center', 'left'],
                  visibility: [isMenuVisible ? 'visible' : 'hidden', 'visible'],
                  zIndex: isMenuVisible ? ['11', 'auto'] : 'auto'
                }}
              />
            )}
          </Box>

          <IconButton
            variant="header"
            onClick={() => setSearchVisible(current => !current)}
            className={cx('header__search-toggle', { 'header__search-toggle--is-open': isSearchVisible })}
            aria-label={t('Search.Toggle')}
            aria-haspopup
            aria-expanded={isSearchVisible}
          >
            {isSearchVisible ? <CloseIcon /> : <SearchIcon />}
          </IconButton>
          <Box
            sx={{
              variant: 'layout.container',
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: 'background',
              visibility: isSearchVisible ? 'visible' : 'hidden',
              zIndex: isSearchVisible ? '11' : 'auto'
            }}
          >
            <StyledSearchForm
              role="search"
              aria-hidden={!isSearchVisible}
              sx={{ variant: 'panels.secondary', py: 4 }}
              overrides={searchFormOverrides}
              onSubmit={value => {
                Router.push(`/search?q=${encodeURIComponent(value)}`);
                setSearchVisible(false);
              }}
            />
          </Box>

          <IconButton
            variant="header"
            onClick={() => isMiniCartVisibleVar(!isMiniCartVisible)}
            className={cx('header__cart-toggle', { 'header__cart-toggle--is-open': isMiniCartVisible })}
            aria-label={t('commerce:Cart.Toggle')}
            aria-haspopup
            aria-expanded={isMiniCartVisible}
            sx={{ position: 'relative' }}
          >
            {isMiniCartVisible ? (
              <CloseIcon />
            ) : (
              <>
                <CartIcon />
                <Badge sx={{ position: 'absolute', right: 1, bottom: 1 }}>{numberOfItems}</Badge>
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
            <Cart sx={{ p: 3, backgroundColor: 'muted' }} />
            <Link href="/cart" passHref>
              <ThemeLink sx={{ display: 'block', mt: 3, textAlign: 'center' }}>{t('commerce:Cart.View')}</ThemeLink>
            </Link>
          </SideSheet>

          <WebsiteSwitcher sx={{ width: ['100%', 'auto'], marginLeft: [null, 2] }} />
        </Flex>
      </FocusOn>

      <Messages sx={{ marginTop: 3 }} />
    </Container>
  );
};

export default Header;
