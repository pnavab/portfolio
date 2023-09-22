import React, { useState } from 'react';
import './Projects.css';
import Typewriter from 'typewriter-effect';
import { Row } from 'reactstrap';
import { triangleSymbolPointingLeft } from './SVG';
import cleezyImage from './cleezy.jpg';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState('Cleezy');

  async function handleSelect(project) {
    setSelectedProject(project);
    console.log(selectedProject);
  }

  function renderCard() {
    switch(selectedProject) {
      case 'Cleezy':
        return (
          <div className='project-card'>
            <div className='project-card-image-container'>
              <img src={cleezyImage} alt='cleezy-screenshot' style={{ maxWidth: '100%', maxHeight: '100%', padding: '10px' }}></img>
            </div>
            <div className='project-card-description'>
              Cleezy was a URL shortening service I made for the Software and Computer Engineering Society's club page.
              I used Python's FastAPI library, SQLite for the database, and Docker to containerize the code. I also added
              custom Prometheus metrics for tracking creation time, redirect response time, and error counter. SCE uses 
              this shortener for links such as the Discord invite. Check it out at <a href='https://sce.sjsu.edu/s/discord'>sce.sjsu.edu/s/discord</a>!
            </div>
          </div>
        );
      case 'JotBot':
        return (
          <div className='project-card'>
            <div className='project-card-description'>
              JotBot is an AI-powered note taking app prototype. It allows the user to write down and save 1000-character notes, with AI integrated.
              For example, the user can ask ChatGPT a question in one field, and the answer will show up in the note itself, allowing for easy
              formatting of the answer.
            </div>
          </div>
        );
      case 'Raspberry Pi Speaker System':
        return (
          <div className='project-card'>
            <div className='project-card-description'>
              This was a project I contributed to in the SCE club room for playing music on speakers through a Raspberry Pi. This was done
              by connecting the Pi to the room's server and opening an SSH Tunnel to forward a port on the server to the port on the Pi hosting
              the music playing API. I also wrote a Bash script to read command line arguments that started or stopped both the tunnel and API. 
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
            <div className='win-bar'>
              <div className='win-close-button' onClick={() => setSelectedProject('')}></div>
              <div className='win-full-button'></div>
              <div className='win-min-button'></div>
              <div className='win-upd-button'></div>
              <div className='win-text'>127.0.0.1:8080/{selectedProject}</div>
            </div>
            {/* <div className='project-card-content'> */}
              {renderCard()}
            {/* </div> */}
          </div>
        </div>
      </div>
    </> 
  );
}
