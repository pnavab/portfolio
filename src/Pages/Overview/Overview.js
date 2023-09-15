import React from 'react';
import './Overview.css';
import Typewriter from 'typewriter-effect';

export default function Overview() {
  return (
    <>
      <div className='overview page' id='overview-page'>
          <div className='subpage-title'>
              <Typewriter className='title' options={{
                  strings: [`About Me`],
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
