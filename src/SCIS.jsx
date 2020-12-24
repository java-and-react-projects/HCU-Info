import React from "react";
import Common from "./Common";
import web from '../src/Images/scis.jpeg';

const SCIS = () => {
  return (
    <>
        <section id="header">
        <Common
          name="Welcome to SCIS page"
          imgsrc={web}
          visit="/service"
          btname="Our Services"
        />
          </section>
      <br />
      <br />

      <p style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "center", color: "blue" }}>About The School of Computer and Information Sciences :</h2><br/><br/>
        The School of Computer and Information Sciences (SCIS), created in 2013 after being a department in the School of Maths &
         Computer/Information Sciences for 20 years, is the largest unitary school in the university.   

<p> <br/>Programs: 4 (Int. MTech, MTech, MCA, PhD)</p>
<p>Faculty: 29</p>
<p>Students: 500(plus)</p>
<p>Research Scholars: 80(plus)</p>


</p>
  
      <br />
      <p style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "center", color: "blue" }}>Main areas of research: :</h2><br/>

        <p>Image Processing, Computer Vision</p>
        <p>Machine Learning, Deep Learning, Natural Language Processing</p>
        <p>Cloud Computing, Internet of Things</p>
        <p>Cryptography, Security</p>
        <p>Rough Sets, Rough Computing</p>

      </p>
    </>
  );
};
export default SCIS;
