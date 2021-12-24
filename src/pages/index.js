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
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHedoWkAeRaJw/profile-displayphoto-shrink_400_400/0/1607250393657?e=1652918400&v=beta&t=Ai3J9dKms8hV8ey5NnH89Mfuxw0KNx2KsO7ISWd9wvM"
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
    </Layout >
  );
};

export default Home;
