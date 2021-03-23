import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';
import createDOMPurify, { DOMPurifyI } from 'dompurify';
import React, { HTMLAttributes } from 'react';

type AdditionalProps = {
  Heading?: HTMLAttributes<HTMLHeadingElement>;
  Paragraph?: HTMLAttributes<HTMLParagraphElement>;
};

const createOptions = (additionalProps: AdditionalProps) => {
  const options: HTMLReactParserOptions = {
    replace: ({ type, name, children }) => {
      if (type !== 'tag' || !children || !name) {
        return undefined;
      }

      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(name)) {
        const props = additionalProps?.Heading ?? {};
        const TagName = name;

        return <TagName {...props}>{domToReact(children, options)}</TagName>;
      }

      if (name === 'p') {
        const props = additionalProps?.Paragraph ?? {};
        return <p {...props}>{domToReact(children, options)}</p>;
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
