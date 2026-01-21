import React from 'react';
import Head from '@docusaurus/Head';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

export default function DocItemMetadata() {
  const {metadata} = useDoc();

  // İstersen sabit:
  // const pageTitle = 'XDEV Docs';

  // İstersen ters:
  const pageTitle = `XDEV | Docs, ${metadata.title}`;

  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
}