import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <span className="projectTitle">Projects</span>
      <div className="projectBars">
        <div className="projectBar">
          <div className="projectText">
            <h2>Job Portal (Node.js, MongoDB, Express)</h2>
            <p>
              The Job Portal System is a secure web application connecting job
              seekers and employers. It features JWT token-based authentication
              for secure access, enabling admins to manage job postings with
              CRUD functionalities. Users receive personalized job analytics and
              statistics for insights into their applications. Security
              measures, such as XSS prevention and SQL injection protection,
              ensure data safety. The system delivers a seamless user experience
              while maintaining strict security protocols.
            </p>
            <a
              href="https://github.com/OmkarDedge/Job-Portal-Project"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://job-portal-project-7030.onrender.com/api-doc/"
              target="_blank"
            >
              Live Link
            </a>
          </div>
        </div>

        <div className="projectBar">
          <div className="projectText">
            <h2>Chat-Up (Node.js, Express, React.js, MongoDB)</h2>
            <p>
              The Real-Time Chat Application, built on the MERN stack, offers
              instant messaging with JWT authentication and socket.io for
              real-time communication. Users can engage in one-on-one and group
              chats, while admins can manage and moderate chat groups. Users can
              manage their profiles for personalized interactions. Security
              measures, including XSS and SQL injection protection, ensure data
              safety. With a responsive design and intuitive interface, the
              system provides a user-friendly and secure platform for efficient
              communication and profile management.
            </p>
            <a
              href="https://github.com/OmkarDedge/ChatUp-MERN_Project"
              target="_blank"
            >
              GitHub
            </a>
            <a href="https://chatup-mern-project.onrender.com/" target="_blank">
              Live Link
            </a>
          </div>
        </div>

        <div className="projectBar">
          <div className="projectText">
            <h2>InternNest (Node.js, Express, React.js, MongoDB, Socket.io)</h2>
            <p>
              Welcome to InternNest! Built with Node.js, Express, React.js,
              MongoDB, and Socket.io, this platform connects landlords and
              users, ideal for interns seeking temporary housing. Landlords can
              post rentals, and users can browse listings and chat with property
              owners in real time. JWT tokens ensure secure authorization and
              authentication, protecting user data and interactions. This
              project showcases my skills in building full-stack applications
              with real-time communication and secure user management.
            </p>
            <a
              href="https://github.com/sanketauti8/InternNest-Backend"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://internify-frontend.onrender.com/login"
              target="_blank"
            >
              Live Link
            </a>
          </div>
        </div>

        <div className="projectBar">
          <div className="projectText">
            <h2>Path Finder (React.js, Dijkstra Algorithm)</h2>
            <p>
              The Path Finder Application, built with React, lets users explore
              shortest paths using Dijkstra's algorithm on a grid. Users can set
              start and end nodes, draw obstacles, and see real-time updates as
              the algorithm navigates around barriers. This project showcases
              interactive visualization of pathfinding algorithms with a
              user-friendly interface.
            </p>
            <a
              href="https://github.com/OmkarDedge/path-finder-algorithm"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://path-finder-algorithm-ashy.vercel.app/"
              target="_blank"
            >
              Live Link
            </a>
          </div>
        </div>

        <div className="projectBar">
          <div className="projectText">
            <h2>Sorting Visualizer (React.js, Merge-Sort Algorithm)</h2>
            <p>
              The Merge Sort Visualizer, developed in React, lets users
              visualize the Merge Sort algorithm. Users can generate random
              arrays and watch as the algorithm divides, sorts, and merges them
              step-by-step through animations. This project enhances
              understanding of sorting algorithms and demonstrates React's
              ability to create engaging educational tools.
            </p>
            <a
              href="https://github.com/OmkarDedge/merge-sort-visualizer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://merge-sort-visualizer-theta.vercel.app/"
              target="_blank"
            >
              Live Link
            </a>
          </div>
        </div>

        <div className="projectBar">
          <div className="projectText">
            <h2>
              Ebola Analysis (Python, Apache Spark, AWS S3, AWS EMR, Databricks)
            </h2>
            <p>
              Ebola Data Analysis: I analyzed a 7.5 GB Ebola dataset using
              Python and Apache Spark. Initially tested on Databricks, I then
              deployed it on AWS for full-scale processing. Using AWS S3 for
              storage and AWS EMR for computing, I efficiently processed and
              analyzed the data. This deployment ensured scalability,
              reliability, and high performance, providing comprehensive
              insights into the Ebola dataset.
            </p>
            <a
              href="https://github.com/OmkarDedge/ebola-analysis"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://docs.google.com/document/d/1pPjU_y3AD-6eduPgOj6Azp96vuiBiKtLK7XMUcO5IiY/edit?pli=1#heading=h.z6ne0og04bp5"
              target="_blank"
            >
              Report Link
            </a>
          </div>
        </div>

        <div className="projectBar">
          <div className="projectText">
            <h2>
              Collaborative Document Writer (Node.js, React.js, Express,
              Material UI, Qill, MongoDB, Socket.io)
            </h2>
            <p>
              The Collaborative Document Editor is a web application that allows
              multiple users to create and edit documents in real time. The
              backend is built with Node.js and Express, and the frontend uses
              React.js, Quill for rich text editing, and Material UI for a sleek
              design. Real-time synchronization via Socket.io ensures instant
              updates, with changes securely stored in the database.
            </p>
            <a
              href="https://github.com/OmkarDedge/document-writer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1T8P98YQDZxVVITNDlZKb417btrYXlb2J/view"
              target="_blank"
            >
              Video Link
            </a>
          </div>
        </div>

        <div className="projectBar">
          <div className="projectText">
            <h2>
              Video Chat App (Node.js, React.js, WebRTC, Socket.io, HTML/CSS)
            </h2>
            <p>
              Welcome to the Video Chat App! Built with Node.js, Socket.io,
              React.js, and WebRTC, this app allows real-time video chatting
              with high-quality audio and video. The backend, powered by Node.js
              and Socket.io, ensures robust communication, while the React.js
              frontend provides a responsive user experience. WebRTC enables
              seamless video and audio streaming for smooth chats. This project
              demonstrates my ability to create efficient, scalable, and
              user-centric applications using modern web technologies.
            </p>
            <a
              href="https://github.com/OmkarDedge/video-chat-app"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1Di8tpElmlFmDf9_GSsX_by8zhCXlaFBq/view"
              target="_blank"
            >
              Video Link
            </a>
          </div>
        </div>

        <div className="projectBar">
          <div className="projectText">
            <h2>Streamify (Node.js, RTMP, Socket.io, FFmpeg, Docker)</h2>
            <p>
              Streamify is a custom streaming server that lets users broadcast
              live content to YouTube and other platforms. Developed in Node.js,
              it uses FFmpeg for efficient video processing and RTMP for smooth
              real-time streaming. Containerized with Docker, Streamify
              simplifies deployment and management. This project demonstrates my
              skills in backend development, real-time communication, and
              containerization, showcasing my ability to create scalable and
              efficient streaming solutions.
            </p>
            <a href="https://github.com/OmkarDedge/streamify" target="_blank">
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1dKJeobO3ugC2Mzpo8n7p4eTPHrDGmVrO/view"
              target="_blank"
            >
              Video Link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
