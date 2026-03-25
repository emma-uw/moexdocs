import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

import styles from './landing.module.css';

const FEATURES = [
  {
    titleId: 'homepage.feature.official.title',
    titleDefault: 'Official',
    descId: 'homepage.feature.official.desc',
    descDefault: 'Documentation sourced from Moscow Exchange.',
  },
  {
    titleId: 'homepage.feature.complete.title',
    titleDefault: 'Complete',
    descId: 'homepage.feature.complete.desc',
    descDefault: 'All ClientsAPI documentation in one place.',
  },
  {
    titleId: 'homepage.feature.bilingual.title',
    titleDefault: 'Bilingual',
    descId: 'homepage.feature.bilingual.desc',
    descDefault: 'Available in Russian and English.',
  },
];

export default function ValueProps() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresInner}>
        {FEATURES.map((feature) => (
          <div key={feature.titleId} className={styles.feature}>
            <h3 className={styles.featureTitle}>
              <Translate id={feature.titleId}>{feature.titleDefault}</Translate>
            </h3>
            <p className={styles.featureDescription}>
              <Translate id={feature.descId}>{feature.descDefault}</Translate>
            </p>
          </div>
        ))}
      </div>
      <p className={styles.moexLink}>
        <Link to="https://www.moex.com/" className={styles.moexLinkAnchor}>
          <Translate id="homepage.moexLink">Moscow Exchange</Translate>
        </Link>
      </p>
    </section>
  );
}
