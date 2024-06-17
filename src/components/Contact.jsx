// src/components/Contact.jsx
import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <h2>Contact Information</h2>
      <div className={styles.contactDetails}>
        <p>Email: omkardedge11@gmail.com</p>
        <p>
          <strong>GitHub : </strong>
          <a
            href="https://github.com/OmkarDedge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Link</strong>
          </a>
        </p>
        <p>
          <strong>LinkedIn : </strong>
          <a
            href="https://www.linkedin.com/in/omkar-umesh-dedge-77144414a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Link</strong>
          </a>
        </p>
        <p>
          <strong>LeetCode : </strong>
          <a
            href="https://leetcode.com/u/Omkar_Dedge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Link</strong>
          </a>
        </p>
        {/* Add more contact details as needed */}
      </div>
    </section>
  );
};

export default Contact;
