import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import { Text } from 'theme-ui';

export const DefaultLabelWrapper: FunctionComponent<{ component: string; inline?: boolean }> = ({
  inline,
  component,
  children
}) => {
  return (
    <Text sx={{ fontWeight: 'bold', mr: inline ? 2 : 0 }} className={cx('field__label', `field__label--${component}`)}>
      {children}
    </Text>
  );
};
