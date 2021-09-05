import React from "react";
import clsx from "clsx";
import classnames from "classnames";
import Layout from "@theme/Layout";
//import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Cards from "../components/Cards";

const Home = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  
  return (
    <Layout title={`${siteConfig.title} | Personal Website`}>
      <header className={styles.header}>
        <div className={styles.features}>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHedoWkAeRaJw/profile-displayphoto-shrink_800_800/0/1607250393657?e=1636588800&v=beta&t=-l2MMCEmSaV6OeB_DEzsx3pHpUXhg2fUHfmXD-0V7ME"
            alt="logo"
            style={{
              borderRadius: "100%",
              maxWidth: 120,
            }}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
        </div>
      </header>
      <div className={styles.header}><Cards /></div>
    </Layout>
  );
};

export default Home;
