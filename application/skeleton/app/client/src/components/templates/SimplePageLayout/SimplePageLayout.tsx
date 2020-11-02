import React, { FunctionComponent } from 'react';
import { Container, Flex } from 'theme-ui';

type Props = {
  header?: JSX.Element;
  footer?: JSX.Element;
};

const SimplePageLayout: FunctionComponent<Props> = ({ header, footer, children }) => (
  <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
    {header}
    <Container sx={{ flex: 1 }}>{children}</Container>
    {footer}
  </Flex>
);

export default SimplePageLayout;
