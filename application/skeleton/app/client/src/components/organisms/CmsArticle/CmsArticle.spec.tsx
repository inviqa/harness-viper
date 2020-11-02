import React from 'react';
import { render } from '@testing-library/react';
import { CmsArticle as CmsArticleType } from '~hooks/apollo';
import CmsArticle from './CmsArticle';
import data from '../../pages/CmsArticle/mock.json';

describe(CmsArticle, () => {
  describe('When: CMS Article has data & title', () => {
    const setup = () => render(<CmsArticle articleData={data.routeByPath.page.cmsArticle as CmsArticleType} />);

    it('Then: it renders the title', () => {
      const { getByText } = setup();
      expect(getByText('Dolore Dolus')).toBeInTheDocument();
      expect(getByText('Dolore Dolus').tagName).toBe('H1');
    });

    it('And: it renders the author', () => {
      const { getByText } = setup();
      expect(getByText('Authored by')).toBeInTheDocument();
      expect(getByText('Ronald McDonald Jr.')).toBeInTheDocument();
    });

    it('And: it renders the date', () => {
      const { container } = setup();
      expect(container.querySelector('time')).toBeInTheDocument();
      expect(container.querySelector('time')).toHaveAttribute('datetime', '2020-01-16T23:51:42.200Z');
    });

    it('And: it renders the image', () => {
      const { getByAltText } = setup();
      expect(getByAltText('Humo neo nimis nisl oppeto utrum vel.')).toBeInTheDocument();
    });

    it('And: it renders the body', () => {
      const { getByText } = setup();
      expect(
        getByText(/Dolor duis ideo imputo letalis premo sino tego vicis vulputate\. Brevitas dolor vulpes\./)
      ).toBeInTheDocument();
    });
  });

  describe('When: CMS article has data but no title', () => {
    const layoutWithoutTitle = JSON.parse(JSON.stringify(data.routeByPath.page.cmsArticle.layout));
    layoutWithoutTitle.items.shift();
    const dataWithoutTitle = {
      ...data.routeByPath.page.cmsArticle,
      layout: layoutWithoutTitle
    };
    const setup = () => render(<CmsArticle articleData={dataWithoutTitle as CmsArticleType} />);

    it('Then: it adds the title', () => {
      const { getByText } = setup();
      expect(getByText('Dolore Dolus')).toBeInTheDocument();
      expect(getByText('Dolore Dolus').tagName).toBe('H1');
    });
  });

  describe('When: CMS article has no data', () => {
    it('Then: nothing is rendered', () => {
      const { container } = render(<CmsArticle />);
      expect(container).toBeEmptyDOMElement();
    });
  });
});
