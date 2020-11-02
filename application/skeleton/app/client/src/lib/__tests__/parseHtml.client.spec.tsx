import React from 'react';
import { render } from '@testing-library/react';
import { parseHtml } from '../parseHtml';

const html = '<h1>Some title</h1><p>Some paragraph text</p><ul><li>A list item</li></ul><h3>Another title</h3>';

describe(parseHtml, () => {
  const setup = () => render(<div>{parseHtml(html)}</div>);

  describe('When: in browser environment', () => {
    describe('And: it is passed a string of HTML', () => {
      it('Then: it renders our heading component for title tags', () => {
        const { getByText } = setup();
        expect(getByText('Some title')).toBeInTheDocument();
        expect(getByText('Some title').tagName).toBe('H1');
        expect(getByText('Some title').classList.contains('heading')).toBe(true);

        expect(getByText('Another title')).toBeInTheDocument();
        expect(getByText('Another title').tagName).toBe('H3');
        expect(getByText('Another title').classList.contains('heading')).toBe(true);
      });

      it('And: it renders our paragraph component for paragraph tags', () => {
        const { getByText } = setup();
        expect(getByText('Some paragraph text')).toBeInTheDocument();
        expect(getByText('Some paragraph text').tagName).toBe('P');
        expect(getByText('Some paragraph text').classList.contains('paragraph')).toBe(true);
      });

      it('And: it leaves other html untouched', () => {
        const { getByText } = setup();
        expect(getByText('A list item')).toBeInTheDocument();
        expect(getByText('A list item').tagName).toBe('LI');
        expect(getByText('A list item').classList).toHaveLength(0);
      });
    });
  });
});
