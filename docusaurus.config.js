
/** @type {import('@docusaurus/types').Config} */
const generated = require('./generated.links.json');
const { translate } = require("@docusaurus/Translate");
const t = (id, fallback) => translate({ id, message: fallback });

const localizeItems = (items) =>
  items.map((x) => ({
    ...x,
    label: x.labelKey ? t(x.labelKey, x.label) : x.label,
  }));


const config = {
  title: 'XDEV Docs',
  tagline: 'XDEVELOPMENT Documentions',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://xdev-docs.pages.dev',
  baseUrl: '/',
  organizationName: 'XDEVELOPMENT',
  projectName: 'xdev-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en','tr'],
    localeConfigs:{
      en:{
        label:'English'
      },
      tr:{
        label:'Türkçe'
      }
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
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
    logo: {
      alt: 'XDEVELOPMENT',
      src: 'img/logo.png'
    },
    items: [
      { to: '/overview', label: t('nav.docs', 'Documentions'), position: 'left' },
      {
        type: 'dropdown',
        label: t('config.cars', 'Cars'),
        items: localizeItems(generated.cars),
      },
      {
        type: 'dropdown',
        label: t('config.scripts', 'Scripts'),
        items: localizeItems(generated.scripts),
      },
      { to: '/faq', label: t('config.faq', 'FAQ'), position: 'right' },
      {
        type: 'localeDropdown',
        position: 'right',
      }
    ]
  },

  footer: {
    style: 'dark',
    links: [
      {
        title: t('config.cars', 'Cars'),
        items: localizeItems(generated.cars),
      },
      {
        title: t('config.scripts', 'Scripts'),
        items: localizeItems(generated.scripts),
      },
      {
        title: t('config.more', 'More'),
        items: [
          { to: '/overview', label: t('config.docs', 'Documentions')},
          { to: '/faq', label: t('config.faq', 'FAQ')}
        ]
      },
      {
        title: t('config.contact', 'Contact'),
        items: [
          { label: t('config.tebex', 'Tebex Store'), href: 'https://xdev.tebex.io' },
          { label: t('config.discord', 'Discord Support'), href: 'https://discord.gg/xdevelopment'}
        ],
      },
    ],
    copyright:`Copyright © ${new Date().getFullYear()} `+t('config.copyright', `XDEVELOPMENT. All rights reserved.`),
  },
}
};

export default config;
