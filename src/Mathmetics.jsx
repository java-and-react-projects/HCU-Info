import React from "react";
import Common from "./Common";

import sale from "../src/Images/math.jpg";

const Mathmetics = () => {
  return (
    <>
      <section id="header">
        <Common
          name="elcome to Mathmetics Department page"
          imgsrc={sale}
          visit="/service"
          btname="Our Services"
        />
      </section>
      <br />
      <br />

      <p style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "center", color: "blue" }}>
          School of Mathematics and Statistics :
        </h2>
        <br />
        <br />
        The School offers facilities for intensive training and research in the
        basic areas of Mathematics including Applied Mathematics), Statistics
        and Operations Research
      </p>

      <br />
      <br />
      <br />
    </>
  );
};
export default Mathmetics;
