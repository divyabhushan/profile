import React from "react";
import { Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Data } from "./Data.js";

export const Countries = () => {

    return (
        <div>
            <h1>Countries List</h1>
            <h6>Click the header to expand/collapse</h6>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Andorra
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p>
                                Capital: Andorra la Vella<br></br>
                                Currency Code: EUR<br></br>
                                Continent Name: Europe
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            {Data.map((d) => (
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            {d.countryName}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>
                                    Capital: {d.capital}
                                    <br></br>
                                    Currency Code: {d.currencyCode}
                                    <br></br>
                                    Continent Name: {d.continentName}
                                </p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            ))}
        </div>
    );
};

export default Countries;
