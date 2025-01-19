import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'hibara428.github.io',
  tagline: 'hibara428',
  favicon: 'img/favicon.ico',
  url: 'https://hibara428.github.io',
  baseUrl: '/',
  organizationName: 'hibara428',
  projectName: 'hibara428.github.io',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/hibara428/hibara428.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        googleAnalytics: {
          trackingID: 'G-4DQ4RV5MJG',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      hideOnScroll: true,
      title: 'hibara428.github.io',
      items: [
        {
          type: 'doc',
          docId: 'profile',
          label: 'Profile',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'works',
          label: 'Works',
          position: 'left',
        },
        {
          href: 'https://github.com/hibara428',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://note.com/hibara428',
          label: 'note',
          position: 'right',
        },
        {
          href: 'https://x.com/hibara428',
          label: 'X',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Socials',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hibara428',
            },
            {
              label: 'note',
              href: 'https://note.com/hibara428',
            },
            {
              label: 'Zenn',
              href: 'https://zenn.dev/hibara428',
            },
            {
              label: 'X',
              href: 'https://x.com/hibara428',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} hibara428. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
