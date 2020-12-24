import React from "react";
import Common from "./Common";
import web from "../src/Images/hcu1.jpg";

const Home = () => {
  return (
    <>
      <section id="header">
        <Common
          name="welcome to University of Hyderabad page"
          imgsrc={web}
          visit="/service"
          btname="Get Started"
        />
      </section>
      <br />
      <br />

      <p style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "center", color: "blue" }}>ABOUT THE CAMPUSE :</h2>
        The university campus on 2300-odd acres, has a large area under forest
        cover, with two perennial and three seasonal lakes, as well as rock
        formations characteristic of the Deccan. It is home to 734 plant,[3] 10
        mammal, 15 reptile and 220 bird[4] species (at last count). Notable
        animals include spotted deer, hares, peacocks, porcupines and wild boar.
        The campus also has a protected megalithic site.[50] A study, which
        ranged over three decades (1990-2010), reported that of the plants
        present on campus, 315 species were used in traditional Indian medicine.
        39 species of plants belong to the group that face the threat of
        extinction. These listings were the result of field studies done on
        campus by students and faculty members. The university has plans to
        preserve area under forest cover and wetlands by creating a bio reserve.
      </p>
      <br />
    </>
  );
};
export default Home;
