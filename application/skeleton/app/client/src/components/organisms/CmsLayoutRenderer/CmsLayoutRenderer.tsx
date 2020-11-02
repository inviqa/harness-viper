import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import { Flex, Grid, Box } from 'theme-ui';
import { CmsLayoutItem, CmsLayoutItemRegion } from '~hooks/apollo';
import FieldRenderer from '../../molecules/FieldRenderer/FieldRenderer';
import { RendererConfig } from '../../molecules/Fields/Utils';

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
    <Box className={cx('layout-item__region', `layout-item__region--${region.region}`)}>
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
    </Box>
  );
};

const LayoutItem: FunctionComponent<{
  layoutItem: CmsLayoutItem;
  data: Record<string, unknown>;
  fieldRenderers: RendererConfig;
}> = ({ layoutItem, data, fieldRenderers }) => {
  return (
    <Grid
      columns={layoutToCols(layoutItem.layout)}
      sx={{ mb: 3 }}
      className={cx('layout-item', `layout-item--${layoutItem.layout}`)}
    >
      {layoutItem.regions.map((region, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Region fieldRenderers={fieldRenderers} region={region} data={data} key={`region-${i}`} />
      ))}
    </Grid>
  );
};

export const CmsLayoutRenderer: FunctionComponent<{
  layoutItems: CmsLayoutItem[];
  data: Record<string, unknown>;
  fieldRenderers: RendererConfig;
}> = ({ layoutItems, data, fieldRenderers }) => {
  return (
    <Flex className={cx('layout')}>
      <Box sx={{ flex: 1 }}>
        {layoutItems.map((layoutItem, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <LayoutItem fieldRenderers={fieldRenderers} layoutItem={layoutItem} data={data} key={`layout-item-${i}`} />
        ))}
      </Box>
    </Flex>
  );
};

export default CmsLayoutRenderer;
