import React from "react";
import Common from "./Common";
import mar from '../src/Images/IGM.jpg';

const SCIS = () => {
  return (
    <>
      <section id="header">
        <Common
          name="welcome to Indira Gandhi Memorial Library page"
          imgsrc={mar}
          visit="/service"
          btname="Our Services"
        />
      </section>
      <br />
      <br />

      <p style={{ textAlign: "center"}}>
        <h2 style={{ textAlign: "center", color: "blue" }}>
        Library :
        </h2>
        <br />
        <br />
        The university library is a central facility to support teaching and
        research activities of the University. This present library building was
        inaugurated by his Excellency late Shankar Dayal Sharma, the then Vice
        President of India, on 21 October 1988 and named after late Prime
        Minister Indira Gandhi. The Library is connected to Campus Network. The
        library also created learning environment by establishing Online Public
        Access Catalog (WebOPAC), OPAC Searching Area, Internet browsing area,
        Laptop zone with Wi-Fi facility, specialised workstations & software for
        visually-challenged students and by facilitating electronic resources,
        search services/tools. Indira Gandhi Memorial library is the first
        automated university library in the country. The library serves as a
        resources station to all scholars and has a print collection around
        400,000, that include monographs, text books, back volumes of journals,
        theses / dissertations, CDs/DVDs. It subscribes around 500 print
        journals in various disciplines of the university and provides access to
        more than 25,000 e-resources including e-books. It also comprises a
        reading room which is accessible round-the-clock for the benefit of the
        students.
      </p>
    </>
  );
};
export default SCIS;
