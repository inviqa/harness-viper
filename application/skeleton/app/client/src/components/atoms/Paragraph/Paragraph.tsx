import React, { FunctionComponent } from 'react';
import { Styled } from 'theme-ui';
import cx from 'classnames';

export type Props = React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph: FunctionComponent<Props> = ({ className, children, ...props }) => (
  <Styled.p className={cx('paragraph', className)} {...props}>
    {children}
  </Styled.p>
);

export default Paragraph;
