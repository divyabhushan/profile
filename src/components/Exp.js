import React from "react";
import styles from '../css/bootstrap.css';

export const Exp = () => {
    const data = [
        {
            "date": "May 2022 - Present",
            "name": "Palo Alto Networks",
            "link": "https://www.paloaltonetworks.com",
            "title": "Senior Technical Writer (Prisma Cloud Computing)",
            "desc": "Prisma Cloud compute documentation, Admin guide, API documentation for Cloud Workload Protection module."
        },
        {
            "date": "Apr 2022 - May 2022",
            "name": "Devtron",
            "link": "https://devtron.ai",
            "title": "Technical Writer",
            "desc": "Product documentation for DevOps/Developers to help them adapt Devtron - a software delivery workflow for Kubernetes."
        },
        {
            "date": "Oct 2021 - Apr 2022",
            "name": "Hasura",
            "link": "https://hasura.io",
            "title": "Technical Writer",
            "desc": "* API documentation to build efficient APIs over GraphqQL using Hasura.\n* Authored MS SQL Server tutorial for API developers.\n* Contributed to docs migration from Sphinx (*.rst) to Docusaurus (*.mdx, React) static site generator.\n* Continuously worked towards improving technical accuracy and consistency with feedback."
        },
        {
            "date": "Jul 2020 - Sep 2021",
            "name": "Lumel",
            "link": "https://lumel.com/",
            "title": "Technical Writer",
            "desc": "* Product documentation on Lumel products: ValQ, BIHub, and Inforiver.\n* Configured Docusaurus and migrated the product docs."
        },
        {
            "date": "Sep 2013 - Jun 2020",
            "name": "Freelancing",
            "title": "Technical Writer/Trainer",
            "desc": "* Developed topic-based documentation and trained corporates on various products & technologies.\n* Clients: Oracle, Happiest Minds, Wipro, SLK Software, L & T Infotech, Misys, HP, Schneider Electric, Sony, Mindtree,\n Oxford Engineering College, Nuware Systems Institute of Technology, B.G.S Institute of Technology, and Apostrofhy.\n",
            "skills": "Technical Documentation, DDLC, HTML5, CSS, Markdown, Visual Studio Code, Mermaid, Jekyll, mkDocs, Hugo, Vim, Git, DevOps, Docker, Kubernetes, process flow diagrams."
        },
        {
            "date": "Aug 2009 - Sep 2013",
            "name": "Mindtree",
            "link": "https://www.mindtree.com/",
            "title": "Technical Specialist",
            "project": "SITA Airlines billing and invoicing",
            "project_link": "https://www.sita.aero/",
            "desc": "* Scheduled and monitored automated tasks of file processing, log analysis, and scheduling cron jobs in Redwood Scheduler.\n* Improved processes by automating test cases with the help of Shell/Perl scripts and embedded PL-SQL.\n* Performed Root Cause Analysis and fixed production errors.\n* Performed administration tasks on Linux server.\n* Contributed to resolution document on the billing process flow."
        },
        {
            "date": "Sep 2008 - Jan 2009",
            "name": "HCI",
            "link": "https://www.hci.org/",
            "title": "Linux/DB admin",
            "project": "HCI Official website Migration",
            "project_link": "https://www.hci.org/",
            "desc": "* Configured new production server on Amazon EC2 cloud and deployed company’s official website’s content on EC2.\n* Installed and configured LAMP web server on Amazon Linux.\n* Managed MySQL database and scheduled daily backups.\n* Administered Linux server and automated admin tasks using Shell scripts.\n",
            "skills": "Linux, Unix, Oracle Database, SQL/PL-SQL, Shell scripting, SCRUM, SDLC, Administrator guides, release notes/User guides."
        },
        {
            "date": "Aug 2007 - Dec 2007",
            "name": "HCL",
            "title": "Programmer",
            "link": "https://www.hcltech.com",
            "project": "ConfoNet: Computerization and Computer Networking of Consumer Forums in Country\n",
            "project_link": "https://confonet.nic.in/",
            "desc": "* Administered company\'s application migration in IBM DB2 and generated the admin guide.\n* Performed Linux server maintenance & automation tasks.",
            "skills": "Linux, Unix, IBM DB2, SQL, Shell scripting, User manuals, how-to-guides."
        },
        {
            "date": "Jun 2005 - Dec 2006",
            "name": "Dell",
            "link": "www.dell.com",
            "title": "Technical Associate",
            "desc": "* Resolved Hardware/Software issues and contributed technical articles for internal wiki knowledge pool.\n* Administered Employee database (CRUD operations) in Oracle.\n",
        }
    ];

    return (
        <div>
            <div>
                <div>
                    <div class="row">
                        <div>
                            {data.map((each) => (
                                <ul className="timeline">
                                    <li>
                                        {each.title}@<a target="_blank" href={each.link}>{each.name}</a>
                                        <p class="float-right date">{each.date}</p>
                                        <p style={{ whiteSpace: 'break-spaces' }}>{each.desc}</p>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exp;