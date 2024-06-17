// src/components/Experience.js
import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.section}>
      <h2>Work Experience</h2>
      <h3>Software Developer in Test at Nvidia</h3>
      <p>Duration: August 2021 - December 2022</p>

      <ul>
        <li>
          <p>
            Directed and enhanced automation by 50% and Engineered automated
            scripts in Python(HSDL) for 7 teams namely L2, SL2, L3, Active
            safety, L4(Volvo truck), Emergency Steering Support and
            Mercedes-Benz
          </p>
        </li>
        <li>
          <p>
            Streamlined Software and Hardware testing by 60% for Volvo Truck
            using Python Test Framework
          </p>
        </li>
        <li>
          <p>
            Revamped test case execution and management efficiency by 35% within
            the Active Safety team using Python Test Framework, employing Python
            Selenium for automated scripting across six key features
          </p>
        </li>
        <li>
          <p>
            Led the development of an internal tool with Selenium WebDriver for
            100% end-to-end test case execution in software and hardware
            environments. Guided Nvidia team for successful project
            implementation
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
