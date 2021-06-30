import React from "react";
import styles from "../pages/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export const Skills = (props) => (
    <div>
        <ul>
            <li><b>{props.title}</b>: {props.name}</li>
        </ul>
</div>
);
