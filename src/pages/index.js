import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
const { translate } = require('@docusaurus/theme-common');
const t = (id, fallback) => translate({ id, message: fallback });

export default function Home() {
  const logoUrl = useBaseUrl('/img/xdev.png'); // logo adını gerekirse değiştir

  const content = {
    title: 'XDEV Docs',
    description: t('index.description', 'Official documentation for XDEVELOPMENT products.')
  };

  return (
    <Layout title={content.title} description={content.description}>
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
              width: 'min(600px, 90vw)',
              height: 'auto',
              marginBottom: -100,
            }}
          />
          <p style={{ fontSize: 24, fontWeight:500, opacity: 0.85, lineHeight: 0, margin: 0, color: '#AE3C46'}}>
            {content.description}
          </p>
        </div>
      </main>
    </Layout>
  );
}
