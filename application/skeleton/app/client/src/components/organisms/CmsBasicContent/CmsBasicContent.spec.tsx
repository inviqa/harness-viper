import React from 'react';
import { render } from '@testing-library/react';
import { CmsBasicContent as CmsBasicContentType } from '~hooks/apollo';
import CmsBasicContent from './CmsBasicContent';
import data from '../../pages/CmsBasicContent/mock.json';

describe(CmsBasicContent, () => {
  describe('When: CMS Article has data', () => {
    const setup = () =>
      render(<CmsBasicContent basicContentData={data.routeByPath.page.cmsBasicContent as CmsBasicContentType} />);

    it('Then: it renders the title', () => {
      const { getByText } = setup();
      expect(getByText('Dolore Dolus')).toBeInTheDocument();
      expect(getByText('Dolore Dolus').tagName).toBe('H1');
    });

    it('And: it renders the body', () => {
      const { getByText } = setup();
      expect(
        getByText(/Dolor duis ideo imputo letalis premo sino tego vicis vulputate\. Brevitas dolor vulpes\./)
      ).toBeInTheDocument();
    });
  });
});
