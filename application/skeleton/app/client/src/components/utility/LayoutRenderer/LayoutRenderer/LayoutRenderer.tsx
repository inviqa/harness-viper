import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import { CmsLayoutItem, CmsLayoutItemRegion } from '~hooks/apollo';
import FieldRenderer from '../FieldRenderer/FieldRenderer';
import { RendererConfig } from '../Fields/Wrappers';

const layoutToCols = (layout: string) => {
  if (layout === 'twocol') {
    return 2;
  }

  return 1;
};

const Region: FunctionComponent<{
  region: CmsLayoutItemRegion;
  data: Record<string, unknown>;
  fieldRenderers: RendererConfig;
}> = ({ region, data, fieldRenderers }) => {
  const inlineFields = ['author', 'createdAt'];
  return (
    <div className={cx('layout-item__region', `layout-item__region--${region.region}`)}>
      {region.components.map((component, i) => (
        <FieldRenderer
          component={component}
          data={data}
          renderers={fieldRenderers}
          // eslint-disable-next-line react/no-array-index-key
          key={`component-${i}`}
          inline={inlineFields.includes(component.component)}
        />
      ))}
    </div>
  );
};

const LayoutItem: FunctionComponent<{
  layoutItem: CmsLayoutItem;
  data: Record<string, unknown>;
  fieldRenderers: RendererConfig;
}> = ({ layoutItem, data, fieldRenderers }) => {
  return (
    <div
      className={cx(
        'layout-item',
        `layout-item--${layoutItem.layout}`,
        `grid grid-cols-${layoutToCols(layoutItem.layout)} gap-4 md:mb-4`
      )}
    >
      {layoutItem.regions.map((region, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Region fieldRenderers={fieldRenderers} region={region} data={data} key={`region-${i}`} />
      ))}
    </div>
  );
};

export const LayoutRenderer: FunctionComponent<{
  layoutItems: CmsLayoutItem[];
  data: Record<string, unknown>;
  fieldRenderers: RendererConfig;
}> = ({ layoutItems, data, fieldRenderers }) => {
  return (
    <div className={cx('layout flex-row')}>
      <div className="flex-1">
        {layoutItems.map((layoutItem, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <LayoutItem fieldRenderers={fieldRenderers} layoutItem={layoutItem} data={data} key={`layout-item-${i}`} />
        ))}
      </div>
    </div>
  );
};
