import { FaAward } from "react-icons/fa";
import { useState, useEffect } from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import profileImageFallback from "../../assets/ProfileImage1.jpeg";
import profileImageWebP from "../../assets/ProfileImage1.webp";
import "./intro.css";

const Intro = () => {
  const [experience, setExperience] = useState(0);
  useEffect(() => {
    const startDate = new Date("2023-01-10");
    const now = new Date();

    const diffInMs = now - startDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    const experienceInYears = (diffInDays / 365.25).toFixed(1); // using 365.25 to account for leap years

    setExperience(experienceInYears);
  }, []);

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <picture>
              <source type="image/webp" srcSet={profileImageWebP} />
              <img src={profileImageFallback} alt="profile_nitun" />
            </picture>
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
            As a React Front End Developer with over two years' experience, I
            build responsive UIs and prioritize performance, achieving a 40%
            reduction in initial load time for a key web app using Core Web
            Vitals. I translate designs into high-quality code, implementing
            features like infinite scrolling (Intersection Observer),
            location-based content, user rating systems, authentication, and
            Google Analytics. I successfully led a seamless v2-to-v3 design
            migration, maintaining consistency and enhancing UI/UX. My focus
            extends to stability; I've significantly reduced reliability issues
            and utilize Sentry for production error tracking. With a strong
            foundation in JavaScript/C++, 800+ LeetCode solutions demonstrating
            problem-solving skills, familiarity with SDLC, and a collaborative
            spirit, I’m adept at delivering polished, performant applications
            within a team environment.
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
