import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './skills.css';

const Experience = () => {
  return (
    <section id="skill">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Front-end Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>HTML / CSS</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>SASS / SCSS</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>C++</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Bootstrap, Tailwind</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>React, Vite JS</h4>
            </article>

            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Firebase</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Node.js, Express.js</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Redux, Redux-toolkit</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Responsive Design</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>SDLC Methodology, BEM Methodology</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Bitbucket, Git & Github</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Error Tracking: Sentry </h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Problem Solving </h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Postman</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
