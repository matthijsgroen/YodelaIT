// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kabisa - Levenslied",
  tagline: "Code was nog nooit zo begrijpelijk",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://levenslied.kabisa.nl/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  scripts: [
     { src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'levenslied.kabisa.nl'},
  ]

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "matthijsgroen", // Usually your GitHub org/user name.
  projectName: "matthijsgroen.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "nl",
    locales: ["nl"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/levenslied-social-card.jpg",
      navbar: {
        title: "Levenslied",
        logo: {
          alt: "Levenslied logo",
          src: "img/logo.svg",
        },
        items: [
          {
            position: "left",
            to: "/docs",
            label: "Documentatie",
          },
          { to: "/probeer-het", label: "Probeer het zelf", position: "left" },
          { to: "/veel-gestelde-vragen", label: "Vragen?", position: "left" },
          {
            href: "https://kabisa.nl",
            label: "Kabisa",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentatie",
            items: [
              {
                label: "Leer de taal",
                to: "/docs",
              },
              {
                label: "Use cases",
                to: "/docs/use-cases",
              },
              {
                label: "Veel gestelde vragen",
                to: "/veel-gestelde-vragen",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/levenslied",
              },
              {
                label: "Meetup locaties",
                href: "https://www.google.nl/maps/search/Karaoke+bar/",
              },
              {
                label: "Twitter / X",
                href: "https://twitter.com/kabisasoftware",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Kabisa",
                href: "https://kabisa.nl",
              },
              {
                label: "+31 (0) 495 430 798",
                href: "tel:0031495430798",
              },
              {
                label: "info@kabisa.nl",
                href: "mailto:info@kabisa.nl",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kabisa.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // announcementBar: {
      //   id: "announcementBar-3", // Increment on change
      //   content: `🤪 Deze site was de 1 April 2024 grap van <a target="_blank" href="https://kabisa.nl"/>Kabisa</a> 🥳️`,
      // },
    }),
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

module.exports = config;
