import React from 'react';
import { renderWithProviders, setupMatchMediaMock } from '~test-helpers';
import ProductPage from './ProductPage';
import data from './mock.json';
import { PageQueryResult } from '../../../hooks/page';

describe(ProductPage, () => {
  describe('When: product page is rendered', () => {
    const setup = () => {
      setupMatchMediaMock();
      return renderWithProviders(<ProductPage queryResult={({ data } as unknown) as PageQueryResult} />, { mocks: [] });
    };

    it('Then: it renders the provided data', () => {
      const { getByText } = setup();
      expect(getByText('Rapha Sports Short')).toBeInTheDocument();
    });
  });
});
