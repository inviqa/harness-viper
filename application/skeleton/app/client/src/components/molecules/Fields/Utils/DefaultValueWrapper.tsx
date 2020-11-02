import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import { Box, Text } from 'theme-ui';

export const DefaultValueWrapper: FunctionComponent<{ component: string }> = ({ component, children }) => {
  return (
    <Box className={cx('field__value', `field__value--${component}`)}>
      <Text>{children}</Text>
    </Box>
  );
};
