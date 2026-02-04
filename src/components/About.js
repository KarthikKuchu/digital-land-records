import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About Digital Land Records</h1>

      <section className="about-section">
        <h2>What are Digital Land Records?</h2>
        <p>
          Digital Land Records refer to the computerized system of storing,
          managing, and accessing land ownership and property details through
          an online platform. It replaces traditional paper-based land records
          with a secure and transparent digital system.
        </p>
      </section>

      <section className="about-section">
        <h2>Purpose of This Project</h2>
        <p>
          The purpose of this project is to provide easy and quick access to
          land records for citizens of Anantapuram district. Users can search
          land details using mandal and survey number without visiting government
          offices.
        </p>
      </section>

      <section className="about-section">
        <h2>Key Features</h2>
        <ul>
          <li>Search land records by Mandal and Survey Number</li>
          <li>View land owner details and land information</li>
          <li>Display ownership history for transparency</li>
          <li>Show land record verification status</li>
          <li>Download land record details as PDF</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Benefits of Digital Land Records</h2>
        <ul>
          <li>Reduces paperwork and manual processing</li>
          <li>Improves transparency and trust</li>
          <li>Prevents land disputes and fraud</li>
          <li>Saves time for citizens and officials</li>
          <li>Provides quick access to land information</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Future Enhancements</h2>
        <p>
          In the future, this system can be integrated with a backend database,
          user authentication, online mutation requests, and GIS-based land maps
          for better visualization.
        </p>
      </section>
    </div>
  );
}

export default About;
