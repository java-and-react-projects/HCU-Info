import React from "react";
import Common from "./Common";

import app from "../src/Images/mba.png";

const MBA = () => {
  return (
    <>
      <section id="header">
        <Common
          name="elcome to MBA Department page"
          imgsrc={app}
          visit="/service"
          btname="Our Services"
        />
      </section>
      <br />
      <br />
      <p style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "center", color: "blue" }}>
          School of Management Studies :
        </h2>
        <br />
        <br />
        School of Management Studies has teaching programmes for MBA, MBA
        Business Analytics, MBA Healthcare and Hospital Management, Executive
        MBA and Ph.D.
      </p>
      <br /> <br /> <br />
    </>
  );
};
export default MBA;
