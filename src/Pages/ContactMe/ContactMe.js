import React from 'react';
import './ContactMe.css';
import Typewriter from 'typewriter-effect';

export default function ContactMe() {
  return (
    <>
      <div className='contact-page' id='contact-me'>
          <div className='subpage-title'>
              <Typewriter className='title' options={{
                  strings: [`Contact Me`],
                  autoStart: true,
                  loop: true,
                  pauseFor: 10000,
                  delay: 30,
                  deleteSpeed: 35
              }}/>
          </div>
          <div className='contact-page-content'>
            <div className='contact-page-socials'>
              <a href='mailto:pablonavab@gmail.com'>&nbsp;
                <button className='gmail social-button'></button>
              </a>
              <a href='https://www.github.com/pnavab' target='blank'>&nbsp;
                <button className='github social-button'></button>
              </a>
              <a href='https://www.linkedin.com/in/pablonavabarrera' target='blank'>&nbsp;
                <button className='linkedin social-button'></button>
              </a>
            </div>
          </div>
      </div>
    </> 
  );
}
