/** @type {import('@docusaurus/types').Config} */
const generated = require(`./generated.links.json`);

const config = {
  title: 'XDEV Docs',
  tagline: 'XDEVELOPMENT Documentions',
  favicon: 'img/favicon.png',

  future: { v4: true },

  url: 'https://docs.xdevelopment.dev',
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
    image:'img/og.png',
    metadata: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'theme-color', content: '#AE3C46' },
    ],
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
          title: 'CONTACT',
          items: [
            { label: 'Community & Links', to: '/contact/links' },
            { label: 'Official Email Addresses', to: '/contact/emails' },
            { label: 'Documentations', to: '/' },
            { label: 'FAQ', to: '/contact/faq' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XDEVELOPMENT. All rights reserved.`,
    },
  },
};

module.exports = config;
