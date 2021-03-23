import React, { FunctionComponent } from 'react';
import cx from 'classnames';

export const DefaultLabelWrapper: FunctionComponent<{ component: string; inline?: boolean }> = ({
  inline,
  component,
  children
}) => {
  return (
    <span
      className={cx('field__label', `field__label--${component}`, 'font-bold', {
        'mr-2': inline
      })}
    >
      {children}
    </span>
  );
};
