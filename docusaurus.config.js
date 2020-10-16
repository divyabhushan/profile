const divyaOnInternet = {
  github: {
    label: "GitHub",
    href: "https://github.com/divyabhushan",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/divyabhushan/",
  },
  medium: {
    label: "Medium",
    href: "https://divya-bhushan.medium.com/",
  },
};

module.exports = {
  title: "Divya Bhushan - Technical Writer",
  tagline:
  "I am a Technical Writer with a passion for interpreting the technology in a simpler way",
  url: "https://github.com/divyabhushan/my-portfolio",
  baseUrl: "/my-portfolio/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "divyabhushan", // Usually your GitHub org/user name.
  projectName: "my-portfolio", // Usually your repo name.
  themeConfig: {
    divyaOnInternet,
    navbar: {
      title: "Divya",
      items: [
        {
          to: "docs/about-me",
          activeBasePath: "docs/about-me",
          label: "About Me",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          to: "docs/tech-docs/docusaurus/docusaurus",
          activeBasePath: "docs/tech-docs",
          label: "Technical Docs",
          position: "right",
          items: [
            {
              type: 'doc',
              docId: 'docs/tech-docs/docusaurus/docusaurus',
              label: "Docusaurus",
              activeSidebarClassName: 'navbar__link--active',
              to: 'docs/tech-docs/docusaurus/docusaurus',
            },
             
            {
              type: 'doc',
              docId: 'docs/tech-docs/visualbi-prods/valq-prod-doc-project',
              label: 'ValQ Product',
              activeSidebarClassName: 'navbar__link--active',
              to: 'docs/tech-docs/visualbi-prods/valq-prod-doc-project',
            },
            {
              type: 'doc',
              docId: 'docs/tech-docs/visualbi-prods/bihub-docs',
              label: 'BI Hub',
              activeSidebarClassName: 'navbar__link--active',
              to: 'docs/tech-docs/visualbi-prods/bihub-docs',
            },
            {
              type: 'doc',
              docId: 'docs/tech-docs/git/git-basics',
              label: 'Git Basics',
              activeSidebarClassName: 'navbar__link--active',
              to: 'docs/tech-docs/git/git-basics',
            },
            {
              type: 'doc',
              docId: 'docs/tech-docs/devops/dockers-vs-vms',
              label: 'Dockers Vs VMs',
              activeSidebarClassName: 'navbar__link--active',
              to: 'docs/tech-docs/devops/dockers-vs-vms',
            },
            {
              type: 'doc',
              docId: 'docs/tech-docs/devops/become-devops-eng',
              label: 'DevOps Roadmap',
              activeSidebarClassName: 'navbar__link--active',
              to: 'docs/tech-docs/devops/become-devops-eng',
            },
            {
              type: 'doc',
              docId: 'docs/tech-docs/devops/devops-interview-qs',
              label: 'DevOps Q/As',
              activeSidebarClassName: 'navbar__link--active',
              to: 'docs/tech-docs/devops/devops-interview-qs',
            },
            {
              type: 'doc',
              docId: 'docs/tech-docs/data-science/how-to-get-ds-jobs',
              label: 'Datascience Jobs',
              activeSidebarClassName: 'navbar__link--active',
              to: 'docs/tech-docs/data-science/how-to-get-ds-jobs',
            },
            {
              type: 'doc',
              docId: 'docs/tech-docs/data-science/what-is-a-ds',
              label: 'Data Scientist',
              activeSidebarClassName: 'navbar__link--active',
              to: 'docs/tech-docs/data-science/what-is-a-ds',
            },
            {
              type: 'doc',
              docId: 'docs/tech-docs/data-science/sd-ds',
              label: 'Software Developer to Data Scientist',
              activeSidebarClassName: 'navbar__link--active',
              to: 'docs/tech-docs/data-science/sd-ds',
            },
            {
              type: 'doc',
              docId: 'docs/tech-docs/data-science/ai-vs-hi',
              label: 'AI Vs Human Intelligence',
              activeSidebarClassName: 'navbar__link--active',
              to: 'docs/tech-docs/data-science/ai-vs-hi',
            },
            
          ],
        },
        
        { to: "portfolio", label: "Portfolio", position: "left" },
        {
          href: "https://github.com/divyabhushan",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `
      <p style="float:center">Copyright © ${new Date().getFullYear()} Divya Bhushan.</p>
      `,
//      <div style="float:right">
//         <a href="https://github.com/divyabhushan" target="_blank"><img src="img/github.png"></a>
//         <a href="https://www.linkedin.com/in/divyabhushan/" target="_blank"><img src="img/linkedin.png"></a>
//         <a href="https://divya-bhushan.medium.com/" target="_blank"><img src="img/medium.png"></a>
//         </div>
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
