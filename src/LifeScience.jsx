import React from "react";
import Common from "./Common";

import bank from "../src/Images/lifeScience.jpg";

const LifeScience = () => {
  return (
    <>
      <section id="header">
        <Common
          name="Welcome to LifeScience Department page"
          imgsrc={bank}
          visit="/service"
          btname="Our Services"
        />
      </section>
      <br />
      <br />

      <p style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "center", color: "blue" }}>
          Institute of Life Sciences
        </h2>
        <br />
        <br />
        The Institute of Life Sciences (ILS) also known as Dr. Reddy's Institute
        of Life Sciences is a research organisation founded through a
        public–private partnership initiative in the year 2004. The partners in
        the making of ILS are the Government of Telangana the University of
        Hyderabad and Dr. Reddy's Laboratories. Incorporated as a not-for-profit
        company, ILS has been accorded recognition as a Scientific & Industrial
        Research Organisation (SIRO) by the Ministry of Science & Technology
      </p>

      <br />
      <br />
      <br />
    </>
  );
};
export default LifeScience;
