import React from 'react';
import styles from '../css/bootstrap.css';

export const Exp = () => {
  const data = [
    {
      date: 'May 2022 - Present',
      name: 'Palo Alto Networks',
      link: 'https://docs.paloaltonetworks.com/ai-runtime-security',
      project_link: 'https://docs.paloaltonetworks.com/ai-runtime-security',
      title: 'Lead Technical Writer - Prisma AIRS AI Runtime Security (Network | REST APIs)',
      desc: '* Lead documentation strategy and Information Architecture (IA) planning for Prisma AIRS AI Runtime.\n* Author content used in PoCs and customer demos to boost adoption and reduce support tickets.\n* Hire, manage, and mentor a team of writers; delegate tasks, provide feedback, and drive content quality through regular reviews.\n* Optimize the documentation toolchain (Docusaurus, GitLab, Markdown, DITA); create process guides, automate the CI/CD pipeline, and resolve tooling and publishing issues.\n* Represent the documentation team in leadership forums to secure resources and align priorities with product and engineering.\n* Cultivate a collaborative, growth-focused team environment that values ownership, empathy, and learning.\n* Collaborate closely with product teams to deliver accurate and high-impact content.\n* Strengthen feedback loops by building strong working relationships across cross-functional teams.\n **Products**: Prisma AIRS Security Platform, Cortex, and NetSec platform.',
    },
    {
      date: 'Oct 2021 - Apr 2022',
      name: 'Hasura',
      link: 'https://hasura.io',
      title: 'Technical Writer',
      desc: '* API documentation to build efficient APIs over GraphqQL using Hasura.\n* Authored MS SQL Server tutorial for API developers.\n* Contributed to docs migration from Sphinx (*.rst) to Docusaurus (*.mdx, React) static site generator.',
    },
    {
      date: 'Jul 2020 - Sep 2021',
      name: 'Lumel',
      link: 'https://lumel.com/',
      title: 'Technical Writer',
      desc: '* Authored Product documentation and implemented a style guide for writing consistent and high quality documentaton on various Lumel products.\n* Successfully executed the migration of documentation from a legacy platform to Docusaurus.',
    },
    {
      date: 'Sep 2013 - Jun 2020',
      name: 'Freelancing',
      title: 'Technical Writer/Trainer',
      desc: '* Developed topic-based documentation and trained corporates on different technologies.\n* Clients: Oracle, Happiest Minds, Wipro, SLK Software, L & T Infotech, Misys, HP, Schneider Electric, Sony, Mindtree, Oxford Engineering College, Nuware Systems Institute of Technology, B.G.S Institute of Technology, and Apostrofhy.\n',
      skills: 'Technical Documentation, DDLC, HTML5, CSS, Markdown, Visual Studio Code, Mermaid, Jekyll, mkDocs, Hugo, Vim, Git, DevOps, Docker, Kubernetes, process flow diagrams.',
    },
    {
      date: 'Aug 2009 - Sep 2013',
      name: 'Mindtree',
      link: 'https://www.mindtree.com/',
      title: 'Technical Specialist',
      project: 'SITA Airlines billing and invoicing',
      project_link: 'https://www.sita.aero/',
      desc: '* Scheduled and monitored automated tasks of file processing, log analysis, and scheduling cron jobs in Redwood Scheduler.\n* Improved processes by automating test cases written in Bash Shell, Perl, and embedded PL-SQL.\n* Performed Root Cause Analysis (RCA) and fixed production errors.\n* Performed administrative tasks on Linux server.\n* Contributed to resolution documents on the billing process flow.',
    },
    {
      date: 'Sep 2008 - Jan 2009',
      name: 'HCI',
      link: 'https://www.hci.org/',
      title: 'Linux/DB admin',
      project: 'HCI Official website Migration',
      project_link: 'https://www.hci.org/',
      desc: "* Provisioned production server on Amazon EC2 and deployed official websites' content on it.\n* Installed and configured the LAMP web server on Amazon Linux.\n* Managed MySQL database and scheduled daily backups.\n* Administered Linux server and automated admin tasks using Shell scripts.\n",
      skills: 'Linux, Unix, Oracle Database, SQL/PL-SQL, Shell scripting, SCRUM, SDLC, Administrator guides, release notes/User guides.',
    },
    {
      date: 'Aug 2007 - Dec 2007',
      name: 'HCL',
      title: 'Programmer',
      link: 'https://www.hcltech.com',
      project: 'ConfoNet: Computerization and Computer Networking of Consumer Forums in Country\n',
      project_link: 'https://confonet.nic.in/',
      desc: "* Administered company's application migration in IBM DB2 and developed administrator guide.\n* Performed Linux server maintenance & automation tasks.",
      skills: 'Linux, Unix, IBM DB2, SQL, Shell scripting, User manuals, how-to-guides.',
    },
    {
      date: 'Jun 2005 - Dec 2006',
      name: 'Dell',
      link: 'https://www.dell.com',
      title: 'Technical Associate',
      desc: '* Resolved Hardware/Software issues and wrote KB articles.\n* Administered Oracle database for CRUD operations.\n',
    },
  ];

  return (
    <div>
      <div>
        <div>
          <div class="row">
            <div>
              {data.map (each => (
                <ul className="timeline">
                  <li>
                    <b>{each.title}</b>
                    @
                    <a target="_blank" href={each.link}>{each.name}</a>
                    <p class="float-right date">{each.date}</p>
                    <p style={{whiteSpace: 'break-spaces'}}>{each.desc}</p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp;
