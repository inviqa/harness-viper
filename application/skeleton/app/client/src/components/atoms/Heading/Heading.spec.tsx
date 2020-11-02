import React from 'react';
import { render } from '@testing-library/react';
import Heading, { HeadingLevel } from './Heading';
import { when, then } from '~test-helpers';

describe(Heading, () => {
  when("I don't specify a level", () => {
    then('a h2 tag is rendered', () => {
      const { getByText } = render(<Heading>Default Heading</Heading>);
      expect(getByText('Default Heading').tagName).toBe('H2');
    });
  });

  const levels: HeadingLevel[] = [1, 2, 3, 4, 5, 6];

  levels.forEach(level => {
    when(`I specify level ${level}`, () => {
      then(`a h${level} tag is rendered`, () => {
        const { getByText } = render(<Heading level={level}>Heading</Heading>);
        expect(getByText('Heading').tagName).toBe(`H${level}`);
      });
    });
  });

  when('I specify an invalid heading level', () => {
    then('a h2 tag is rendered', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const { getByText } = render(<Heading level={100}>Invalid Heading</Heading>);
      expect(getByText('Invalid Heading').tagName).toBe('H2');
    });
  });

  when('I set a level of 3 and a display modifier of 1', () => {
    then('a h3 tag is rendered', () => {
      const { getByText } = render(
        <Heading level={3} display={1}>
          Heading Level 3
        </Heading>
      );
      expect(getByText('Heading Level 3').tagName).toBe('H3');
    });
  });
});
