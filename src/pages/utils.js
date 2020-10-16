import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function GenerateImgURL({ imgURL }) {
  const renderedImg = useBaseUrl(imgURL);
  return <img src={renderedImg} alt="card-img" />;
}
