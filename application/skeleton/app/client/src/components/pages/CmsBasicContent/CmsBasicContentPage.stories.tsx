import React from 'react';
import { withApollo } from '@inviqa/viper-storybook-addons';
import { QueryResult } from '@apollo/client';
import CmsBasicContentPage from './CmsBasicContentPage';
import data from './mock.json';
import { GetPageByPathQuery, GetPageByPathQueryVariables } from '~hooks/apollo';

export default {
  component: [CmsBasicContentPage],
  title: 'Pages/CmsBasicContentPage',
  decorators: [withApollo],
  parameters: {
    apollo: {
      mocks: []
    }
  }
};

export const cmsBasicContentPage = () => (
  <CmsBasicContentPage
    queryResult={({ data } as unknown) as QueryResult<GetPageByPathQuery, GetPageByPathQueryVariables>}
  />
);
