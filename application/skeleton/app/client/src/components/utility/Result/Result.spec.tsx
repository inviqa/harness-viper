import React from 'react';
import { render } from '@testing-library/react';
import Result from './Result';

describe(Result, () => {
  describe('When: there is no error and data is not loading', () => {
    it('Then: it renders the content', () => {
      const { getByText, queryByRole, queryByLabelText } = render(<Result>Some content</Result>);
      expect(getByText('Some content')).toBeInTheDocument();
      expect(queryByRole('alert')).toBeNull();
      expect(queryByLabelText('Loading')).toBeNull();
    });
  });

  describe('When: there is an error and data is not loading', () => {
    it('Then: it renders an error', () => {
      const { getByRole, queryByText, queryByLabelText } = render(<Result error="Some error">Some content</Result>);
      expect(getByRole('alert')).toBeInTheDocument();
      expect(queryByText('Some content')).toBeNull();
      expect(queryByLabelText('Loading')).toBeNull();
    });
  });

  describe('When: data is loading', () => {
    describe('And: there is already data', () => {
      it('Then: it renders a loading icon', () => {
        const { getByLabelText, queryByRole, queryByText } = render(<Result loading>Some content</Result>);
        expect(getByLabelText('Loading')).toBeInTheDocument();
        expect(queryByText('Some content')).toBeNull();
        expect(queryByRole('alert')).toBeNull();
      });
    });

    describe('And: there is an error', () => {
      it('Then: it renders a loading icon', () => {
        const { getByLabelText, queryByRole, queryByText } = render(
          <Result loading error="Some error">
            Some content
          </Result>
        );
        expect(getByLabelText('Loading')).toBeInTheDocument();
        expect(queryByText('Some content')).toBeNull();
        expect(queryByRole('alert')).toBeNull();
      });
    });

    describe('And: there is no data or error', () => {
      it('Then: it renders a loading icon', () => {
        const { getByLabelText, queryByRole, queryByText } = render(<Result loading />);
        expect(getByLabelText('Loading')).toBeInTheDocument();
        expect(queryByText('Some content')).toBeNull();
        expect(queryByRole('alert')).toBeNull();
      });
    });
  });
});
