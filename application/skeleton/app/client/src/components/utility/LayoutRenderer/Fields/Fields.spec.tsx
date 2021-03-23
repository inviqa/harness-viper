import React from 'react';
import { render } from '@testing-library/react';
import { AuthorField, Field, HtmlField, PictureField, TimeAgoField, TitleField } from '.';

describe(AuthorField, () => {
  describe('When: label should be rendered', () => {
    it('Then: it renders author name & label', () => {
      const { getByText } = render(
        <AuthorField component="author" value={{ id: '1', name: 'Bathilda Bagshot' }} label="Author" displayLabel />
      );
      expect(getByText('Author')).toBeInTheDocument();
      expect(getByText('Bathilda Bagshot')).toBeInTheDocument();
    });
  });

  describe('When: label should not be rendered', () => {
    it('Then: it renders author name & no label', () => {
      const { queryByText, getByText } = render(
        <AuthorField component="author" value={{ id: '1', name: 'Bathilda Bagshot' }} label="Author" />
      );
      expect(queryByText('Author')).not.toBeInTheDocument();
      expect(getByText('Bathilda Bagshot')).toBeInTheDocument();
    });
  });
});

describe(Field, () => {
  describe('When: label should be rendered', () => {
    it('Then: it renders content & label', () => {
      const { getByText } = render(<Field component="book" value="Hogwarts: A History" label="Book" displayLabel />);
      expect(getByText('Book')).toBeInTheDocument();
      expect(getByText('Hogwarts: A History')).toBeInTheDocument();
    });
  });

  describe('When: label should not be rendered', () => {
    it('Then: it renders content & no label', () => {
      const { queryByText, getByText } = render(<Field component="book" value="Hogwarts: A History" label="Book" />);
      expect(queryByText('Book')).not.toBeInTheDocument();
      expect(getByText('Hogwarts: A History')).toBeInTheDocument();
    });
  });
});

describe(HtmlField, () => {
  describe('When: label should be rendered', () => {
    it('Then: it renders html & label', () => {
      const { getByText } = render(
        <HtmlField component="html" value={{ html: '<p>Some HTML</p>', raw: '' }} label="HTML" displayLabel />
      );
      expect(getByText('HTML')).toBeInTheDocument();
      expect(getByText('Some HTML')).toBeInTheDocument();
      expect(getByText('Some HTML').tagName).toBe('P');
    });
  });

  describe('When: label should not be rendered', () => {
    it('Then: it renders html & no label', () => {
      const { queryByText, getByText } = render(
        <HtmlField component="html" value={{ html: '<p>Some HTML</p>', raw: '' }} label="HTML" />
      );
      expect(queryByText('HTML')).not.toBeInTheDocument();
      expect(getByText('Some HTML')).toBeInTheDocument();
      expect(getByText('Some HTML').tagName).toBe('P');
    });
  });
});

describe(PictureField, () => {
  const image = {
    alt: 'Image',
    sizes: [
      {
        width: 640,
        size: 'mobile',
        url: 'https://picsum.photos/seed/viper/640/853'
      },
      {
        width: 1280,
        size: 'mobileRetina',
        url: 'https://picsum.photos/seed/viper/1280/1706'
      },
      {
        width: 1024,
        size: 'desktop',
        url: 'https://picsum.photos/seed/viper/1024/768'
      },
      {
        width: 2048,
        size: 'desktopRetina',
        url: 'https://picsum.photos/seed/viper/2048/1536'
      }
    ]
  };
  describe('When: label should be rendered', () => {
    it('Then: it renders image & label', () => {
      const { getByText, getByAltText } = render(
        <PictureField component="image" value={image} label="Featured Image" displayLabel />
      );
      expect(getByText('Featured Image')).toBeInTheDocument();
      expect(getByAltText('Image')).toBeInTheDocument();
    });

    it('And: it renders responsive image sources', () => {
      const { getByAltText } = render(
        <PictureField component="image" value={image} label="Featured Image" displayLabel />
      );
      const sources = getByAltText('Image').parentNode?.querySelectorAll('source') ?? [];
      expect(sources[0]).toHaveAttribute('media', '(max-width: 640px)');
      expect(sources[0]).toHaveAttribute(
        'srcset',
        'https://picsum.photos/seed/viper/640/853 1x, https://picsum.photos/seed/viper/1280/1706 2x'
      );
      expect(sources[1]).not.toHaveAttribute('media');
      expect(sources[1]).toHaveAttribute(
        'srcset',
        'https://picsum.photos/seed/viper/1024/768 1x, https://picsum.photos/seed/viper/2048/1536 2x'
      );
    });
  });

  describe('When: label should not be rendered', () => {
    it('Then: it renders image & no label', () => {
      const { queryByText, getByAltText } = render(
        <PictureField component="image" value={image} label="Featured Image" />
      );
      expect(queryByText('Featured Image')).not.toBeInTheDocument();
      expect(getByAltText('Image')).toBeInTheDocument();
    });
  });
});

describe(TimeAgoField, () => {
  describe('When: label should be rendered', () => {
    it('Then: it renders time & label', () => {
      const { getByText, container } = render(
        <TimeAgoField component="time" value="2020-01-17T00:41:29.400Z" label="Time" displayLabel />
      );
      expect(getByText('Time')).toBeInTheDocument();
      expect(container.querySelector('time')).toBeInTheDocument();
      expect(container.querySelector('time')).toHaveAttribute('datetime', '2020-01-17T00:41:29.400Z');
    });
  });

  describe('When: label should not be rendered', () => {
    it('Then: it renders time & no label', () => {
      const { queryByText, container } = render(
        <TimeAgoField component="time" value="2020-01-17T00:41:29.400Z" label="Time" />
      );
      expect(queryByText('Time')).not.toBeInTheDocument();
      expect(container.querySelector('time')).toHaveAttribute('datetime', '2020-01-17T00:41:29.400Z');
    });
  });
});

describe(TitleField, () => {
  describe('When: label should be rendered', () => {
    it('Then: it renders title & label', () => {
      const { getByText } = render(<TitleField component="title" value="Some title" label="Title" displayLabel />);
      expect(getByText('Title')).toBeInTheDocument();
      expect(getByText('Some title')).toBeInTheDocument();
      expect(getByText('Some title').tagName).toBe('H1');
    });
  });

  describe('When: label should not be rendered', () => {
    it('Then: it renders content & no label', () => {
      const { queryByText, getByText } = render(<TitleField component="title" value="Some title" label="Title" />);
      expect(queryByText('Title')).not.toBeInTheDocument();
      expect(getByText('Some title')).toBeInTheDocument();
      expect(getByText('Some title').tagName).toBe('H1');
    });
  });
});
