import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="edu">
      <span className="eduTitle">Education</span>
      <div className="eduText">
        <h2>Master of Science in Computer Science</h2>
        <h4>California State University Fullerton, 2023-2024</h4>
        <p>
          <span className="course-work">Relevent Coursework</span> : Artificial
          Intelligence, Machine Learning, Data Structures and Algorithms
        </p>

        <h2 className="heading">Bachelor of Science in Computer Science</h2>
        <h4>SavitriBai Phule Pune University, 2017-2021</h4>
        <p>
          <span className="course-work">Relevent Coursework</span> : Web-Backend
          Engineering, Advance Database Systems, Advance Algorithms
        </p>
      </div>
    </section>
  );
};
export default Education;
