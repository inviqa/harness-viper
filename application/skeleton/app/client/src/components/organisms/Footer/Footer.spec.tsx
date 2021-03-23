import React from 'react';
import { waitFor, screen } from '@testing-library/react';
import { renderWithProviders } from '~test-helpers';
import Footer from './Footer';
import { useGetMenuQuery } from '~hooks/apollo';
import { defaultMenu } from '~hooks/apollo/mocks/GetMenu';

jest.mock('~hooks/apollo', () => {
  const actual = jest.requireActual('../../../hooks/apollo');
  return {
    ...actual,
    useGetMenuQuery: jest.fn()
  };
});

describe(Footer, () => {
  describe('When: the footer is rendered', () => {
    beforeEach(() => {
      (useGetMenuQuery as jest.Mock).mockImplementation(() => ({
        data: {
          menu: defaultMenu
        }
      }));
      renderWithProviders(<Footer />);
    });

    it('Then: it uses a semantic element', () => {
      expect(screen.getByRole('contentinfo').tagName).toBe('FOOTER');
    });

    it('And: the menu is rendered', async () => {
      await waitFor(() => expect(screen.getByText('Menu item 1')).toBeInTheDocument());
    });
  });
});
