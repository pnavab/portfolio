import React from 'react';
import './Overview.css';
import Typewriter from 'typewriter-effect';

export default function Overview() {
  return (
    <>
      <div className='overview-page' id='overview-page'>
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
          <div className='overview-page-content'>
            <div className='overview-page-description'>
              <p>&nbsp;&nbsp;Hello, my name is Pablo and I'm studying Computer Science at San Jose State University. I'm the current treasurer and dev team officer for SJSU's <a href='https://sce.sjsu.edu'>Software and Computer Engineering Society</a>.
                I like experimenting with new full-stack tech stacks, and am currently looking for a 2024 summer internship. <br /><br />
                &nbsp;&nbsp;Right now, I'm working with Doctor Young Park on Google sponsored research for autonomous vehicle collision detection.
              </p>
            </div>
          </div>
      </div>
    </> 
  );
}
