
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
  organizationName: 'XLIFEDV',
  projectName: 'xdev-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
      {
        type: 'docSidebar',
        sidebarId: 'tutorialSidebar',
        position: 'left',
        label: 'Docs',
      },

      {
        type: 'dropdown',
        label: 'Products',
        position: 'left',
        items: [
          {
            label: 'POSDEVICE',
            to: '/docs/posdevice/main'
          },

          {
            label: 'Banking (soon)',
            to: '/docs/coming-soon'
          },
          {
            label: 'Garage (soon)',
            to: '/docs/coming-soon'
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
