import React, { FunctionComponent } from 'react';
import cx from 'classnames';

export const DefaultFieldWrapper: FunctionComponent<{
  component: string;
  label?: JSX.Element;
  inline?: boolean;
  displayLabel?: boolean;
}> = ({ component, label, children, displayLabel = false, inline = false }) => (
  <div
    className={cx(
      'field',
      `field--${component}`,
      {
        'field--has-label': !!label,
        'field--no-label': !label
      },
      'flex',
      {
        'flex-row': inline,
        'flex-col': !inline
      }
    )}
  >
    {displayLabel && label}
    {children}
  </div>
);
