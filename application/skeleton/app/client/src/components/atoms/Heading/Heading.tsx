import React, { FunctionComponent, HTMLAttributes, ElementType } from 'react';
import { Heading as ThemeHeading, Styled, IntrinsicSxElements } from 'theme-ui';
import cx from 'classnames';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type Props = HTMLAttributes<HTMLElement> & {
  level?: HeadingLevel;
  display?: HeadingLevel;
};

const isValidLevel = (level: number): level is HeadingLevel => level >= 1 && level <= 6;

const Heading: FunctionComponent<Props> = ({ level = 2, display, className, ...props }) => {
  const validLevel = isValidLevel(level) ? level : 2;
  const combinedClassName = cx('heading', className);

  if (display) {
    const validDisplay = isValidLevel(display) ? display : 2;
    return (
      <ThemeHeading
        className={combinedClassName}
        as={`h${validLevel}` as ElementType}
        sx={{ variant: `styles.h${validDisplay}` }}
        {...props}
      />
    );
  }

  const Component = Styled[`h${validLevel}` as keyof IntrinsicSxElements];

  return <Component className={combinedClassName} {...props} />;
};

export default Heading;
