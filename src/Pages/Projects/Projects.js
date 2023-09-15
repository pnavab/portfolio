import React from 'react';
import './Projects.css';
import Typewriter from 'typewriter-effect';

export default function Projects() {
    return (
      <>
        <div className='projects page' id='projects-page'>
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
        </div>
      </> 
    );
}