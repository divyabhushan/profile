import React from 'react';
import Layout from "@theme/Layout";
import { Card, CardGroup } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
import styles from '../css/bootstrap.css';
import { Exp } from '../../src/components/Exp.js';

const TITLE = "Professional Experience Timeline";
const careerPath = "Linux/DB Admin > Technical Specialist > Corporate Trainer > Lead Technical Writer";

export const history = () => {
    return (
        <Layout title={TITLE}>
            <div className="container margin-vert--lg">
                <div className="text--center">
                    <h1>{TITLE}</h1>
                    <p>{careerPath}</p>
                </div>
                <Exp />
            </div>
        </Layout >
    );
};

export default history;
