import React from "react";
import styles from "../pages/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';

const dataset = [
  { link: 'docs/synopsis', title: 'About me', text: 'IT background in Databases, Linux/Unix, Programming, and Version Control. Knowledge of Cloud, Virtualizations, Dockers, SDLC, DDLC, OOPS, HTML/CSS, JSX, MDX, & React.', },
  { link: 'history', title: 'Professional Experience', text: 'Product/Feature Documentation on Lumel products. Past experience - Database Admin, Linux/Unix Admin, Programmer, and Corporate Trainer in major IT companies.',},
  {link: 'techDocs', title: 'Technical Documentation', text: 'Develop clear, modular, rich content to explain technology in simpler ways. SDLC & Agile methodology to treat my data as a code, help to version control and reuse my code.', },
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
