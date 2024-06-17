// src/components/Header.js
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Omkar Umesh Dedge</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#experience">Work Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Technical Skills</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
