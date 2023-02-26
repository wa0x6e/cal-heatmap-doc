import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// @ts-ignore
import CalHeatmapComponent from '@site/src/components/CalHeatmapComponent';
import BrowserOnly from '@docusaurus/BrowserOnly';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img
          className="hero-logo"
          src="img/favicon.png"
          alt={`{siteConfig.title} logo`}
        />

        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>

      <div id="hero-example">
        <BrowserOnly>
          {() => {
            return <CalHeatmapComponent />;
          }}
        </BrowserOnly>
        <div id="cal-heatmap-index"></div>
      </div>

      <div className="container">
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started/installation"
          >
            Get started →
          </Link>
          <Link
            className="button button--secondary button--outline  margin-left--md button--lg"
            href="https://github.com/wa0x6e/cal-heatmap"
          >
            <span
              className="github-link margin-right--sm"
              style={{ float: 'left' }}
            ></span>
            Star on Github
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
