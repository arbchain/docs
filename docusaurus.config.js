module.exports = {
  title: 'Arbchain',
  tagline: 'Arbchain',
  url: 'https://consensolabs.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'consensolabs', // Usually your GitHub org/user name.
  projectName: 'arbchain-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Arbchain',
      logo: {
        alt: 'Arbchain Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/overview',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/consensolabs',
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
              href: 'https://github.com/consensolabs/arbchain-docs',
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
