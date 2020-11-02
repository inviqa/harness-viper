import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';
import createDOMPurify, { DOMPurifyI } from 'dompurify';
import React from 'react';
import Heading, { Props as HeadingProps, HeadingLevel } from '../components/atoms/Heading/Heading';
import Paragraph, { Props as ParagraphProps } from '../components/atoms/Paragraph/Paragraph';

type AdditionalProps = {
  Heading?: HeadingProps;
  Paragraph?: ParagraphProps;
};

const createOptions = (additionalProps: AdditionalProps) => {
  const options: HTMLReactParserOptions = {
    replace: ({ type, name, children }) => {
      if (type !== 'tag' || !children || !name) {
        return undefined;
      }

      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(name)) {
        const props = additionalProps?.Heading ?? {};
        const level = Number(name.replace('h', '')) as HeadingLevel;
        return (
          <Heading level={level} {...props}>
            {domToReact(children, options)}
          </Heading>
        );
      }

      if (name === 'p') {
        const props = additionalProps?.Paragraph ?? {};
        return <Paragraph {...props}>{domToReact(children, options)}</Paragraph>;
      }

      if (name === 'div') {
        return <div>{domToReact(children, options)}</div>;
      }

      return undefined;
    }
  };

  return options;
};

const getWindow = (): Window => {
  if (typeof window === 'undefined') {
    const { JSDOM } = require('jsdom'); // eslint-disable-line
    return new JSDOM('<!DOCTYPE html>').window;
  }

  return window;
};

let DOMPurify: DOMPurifyI | undefined;

export const parseHtml = (html: string, additionalProps: AdditionalProps = {}): JSX.Element | JSX.Element[] => {
  DOMPurify = DOMPurify || createDOMPurify(getWindow());
  return parse(DOMPurify.sanitize(html), createOptions(additionalProps));
};
