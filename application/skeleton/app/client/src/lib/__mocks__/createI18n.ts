import React, { FunctionComponent, ReactElement } from 'react';
import { LinkProps } from 'next/link';
import { Trans as TransType } from 'next-i18next';

export const useTranslation = () => ({
  t: (text: string, values: Record<string, unknown>) => `${text}${values ? ` ${Object.values(values).join(',')}` : ''}`,
  i18n: { language: 'cimode' }
});

export const Link: FunctionComponent<LinkProps> = ({ href, as, passHref: _passHref, children, ...props }) =>
  React.createElement(
    React.Fragment,
    props,
    React.cloneElement(children as ReactElement, { href: `/ci${as ?? href}` })
  );

export const Trans: TransType = ({ i18nKey, ...props }) => React.createElement('span', props, i18nKey);

export const Router = {
  asPath: '/en/',
  push: jest.fn()
};
