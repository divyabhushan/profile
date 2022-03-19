import React from "react";
import styles from "../pages/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Skills = () => {
    const dataset = [
        { title: 'Programming', name: 'GraphQL, React, JSX, Java basics (OOP), Shell Scripting' },
        { title: 'Operating System', name: 'Linux, Unix, Windows' },
        { title: 'Database', name: 'Oracle, IBM DB2, MySQL, MS SQL Server' },
        { title: 'Software Methodology', name: 'SCRUM, Agile, DevOps, SDLC, DDLC, Engineering Principles and Practices' },
        { title: 'Virtualization', name: 'Oracle VM Box' },
        { title: 'Containerization', name: 'Dockers, Kubernetes basics' },
        { title: 'Version Control', name: 'Git, GitHub, GitLab, BitBucket, Source Tree' },
        { title: 'Static Site Generator', name: 'Docusaurus2, Jekyll, Hugo, mkDocs, gh-pages' },
        { title: 'Tools/Editors', name: 'DITA (basics), HTML5, CSS, Markdown, Visual Studio Code, SQL Developer, Eclipse EE, Vim.' },
    ];

    return (
        <div>
            {dataset.map((values) => (
                <a>{values.title}: <i id={styles.skills}>{values.name}</i><br></br></a>
            ))}
        </div>
    );
};
