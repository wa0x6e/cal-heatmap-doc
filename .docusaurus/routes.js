import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'eff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '2e9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '7f5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '380'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '449'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e39'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '5a3'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'baf'),
    routes: [
      {
        path: '/docs/API/',
        component: ComponentCreator('/docs/API/', 'cf8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/API/addTemplates',
        component: ComponentCreator('/docs/API/addTemplates', '648'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/API/destroy',
        component: ComponentCreator('/docs/API/destroy', '0d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/API/dimensions',
        component: ComponentCreator('/docs/API/dimensions', '5e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/API/extendDayjs',
        component: ComponentCreator('/docs/API/extendDayjs', '12b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/API/fill',
        component: ComponentCreator('/docs/API/fill', 'd38'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/API/navigation/',
        component: ComponentCreator('/docs/API/navigation/', 'fb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/API/navigation/jumpTo',
        component: ComponentCreator('/docs/API/navigation/jumpTo', 'd60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/API/navigation/next',
        component: ComponentCreator('/docs/API/navigation/next', '8f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/API/navigation/previous',
        component: ComponentCreator('/docs/API/navigation/previous', 'b7b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/API/paint',
        component: ComponentCreator('/docs/API/paint', 'b99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/events',
        component: ComponentCreator('/docs/events', '041'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/installation',
        component: ComponentCreator('/docs/getting-started/installation', '490'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/quickstart',
        component: ComponentCreator('/docs/getting-started/quickstart', '4c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/introduction',
        component: ComponentCreator('/docs/introduction', '457'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/migrate_from_v3',
        component: ComponentCreator('/docs/migrate_from_v3', 'd0b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/options/',
        component: ComponentCreator('/docs/options/', 'e19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/options/data',
        component: ComponentCreator('/docs/options/data', '923'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/options/date',
        component: ComponentCreator('/docs/options/date', '5e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/options/domain/',
        component: ComponentCreator('/docs/options/domain/', 'd07'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/options/domain/label',
        component: ComponentCreator('/docs/options/domain/label', '890'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/options/domain/sublabel',
        component: ComponentCreator('/docs/options/domain/sublabel', '23d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/options/itemSelector',
        component: ComponentCreator('/docs/options/itemSelector', '5d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/options/range',
        component: ComponentCreator('/docs/options/range', 'e83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/options/scale',
        component: ComponentCreator('/docs/options/scale', '521'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/options/subDomain',
        component: ComponentCreator('/docs/options/subDomain', 'aac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/options/verticalOrientation',
        component: ComponentCreator('/docs/options/verticalOrientation', '133'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/plugins/',
        component: ComponentCreator('/docs/plugins/', 'd2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/plugins/legend',
        component: ComponentCreator('/docs/plugins/legend', 'a92'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/plugins/tooltip',
        component: ComponentCreator('/docs/plugins/tooltip', 'dd8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/showcase',
        component: ComponentCreator('/docs/showcase', 'ed0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/template',
        component: ComponentCreator('/docs/template', 'df8'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '4e6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
