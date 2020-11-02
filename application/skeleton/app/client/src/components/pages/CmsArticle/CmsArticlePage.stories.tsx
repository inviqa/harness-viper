import React from 'react';
import { withApollo } from '@inviqa/viper-storybook-addons';
import { QueryResult } from '@apollo/client';
import CmsArticlePage from './CmsArticlePage';
import data from './mock.json';
import { GetPageByPathQuery, GetPageByPathQueryVariables } from '~hooks/apollo';

export default {
  component: [CmsArticlePage],
  title: 'Pages/CmsArticlePage',
  decorators: [withApollo],
  parameters: {
    apollo: {
      mocks: []
    }
  }
};

export const cmsArticlePage = () => (
  <CmsArticlePage queryResult={({ data } as unknown) as QueryResult<GetPageByPathQuery, GetPageByPathQueryVariables>} />
);
