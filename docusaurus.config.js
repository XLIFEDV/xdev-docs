/** @type {import('@docusaurus/types').Config} */
const generated = require(`./generated.links.json`);

const config = {
  title: 'XDEV Docs',
  tagline: 'XDEVELOPMENT Documentions',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://xdev-docs.pages.dev',
  baseUrl: '/',

  organizationName: 'XDEVELOPMENT',
  projectName: 'xdev-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    localeConfigs: {
      en: { label: 'English' },
      tr: { label: 'Türkçe' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'XDEVELOPMENT',
      logo: { alt: 'XDEVELOPMENT', src: 'img/logo.png' },
      items: [
        { to: '/overview', label: 'Documentions', position: 'left' },

        { type: 'dropdown', label: 'Cars', items: generated.cars },
        { type: 'dropdown', label: 'Scripts', items: generated.scripts },

        { to: '/faq', label: 'FAQ', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        { title: 'Cars', items: generated.cars },
        { title: 'Scripts', items: generated.scripts },
        {
          title: 'More',
          items: [
            { to: '/overview', label: 'Documentions' },
            { to: '/faq', label: 'FAQ' },
          ],
        },
        {
          title: 'Contact',
          items: [
            { label: 'Tebex Store', href: 'https://xdev.tebex.io' },
            { label: 'Discord Support', href: 'https://discord.gg/xdevelopment' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XDEVELOPMENT. All rights reserved.`,
    },
  },
};

module.exports = config;
