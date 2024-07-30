import React from "react";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <section id="workEx">
      <span className="workTitle">Work Experience</span>
      <div className="container">
        <h2>Software Developer in Test at Nvidia</h2>
        <h3>Duration: August 2021 - December 2022</h3>
        <div className="workText">
          <ul>
            <li>
              Directed and enhanced automation by 50% and Engineered automated
              scripts in Python(HSDL) for 7 teams namely L2, SL2, L3, Active
              safety, L4(Volvo truck), Emergency Steering Support and
              Mercedes-Benz.
            </li>

            <li>
              Streamlined Software and Hardware testing by 60% for Volvo Truck
              using Python Test Framework.
            </li>

            <li>
              Revamped test case execution and management efficiency by 35%
              within the Active Safety team using Python Test Framework,
              employing Python Selenium for automated scripting across six key
              features.
            </li>

            <li>
              Led the development of an internal tool with Selenium WebDriver
              for 100% end-to-end test case execution in software and hardware
              environments. Guided Nvidia team for successful project
              implementation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default WorkExp;
