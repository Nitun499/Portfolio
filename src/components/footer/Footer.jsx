import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';

import './footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#home" className="footer__logo">
        Nitun Singh
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/nitunsingh/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Nitun499" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="mailto:rathorenitun499@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <MdOutlineEmail />
        </a>
        <a
          href="https://leetcode.com/u/NitunRathore/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
