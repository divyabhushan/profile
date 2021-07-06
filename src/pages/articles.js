import React from "react";
import Layout from "@theme/Layout";
import classnames from "classnames";
import styles from "./styles.module.css";
import GenerateImgURL from "./utils";
import { CardGroup, Card } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Articles = () => {
  const data = [
    {
      category: 'Docusaurus',
      topics: [
        {
          title: "Restrict Web Crawling using `robots.txt` file.",
          description:
          "If using Docusaurus, place the `robots.txt` file in the static folder.",
          website: "https://divya-bhushan.medium.com/where-to-place-the-robots-txt-file-in-your-docusaurus-website-45d18e40e285",
        },
        {
          title: "Facing Swizzle error while enabling Docusaurus2 Lunr Search?",
          description:
          "Run `npm install` before you swizzle update, build, and link the packages.",
          website: "https://divya-bhushan.medium.com/how-i-enabled-lunr-search-in-docusaurus-v2-0-0-alpha-69-a19e62adba98",
        },
      ],
    },
    {
      category: "Git",
      topics: [
        {
          id: 0,
          title: 'Git Tutorial',
          description:
            "Beginner's guide to get you started using Git to version control your source code.",
          website: 'https://www.knowledgehut.com/tutorials/git-tutorial',
        },
        {
          id: 1,
          title: 'Git Basic Terms and Commands',
          description:
            "Git core concepts and basic terminologies explained with examples.",
            website: "https://divya-bhushan.medium.com/git-basic-terms-and-commands-quick-guide-beginner-friendly-d116ba68b3fa",          
        },
        {
          id: 2,
          title: 'Git Branching Strategy',
          description: 'Secure Your Git Project following a secured Branching Strategy',
          website: "https://dzone.com/articles/git-branching-structural-strategy",
        },
        {
          id: 3,
          title: 'Fix Common Git mistakes',
          description: 'Gear up your Source Code control by avoiding these common Git mistakes.',
          website: "https://www.edureka.co/blog/common-git-mistakes/",
        },
        {
          id: 4,
          title: 'Git Reflog to recover a Deleted Branch',
          description: 'Resurrect a deleted branch that you forgot to merge into the main branch.',
          website: "https://www.edureka.co/blog/git-reflog/",
        },
        {
          id: 5,
          title: 'Git Log to format the commit history',
          description: 'Format and fetch your code\'s history in a useful way.',
          website: 'https://www.edureka.co/blog/git-format-commit-history/',
        },
        {
          id: 6,
          title: 'Git bisect command',
          description: 'Bisect your code\'s revision history to find bug that broke the code.',
          website: 'https://www.edureka.co/blog/git-bisect/',
        },
      ]
    },
    {
      category: "DevOps",
      topics: [
        {
          id: 0,
          title: 'Docker Vs Virtual Machines (VMS)',
          description: 'Key differences in how each one share and virtualize the resources.',
          website: 'https://www.knowledgehut.com/blog/devops/docker-vs-vm',
        },
        {
          id: 1,
          title: 'Devops Engineer Roadmap',
          description: 'Understand the key concepts in Devops and the road ahead.',
          website: 'https://www.knowledgehut.com/blog/devops/devops-roadmap',
        },
      ],
    },
    {
      category: 'Linux',
      topics: [
        {
          id: 0,
          title: 'Linux File Permission Calculator',
          description: 'Edit read/write/execute permissions on files/directories in Linux.',
          website: 'https://divya-bhushan.medium.com/change-linux-file-permissions-chmod-numeric-calculator-b299c305b8e6?sk=47425c9b26d05b4fefc796f3ca2fd961',
        },
      ],
    },
    /*
    {
      category: 'Data Science',
      topics: [
        {
          id: 0,
          title: 'Artificial Intelligence vs Human Intelligence',
          description: 'Humans, not machines, will build the future - The never ending debate.',
          website: 'https://in.springboard.com/blog/artificial-intelligence-vs-human-intelligence/',
        },
        {
          id: 0,
          title: '',
          description: '',
        },
        {
          id: 0,
          title: '',
          description: '',
        },
        {
          id: 0,
          title: '',
          description: '',
        },
        {
          id: 0,
          title: '',
          description: '',
        },
      ]
    },
    */
  ];

  const TITLE = "My Technical Articles";

  return (
    <Layout title={TITLE}>
      <div className="container margin-vert--lg">
        <h1 className={styles.header}>{TITLE}</h1>
        {data.map((d) => (
          <div>
            <p><h4>{d.category}</h4></p>
            <div key={d.category}>
              <CardGroup>
                {d.topics.map(topics => (
                  <div key={topics.id}>
                    <Container>
                      <Row>
                        <Card style={{ width: '22rem', margin: '2px' }}>
                          <Card.Header>{topics.title}</Card.Header>
                          <Card.Body>
                            <Card.Subtitle>{topics.description}</Card.Subtitle>
                          </Card.Body>
                          <Button variant="info" href={topics.website}>Read the full Article</Button>
                        </Card>
                      </Row>
                    </Container>
                  </div>
                ))}
              </CardGroup>

            </div>
          </div>
        ))}
      </div>
    </Layout>
  );

};

export default Articles;
