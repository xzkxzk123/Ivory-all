// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// import gitHub from 'svg/icon-github.svg';
// import Link from '@docusaurus/Link';
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'activity',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'activity',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './activity',
      },
    ],
  ],
};
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IvorySQL',
  tagline: 'Open Source Oracle compatible PostgreSQL',
  url: 'https://ivorySQL.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'IvorySQL', // Usually your GitHub org/user name.
  // projectName: 'ivory-www', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          versions: {
            current: {label: 'Devel',},
          },
          sidebarPath: require.resolve('./sidebars.js'),
//          editUrl: 'https://github.com/IvorySQL/Ivory-www/tree/main/docs',
          editCurrentVersion: false,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'IvorySQL Blogs',
          // Please change this to your repo.
//          editUrl: 'https://github.com/IvorySQL/Ivory-www/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },
  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'IvorySQL Logo',
          src: 'img/logo-black.svg',
        },
        items: [
          // {
          //   label: 'Docs',
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left'
          // },
          {
            label: 'Docs',
            to: '/docs/next/intro',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            label: 'Download',
            href: 'https://github.com/IvorySQL/IvorySQL/releases',
            position: 'left'
          },
          {
            label: 'Releases',
            to: '/release',
            position: 'left'
          }, 
          {
            type: 'dropdown',
            position: 'left',
            label: 'Resources',
            items: [
              {
                label: 'Webinars',
                to: '/webinars-page',
              },
              {
                label: 'Partners',
                to: '/partners-page',
              },
              {
                label: 'Customer Story',
                href: '/customer-stories-page',
              },
              {
                label: 'Cases Studies',
                to: '/contribution-guidelines',
              },
              // {
              //   to: '/docs/Compatibillity_Features/oneday-page',
              //   label: 'Activity', 
              // },
              {
                label: 'Docs',
                to: '/docs/next/intro',
              },
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Community',
            items: [
              {
                label: 'Code of Conduct',
                to: '/webinars-page',
              },
              {
                label: 'Mail list',
                to: '/partners-page',
              },
              {
                label: 'Contribute',
                to: 'customer-stories-page',
              },
              {
                label: 'Shareing',
                to: '/contribution-guidelines',
              },
              {
                label: 'Discuss',
                to: '/contribution-guidelines',
              },
              {
                label: 'Subscribe',
                to: '/contribution-guidelines',
              },
            ]
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            nextVersionLabel: 'Devel',
          },

          //Right Side Items
          {
             href:'https://github.com',
             position:'right',
             className:'github',
          },

          {
            type: 'localeDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            id: 'localeDropdown',
          },
          {
            to: 'https://github.com/IvorySQL/IvorySQL',
            label: 'Try for Free',
            position: 'right',
            className: 'Try-for-Free',
            id: 'TtyForFree',
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'About Us',
            items: [
              {
                label: 'About IvorySQL',
                href: 'https://github.com/IvorySQL/IvorySQL#readme',
              },
              {
                label: 'About HGDB',
                to: 'https://www.highgo.com/',
              },
              {
                label: 'Legal Notices',
                to: '/blog',
              },
              {
                label: 'Problem Feedback',
                to: 'https://github.com/IvorySQL/IvorySQL/issues/new/choose',
              },
            ],
          },
          {
            title: 'Learning',
            items: [
              {
                label: 'Docs',
                href: '/docs/next/intro',
              },
              {
                label: 'Blogs',
                href: '/Blog',
              },
              {
                label: 'Downloads',
                href: '/release',
              },
              {
                label: 'Quick Starts',
                href: '/',
              },
              {
                label: 'Release Notes',
                href: '/ivorysql-v1-5-release-page',
              },
              {
                label: 'Webinars',
                href: '/webinars-page',
              },
              {
                label: 'Partners',
                href: '/partners-page',
              },
              {
                label: 'Cases Studies',
                href: '/contribution-guidelines',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Join Us',
                href: '/',
              },
              {
                label: 'Contribute Documents',
                href: '/blog',
              },
              {
                label: 'Github',
                href: 'https://github.com/IvorySQL/IvorySQL',
              },
              {
                label: 'Gitee',
                href: 'https://gitee.com/IvorySQL/',
              },
              {
                label: 'Latest Events',
                href: '/',
              },
            ],
          },
          {
            title:' ',
            items:[
              {
                html:`<div class="air"></div>`
              },
            ]
          },
          {
            title: ' ',
            items: [
              {
                 html: `
                  <div class="other-footer">
                    <div class="other-footer-title">Subscribe to Our Newsletter</div>
                      <a href="https://lists.ivorysql.org/postorius/lists" id="other-footer-link">
                          <span class="other-footer-linkspan">Subscribe</span>
                      </a>
                    <div class="other-footer-font">
                      <span class="other-footer-font-left">提交即表示您同意</span>
                      <span class="other-footer-font-right">IvorySQL的隐私政策</span>
                    </div>
                    <div class="other-footer-allsvg">
                      <div class="other-footer-svg">
                        <a href="https://github.com/IvorySQL/IvorySQL" class="other-footer-svg-link">
                          <div class="backgruond-github"></div>
                        </a>
                      </div>
                      <div class="other-footer-svg">
                        <a href="https://twitter.com/ivorysql" class="other-footer-svg-link">
                          <div class="backgruond-twitter"></div>
                        </a>
                      </div>
                      <div class="other-footer-svg">
                        <a href="https://slack.com/intl/zh-cn/" class="other-footer-svg-link">
                          <div class="backgruond-slack"></div>
                        </a>
                      </div>
                      <div class="other-footer-svg">
                        <a href="https://www.linkedin.com/company/ivorysql/" class="other-footer-svg-link">
                          <div class="backgruond-lingying"></div>
                        </a>
                      </div>
                      <div class="other-footer-svg">
                        <a href="./blog" class="other-footer-svg-link">
                          <div class="backgruond-weixin"></div>
                        </a>
                      </div>
                      <div class="other-footer-svg">
                        <a href="https://space.bilibili.com/1630654283?spm_id_from=333.1007.0.0" class="other-footer-svg-link">
                          <div class="backgruond-bilibili"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                    <div class="footer__copyright">Copyright © ${new Date().getFullYear()} IvorySQL.</div>
                  `
              },  
            ]
          },
        ],
      },
    }),
};
module.exports = config;