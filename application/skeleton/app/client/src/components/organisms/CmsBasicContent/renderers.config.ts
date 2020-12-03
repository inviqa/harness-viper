import { FunctionComponent } from 'react';
import { CmsLayoutItem } from '~hooks/apollo';
import { FieldProps } from '../../molecules/Fields/Utils';
import { fieldRenderers as defaultFieldRenderers } from '../../molecules/FieldRenderer/default-field-renderers.config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fieldRenderers: Record<string, FunctionComponent<FieldProps<any>>> = {
  ...defaultFieldRenderers
};

export const fixedLayoutItems: CmsLayoutItem[] = [
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
  {
    label: '',
    layout: 'onecol',
    regions: [
      {
        region: 'content',
        configuration: {
          width: 100
        },
        components: [
          {
            label: null,
            configuration: {
              displayLabel: false
            },
            component: 'image'
          },
          {
            label: null,
            configuration: {
              displayLabel: false
            },
            component: 'body'
          },
          {
            label: null,
            configuration: {
              displayLabel: false
            },
            component: 'tags'
          },
          {
            label: null,
            configuration: {
              displayLabel: false
            },
            component: 'links'
          },
          {
            label: null,
            configuration: {
              displayLabel: false
            },
            component: 'comment'
          }
        ]
      }
    ]
  }
];
