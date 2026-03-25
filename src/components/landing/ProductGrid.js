import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';

import styles from './landing.module.css';

const DOC_CARDS = [
  {
    titleId: 'homepage.card.asts.title',
    titleDefault: 'ASTS Bridge Interfaces',
    descId: 'homepage.card.asts.desc',
    descDefault: 'Bridge interfaces for the ASTS automated trading system.',
    to: '/docs/asts/intro',
  },
  {
    titleId: 'homepage.card.spectra.title',
    titleDefault: 'Spectra',
    descId: 'homepage.card.spectra.desc',
    descDefault: 'Spectra derivatives market documentation.',
    to: '/docs/spectra/intro',
  },
  {
    titleId: 'homepage.card.webapi.title',
    titleDefault: 'WebAPI',
    descId: 'homepage.card.webapi.desc',
    descDefault: 'REST API for market data and trading.',
    to: '/docs/webapi/intro',
  },
  {
    titleId: 'homepage.card.docs.title',
    titleDefault: 'Documentation',
    descId: 'homepage.card.docs.desc',
    descDefault: 'General documentation and getting started guides.',
    to: '/docs/intro',
  },
];

export default function ProductGrid() {
  return (
    <section className={styles.sectionCards}>
      <Heading as="h2" className={styles.sectionCardsTitle}>
        <Translate id="homepage.sectionCardsTitle">Documentation sections</Translate>
      </Heading>
      <div className={styles.cardsGrid}>
        {DOC_CARDS.map((card) => (
          <Link key={card.to} to={card.to} className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                <Translate id={card.titleId}>{card.titleDefault}</Translate>
              </h3>
              <p className={styles.cardDescription}>
                <Translate id={card.descId}>{card.descDefault}</Translate>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
