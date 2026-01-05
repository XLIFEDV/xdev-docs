
/** @type {import('@docusaurus/types').Config} */
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
      en:{label:'English'},
      tr:{label:'Türkçe'}
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
  navbar: {
    title: 'XDEVELOPMENT',
    logo: {
      alt: 'XDEVELOPMENT',
      src: 'img/logo.svg'
    },
    items: [
      // {
      //   type: 'docSidebar',
      //   sidebarId: 'tutorialSidebar',
      //   position: 'left',
      //   label: 'Docs',
      // },

      {
        type: 'dropdown',
        label: 'Products',
        position: 'left',
        items: [
          {
            label: 'POSDEVICE',
            to: '/posdevice/main'
          },
        ],
      },

      { to: '/faq', label: 'FAQ', position: 'left' },

      {
        href: 'https://discord.gg/xdevelopment',
        label: 'Discord',
        position: 'right',
      },
      {
        href: 'https://xdev.tebex.io',
        label: 'Tebex',
        position: 'right',
      },
      {
        type:'localeDropdown',
        position:'right'
      }
    ]
  },

  footer: {
    style: 'dark',
    links: [
      {
        title: 'Products',
        items: [
          { label: 'POSDEVICE', to: '/posdevice/main' }
        ],
      },
      {
        title: 'More',
        items: [
          { label: 'Tebex Store', href: 'https://xdev.tebex.io' },
          { label: 'Discord Support', href: 'https://discord.gg/xdevelopment'}
        ],
      },
    ],
    copyright:
      `Copyright © ${new Date().getFullYear()} XDEVELOPMENT. All rights reserved.`,
  },
}
};

export default config;
