import React from 'react';
import Skill from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/topbar/Topbar';
import Experience from './components/experience/Experience';

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Skill />
      <Experience />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
