import React from "react";
import styles from "../pages/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';

const dataset = [
  { link: 'docs/synopsis', title: 'About me', text: 'I am a self-motivated professional, passionate about technology. I like to design, develop, and improvise all kinds of software documentation.', },
  { link: 'history', title: 'Professional Experience', text: 'IT professional with 10+ years of experience working as a Technical Writer, Database Admin, Linux/Unix Admin, & Corporate Trainer.'},
  { link: 'techDocs', title: 'Technical Documentation', text: 'Using DDLC, Agile methods, and treating Docs as code help to version control, track issues, review/reuse code, and implement CI/CD.', },
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
