import React, { FunctionComponent } from 'react';
import { Grid, Box } from 'theme-ui';

type Props = {
  sidebar?: JSX.Element;
  sidebarPos?: string;
  header?: JSX.Element;
  footer?: JSX.Element;
};

const TwoColumnsPageLayout: FunctionComponent<Props> = ({ sidebar, sidebarPos, children }) => {
  let content;
  let gridTemplateColumns;

  switch (sidebarPos) {
    default:
    case 'left':
      gridTemplateColumns = ['1fr', '1fr 3fr'];
      content = (
        <>
          <Box>{sidebar}</Box>
          <Box as="main">{children}</Box>
        </>
      );
      break;

    case 'right':
      gridTemplateColumns = ['1fr', '3fr 1fr'];
      content = (
        <>
          <Box as="main">{children}</Box>
          <Box>{sidebar}</Box>
        </>
      );
      break;
  }

  return <Grid sx={{ gap: 4, gridTemplateColumns }}>{content}</Grid>;
};

export default TwoColumnsPageLayout;
