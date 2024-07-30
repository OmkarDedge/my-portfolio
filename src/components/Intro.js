import React from "react";
import "./intro.css";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Omkar</span>
        </span>
        <p className="introPara">
          I'm a passionate full-stack developer driven by solving real-world
          problems with user-friendly and efficient frontends, paired with
          highly scalable and reliable backend solutions. I'm equally
          enthusiastic about tackling logical challenges through data structures
          and algorithms. I bring around 1.5 years of valuable experience from
          Nvidia to my development journey. I am currently pursuing my Master's
          degree at California State University, Fullerton.
        </p>
        <Link>
          <button className="btn">
            <img src="hireMe.jpg" alt="Hire" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      {/* <img src="omkar.jpeg" alt="Omkar" className="bg" /> */}
    </section>
  );
};
export default Intro;
