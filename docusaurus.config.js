// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XDEV Docs',
  tagline: 'XDEVELOPMENT Documentions',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://xdev-docs.pages.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','tr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
  navbar: {
    title: 'XDEVELOPMENT',
    logo: {
      alt: 'XDEVELOPMENT',
      src: 'img/logo.svg',
    },
    items: [
      // Main Docs entry (home of docs)
      {
        type: 'docSidebar',
        sidebarId: 'tutorialSidebar',
        position: 'left',
        label: 'Docs',
      },

      // Products dropdown (grow-friendly)
      {
        type: 'dropdown',
        label: 'Products',
        position: 'left',
        items: [
          // POSDEVICE docs
          {
            label: 'POSDEVICE',
            to: '/docs/posdevice', // değiştir: POSDEVICE giriş sayfan hangisiyse
          },

          // future products (placeholders)
          {
            label: 'Banking (soon)',
            to: '/docs/coming-soon', // istersen sonra oluştururuz
          },
          {
            label: 'Garage (soon)',
            to: '/docs/coming-soon',
          },
        ],
      },

      // Optional: Changelog / FAQ quick links
      { to: '/docs/faq', label: 'FAQ', position: 'left' },

      // Right side links
      {
        href: 'https://discord.gg/xdevelopment',
        label: 'Discord',
        position: 'right',
      },
      {
        href: 'https://xdev.tebex.io', // <- kendi Tebex linkinle değiştir
        label: 'Tebex',
        position: 'right',
      },
      {
        href: 'https://github.com/XLIFEDV', // <- varsa org/user
        label: 'GitHub',
        position: 'right',
      },
    ],
  },

  footer: {
    style: 'dark',
    links: [
      {
        title: 'Products',
        items: [
          { label: 'POSDEVICE', to: '/docs/intro' },
          { label: 'Banking (soon)', to: '/docs/coming-soon' },
          { label: 'Garage (soon)', to: '/docs/coming-soon' },
        ],
      },
      {
        title: 'Documentation',
        items: [
          { label: 'Getting Started', to: '/docs/intro' },
          { label: 'Installation', to: '/docs/installation' },
          { label: 'Configuration', to: '/docs/config/general' },
          { label: 'FAQ', to: '/docs/faq' },
        ],
      },
      {
        title: 'Community',
        items: [
          { label: 'Discord Support', href: 'https://discord.gg/xdevelopmentv' },
          { label: 'Report an Issue', href: 'https://github.com/XLIFEDV' }, // istersen repo issue linki yap
        ],
      },
      {
        title: 'More',
        items: [
          { label: 'Tebex Store', href: 'https://xdev.tebex.io' },
          { label: 'XDEVELOPMENT', href: 'https://discord.gg/xdevelopment' }, // domain yoksa burayı discord yapabiliriz
        ],
      },
    ],
    copyright:
      `Copyright © ${new Date().getFullYear()} XDEVELOPMENT. All rights reserved.`,
  },
}
};

export default config;
