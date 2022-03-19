module.exports = {
  title: "Divya Bhushan",
  tagline: "Technical Writer",
  url: "https://github.com/divyabhushan/profile",
  baseUrl: '/profile/',
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "divyabhushan", // Usually your GitHub org/user name.
  projectName: "profile", // Usually your repo name.
  plugins: [ [ '@docusaurus/plugin-google-analytics', { id: 'my-portal' } ] ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    googleAnalytics: {
      trackingID: 'UA-139623144-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: "Home",
      items: [
        {
          to: "docs/synopsis",
          activeBasePath: "docs/synopsis",
          label: "Synopsis",
          position: "left",
        },
        { to: "history", label: "Job History", position: "left" },
        { to: "techDocs", label: "Technical Documentation", position: "left" },
        { to: "articles", label: "My Articles", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      copyright: `
      <div class="footer">
      <p style="float:left">
      Built with Docusaurus and powered by JSX and React!!!
      </p>
      <p style="float:right">
      <a href="https://www.linkedin.com/in/divyabhushan/" target="_blank" style="padding-left:10px"/><img src="https://github.com/divyabhushan/my-portfolio/blob/gh-pages/img/linkedin.png?raw=true" width="40"/></a>
      <a href="https://divya-bhushan.medium.com/" target="_blank" style="padding-left:10px"><img src="https://github.com/divyabhushan/my-portfolio/blob/gh-pages/img/medium.png?raw=true" width="40"></a>
      <a href="https://github.com/divyabhushan"><img src="https://raw.githubusercontent.com/divyabhushan/my-portfolio/gh-pages/img/github.svg" width="40"></a>      
      <p>
      </div>
      `,
      //         <a href="https://github.com/divyabhushan" target="_blank"><img src="https://github.com/"></a>
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
