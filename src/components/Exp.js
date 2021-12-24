import React from "react";
import styles from '../css/bootstrap.css';

export const Exp = () => {
    const data = [
        {
            "date": "Oct 2021 - Present",
            "name": "Hasura",
            "link": "https://hasura.io",
            "title": "Technical Writer",
            "desc": "API documentation to build efficient APIs over GraphqQL using Hasura."
        },
        {
            "date": "Jul 2020 - Sep 2021",
            "name": "Lumel",
            "link": "https://lumel.com/",
            "title": "Technical Writer",
            "desc": "\n* Product documentation on Lumel products.\n* ValQ  on-premise cloud service installation/user guide.\n* BIHub - Installation/Administration/User guide.\n* Inforiver - Product documentation."
        },
        {
            "date": "Sep 2013 - Jun 2020",
            "name": "Freelancing",
            "title": "Technical Writer/Trainer",
            "desc": "\n* Topic-based documentation on various products & technologies.\n* Trained corporate employees on various technological skills via blended means.\n* Plan and design bespoke training courses, structures, materials, durations, lab setups, hands-on lab activities, and quizzes.\n* Clients: Oracle, Happiest Minds, Wipro, SLK Software , L & T Infotech , Misys, HP, Schneider Electric, Oxford Engineering College, Nuware Systems Institute of Technology, B.G.S Institute of Technology, Apostrofhy, Sony, and Mindtree Ltd.\n",
            "skills": "Technical Documentation, DDLC, HTML5, CSS, Markdown, Visual Studio Code, Mermaid, Jekyll, mkDocs, Hugo, Vim, Git, DevOps, Docker, Kubernetes, process flow diagrams."
        },
        {
            "date": "Aug 2009 - Sep 2013",
            "name": "Mindtree",
            "link": "https://www.mindtree.com/",
            "title": "Technical Specialist",
            "project": "SITA Airlines billing and invoicing",
            "project_link": "https://www.sita.aero/",
            "desc": "\n* Scheduled and monitored automated tasks of file processing, log analysis, and daily cron jobs in Redwood Scheduler.\n* Process improvement, automated test cases ( pre and post ) using Shell/Perl scripts and embedded PL-SQL.\n* Performed Root Cause Analysis and troubleshooting of Production errors.\n* Linux server administrative tasks.\n* ER diagrams.\n* Billing process flow and resolution documentation."
        },
        {
            "date": "Sep 2008 - Jan 2009",
            "name": "HCI",
            "link": "https://www.hci.org/",
            "title": "Linux/DB admin",
            "project": "HCI Official website Migration",
            "project_link": "https://www.hci.org/",
            "desc": "\n* Configured new production server on Amazon EC2 cloud and deployed company’s official website’s content.\n* Adapted an Agile development approach staying in sync with the project progress tracked by daily SCRUM meetings.\n* Installed and configured LAMP web server on Amazon Linux.\n* MySQL database management and scheduled daily backups.\n* Linux server administration, and automation with shell scripts.\n",
            "skills": "Linux, Unix, Oracle Database, SQL/PL-SQL, Shell scripting, SCRUM, SDLC, Administrator guides, release notes/User guides."
        },
        {
            "date": "Aug 2007 - Dec 2007",
            "name": "HCL",
            "title": "Programmer",
            "link": "https://www.hcltech.com",
            "project": "ConfoNet: Computerization and Computer Networking of Consumer Forums in Country\n",
            "project_link": "https://confonet.nic.in/",
            "desc": "* Administered Company\'s application migration in IBM DB2.\n* Linux Server maintenance & automation tasks.\n* Software documentation.\n",
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

    const experience = [
        {
            "date": "Jul, 01 2020 - Present",
            "name": "Lumel",
            "title": "Software Documentation - Technical Writer",
            "desc": "\n* Generate software docs that are directly embedded in the Lumel products.\n* Experience documenting Hardware/Software PC and Laptop issues, Web Service technologies, SaaS applications.\n* ValQ visual and  ValQ on-premise cloud service installation/user guide.\n* BI Hub:  one-stop solution for all BI reports from the various platforms - Installation/Administration/User guide.\n* Inforiver: A Low code/No code Enterprise Analytics Suite - Product documentation.\n* Follow standard Engineering Principles and Practices.\n* Docs As Code approach to design, develop (VS Code), version control (GitHub), re-use (React), proof-read, deploy, and deliver (publish) the docs.\n",
            "skills": "Product/Software documentation, Agile, Product guides, SDLC, DDLC, Docusaurus2, MDX, JSX, React."
        },
        {
            "date": "Sep 2013 - Jun 2020",
            "name": "Freelancing",
            "title": "Technical Writer/Corporate Trainer",
            "desc": "\n* Technical topic-based documentation on various products and technologies.\n* Trained corporate employees on various technological skills via blended means.\n* Plan and design bespoke training courses, structures, materials, durations, lab setups, hands-on lab activities, and quizzes.\n* Clients: Oracle, Happiest Minds, Wipro, SLK Software , L & T Infotech , Misys, HP, Schneider Electric, Oxford Engineering College, Nuware Systems Institute of Technology, B.G.S Institute of Technology, Apostrofhy, Sony, and Mindtree Ltd.\n",
            "skills": "Technical Documentation, DDLC, HTML5, CSS, Markdown, Visual Studio Code, Mermaid, Jekyll, mkDocs, Hugo, Vim, Git, DevOps, Docker, Kubernetes, process flow diagrams."
        },
        {
            "date": "Aug 2009 - Sep 2013",
            "name": "Mindtree",
            "title": "Technical Specialist",
            "project": "SITA Airlines billing and invoicing",
            "project_link": "https://www.sita.aero/",
            "desc": "\n* ETL jobs management and scheduling in Redwood Scheduler/Linux server and deployment using Shell scripts.\n * Process improvement, automated test cases ( Pre-check and Post-check ) using Shell/Perl scripts and embedded PL-SQL.\n* Performed Root Cause Analysis and troubleshooting of Production errors.\n* Linux server administrative tasks.\n* ER diagrams.\n* Billing process flow and resolution documentation.\n* Scheduled and monitored automated tasks of file processing, log analysis, and daily cron jobs in Redwood Scheduler.\n* Mentoring the new joiners.\n",
            "skills": "Linux, Unix, Oracle Database, SQL/PL-SQL, Shell scripting, Test cases, Software Documentation, Product guides, Agile, SDLC."
        },
        {
            "date": "Sep 2008 - Jan 2009",
            "name": "HCI ( Human Capital institute )",
            "title": "Linux/DB admin",
            "project": "HCI Official website Migration",
            "project_link": "https://www.hci.org/",
            "desc": "\n* Configured new production server on Amazon EC2 cloud and deployed company’s official website’s content.\n* Adapted an Agile development approach staying in sync with the project progress tracked by daily SCRUM meetings.\n* Website migration from a legacy system to a new development database.\nInstalled and configured LAMP web server on Amazon Linux.\n* MySQL database management and scheduled daily backups.\n* Linux server administration (users and groups), maintenance, and automation using shell scripts.\n",
            "skills": "Linux, Unix, Oracle Database, SQL/PL-SQL, Shell scripting, SCRUM, SDLC, Administrator guides, release notes/User guides."
        },
        {
            "date": "Aug 2007 - Dec 2007",
            "name": "HCL",
            "title": "Programmer",
            "project": "ConfoNet: Computerization and Computer Networking of Consumer Forums in Country\n",
            "project_link": "https://confonet.nic.in/",
            "desc": "* Administered Company\'s application migration in IBM DB2 database.\n* ETL tasks in IBM DB2 for Confonet (Case Monitoring System) application.\n* Linux Server maintenance & automation tasks.\n* Software documentation.\n",
            "skills": "Linux, Unix, IBM DB2, SQL, Shell scripting, User manuals, how-to-guides."
        },
        {
            "date": "Jun 2005 - Dec 2006",
            "name": "Dell international services",
            "title": "Technical Associate",
            "desc": "* Resolved Hardware/Software issues and contributed technical articles for internal wiki knowledge pool.\n* Administered Employee database (CRUD operations) in Oracle.\n",
            "skills": "RDBMS, SQL, Hardware/Software Training, Product documentation, Technical troubleshooting."
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
                                        {each.title} @ <a target="_blank" href={each.link}>{each.name}</a>
                                        <a href="#" class="float-right">{each.date}</a>
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