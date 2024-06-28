import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <h2>Projects</h2>
      <div className={styles.projects}>
        <div className={styles.card}>
          <h3>Job Portal (Node.js, MongoDB, Express)</h3>
          <p>
            The Job Portal System is a secure web application designed to
            connect job seekers and employers efficiently. It features robust
            user authentication with JWT token-based authorization for secure
            access to sensitive areas. Administrators can manage job postings
            through comprehensive CRUD functionalities, ensuring up-to-date and
            relevant listings. Users benefit from personalized job analytics and
            statistics, empowering them with insights into their application
            history and success rates. Implemented security measures, including
            cross-site scripting prevention and database security against SQL
            injection, safeguard user data and interactions. The system aims to
            provide a seamless user experience while maintaining stringent
            security protocols for all stakeholders involved.
          </p>
          <a
            href="https://github.com/OmkarDedge/Job-Portal-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GitHub</strong>
          </a>{"   "}
          <a
            href="https://job-portal-project-7030.onrender.com/api-doc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Live Link</strong>
          </a>
        </div>
        <div className={styles.card}>
          <h3>Chat-Up (Node.js, Express, React.js, MongoDB)</h3>
          <p>
            The Real-Time Chat Application, built on the MERN (MongoDB,
            Express.js, React.js, Node.js) stack, offers seamless instant
            messaging with JWT token-based authentication and socket.io for
            real-time communication. Users can engage in one-on-one and group
            chats, and administrators have tools to create, manage, and moderate
            chat groups for organized discussions. Additionally, users have the
            capability to manage their profiles, ensuring personalized
            interaction experiences. Security measures include protection
            against cross-site scripting (XSS) and SQL injection, securing user
            data and interactions. With a responsive design and intuitive
            interface, the system aims to provide a user-friendly and secure
            platform for efficient communication and profile management across
            all stakeholders.
          </p>
          <a
            href="https://github.com/OmkarDedge/ChatUp-MERN_Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GitHub</strong>
          </a>{"   "}
          <a
            href="https://chatup-mern-project.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Live Link</strong>
          </a>
        </div>
        <div className={styles.card}>
          <h3>Path Finder (React.js, Dijkstra Algorithm)</h3>
          <p>
            The Path Finder Application, implemented using React, provides a
            user-friendly interface to explore shortest paths using the Dijkstra
            algorithm while navigating through obstacles. Users can designate a
            start node and an end node on a grid-based layout. By holding the
            left mouse button, they can draw obstacles directly on the grid,
            dynamically updating the pathfinding algorithm to navigate around
            these barriers. The application leverages React's state management
            to handle user interactions seamlessly, ensuring real-time updates
            to the shortest path calculation as nodes and obstacles are
            modified. This project demonstrates interactive visualization of
            pathfinding algorithms in action, enhancing understanding and
            usability through intuitive graphical representation.
          </p>
          <a
            href="https://github.com/OmkarDedge/path-finder-algorithm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GitHub</strong>
          </a>{"   "}
          <a
            href="https://path-finder-algorithm-ashy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Live Link</strong>
          </a>
        </div>
        {/* Add more project cards as needed */}
        <div className={styles.card}>
          <h3>Sorting Visualizer (React.js, Merge-Sort Algorithm)</h3>
          <p>
            The Merge Sort Visualizer, developed in React, provides an
            interactive platform to visualize the Merge Sort algorithm—a
            powerful and efficient sorting method. Users can generate random
            arrays of numbers and observe how Merge Sort divides, sorts, and
            merges these arrays to achieve a sorted sequence. The visualizer
            dynamically displays each step of the sorting process through
            animations, allowing users to grasp the inner workings of Merge Sort
            comprehensively. By enabling users to interact with randomized data
            sets, the project enhances understanding of sorting algorithms while
            showcasing React's capabilities in creating engaging educational
            tools.
          </p>
          <a
            href="https://github.com/OmkarDedge/merge-sort-visualizer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GitHub</strong>
          </a>{"   "}
          <a
            href="https://merge-sort-visualizer-theta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Live Link</strong>
          </a>
        </div>
        <div className={styles.card}>
          <h3>
            Ebola Analysis (Python, Apache Spark, AWS S3, AWS EMR, Databricks)
          </h3>
          <p>
            Ebola Data Analysis In this project, I conducted an extensive
            analysis of a 7.5 GB dataset on Ebola using Python and Apache Spark
            for big data computing. Initially, I deployed the application on
            Databricks for testing purposes to ensure robust performance and
            accurate results. After successful testing, I migrated the
            application to AWS for full-scale deployment. Utilizing AWS S3 for
            secure and scalable storage, and AWS EMR for enhanced computing
            power, I efficiently processed and analyzed the data. This
            deployment on AWS ensured scalability, reliability, and high
            performance, allowing for comprehensive statistical analysis and
            insights into the Ebola dataset.
          </p>
          <a
            href="https://github.com/OmkarDedge/ebola-analysis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GitHub</strong>
          </a>{"   "}
          <a
            href="https://docs.google.com/document/d/1pPjU_y3AD-6eduPgOj6Azp96vuiBiKtLK7XMUcO5IiY/edit#heading=h.z6ne0og04bp5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Report Link</strong>
          </a>
        </div>
        <div className={styles.card}>
          <h3>
            Collaborative Document Writer (Node.js, React.js, Express, Material UI, Qill, MongoDB, Socket.io)
          </h3>
          <p>
           The Collaborative Document Editor is a powerful web-based application that enables multiple users to create, format, and style documents in real-time. Built with a robust technology stack, the backend is developed using Node.js and Express, while the frontend leverages React.js, Quill for rich text editing, and Material UI for a sleek, responsive design. Real-time synchronization of document changes is facilitated by Socket.io, ensuring that all users see updates instantly and changes are securely stored in the database.
          </p>
          <a
            href="https://github.com/OmkarDedge/document-writer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GitHub</strong>
          </a>{"   "}
           <a
            href="https://drive.google.com/file/d/1T8P98YQDZxVVITNDlZKb417btrYXlb2J/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Video Link</strong>
          </a>
        </div>
        <div className={styles.card}>
          <h3>
           Video Chat App (Node.js, React.js, WebRTC, Socket.io, HTML/CSS)
          </h3>
          <p>
           Welcome to the Video Chat App! This application, built using Node.js, Socket.io, React.js, and WebRTC, allows you to connect and chat with friends over video in real-time. It features high-quality video and audio communication, a user-friendly interface, and scalability for efficient performance. The backend is powered by Node.js and Socket.io, ensuring robust and real-time communication, while the frontend, developed with React.js, provides a responsive and intuitive user experience. WebRTC is utilized for seamless video and audio streaming, ensuring a smooth and uninterrupted chat experience. This project showcases modern web technologies and highlights my ability to create efficient, scalable, and user-centric applications.
          </p>
          <a
            href="https://github.com/OmkarDedge/video-chat-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GitHub</strong>
          </a>{"   "}
           <a
            href="https://drive.google.com/file/d/1o1KFTCAsas0djX7UBGVqcFFLZatudoPN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Video Link</strong>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
