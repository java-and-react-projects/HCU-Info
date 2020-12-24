import React from "react";
import web from "../src/Images/hcu.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <section id="header">
        <Common
          name="welcome to  University Of Hyderabad (about page)"
          imgsrc={web}
          visit="/about"
          btname="Contact Us"
        />
      </section>
      <br/><br/><p style={{ textAlign: "center" }}>
        {" "}
        <h2 style={{ textAlign: "center", color: "blue" }}>
          Teaching and learning :{" "}
        </h2>
        The University follows the semester calendar beginning in mid-July and
        ending in early-May. About 90% of the students are residential. The
        Master's programme is usually of 2 years while the M.Phil and Ph.D
        programme are of 18 months and 5 years respectively. The University
        follows the continuous assessment pattern, with 40% marks awarded
        through assignments spread out through the semester and 60% through
        semester-end examinations. Grading is on a 10.0 point scale, with D
        being the lowest passing grade, and A+ being the highest. The toppers
        post-graduate courses are awarded medals.{" "}
      </p>
      <br />
      <p style={{ textAlign: "center" }}>
        {" "}
        <h2 style={{ textAlign: "center", color: "blue" }}> Admission: </h2>
        The University is primarily a post-graduate research university. UoH
        conducts its own entrance examinations for all courses during the months
        of May–June each year and interviews in the month of May annually. The
        University offers Integrated M.Sc, M.A, MSc, M.F.A, M.Tech, M.B.A,
        M.C.A, M.Phil and Ph.D degrees. Admissions to UoH are highly
        competitive. The University follows the positive-discrimination
        reservation system as per University Grants Commission of India
        guidelines.
      </p>
      <br />
      <p style={{ textAlign: "center" }}>
        {" "}
        <h2 style={{ textAlign: "center", color: "blue" }}> Rankings: </h2>
        The University of Hyderabad was ranked 601–650 in the QS World
        University Rankings of 2020.[7] It is ranked 15 in India overall[8] and
        sixth in India among universities by the National Institutional Ranking
        Framework in 2020.[9] The university has been ranked 2nd among India's
        top government universities by India Today..
      </p>
      </>
      
  );
};
export default About;