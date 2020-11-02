import React from 'react';
import { render } from '@testing-library/react';
import Paragraph from './Paragraph';
import { when, then } from '~test-helpers';

describe(Paragraph, () => {
  when('I add text to a Paragraph', () => {
    then('that text should be rendered', () => {
      const { getByText } = render(<Paragraph>TEST_TEXT</Paragraph>);
      expect(getByText('TEST_TEXT')).toBeInTheDocument();
    });
  });
});
