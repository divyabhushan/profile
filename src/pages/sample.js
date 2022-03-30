import React from "react";
import Layout from "@theme/Layout";

const TITLE = "Sample list";
const data = [
    { title: "API documentation on REST Connectors", link: "https://google.com", desc: "" },
    { title: "JWT", link: "https://google.com" },
    { title: "title", link: "https://google.com" }
];

export const sample = () => {
    return (
        <Layout title={TITLE}>
            <div className="container margin-vert--lg">
                <div className="text--center">
                    <h1>{TITLE}</h1>
                </div>
                {data.map((each) => (
                    <p><a href={each.link}>{each.title}</a></p>
                ))};
            </div>
        </Layout>
    );
};

export default sample;
