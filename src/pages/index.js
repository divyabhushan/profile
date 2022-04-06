import React from "react";
import clsx from "clsx";
import classnames from "classnames";
import Layout from "@theme/Layout";
//import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Cards from "../components/Cards";
import App from "../pages/App";

const Home = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title={`${ siteConfig.title } | Personal Website`}>
      <header className={styles.header}>
        <div className={styles.features}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
        </div>
      </header>
      <div className={styles.header}><Cards /></div>
    </Layout >
  );
};

export default Home;
