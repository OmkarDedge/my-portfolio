// src/components/About.js
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <h2>About</h2>
      <p className={styles.highlight}>
        Crafting seamless digital experiences, from front-end finesse to
        back-end brilliance, while soaring into the cloud for scalable
        deployment that's as nimble as it is powerful.
      </p>
      <p>
        Hello! I'm a passionate full-stack developer driven by solving
        real-world problems with user-friendly and efficient frontends, paired
        with highly scalable and reliable backend solutions. I'm equally
        enthusiastic about tackling logical challenges through data structures
        and algorithms. I bring around 1.5 years of valuable experience from
        Nvidia to my development journey. I am currently pursuing my Master's
        degree at California State University, Fullerton.
      </p>
    </section>
  );
};

export default About;
