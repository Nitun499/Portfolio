import "./portfolio.css";

import TheOnlyMindImg from "../../assets/onlymind.png";
import TheOnlyMindImgWebp from "../../assets/onlymind.webp";
import PrescientAI from "../../assets/prescientai.png";
import PrescientAIWebp from "../../assets/prescientai.webp";
import EmploydImgWebp from "../../assets/employdImg.webp";
import EmploydImg from "../../assets/employd.png";
import React from "react";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "EmployD - Part Time Job Searching Platform",
      imgWebp: EmploydImgWebp,
      imgFallback: EmploydImg,
      description: `
     <p>
    Worked on a
    <span style="background-color: var(--color-primary); color: var(--color-white); padding: 2px 6px; border-radius: 4px;">
      B2C job-hunting platform
    </span> focused on part-time roles.<br>

    Contributed to
    <span style="color: var(--color-primary); font-weight: 500;">
      responsive UI design
    </span>, form validations, and new feature rollouts.<br>

    Integrated
    <span style="background-color: var(--color-bg-variant); color: var(--color-white); padding: 2px 6px; border-radius: 4px;">
      Google Analytics
    </span>, consolidated redundant APIs, and added a custom rating system.<br>

    Improved code coverage to
    <span style="color: var(--color-primary); font-weight: 500;">
      70%
    </span> and eliminated Sonar reliability issues.<br>

    Integrated
    <span style="background-color: var(--color-primary-variant); color: var(--color-white); padding: 2px 6px; border-radius: 4px;">
      Sentry
    </span> for better production error monitoring and debugging.
    `,
      technologies:
        "React.js | Redux Toolkit | SCSS | Material-UI | JavaScript | Sentry | Google Analytics | Styled Component",
      link: "https://employd.com/",
      github: "",
    },
    {
      id: 2,
      title:
        "AI Solutions Website Development for Business Growth and Innovation",
      imgWebp: PrescientAIWebp,
      imgFallback: PrescientAI,
      description: `
     <p>
    Developed a client’s
    <span style="background-color: var(--color-primary); color: var(--color-white); padding: 2px 6px; border-radius: 4px;">
      AI solutions website
    </span>, offering customized services to help businesses leverage artificial intelligence for growth and innovation.<br><br>

    <span style="color: var(--color-primary); font-weight: 500;">
    Improved web app performance
    </span>
     and reduced initial load time by
    <span style="color: var(--color-primary); font-weight: 500;">
      40%
    </span> by applying
    <span style="background-color: var(--color-bg-variant); color: var(--color-white); padding: 2px 6px; border-radius: 4px;">
      Core Web Vitals
    </span> principles.<br><br>

    Applied techniques like
    <span style="color: var(--color-primary); font-weight: 500;">
      lazy loading
    </span>,
    <span style="color: var(--color-primary); font-weight: 500;">
      WebP image compression
    </span>,
    <span style="color: var(--color-primary); font-weight: 500;">
      code splitting
    </span>, and
    <span style="color: var(--color-primary); font-weight: 500;">
      minimizing unused JS/CSS
    </span> for optimal performance.
  </p>
    `,
      technologies: "HTML | CSS | JavaScript | React.js",
      link: "https://prescientai.in/",
      github: "https://github.com/Onlymine23/PrescientAI",
    },
    {
      id: 3,
      title: "Mindfulness, Therapy, and Wellness Tools",
      imgWebp: TheOnlyMindImgWebp,
      imgFallback: TheOnlyMindImg,
      description: `
      <p>
        Collaborated with a team of three to build a <strong>mindfulness and therapy platform</strong>.<br>
        Developed features for <em>guided meditations, self-care tools</em>, and emotional wellness support.<br>
        Delivered a user-friendly and accessible experience optimized for all devices.
      </p>
    `,
      technologies: "HTML | CSS | JavaScript | React.js",
      link: "https://theonlymind.com/",
      github: "https://github.com/Onlymine23/Onlymind",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro?.title}>
            <div className="portfolio__item-image">
              <picture>
                <source type="image/webp" srcSet={pro?.imgWebp} />
                <img src={pro?.imgFallback} alt={pro.title} />
              </picture>
            </div>
            <div className="portfolio__item-content">
              <h3>{pro?.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: pro?.description }} />
              <p>{pro?.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro?.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
                style={{
                  display: pro?.title.includes("EmployD")
                    ? "none"
                    : "inline-block",
                }}
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
