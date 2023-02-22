import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Date locale and timezone support',
    description: (
      <>
        Customize the calendar language, timezone and locale specific setting,
        such as first day of the week
      </>
    ),
  },
  {
    title: 'Animated Date Navigation',
    description: (
      <>Browse the calendar dynamically, or jump to a specific date </>
    ),
  },
  {
    title: 'Time granularity',
    description: (
      <>
        Customize the layout and time interval: years, months, weeks, days,
        hours, minutes, and many more via plugins
      </>
    ),
  },
  {
    title: 'Customizable',
    description: (
      <>
        Customize the UI to your liking: cell size, padding, margin, color, cell
        position, RTL, etc...
      </>
    ),
  },
  {
    title: 'Extensible',
    description: (
      <>Add more functionality to the calendar via a plugin system</>
    ),
  },
  {
    title: 'Typescript and tests',
    description: (
      <>
        Written in typescript, ES6, and fully tested on real browsers via
        Browserstack
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
