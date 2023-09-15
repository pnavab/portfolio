import React from 'react';
import Home from '../Home/Home';
import './Portfolio.css';
import Projects from '../Projects/Projects';
import Overview from '../Overview/Overview';
import ContactMe from '../ContactMe/ContactMe';

export default function Portfolio() {
  return (
    <>
      <div className='main-page'>
          <Home />
          <Overview />
          <Projects />
          <ContactMe />
      </div>
    </> 
  );
}
