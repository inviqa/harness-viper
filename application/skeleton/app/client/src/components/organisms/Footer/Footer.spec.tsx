import React from 'react';
import { waitFor } from '@testing-library/react';
import { renderWithProviders } from '~test-helpers';
import Footer from './Footer';
import { getMenuMock } from '~hooks/apollo/mocks/GetMenu';

describe(Footer, () => {
  describe('When: the footer is rendered', () => {
    it('Then: it uses a semantic element', () => {
      const { getByRole } = renderWithProviders(<Footer />, {
        mocks: [getMenuMock({ name: 'footer' })]
      });

      expect(getByRole('contentinfo').tagName).toBe('FOOTER');
    });

    it('And: the menu is rendered', async () => {
      const { getByText } = renderWithProviders(<Footer />, {
        mocks: [getMenuMock({ name: 'footer' })]
      });

      await waitFor(() => expect(getByText('Menu item 1')).toBeInTheDocument());
    });
  });
});
