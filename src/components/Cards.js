import React from "react";
import styles from "../pages/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';

const dataset = [
  { link: 'docs/synopsis', title: 'About me', text: 'Passionate about learning technology and writing technical articles. Extensive Product Documentation knowledge on Cloud and core technologies.', },
  { link: 'history', title: 'Professional Experience', text: '12+ years experience in Database/Linux administration, Programming, reverse engineering, and automation in an Agile environment.'},
  { link: 'techDocs', title: 'Technical Documentation', text: 'Develop high-quality product documentation for technical audience. UI/UX improvements. Doc Infrastructure Architecture planning. Automate DDLC and GitHub pipelines.', },
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
