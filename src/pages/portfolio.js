import React from "react";
import Layout from "@theme/Layout";
import classnames from "classnames";
import styles from "./styles.module.css";
import GenerateImgURL from "./utils";

const users = [
  // Please add in alphabetical order of title.
  {
    title: "ValQ - Modern Digital Planning (Documentation)",
    description:
      "Model, Plan, Simulate and analyze your business data in the most intuitive and visual way.",
    preview: "img/valq.png",
    website: "https://docs.valq.com/",
  },
  {
    title: "BIHub - One-stop BI Reporting Search Engine (Installation/Administration/User guide)",
    description:
    "One-Stop Solution to all your BI content supporting On-prem, Cloud, Self-Service BI and Modern Data Analytics deployment.",
    preview: "img/bihub.png",
    website: "https://divyabhushan.github.io/VV-Docs/",
    source: "https://github.com/divyabhushan/VV-Docs",
  },
  {
    title: "My Portfolio",
    description:
      "A synopsis of my Technical work",
    preview: "img/my-portfolio.png",
    website: "https://divyabhushan.github.io/my-portfolio/",
    source: "https://github.com/divyabhushan/my-portfolio.git",
  },
  {
    title: "Git Webinar",
    description: "A collection of resources used in the Git Webinar held for the open Git community",
    preview: "img/git-webinar.png",
    website: "https://divyabhushan.github.io/git-webinar/",
    source: "https://github.com/divyabhushan/git-webinar.git",
  },
  {
    title: "Linux File Permissions Calculator",
    description: "Generate binary and symbolic values as parameters for the chmod command.",
    preview: "img/chmod-cal.png",
    website: "https://divyabhushan.github.io/my-app/"
  }
];

const TITLE = "My Portfolios";

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
