import React, { FunctionComponent } from 'react';
import { CmsLayoutItemComponent } from '~hooks/apollo';
import { FieldProps, RendererConfig } from '../Fields/Wrappers';

type PropT = {
  component: CmsLayoutItemComponent;
  data: Record<string, unknown>;
  renderers: RendererConfig;
  inline?: boolean;
};

const FieldRenderer: FunctionComponent<PropT> = ({ component, data, renderers, inline = false }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ConcreteFieldRenderer: FunctionComponent<FieldProps<any>> = renderers[component.component]
    ? renderers[component.component]
    : renderers.default;

  const value = data[component.component];

  return value ? (
    <ConcreteFieldRenderer
      component={component.component}
      label={component.label as string}
      value={value}
      displayLabel={component.configuration.displayLabel}
      inline={inline}
    />
  ) : null;
};

export default FieldRenderer;
