/**
 * @jest-environment node
 */
import { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import { parseHtml } from '../parseHtml';

const html = '<h1>Some title</h1><p>Some paragraph text</p><ul><li>A list item</li></ul><h3>Another title</h3>';

describe(parseHtml, () => {
  const setup = () => renderToString(parseHtml(html) as ReactElement).replace(' data-reactroot=""', ''); // removing renderToString specific behaviour - not a concern of this test

  describe('When: in node environment', () => {
    describe('And: it is passed a string of html', () => {
      it('Then: it parses the html to react components', () => {
        const rendered = setup();
        expect(rendered).toEqual(expect.stringMatching(/<h1 class="heading [a-z-0-9]*">Some title<\/h1>.*/));
        expect(rendered).toEqual(expect.stringMatching(/.*<h3 class="heading [a-z-0-9]*">Another title<\/h3>/));
        expect(rendered).toEqual(expect.stringMatching(/.*<p class="paragraph [a-z-0-9]*">Some paragraph text<\/p>.*/));
      });

      it('And: it leaves other HTML untouched', () => {
        const rendered = setup();
        expect(rendered).toEqual(expect.stringMatching(/.*<ul><li>A list item<\/li><\/ul>.*/));
      });
    });
  });
});
