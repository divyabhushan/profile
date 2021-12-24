import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from "./Skills";

export const Grid = (props) => {
    const doc = 'My idea of documentation is an agile process that begins with understanding the product well.';
    const method = 'I focus on building continuous integration and deployment process to design, develop (VS Code), version control (Git), re-use (React components), proof-read, deploy (GitHub), and deliver (publish) the docs using any static site generator (Docusaurus).';
    const benefit_method = 'A modular code and a CI/CD process help me efficiently edit docs for new features/bugs/enhancements.';

    return (
        <Container fluid>
            <Row>
                <Col>
                    <p>{doc}</p><p>{method}</p><p>{benefit_method}</p>
                    <p>
                        <a href={useBaseUrl('assets/TechnicalWriter-Hasura.pdf')} download>Download Resume <img width="20" src={useBaseUrl('img/download.svg')}></img></a>
                    </p>
                </Col>
                <Col><Skills /></Col>
            </Row>
            <Row>
            </Row>
        </Container>
    );
};