// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MOEX Docs',
  tagline: 'Documentation',
  favicon: 'img/favicon.svg',
  url: "https://emma-uw.github.io",
  baseUrl: "/moexdocs/",
  organizationName: "emma-uw", 
  projectName: "moexdocs",

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
    localeConfigs: {
      en: {htmlLang: 'en'},
      ru: {htmlLang: 'ru'},
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@cmfcmf/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        language: ['en', 'ru'],
        maxSearchResults: 8,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: 'MOEX Docs',
        logo: {
          alt: 'MOEX Docs',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'ClientsAPI',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'astsSidebar',
                label: 'ASTS',
              },
              {
                type: 'docSidebar',
                sidebarId: 'spectraSidebar',
                label: 'Spectra',
              },
              {
                type: 'docSidebar',
                sidebarId: 'webapiSidebar',
                label: 'WebAPI',
              },
            ],
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} MOEX Docs`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
