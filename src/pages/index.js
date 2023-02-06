import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import IndexIntroduce from '../components/index-introduce.js';
import IndexActivity from '../components/index-activity.js';
import IndexContribute from '../components/index-contribute.js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '../css/index.css';
// import styles from './index.module.css';
// import HomepageFeatures from '../components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  return (
    <div class="Outer-layer">
    <div class="homepage-header" id="id-homepage-header">
        <div class="header-font">
            <p class="header-title">
              <Translate>
                Open Source PostgreSQL with Oracle
                compatibility Features
              </Translate>
            </p>
            {/* <p class="header-content">基于PostgreSQL兼容Oracle的开源数据库</p> */}
        <div id="Link" class="Link">
            <Link 
              className="button button--secondary button--lg" 
              id="header-link-getstart"
              to="https://github.com/IvorySQL/IvorySQL">
                <div class="button-font-getstart" id="id-button-font-getstart"><Translate>Get Started</Translate></div>
            </Link>
            <Link 
              className="button button--secondary button--lg" 
              id="header-link-viewmore"
              to="https://github.com/IvorySQL/IvorySQL/blob/master/README.md">
                <div class="button-font-viewmore" id="id-button-font-viewmore"><Translate>View More</Translate></div>
            </Link>
        </div>
      </div>
    </div>
    </div>
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
