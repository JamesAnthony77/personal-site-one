import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio';
import Podcast from './components/Podcast.jsx';
import SkillTree from './components/SkillTree';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Podcast />
      <SkillTree />
      <SocialLinks />
      <Contact />
    </div>
  );
}

export default App;
