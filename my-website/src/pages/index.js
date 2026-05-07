import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} — документация`}
      description="Автоматическая разметка изображений">
      <div style={{
        textAlign: 'center',
        padding: '6rem 2rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1>{siteConfig.title}</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Веб‑платформа для разметки изображений с использованием open‑source моделей
          (Grounding DINO, SAM) и удобным интерфейсом ручной коррекции.
        </p>

        <Link
          className="button button--primary button--lg"
          to="/docs/intro">
           Открыть документацию
        </Link>
      </div>
    </Layout>
  );
}