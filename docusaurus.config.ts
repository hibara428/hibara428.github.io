import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { renderToString } from 'react-dom/server';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { SiZenn } from 'react-icons/si';
import { IconBaseProps } from 'react-icons';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const iconStyle: IconBaseProps = {
  style: { display: 'flex', alignItems: 'center', fontSize: '1.2rem' },
};
const iconWrapper = (iconHtml: string, title: string) =>
  `<span title="${title}">${iconHtml}</span>`;
const githubIconHtml = iconWrapper(
  renderToString(FaGithub(iconStyle)),
  'GitHub'
);
const zennIconHtml = iconWrapper(renderToString(SiZenn(iconStyle)), 'Zenn');
const xIconHtml = iconWrapper(renderToString(FaSquareXTwitter(iconStyle)), 'X');

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

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-4DQ4RV5MJG',
        anonymizeIP: true,
      },
    ],
  ],

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
          to: '/profile',
          label: 'Profile',
          position: 'left',
        },
        {
          to: '/works',
          label: 'Works',
          position: 'left',
        },
        {
          href: 'https://github.com/hibara428',
          html: githubIconHtml,
          position: 'right',
        },
        {
          href: 'https://note.com/hibara428',
          label: 'note',
          position: 'right',
        },
        {
          href: 'https://zenn.dev/hibara428',
          html: zennIconHtml,
          position: 'right',
        },
        {
          href: 'https://x.com/hibara428',
          html: xIconHtml,
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} hibara428. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
