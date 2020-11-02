import React from 'react';
import { waitFor } from '@testing-library/react';
import { renderWithProviders, setupMatchMediaMock } from '~test-helpers';
import data from './mock.json';
import { PageQueryResult } from '../../../hooks/page';
import CategoryPage from './CategoryPage';
import { getProductsMock } from '~hooks/apollo/mocks/GetProducts';

describe(CategoryPage, () => {
  describe('When: product list page is rendered', () => {
    const setup = () => {
      setupMatchMediaMock();
      return renderWithProviders(<CategoryPage queryResult={({ data } as unknown) as PageQueryResult} />, {
        mocks: [
          getProductsMock({
            filters: [{ name: 'category_id', value: { eq: data.routeByPath.page.id } }],
            pagination: { offset: 0, limit: 12 }
          })
        ]
      });
    };

    it('Then: it renders the main body', async () => {
      const { getByRole } = setup();
      await waitFor(() => getByRole('main'));
      expect(getByRole('main')).toBeInTheDocument();
    });

    it('And: it renders the category name', () => {
      const { getByText } = setup();
      expect(getByText('Watches')).toBeInTheDocument();
    });

    it('And: it renders the category description', () => {
      const { getByText } = setup();
      expect(getByText('Some description of why you would want to buy a watch').tagName).toBe('P');
    });
  });
});
