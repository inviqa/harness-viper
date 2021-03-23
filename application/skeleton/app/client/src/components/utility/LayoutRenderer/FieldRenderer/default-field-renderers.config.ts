import { FunctionComponent } from 'react';
import { TitleField, AuthorField, HtmlField, TimeAgoField, PictureField, Field } from '../Fields';
import { FieldProps } from '../Fields/Wrappers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fieldRenderers: Record<string, FunctionComponent<FieldProps<any>>> = {
  default: Field,
  title: TitleField,
  author: AuthorField,
  body: HtmlField,
  summary: HtmlField,
  createdAt: TimeAgoField,
  image: PictureField
};
