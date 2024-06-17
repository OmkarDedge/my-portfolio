// src/components/Skills.js
import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <h2>Technical Skills</h2>
      <div className={styles.skills}>
        <div className={styles.card}>
          <h3>Programming Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Web Development</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Tools & Technologies</h3>
          <ul>
            <li>Git/GitHub</li>
            <li>Docker</li>
            <li>Linux</li>
            <li>MongoDB</li>
            <li>AWS</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
