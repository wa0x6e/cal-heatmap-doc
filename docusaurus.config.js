// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cal-Heatmap',
  tagline:
    'Cal-Heatmap is a javascript charting library to create a time-series calendar heatmap',
  url: 'https://wa0x6e.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wa0x6e', // Usually your GitHub org/user name.
  projectName: 'cal-heatmap-doc', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/wa0x6e/cal-heatmap-doc/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/wa0x6e/cal-heatmap-doc/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'beta_doc',
      //   content:
      //     'Documentation is for <b>v4.0.0-Beta</b>, API and options are not final',
      //   backgroundColor: '#ffebec',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      navbar: {
        title: 'Cal-Heatmap',
        logo: {
          alt: 'Cal-Heatmap',
          src: 'img/favicon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/installation',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/docs/options',
            position: 'left',
            label: 'Options',
          },
          {
            to: '/docs/api',
            position: 'left',
            label: 'API',
          },
          {
            to: 'docs/plugins',
            position: 'left',
            label: 'Plugins',
          },
          {
            type: 'doc',
            docId: 'showcase',
            position: 'left',
            label: 'Showcase',
          },
          {
            type: 'doc',
            docId: 'faq',
            position: 'left',
            label: 'FAQ',
          },
          {
            type: 'dropdown',
            label: 'v4.0.0',
            position: 'right',
            items: [
              {
                html: 'v3.1.6 <small>(deprecated)</small>',
                href: 'https://cal-heatmap.com/v3/index.html',
              },
              {
                html: 'v2.2.3 <small>(eol)</small>',
                href: 'https://cal-heatmap.com/v2/index.html',
              },
            ],
          },
          {
            href: 'https://github.com/wa0x6e/cal-heatmap',
            position: 'right',
            className: 'github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/wa0x6e/cal-heatmap',
          //     },
          //   ],
          // },
        ],
        copyright: `${new Date().getFullYear()} Cal-Heatmap  •  Released under MIT Licence`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'PL83U8ZEQT',

        // Public API key: it is safe to commit it
        apiKey: 'f1243046c0848c674e1f233a5e7729e8',

        indexName: 'cal-heatmap',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'cal-heatmap\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    }),

  scripts: [
    'https://d3js.org/d3.v7.min.js',
    'https://unpkg.com/@popperjs/core@2',
    '/js/cal-heatmap.min.js',
    '/js/Tooltip.min.js',
    '/js/Legend.min.js',
    '/js/LegendLite.min.js',
  ],
  stylesheets: ['/css/cal-heatmap.css'],
};

module.exports = config;
