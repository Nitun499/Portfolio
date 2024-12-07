import './portfolio.css';

import TheOnlyMind from '../../assets/onlymind.png';
import PrescientAI from '../../assets/prescientai.png';
import WeatherApp from '../../assets/WeatherApp.jpeg';
import React from 'react';

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Mindfulness, Therapy, and Wellness Tools',
      img: TheOnlyMind,
      description:
        'Developed a client’s mindfulness website with a team of three, offering therapy, meditations, and self-care tools for emotional wellness.',
      technologies: 'Html | CSS | Javascript | React Js ',
      link: 'https://theonlymind.com/',
      github: 'https://github.com/Onlymine23/Onlymind',
    },
    {
      id: 2,
      title:
        'AI Solutions Website Development for Business Growth and Innovation',
      img: PrescientAI,
      description:
        "Developed a client's AI solutions website, offering customized services to help businesses leverage artificial intelligence for growth and innovation.",
      technologies: 'HTML | CSS | JavaScript | Reactjs',
      link: 'https://prescientai.in/',
      github: 'https://github.com/Onlymine23/PrescientAI',
    },
    {
      id: 3,
      title: 'Weather Forecasting App',
      img: WeatherApp,
      description:
        'Developed a weather forecasting app providing real-time weather updates and detailed information, using APIs to deliver accurate and location-based forecasts',
      technologies: 'HTML | CSS | JavaScript',
      link: 'https://weathernfo.web.app/',
      github: 'https://github.com/Nitun499/WeatherApp',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
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
