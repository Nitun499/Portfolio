import { FaAward } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { VscFolderLibrary } from 'react-icons/vsc';
import img from '../../assets/ProfileImage1.jpeg';
import './intro.css';

const Intro = () => {
  const [experience, setExperience] = useState(0);
  useEffect(() => {
    const startDate = new Date('2023-1-10');
    const now = new Date();

    const years = now.getFullYear() - startDate.getFullYear();
    const months = now.getMonth() - startDate.getMonth();
    const totalMonths = years * 12 + months;

    const experienceInYears = (totalMonths / 12).toFixed(1);

    setExperience(experienceInYears);
  }, []);

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>{experience}</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
            {experience} years experienced Front End Developer with hands-on
            experience in identifying web-based user interactions along with
            designing and implementing highly-responsive user interface
            components by deploying React concepts. Proficient in translating
            designs and wireframes into high-quality code, and writing
            application interface code via JavaScript and React JS workflows.
            Adept at monitoring and maintaining frontend performance and
            troubleshooting and debugging the same to bolster overall
            performance. Solved 800+ problems on leetcode.
          </p>
          <a href="#footer" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
