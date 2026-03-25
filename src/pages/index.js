import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Hero from '@site/src/components/landing/Hero';
import ProductGrid from '@site/src/components/landing/ProductGrid';
import ValueProps from '@site/src/components/landing/ValueProps';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.landingPage}>
        <Hero />
        <ProductGrid />
        <ValueProps />
      </main>
    </Layout>
  );
}
