import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import document from "@site/static/assets/DivyaBhushan-LeadTechnicalWriter.pdf"
import Link from "@docusaurus/Link";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from "./Skills";

export const Grid = (props) => {
    const doc = 'I treat documentation as an integrated part of the product focusing on the user persona and the task. Document evolve with the product in an agile fashion following SDLC.';
    const method = 'I focus on building continuous integration and publishing process to gather requirements, design, proof-read, version control, re-use, build, deliver (publish), maintain and keep the docs future-proof.';
    //const benefit_method = 'A modular code and a CI/CD process help me manage the docs efficiently.';

    return (
        <Container fluid>
            <Row>
                <Col>
                    <p>{doc}</p><p>{method}</p>
                    <p>
                        <a href={document} download>Download Resume <img width="20" src={useBaseUrl('img/download.svg')}></img></a>
                    </p>
                </Col>
                <Col><Skills /></Col>
            </Row>
            <Row>
            </Row>
        </Container>
    );
};  