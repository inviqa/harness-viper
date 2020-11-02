import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import { Flex } from 'theme-ui';

export const DefaultFieldWrapper: FunctionComponent<{
  component: string;
  label?: JSX.Element;
  inline?: boolean;
  displayLabel?: boolean;
}> = ({ component, label, children, displayLabel = false, inline = false }) => (
  <Flex
    sx={{ flexDirection: inline ? 'row' : 'column' }}
    className={cx('field', `field--${component}`, {
      'field--has-label': !!label,
      'field--no-label': !label
    })}
  >
    {displayLabel && label}
    {children}
  </Flex>
);
