import React from "react";
import styles from "../pages/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';

const dataset = [
  { link: 'docs/synopsis', title: 'About me', text: 'I have extensive experience in developing and executing documentation strategies, leading high-impact projects, and optimizing processes. My expertise includes collaborating with cross-functional teams to deliver clear and effective content. I am proficient in programming, databases, operating systems, and modern tools, with a strong understanding of cybersecurity, network security, and firewall management.', },
  { link: 'history', title: 'Professional Experience', text: 'With over 15 years in Database/Linux administration, programming, and automation within Agile environments, I have led documentation efforts for AI runtime security. I have streamlined workflows for Technical Writers, enhanced their skills, and implemented refined documentation processes. My role involved enforcing quality standards and effectively managing documentation tools and systems.'},
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
