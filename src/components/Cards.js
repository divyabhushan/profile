import React from "react";
import styles from "../pages/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';

const Cards = () => (
  <div>    
    <CardDeck>
    <a href="docs/about-me">
        <Card className={styles.sections}>
      <Card.Body>
            <Card.Title>About Me</Card.Title>
      </Card.Body>
        </Card>
      </a>
      <a href="docs/experience">
    <Card className={styles.sections}>
      <Card.Body>
          <Card.Title>Professional Experience</Card.Title>
      </Card.Body>
        </Card>
        </a>
        <a href="docs/about-me">
    <Card className={styles.sections}>
      <Card.Body>
          <Card.Title>Technical Documentation</Card.Title>
      </Card.Body>
        </Card>
        </a>      
      </CardDeck>
  </div>
);

export default Cards;
