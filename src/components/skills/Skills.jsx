import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Skills } from "./skillsConst";
import "./skills.css";

const Experience = () => {
  return (
    <section id="skill">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Front-end Development</h3>
          <div className="skill__content">
            {Skills.map((skill, index) => (
              <article className="skill__details" key={index}>
                <BsFillPatchCheckFill className="skill__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
