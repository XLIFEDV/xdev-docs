import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(){
  return (
    <Layout title="XDEV Docs" description="XDEVELOPMENT Documentation">
      <main style={{ padding: '64px 16px', maxWidth: 960, margin: '0 auto' }}>
        <h1 style={{ fontSize: 44, margin: 0 }}>XDEV Docs</h1>
        <p style={{ fontSize: 18, opacity: 0.8, marginTop: 12 }}>
          XDEVELOPMENT product documentation.
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
          <Link className="button button--primary button--lg" to="/posdevice/main">
            POSDEVICE Docs
          </Link>
          <Link className="button button--secondary button--lg" to="/faq">
            FAQ
          </Link>
          <Link className="button button--secondary button--lg" to="/coming-soon">
            Coming Soon
          </Link>
        </div>
      </main>
    </Layout>
  );
}
