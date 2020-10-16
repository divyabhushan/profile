module.exports = {
    someSidebar: {
        "Profile": ["about-me", "experience"],
    },
    TechDocs: {
        "Technical Documentation": [
            {
                type: "category",
                label: "Docusaurus - Static site",
                items: ["tech-docs/docusaurus/docusaurus"],

            },
            {
                type: "category",
                label: "VisualBI Products",
                items: [
                    "tech-docs/visualbi-prods/valq-prod-doc-project",
                    "tech-docs/visualbi-prods/valq-new",
                    "tech-docs/visualbi-prods/bihub-docs",
                ]
            },
            {
                type: "category",
                label: "Git",
                items: ["tech-docs/git/git-basics"
                ]
            },
            {
                type: "category",
                label: "DevOps",
                items: [
                    "tech-docs/devops/dockers-vs-vms",
                    "tech-docs/devops/become-devops-eng",
                    "tech-docs/devops/devops-interview-qs",
                ]
            },
            {
                type: "category",
                label: "Data Science",
                items: [
                    "tech-docs/data-science/how-to-get-ds-jobs",
                    "tech-docs/data-science/what-is-a-ds",
                    "tech-docs/data-science/sd-ds",
                    "tech-docs/data-science/ai-vs-hi",
                ]
            },
        ],
    },
};
