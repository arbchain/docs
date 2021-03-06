module.exports = {
  title: 'Arbchain',
  tagline: 'A DLT based arbitration platform',
  url: 'https://arbchain.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'arbchain', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  onBrokenLinks: 'ignore',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Arbchain Logo',
        src: 'img/logo.svg',
        srcDark: 'img/darkLogo.svg',
      },
      items: [
        {
          to: 'blog',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://arbchain.consensolabs.com',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://github.com/arbchain',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: 'docs/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/arbchain',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/consensolabs',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/consensolabs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/arbchain/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Consenso Labs, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
              'https://github.com/arbchain/docs/edit/master/',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
