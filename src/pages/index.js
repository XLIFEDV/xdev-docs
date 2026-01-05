import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const logoUrl = useBaseUrl('/img/xdev.png'); // logo adını gerekirse değiştir
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;

  const description =
    currentLocale === 'tr'
      ? 'XDEVELOPMENT ürünleri için resmi dokümantasyon. Kurulum adımları, kullanım detayları ve sorun giderme rehberleri.'
      : 'Official documentation for XDEVELOPMENT products. Setup steps, usage details, and troubleshooting guides.';

  return (
    <Layout title="XDEV Docs" description={description}>
      <main
        style={{
          minHeight: '70vh',
          display: 'grid',
          placeItems: 'center',
          padding: '64px 16px',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: 820 }}>
          <img
            src={logoUrl}
            alt="XDEVELOPMENT"
            style={{
              width: 'min(520px, 90vw)',
              height: 'auto',
              marginBottom: 12,
            }}
          />
          <p style={{ fontSize: 16, opacity: 0.85, lineHeight: 1.6, margin: 0 }}>
            {description}
          </p>
        </div>
      </main>
    </Layout>
  );
}
