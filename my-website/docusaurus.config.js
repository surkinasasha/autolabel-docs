// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

// Импорт плагина PlantUML (как в примере)
import simplePlantUML from '@akebifiky/remark-simple-plantuml';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AutoLabel Platform Docs',
  tagline: 'Документация сервиса автоматической разметки изображений',
  favicon: 'img/favicon.ico',

  url: 'https://surkinasasha.github.io',
  baseUrl: '/autolabel-docs/',
  organizationName: 'surkinasasha',
  projectName: 'autolabel-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  plugins: [
    // Плагин drawio (как в образце)
    ['drawio', {}],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/surkinasasha/autolabel-docs/tree/main/',
          remarkPlugins: [simplePlantUML],  // ← просто массив, без обёртки
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    // Redocusaurus — отдельным пресетом
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'autolabel-api',
            spec: 'api/autolabel-api.yaml',
            route: '/api/autolabel-api',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AutoLabel Docs',
        logo: {
          alt: 'AutoLabel Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',          // вместо типа docSidebar
            position: 'left',
            label: 'Документация',
          },
          {
            to: '/api/autolabel-api', // именно так, через 'to'
            label: 'API',
            position: 'left',
          },
          {
            href: 'https://github.com/surkinasasha/autolabel-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} AutoLabel.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;