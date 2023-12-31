// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'hwchiu learning note',
  tagline: 'Moooo',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.hwchiu.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hwchiu', // Usually your GitHub org/user name.
  projectName: 'hwchiu.github.io', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

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
	  showLastUpdateAuthor: true,
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
	gtag: {
          trackingID: 'G-XCGL7X3W07',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      algolia: {
        // The application ID provided by Algolia
        appId: 'L4HXL74VLW',

        // Public API key: it is safe to commit it
        apiKey: '33cc603147b4010328c27fa832d88d3c',

        indexName: 'hwchiu',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },        
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
	    to: '/tags', 
	    label: '短篇筆記-分類',
	    position: 'left',
	  },
          {
            type: 'docSidebar',
            sidebarId: 'techPost',
            position: 'left',
            label: '長篇技術文',
          },
	  {
	    to: '/docs/tags', 
	    label: '長篇技術文-分類',
	    position: 'left',
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
};

module.exports = config;
