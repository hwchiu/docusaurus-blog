// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'hwchiu learning note',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hwchiu.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hwchiu', // Usually your GitHub org/user name.
  projectName: 'hwchiu.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/', // Serve the blog at the site's root
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',		
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HWCHIU 學習筆記',
        logo: {
          alt: 'Hwchiu',
          src: 'img/logo.png',
        },
        items: [
          {
	    to: '/about',
            position: 'left',
            label: '我是誰',
          },
	  {
	    to: '/', 
	    label: '短篇筆記',
	    position: 'left',
	    activeBaseRegex: '^/$',
	    },
          {
            type: 'docSidebar',
            sidebarId: 'techPost',
            position: 'left',
            label: '長篇技術文',
          },
          {
	    to: '/course',
            position: 'left',
            label: '線上課程',
          },
          {
	    to: '/public_sharing',
            position: 'left',
            label: '演講紀錄',
          },
          {
            href: 'https://github.com/hwchiu/docusaurus-blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '其他資源',
            items: [
              {
                label: '英文部落格',
                href: 'https://hwchiu.medium.com/',
              },
              {
                label: 'Facebook Page(矽谷牛耕田筆記)',
                href: 'https://www.facebook.com/technologynoteniu',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hw_chiu',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/hung-wei-chiu-52561494/',
              },
            ],
          },
          {
            title: 'Cloud Native Taiwan User Group(CNTUG)',
            items: [
              {
                label: 'Official Site',
                href: 'https://cloudnative.tw/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@cloudnativetaiwanusergroup',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/groups/298183320685010',
              },
              {
                label: 'CNCF Page',
                href: 'https://community.cncf.io/cloud-native-taiwan-user-group/',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/cntug',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} hwchiu. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
   plugins: [require.resolve('docusaurus-lunr-search')],
};

module.exports = config;
