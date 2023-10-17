import React from "react";
import styles from "../pages/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Skills = () => {
    const dataset = [
        { title: 'Programming', name: 'GraphQL, React JS,Java basics (OOP), Shell Scripting' },
        { title: 'Operating Systems', name: 'Linux, Unix, Windows' },
        { title: 'Databases', name: 'Oracle, IBM DB2, MySQL, MS SQL Server' },
        { title: 'Software Methodology', name: 'SCRUM, Agile, DevOps, SDLC, DDLC, Engineering Principles and Practices' },
        { title: 'Virtualization', name: 'Oracle VM Box' },
        { title: 'Containerization', name: 'Dockers, Kubernetes' },
        { title: 'Version Control', name: 'Git, GitLab' },
        { title: 'Static Site Generator', name: 'Docusaurus2, GitBook, gh-pages' },
        { title: 'Tools/Frameworks', name: 'GitHub, Jira, DITA, HTML5, CSS, Markdown, Visual Studio Code, SQL Developer, Eclipse EE' },
    ];

    return (
        <div>
            {dataset.map((values) => (
                <a>{values.title}: <i id={styles.skills}>{values.name}</i><br></br></a>
            ))}
        </div>
    );
};
