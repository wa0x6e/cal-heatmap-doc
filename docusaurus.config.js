// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cal-Heatmap',
  tagline: 'Cal-Heatmap is a javascript library to create a calendar heatmap',
  url: 'https://wa0x6e.github.io/',
  baseUrl: '/cal-heatmap-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      announcementBar: {
        id: 'beta_doc',
        content:
          'Documentation is for <b>v4.0.0-Beta</b>, some section may still be incomplete',
        backgroundColor: '#ffebec',
        textColor: '#091E42',
        isCloseable: false,
      },
      navbar: {
        title: 'Cal-Heatmap',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
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
            docId: 'template',
            position: 'left',
            label: 'Template',
          },
          {
            type: 'doc',
            docId: 'showcase',
            position: 'left',
            label: 'Showcase',
          },
          {
            type: 'dropdown',
            label: 'v4.0.0-beta 🚧',
            position: 'right',
            items: [
              {
                html: 'v3.1.6 <small>(deprecated)</small>',
                href: 'https://cal-heatmap.com/v3/index.html',
              },
              {
                html: 'v2.2.3 <small>(dead)</small>',
                href: 'https://cal-heatmap.com/v2/index.html',
              },
            ],
          },
          {
            href: 'https://github.com/wa0x6e/cal-heatmap',
            label: 'GitHub',
            position: 'right',
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
        copyright: `Copyright © ${new Date().getFullYear()} Cal-Heatmap`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  scripts: ['https://d3js.org/d3.v7.min.js', '/js/cal-heatmap.min.js'],
  stylesheets: ['/css/cal-heatmap.css'],
};

module.exports = config;
