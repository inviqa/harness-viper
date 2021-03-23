import React from 'react';
import { render } from '@testing-library/react';
import FieldRenderer from './FieldRenderer';
import * as mocks from './mocks';

describe(FieldRenderer, () => {
  describe('When: a field has a specific renderer', () => {
    describe('And: a label should be displayed', () => {
      it('Then: the field content & label are rendered using the correct renderer', () => {
        const { getByText, container } = render(<FieldRenderer {...mocks.createdAtWithLabel} />);
        const { label } = mocks.createdAtWithLabel.component;
        const content = mocks.createdAtWithLabel.data.createdAt;
        expect(getByText(label)).toBeInTheDocument();
        expect(container.querySelector('time')).toHaveAttribute('datetime', content);
      });
    });

    describe('And: a label should not be displayed', () => {
      it('Then: the field content & label are rendered using the correct renderer', () => {
        const { queryByText, container } = render(<FieldRenderer {...mocks.createdAtWithoutLabel} />);
        const { label } = mocks.createdAtWithoutLabel.component;
        const content = mocks.createdAtWithoutLabel.data.createdAt;
        expect(queryByText(label)).not.toBeInTheDocument();
        expect(container.querySelector('time')).toHaveAttribute('datetime', content);
      });
    });
  });

  describe('When: a field does not have a specific renderer', () => {
    describe('And: a label should be displayed', () => {
      it('Then: the field content & label are rendered using the default renderer', () => {
        const { getByText } = render(<FieldRenderer {...mocks.defaultWithLabel} />);
        const { label } = mocks.defaultWithLabel.component;
        const content = mocks.defaultWithLabel.data[mocks.defaultWithLabel.component.component];
        expect(getByText(label)).toBeInTheDocument();
        expect(getByText(content)).toBeInTheDocument();
      });
    });

    describe('And: a label should not be displayed', () => {
      it('Then: the field content is rendered using the default renderer', () => {
        const { queryByText, getByText } = render(<FieldRenderer {...mocks.defaultWithoutLabel} />);
        const { label } = mocks.defaultWithoutLabel.component;
        const content = mocks.defaultWithoutLabel.data[mocks.defaultWithLabel.component.component];
        expect(queryByText(label)).not.toBeInTheDocument();
        expect(getByText(content)).toBeInTheDocument();
      });
    });
  });
});
