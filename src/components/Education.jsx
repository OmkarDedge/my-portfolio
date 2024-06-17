// src/components/Education.jsx
import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section id="education" className={styles.section}>
      <h2>Education</h2>
      <div className={styles.educationDetails}>
        <div>
          <h3>Master of Science in Computer Science</h3>
          <p>California State University Fullerton, 2023-2024</p>
          <p>
            <strong>Relevent Coursework :</strong> Artificial Intelligence,
            Machine Learning, Data Structures and Algorithms
          </p>
        </div>
        <div>
          <h3>Bachelor of Science in Computer Science</h3>
          <p>SavitriBai Phule Pune University, 2017-2021</p>
          <p>
            <strong>Relevent Coursework :</strong> Web-Backend Engineering,
            Advance Database Systems, Advance Algorithms
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
