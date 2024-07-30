import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        Crafting seamless digital experiences, from front-end finesse to
        back-end brilliance, while soaring into the cloud for scalable
        deployment that's as nimble as it is powerful.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src="c++.png" alt="C++" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Programming Languages</h2>
            <p className="skillPara">JavaScript Python Java C++</p>
          </div>
        </div>

        <div className="skillBar">
          <img src="react.png" alt="react" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p className="skillPara">HTML CSS React.js Node.js Express Bootstrap</p>
          </div>
        </div>

        <div className="skillBar">
          <img src="aws.png" alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Tools and Technologies</h2>
            <p className="skillPara">Git/GitHub Docker Linux MongoDB AWS Postman</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
