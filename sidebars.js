module.exports = {
    someSidebar: {
        "Profile": ["about-me", "experience"],
    },
    TechDocs: {
        "Technical Documentation": [
            {
                type: "category",
                label: "Docusaurus",
                items: ["tech-docs/docusaurus/robots","tech-docs/docusaurus/lunr-search"],

            },
            {
                type: "category",
                label: "VisualBI Products",
                items: [
                    "tech-docs/visualbi-prods/valq-prod-doc-project",
                ]
            },
            {
                type: "category",
                label: "Git",
                items: [
                "tech-docs/git/git-tutorial",
                "tech-docs/git/git-basics", 
                "tech-docs/git/fix-mistakes",
                "tech-docs/git/reflog",
                "tech-docs/git/git-log",
                "tech-docs/git/git-bisect",
                ]
            },
            
           
            {
                type: "category",
                label: "DevOps",
                items: [
                   "tech-docs/devops/dockers-vs-vms",
                    "tech-docs/devops/devops-roadmap",
 /*                   "tech-docs/devops/devops-interview-qs", */
                ]
            },
            /*
            {
                type: "category",
                label: "Data Science",
                items: [
                    "tech-docs/data-science/how-to-get-ds-jobs",
                    "tech-docs/data-science/what-is-a-ds",
                    "tech-docs/data-science/sd-ds",
                    "tech-docs/data-science/ai-vs-hi",
                ]
            }, */
        ],
    },
};
