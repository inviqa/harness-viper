import React from 'react';
import { QueryResult } from '@apollo/client';
import { renderWithProviders, setupMatchMediaMock } from '~test-helpers';
import CmsArticlePage from './CmsArticlePage';
import data from './mock.json';
import { GetPageByPathQuery, GetPageByPathQueryVariables } from '~hooks/apollo';

describe(CmsArticlePage, () => {
  describe('When: article page is rendered', () => {
    const setup = () => {
      setupMatchMediaMock();
      return renderWithProviders(
        <CmsArticlePage
          queryResult={({ data } as unknown) as QueryResult<GetPageByPathQuery, GetPageByPathQueryVariables>}
        />,
        { mocks: [] }
      );
    };

    it('Then: it renders the provided data', () => {
      const { getByText } = setup();
      expect(getByText('Dolore Dolus')).toBeInTheDocument();
    });
  });
});
