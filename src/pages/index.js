import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import IndexIntroduce from '../components/index-introduce.js';
import IndexActivity from '../components/index-activity.js';
import IndexContribute from '../components/index-contribute.js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import '../css/index.css';
import styles from './index.module.css';
// import HomepageFeatures from '../components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';
import Elephant from '../../svg/img-elephant-balloon.svg';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div class="row">

          <div className={styles.heroCenterImage}>
          <h1 className="hero__title"><Translate>IvorySQL</Translate></h1>
        <p className="hero__subtitle"><Translate>Open Source Oracle compatible PostgreSQL</Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/IvorySQL/IvorySQL/blob/master/README.md">
            <Translate>Learn More</Translate>
          </Link>
        </div>

          </div>
          <div className={styles.heroRightImage}>
            <Elephant></Elephant>
          </div>
        </div>
      </div>
    </header>
  );
}
                                          
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      id="Ivory"
      description="Open Source Oracle compatible PostgreSQL">
      <main>
      <HomepageHeader></HomepageHeader>
      <IndexIntroduce></IndexIntroduce>
      <IndexActivity></IndexActivity>
      <IndexContribute></IndexContribute>
      </main>
    </Layout>
  );
}
