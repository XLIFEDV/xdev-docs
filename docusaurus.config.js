/** @type {import('@docusaurus/types').Config} */
const generated = require(`./generated.links.json`);

const config = {
  title: 'XDEV Docs',
  tagline: 'XDEVELOPMENT Documentions',
  favicon: 'img/favicon.png',

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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
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
      title: '',
      logo: {
        alt: "XDEVELOPMENT",
        src: "img/xdev.png", // sende neyse
        href: "https://xdevelopment.dev",           // docs ana sayfana gitsin
      },
      items: [
        { type: 'localeDropdown', position: 'right' },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        { title: 'VEHICLES', items: generated.vehicles },
        { title: 'SCRIPTS', items: generated.scripts },
        {
          title: 'MORE',
          items: [
            { to: '/', label: 'DOCUMENTATIONS' },
            { to: '/faq', label: 'FAQ' },
          ],
        },
        {
          title: 'CONTACT',
          items: [
            { label: 'Website', href: 'https://xdevelopment.dev' },
            { label: 'Tebex Store', href: 'https://shop.xdevelopment.dev' },
            { label: 'Discord Support', href: 'https://discord.gg/xdevelopment' },
            { label: 'Youtube', href: 'https://youtube.com/@xdev.development' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XDEVELOPMENT. All rights reserved.`,
    },
  },
};

module.exports = config;
