import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

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
        <div id="cal-heatmap-index-toolbar">
          <div className="group-buttons">
            <a
              id="index-zoom-out"
              href=""
              title="Zoom out"
              className="button button--secondary button--secondary button--sm padding-vert--xs padding-horiz--sm"
            >
              -
            </a>
            <a
              id="index-zoom-in"
              href=""
              title="Zoom in"
              className="button button--secondary button--secondary button--sm padding-vert--xs padding-horiz--sm"
            >
              +
            </a>
          </div>
          <div>
            <h4>Seattle mininum temperature (°C)</h4>
          </div>
          <div className="group-buttons">
            <a
              title="Previous"
              id="index-previous"
              href="#"
              className="button button--secondary button--secondary button--sm padding-vert--xs padding-horiz--sm"
            >
              ‹
            </a>
            <a
              title="Next"
              id="index-next"
              href=""
              className="button button--secondary button--secondary button--sm padding-vert--xs padding-horiz--sm"
            >
              ›
            </a>
          </div>
        </div>
        <div id="cal-heatmap-index"></div>
        <div id="cal-heatmap-index-footer">
          <small>Data may not be available for all timeframes</small>
        </div>
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
