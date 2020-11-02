import { render } from '@testing-library/react';
import React from 'react';
import WebsiteSwitcher from './WebsiteSwitcher';

describe(WebsiteSwitcher, () => {
  describe('When: website switcher is rendered', () => {
    it('Then: it renders a link to each website', () => {
      const { getByText } = render(<WebsiteSwitcher />);
      expect(getByText('EN')).toHaveAttribute('href', '/en/test');
      expect(getByText('DE')).toHaveAttribute('href', '/de/test');
    });
  });
});
