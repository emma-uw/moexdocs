import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './landing.module.css';

export default function Hero() {
  const logoUrl = useBaseUrl('/img/logo.svg');
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div>
          <img src={logoUrl} alt="MOEX Docs" className={styles.heroLogo} />
          <Heading as="h1" className={styles.heroTitle}>
            MOEX DOCS
          </Heading>
          <p className={styles.heroSubtitle}>
            <Translate id="homepage.heroSubtitle">
              All Moscow Exchange documentation in one place
            </Translate>
          </p>
          <div className={styles.heroButtons}>
            <Link to="/docs/intro" className={styles.heroButtonPrimary}>
              <Translate id="homepage.getStarted">Get Started</Translate>
            </Link>
            <Link to="/docs/intro" className={styles.heroButtonSecondary}>
              <Translate id="homepage.documentation">Documentation</Translate>
            </Link>
          </div>
        </div>
        <div className={styles.heroDeco}>
          <div className={styles.heroDecoGrid} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
