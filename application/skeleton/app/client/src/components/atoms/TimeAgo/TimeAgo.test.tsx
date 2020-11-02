import React from 'react';
import { render } from '@testing-library/react';
import TimeAgo from './TimeAgo';
import { when, then } from '~test-helpers';

describe(TimeAgo, () => {
  when('I pass props to the TimeAgo component', () => {
    then('it forwards them to the 3rd-party TimeAgo component', () => {
      const { getByText } = render(<TimeAgo datetime={new Date('1989-07-11')} />);
      // don't care that it specifically calculates the right value, just that our props are correctly passed onto the 3rd party component
      expect(getByText(/years ago/)).toBeInTheDocument();
    });
  });
});
