// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ShellHub',
  tagline: 'Get seamless remote access to any Linux device',
  url: 'https://docs.shellhub.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/shellhub-io/docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/shellhub-io/docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-168888230-2',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'https://shellhub-openapi-files.nyc3.digitaloceanspaces.com/community-openapi.yaml',
            route: 'developers/openapi/community',
          },
          {
            spec: 'https://shellhub-openapi-files.nyc3.digitaloceanspaces.com/cloud-openapi.yaml',
            route: 'developers/openapi/cloud',
          },
        ],
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff', // TODO: change to ShellHub color.
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'ShellHub',
          src: 'img/logo.png',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            to: 'https://cloud.shellhub.io',
            label: 'ShellHub Cloud',
            position: 'right',
          },  
          {
            href: 'https://github.com/shellhub-io/shellhub/',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ShellHub.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'U0BS9FJALJ',
        apiKey: 'c2ba62069b528a88c6a1f702a0bfcdfb',
        indexName: 'shellhub',
        contextualSearch: true,
        searchParameters: {},
      },
    }),
};

module.exports = config;
