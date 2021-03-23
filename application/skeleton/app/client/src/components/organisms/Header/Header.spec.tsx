import React from 'react';
import { act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { messagesVar } from '@inviqa/viper-react-hooks';
import { renderWithProviders, setupMatchMediaMock } from '~test-helpers';
import Header from './Header';
import { cartIdVar } from '~hooks/cart';
import { isMiniCartVisibleVar } from '~lib/apolloCacheConfig';
import { mockPush } from '../../../setupTests';
import { useGetCartLazyQuery, useGetMenuQuery } from '~hooks/apollo';
import { defaultMenu } from '~hooks/apollo/mocks/GetMenu';
import { defaultCart } from '~hooks/apollo/mocks/GetCart';

jest.mock('../Cart/Cart', () => () => null);

jest.mock('~hooks/apollo', () => {
  const actual = jest.requireActual('../../../hooks/apollo');
  return {
    ...actual,
    useGetMenuQuery: jest.fn(),
    useGetCartLazyQuery: jest.fn()
  };
});

describe(Header, () => {
  const setup = ({ isLargeFormat = false } = {}) => {
    setupMatchMediaMock(isLargeFormat);

    return renderWithProviders(<Header />);
  };

  beforeEach(() => {
    (useGetMenuQuery as jest.Mock).mockImplementation(() => ({
      data: {
        menu: defaultMenu
      }
    }));
    (useGetCartLazyQuery as jest.Mock).mockImplementation(() => [
      jest.fn(),
      {
        data: {
          cart: defaultCart
        }
      }
    ]);
    act(() => {
      isMiniCartVisibleVar(false);
      messagesVar([]);
    });
  });

  afterEach(() => {
    act(() => {
      isMiniCartVisibleVar(false);
      messagesVar([]);
      cartIdVar(null);
    });
  });

  describe('When: the header is rendered', () => {
    it('Then: it uses a semantic element', () => {
      const { getByRole } = setup();
      expect(getByRole('banner').tagName).toBe('HEADER');
    });

    it('And: it renders the site logo', () => {
      const { getByLabelText } = setup();
      expect(getByLabelText('Menu.Home')).toBeInTheDocument();
    });

    it('And: it renders a main navigation area', () => {
      const { getByRole } = setup();
      expect(getByRole('navigation')).toBeInTheDocument();
    });

    it('And: it renders the menu', async () => {
      const { getByText } = setup();
      await waitFor(() => expect(getByText('Menu item 1')).toBeInTheDocument());
    });

    it('And: it renders a menu toggle button', () => {
      const { getByLabelText } = setup();
      expect(getByLabelText('Menu.Toggle')).toBeInTheDocument();
      expect(getByLabelText('Menu.Toggle')).not.toHaveClass('header__nav-toggle--is-open');
    });

    it('And: it renders the search form', () => {
      const { getByRole } = setup();
      expect(getByRole('search', { hidden: true })).toBeInTheDocument();
    });

    it('And: it renders a search toggle button', () => {
      const { getByLabelText } = setup();
      expect(getByLabelText('Search.Toggle')).toBeInTheDocument();
      expect(getByLabelText('Search.Toggle')).not.toHaveClass('header__search-toggle--is-open');
    });

    it('And: it renders a cart toggle button', async () => {
      const { getByLabelText, getByText } = setup();
      act(() => {
        cartIdVar('mock-cart-id');
      });
      expect(getByLabelText('commerce:Cart.Toggle')).toBeInTheDocument();
      expect(getByLabelText('commerce:Cart.Toggle')).not.toHaveClass('header__cart-toggle--is-open');
      await waitFor(() => expect(getByText('8')).toBeInTheDocument());
    });

    describe('When: search is not open', () => {
      it('Then: the search form is hidden', () => {
        const { getByRole } = setup();
        expect(getByRole('search', { hidden: true })).toHaveAttribute('aria-hidden', 'true');
      });
    });

    describe('When: the search toggle button is clicked', () => {
      it('Then: the search form is in open state', () => {
        const { getByLabelText, getByRole } = setup();
        userEvent.click(getByLabelText('Search.Toggle'));
        expect(getByRole('search')).toHaveAttribute('aria-hidden', 'false');
      });
    });

    describe('When: the search form is submitted', () => {
      it('Then: it redirects user to search page', async () => {
        const { getByLabelText, getByText } = setup();
        userEvent.click(getByLabelText('Search.Toggle'));
        await userEvent.type(getByLabelText('Search.Label'), 'yellow shoes');
        userEvent.click(getByText('Search.Submit'));
        expect(mockPush).toHaveBeenCalledWith('/search?q=yellow%20shoes');
      });
    });

    describe('When: cart is not open', () => {
      it('Then: the cart sidesheet is hidden', () => {
        const { container } = setup();
        expect(container.querySelector('.header__cart')).toHaveAttribute('aria-hidden', 'true');
      });
    });

    describe('When: the cart toggle button is clicked', () => {
      it('Then: the cart sidesheet is in an open state', () => {
        const { getByLabelText, container } = setup();
        userEvent.click(getByLabelText('commerce:Cart.Toggle'));
        expect(container.querySelector('.header__cart')).toHaveAttribute('aria-hidden', 'false');
      });
    });
  });

  describe('When: component is rendered on a small screen', () => {
    describe('And: menu is not open', () => {
      it('Then: the menu is hidden', async () => {
        const { container } = setup();
        await waitFor(() => expect(container.querySelector('.header__nav-menu')).toBeInTheDocument());
        expect(container.querySelector('.header__nav-menu')).toHaveAttribute('aria-hidden', 'true');
      });
    });

    describe('And: the menu toggle button is clicked', () => {
      it('Then: the menu is in open state', async () => {
        const { getByLabelText, container } = setup();
        await waitFor(() => expect(container.querySelector('.header__nav-menu')).toBeInTheDocument());
        userEvent.click(getByLabelText('Menu.Toggle'));
        expect(container.querySelector('.header__nav-menu')).toHaveAttribute('aria-hidden', 'false');
      });
    });
  });

  describe('When: component is rendered on a large screen', () => {
    it('Then: the menu is always visible', async () => {
      const { container } = setup({ isLargeFormat: true });
      await waitFor(() => expect(container.querySelector('.header__nav-menu')).toBeInTheDocument());
      expect(container.querySelector('.header__nav-menu')).toHaveAttribute('aria-hidden', 'false');
    });
  });
});
