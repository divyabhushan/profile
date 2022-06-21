import React from "react";
import styles from "../pages/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from "./Skills.js";
import { Exp } from './Exp.js';

export const TITLE = "title";

export const CV = (props) => {
    const synopsis = "Cloud-based and on-premises documentation for Developers, DevOps, DevSecOps, internal users, and end-users. Authored Git and MS SQL Server tutorials. \
    \nStrong IT background in Databases, Linux/Unix, Programming, and Version Control.\ Knowledge of Cloud, Virtualizations, Dockers, SDLC, DDLC, OOPS, HTML/CSS, JSX, MDX, and React. \
    \nImplement Agile methodology and software development practices to treat my docs-as-code and re-use it.";

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Divya Bhushan</h1>
                    <h3>Senior Technical Writer</h3>
                    <p>Prisma Cloud Computing</p>
                </div>
                <div class="col">
                    <p>
                        Email: divya_bhushan@hotmail.com <br></br>
                        Bachelor of Engineering<br></br>
                        <a href="https://divyabhushan.github.io/profile">My Portfolio</a> <br></br><br></br>
                        <a id={styles.img} href="https://www.linkedin.com/in/divyabhushan/" target="_blank"><img width="30" src="https://github.com/divyabhushan/profile/blob/gh-pages/img/linkedin.png?raw=true"></img></a>
                        <a id={styles.img} href="https://github.com/divyabhushan" target="_blank"><img width="30" src="https://github.com/divyabhushan/profile/blob/gh-pages/img/github.png?raw=true"></img></a>
                        <a id={styles.img} href="https://divya-bhushan.medium.com/" target="_blank"><img width="30" src="https://github.com/divyabhushan/profile/blob/gh-pages/img/medium.png?raw=true"></img></a>
                    </p>
                </div>
            </div>
            <div className="row">
                <div></div>
            </div>
            <section>
                <div className="row" id={styles.nextrow}>
                    <div className="col">
                        <h4>Synopsis</h4>
                        <p style={{ whiteSpace: 'break-spaces' }}>{synopsis}</p>
                    </div>
                    <div class="col col-md-auto">
                        <h4>Skills</h4>
                        <Skills />
                    </div>
                </div>
            </section>
            <h4>Professional History</h4>
            <Exp />
        </div>
    );
};

export default CV;