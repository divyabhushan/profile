import React from "react";
import styles from "../pages/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from "./Skills.js";
import { Exp } from './Exp.js';

export const TITLE = "title";

export const CV = (props) => {
    const old_synopsis = "Cloud-based and on-premises documentation for Developers, DevOps, DevSecOps, internal users, and end-users.\ \ Authored Git and MS SQL Server tutorials.";
    const synopsis = "Well-versed in Core and Cloud technologies. Participate in discussions around product improvements with Stakeholders. Reverse engineer, troubleshoot, and fix the broken CI/CD toolchain for content build and deploy process. Passionate about automating the Tool stack and processes."

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Divya Bhushan</h1>
                    <h3>Senior Technical Writer</h3>
                    <p><b>Prisma Cloud Computing</b></p>
                    <p>Product Docs, Installation/Admin/User guide, Release Notes</p>
                    <p>Cloud technologies and Cybersecurity concepts</p>
                </div>
                <div class="col">
                    <p>
                        Email: divya_bhushan@hotmail.com <br></br>
                        Bachelor of Engineering<br></br>
                        <a href="https://divyabhushan.github.io/profile">My Portfolio</a> <br></br><br></br>
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