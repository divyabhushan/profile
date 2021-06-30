import React from "react";
import { Skills } from "./Skills.js";

export const Data = () => {
    const dataset = [
        { title: 'Programming', name: 'React, JSX, C, Python basics, Java basics (OOP), Shell Scripting' },
        { title: 'Operating System', name: 'Linux, Unix, Windows' },
        { title: 'Database', name: 'Oracle, IBM DB2, MySQL' },
        { title: 'Software Methodology', name: 'SCRUM, Agile, DevOps, SDLC, DDLC' },
        { title: 'Virtualization', name: 'Oracle VM Box' },
        { title: 'Containerization', name: 'Dockers, Kubernetes basics' },
        { title: 'Version Control', name: 'Git, GitHub, GitLab, BitBucket, Source Tree' },
        { title: 'Static Site Generator', name: 'Docusaurus2, Jekyll, Hugo, mkDocs, gh-pages' },
        { title: 'Tools/Editors', name: 'HTML5, CSS, Markdown, Google Docs, Visual Studio Code, WordPress, SQL Developer, Eclipse EE, Sublime Text, Edit plus, MS Office, vim.'},
    ];
    return (
        <div>            
                <section>
                    {dataset.map((features) => (
                        <Skills title={features.title} name={features.name}/>
                    ))
                    }
                </section>
        </div>
    );
};
