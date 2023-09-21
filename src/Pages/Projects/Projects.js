import React, { useState } from 'react';
import './Projects.css';
import Typewriter from 'typewriter-effect';
import { Row, Col } from 'reactstrap';
import { triangleSymbolPointingLeft } from './SVG';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState('');

  async function handleSelect(project) {
    setSelectedProject(project);
    console.log(selectedProject);
  }

  function renderCard() {
    switch(selectedProject) {
      case 'Cleezy':
        return (
          <div className='project-card'>
            <div className='project-card-description'>
              Cleezy was a URL shortening service I made for the Software and Computer Engineering Society's club page.
              I used Python's FastAPI library, SQLite for the database, and Docker to containerize the code. I also added
              custom Prometheus metrics for tracking creation time, redirect response time, and error counter. SCE uses 
              this shortener for links such as the Discord invite. Check it out at <a href='sce.sjsu.edu/s/discord'>sce.sjsu.edu/s/discord</a>!
            </div>
          </div>
        );
      case 'JotBot':
        return (
          <div className='project-card'>
            <div className='project-card-description'>
              JotBot is an AI-powered note taking web app prototype. It allows the user to select from various LLMs.
            </div>
          </div>
        );
      case 'Raspberry Pi Speaker System':
        return (
          <div className='project-card'>
            <div className='project-card-description'>
              This was a project I contributed to in the SCE club room. 
            </div>
          </div>
        );
      case '':
        return (
          <div className='project-card'>
            this is an empty card
          </div>
        )
      default:
        return <div />;
    }
  }

  return (
    <>
      <div className='projects-page' id='projects-page'>
        <div className='subpage-title'>
            <Typewriter className='title' options={{
                strings: [`Projects`],
                autoStart: true,
                loop: true,
                pauseFor: 10000,
                delay: 30,
                deleteSpeed: 35
            }}/>
        </div>
        <div className='project-section'>
          <div className='project-selector'>
            <Row className='select-row' onClick={() => handleSelect('Cleezy')}>
              <div className='text-selection'>
                Cleezy
              </div>
              <div className='triangle'>
                {triangleSymbolPointingLeft()}
              </div>
            </Row>
            <Row className='select-row' onClick={() => handleSelect('JotBot')}>
              <div className='text-selection'>
                JotBot
              </div>
              <div className='triangle'>
                {triangleSymbolPointingLeft()}
              </div>
            </Row>
            <Row className='select-row' onClick={() => handleSelect('Raspberry Pi Speaker System')}>
              <div className='text-selection'>
                Raspberry Pi Speaker System
              </div>
              <div className='triangle'>
                {triangleSymbolPointingLeft()}
              </div>
            </Row>
          </div>
          <div className='project-card-container'>
              {renderCard()}
          </div>
        </div>
      </div>
    </> 
  );
}
