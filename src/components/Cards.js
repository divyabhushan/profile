import React from "react";
import styles from "../pages/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';

const dataset = [
  { link: 'docs/synopsis', title: 'About me', text: 'Engineering-rooted-technical-writer: develop and execute documentation strategies, lead high-impact projects, mentor writers, and optimize processes. I excel in collaborating with cross-functional teams to deliver clear and effective content. I am proficient in programming, databases, operating systems, and modern tools, with a strong understanding of cybersecurity, network security, and firewall management.', },
  { link: 'history', title: 'Professional Experience', text: 'Over 18+ years of experience spanning technical writing, Database/Linux administration, programming, and automation within Agile environments. Lead documentation efforts for AI Firewall network and API intercept. Streamline workflows for technical writers, enhance their skills, and implement refined documentation processes. Enforce quality standards and effectively manage documentation tools and systems.'},
];


const Cards = () => (
  <div>
    <CardDeck>
      {dataset.map((value) => (
        <a href={value.link}>
          <Card className={styles.sections}>
            <Card.Body>
              <Card.Title>{value.title}</Card.Title>
              <Card.Text>{value.text}</Card.Text>
            </Card.Body>
          </Card>
        </a>
      ))}
    </CardDeck>
  </div>
);

export default Cards;
