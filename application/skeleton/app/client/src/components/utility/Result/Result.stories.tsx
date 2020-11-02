import React from 'react';
import Result from './Result';

export default {
  component: Result,
  title: 'Utility/Result'
};

export const withContent = () => <Result>Some content</Result>;
export const withError = () => <Result error="Some error message">Some content</Result>;
export const withLoading = () => <Result loading>Some content</Result>;
