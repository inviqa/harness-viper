import React, { FunctionComponent } from 'react';
import Head from 'next/head';

type Props = {
  title: string;
};

const DocumentTitle: FunctionComponent<Props> = ({ title }) => (
  <Head>
    <title key="document-title">{`${title} | Viper`}</title>
  </Head>
);

export default DocumentTitle;
