import React from 'react';
import { withApollo } from '@inviqa/viper-storybook-addons';
import { QueryResult } from '@apollo/client';
import CmsHomepagePage from './CmsHomepagePage';
import data from './mock.json';
import { GetPageByPathQuery, GetPageByPathQueryVariables } from '~hooks/apollo';

export default {
  component: [CmsHomepagePage],
  title: 'Pages/CmsHomepagePage',
  decorators: [withApollo],
  parameters: {
    apollo: {
      mocks: []
    }
  }
};

export const cmsHomepagePage = () => (
  <CmsHomepagePage
    queryResult={({ data } as unknown) as QueryResult<GetPageByPathQuery, GetPageByPathQueryVariables>}
  />
);
