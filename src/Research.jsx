import React from "react";
import Common from "./Common";

import soft from "../src/Images/research.jpg";

const Research = () => {
  return (
    <>
      <section id="header">
        <Common
          name="elcome to Research page"
          imgsrc={soft}
          visit="/service"
          btname="Our Services"
        />
      </section>
      <br />
      <br />

      <p style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "center", color: "blue" }}>
          About The Research :
        </h2>
        <br />
        <br />
        Research The university is a public research university with high
        research activity in every department, awarding about 300 doctorates
        each year. The university receives research funding from UGC, CSIR, DST,
        DBT, FIST and other funding agencies. The university is known for high
        quality research output from faculty and students in the natural
        sciences, social sciences, and humanities.
      </p>

      <br />
    </>
  );
};
export default Research;
