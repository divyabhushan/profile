import React from "react";
import Layout from "@theme/Layout";
import classnames from "classnames";
import styles from "./styles.module.css";
import GenerateImgURL from "./utils";

const users = [
  // Please add in alphabetical order of title.
  {
    title: "Hasura GraphQL Engine Documentation",
    subtitle: "",
    descriptions:"",
    preview: "img/hasura-docs.png",
    website: "https://docs.hasura.io/"
  },
  {
    title: "MS SQL Server",
    subtitle: "Learn the key concepts of MS SQL Server and set it up for app development.",
    description: "MS SQL Server is a RDBMS developed by Microsoft. T-SQL is used to manage the data in MS SQL database.",
    preview: "img/mssql-server.png",
    website: "https://hasura.io/learn/database/microsoft-sql-server/introduction/",
  },
  {
    title: "ValQ Documentation",
    subtitle: 'Modern Digital Planning Power BI Visual.',
    description:
      "Model, Plan, Simulate and analyze your business data in the most intuitive and visual way.",
    preview: "img/valq.png",
    website: "https://docs.valq.com/",
  },
  {
    title: "BIHub Documentation",
    subtitle: 'One-stop BI Reporting Search Engine (Installation/Administration/User guide)',
    description: "Supports On-prem, Cloud, Self-Service BI and Modern Data Analytics deployment.",
    preview: "img/bihub.png",
    website: "https://divyabhushan.github.io/VV-Docs/",
  },
  {
    title: "Git Webinar",
    description: "A collection of resources used in the Git Webinar held for the open Git community.",
    preview: "img/git-webinar.png",
    website: "https://divyabhushan.github.io/git-webinar/",
    source: "https://github.com/divyabhushan/git-webinar.git",
  },
  {
    title: "Linux File Permissions Calculator",
    description: "Generate binary and symbolic values as parameters for the chmod command.",
    preview: "img/chmod-cal.png",
    website: "https://divyabhushan.github.io/my-app/"
  },
  {
    title: "Countries List using Bootstrap Accordion",
    description: "This awesome page generates a list of collapsible components while looping through each data value using React JS.",
    preview: "img/countries-list.png",
    website: "https://divyabhushan.github.io/profile/docs/countries",
    source: "https://divya-bhushan.medium.com/collapsible-list-with-bootstrap-accordion-29e457f4ac2a"
  }
];

const TITLE = "My Documentation";

function Showcase() {
  return (
    <Layout title={TITLE}>
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE}</h1>
        </div>
        <div className="row">
          {users.map((user) => (
            <div key={user.title} className="col col--4 margin-bottom--lg">
              <div className={classnames("card", styles.showcaseUser)}>
                <div className="card__image">
                  <GenerateImgURL imgURL={user.preview} />
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">{user.title}</h4>
                      <i>{user.subtitle}</i>
                      <small className="avatar__subtitle">
                        {user.description}
                      </small>
                    </div>
                  </div>
                </div>
                {(user.website || user.source) && (
                  <div className="card__footer">
                    <div className="button-group button-group--block">
                      {user.website && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={user.website}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Website
                        </a>
                      )}
                      {user.source && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={user.source}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Showcase;
