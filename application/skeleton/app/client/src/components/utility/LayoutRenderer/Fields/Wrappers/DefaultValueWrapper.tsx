import React, { FunctionComponent } from 'react';
import cx from 'classnames';

export const DefaultValueWrapper: FunctionComponent<{ component: string }> = ({ component, children }) => {
  return (
    <div className={cx('field__value', `field__value--${component}`)}>
      <span>{children}</span>
    </div>
  );
};
