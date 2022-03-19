import React from 'react';
import Layout from "@theme/Layout";
import { Card, CardGroup } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
import styles from '../css/bootstrap.css';
import { Exp } from '../../src/components/Exp.js';

const TITLE = "Professional Experience Timeline";

export const history = () => {
    return (
        <Layout title={TITLE}>
            <div className="container margin-vert--lg">
                <div className="text--center">
                    <h1>{TITLE}</h1>
                </div>
                <Exp />
            </div>
        </Layout >
    );
};

export default history;