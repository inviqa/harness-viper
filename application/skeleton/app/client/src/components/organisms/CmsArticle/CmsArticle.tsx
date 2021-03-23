import React, { FunctionComponent } from 'react';
import { CmsArticle as CmsArticleData } from '~hooks/apollo';
import { LayoutRenderer } from '../../utility/LayoutRenderer/LayoutRenderer/LayoutRenderer';
import { fieldRenderers } from './renderers.config';

export const CmsArticle: FunctionComponent<{
  articleData?: CmsArticleData | null;
}> = ({ articleData }) => {
  if (!articleData?.layout?.items) {
    return <></>;
  }
  // TODO: Move this function to the client package once it's created.
  const withTitle = (data: CmsArticleData): CmsArticleData => {
    const dataCopy = JSON.parse(JSON.stringify(data)); // deep copy

    if (dataCopy.layout?.items && dataCopy?.layout?.items[0]?.regions[0].components[0].component !== 'title') {
      dataCopy.layout.items = [
        {
          layout: 'onecol',
          label: 'Above',
          regions: [
            {
              region: 'content',
              configuration: {
                width: 100
              },
              components: [
                {
                  configuration: {
                    displayLabel: false
                  },
                  label: 'Above subtitle',
                  component: 'title'
                }
              ]
            }
          ]
        },
        ...dataCopy.layout.items
      ];
    }
    return dataCopy;
  };

  const articleDataWithTitle = withTitle(articleData);

  return (
    <LayoutRenderer
      fieldRenderers={fieldRenderers}
      data={articleDataWithTitle}
      layoutItems={articleDataWithTitle.layout?.items ?? []}
    />
  );
};

export default CmsArticle;
