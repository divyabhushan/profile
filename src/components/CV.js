import React from "react";
import styles from "../pages/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from "./Skills.js";
import { Exp } from './Exp.js';
import DivyaImage from "@site/static/assets/cv-profile-photo.png";

export const TITLE = "title";

export const CV = (props) => {
    const synopsis = "I have extensive experience in developing and executing documentation strategies, leading high-impact projects, and optimizing processes. My expertise includes collaborating with cross-functional teams to deliver clear and effective content. I am proficient in programming, databases, operating systems, and modern tools, with a strong understanding of cybersecurity, network security, and firewall management."

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Divya Bhushan</h1>
                    <h3>Lead Technical Writer</h3>
                    <p><b>AI Runtime Security: Network and API intercept: AI-powered Firewall</b></p>
                    <p>Product docs, API Reference docs, Installation/Admin/User guide, Release Notes, docs workflow automation</p>
                    <p>Cloud technologies and Cybersecurity concepts</p>
                </div>
                <div class="col">
                    <p>
                        Email: divya_bhushan@hotmail.com <br></br>
                        B.E in Electrical & Electronics (2004)<br></br>
                        <a href="https://divyabhushan.github.io/profile">My Portfolio</a> <br></br><br></br>
                        <img src={DivyaImage} width="100"/><br></br>
                        <a href="https://www.linkedin.com/in/divyabhushan/" target="_blank">LinkedIn</a> | <a href="https://github.com/divyabhushan" target="_blank">GitHub</a> | <a href="https://divya-bhushan.medium.com/" target="_blank">Medium</a>
                    </p>
                </div>
            </div>
            <div className="row" id={styles.nextrow}>
                <div class="col col-md-auto">
                <h4>Synopsis</h4>
                <p style={{ whiteSpace: 'break-spaces' }}>
                {synopsis}
                </p>
                </div>
            </div>
            <div className="row" id={styles.nextrow}>
                    <div class="col col-md-auto">
                        <h4>Skills</h4>
                        <Skills />
                    </div>
                </div>
            <div className="row">
                <div></div>
            </div>
            <section>
            </section>
            <h4>Professional History</h4>
            <Exp />
        </div>
    );
};

export default CV;
