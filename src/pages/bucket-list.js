import React from "react";
import Layout from "@theme/Layout";

function BucketList() {
  return (
    <Layout>
      <div className="container padding-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2 markdown">
            <h1>Bucket List</h1>
            <h3>TODO</h3>
            <ul>
              <li>Make a talk at Tech Conference.</li>
              <li>Work as SWE at big tech company.</li>
              <li>Contribute more and more in open source projects.</li>
              <li>
                Have an opportunity to meet and talk with Brian Vaughn, Dan
                Abramov, Rachel Nabors and Yangshun Tay.
              </li>
            </ul>
            <h3>In Progress</h3>
            <ul>
              <li>Always Learning.</li>
              <li>Build things for the web.</li>
              <li>Huawei seeds of future program 2020.</li>

              <li>Looking for a new opportunity as front end engineer.</li>
              <li>
                Maintain open source projects at TechFellows Org. on GitHub.
              </li>
            </ul>
            <h3>Done</h3>
            <ul>
              <li>
                Finished my Bachelor's degree in computer science (Aug 17,
                2020).
              </li>
              <li>
                One of the top 9 students in Cloud track of Huawei ICT
                Competition 2019-2020.
              </li>
              <li>
                Completed Udacity Cloud DevOps Nanodegree, granted by
                Bertlesmann.
              </li>
              <li>
                Finished 12 months scholarship in software developemnt from
                Facebook.
              </li>
              <li>
                Completed Udacity Front End Web Developer Nanodegree, granted by
                Google.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BucketList;
