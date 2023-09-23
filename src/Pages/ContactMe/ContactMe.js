import React from 'react';
import './ContactMe.css';
import Typewriter from 'typewriter-effect';

export default function ContactMe() {
  function navigateToSocial(link) {
    window.location.href = link;
  }
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
              <button className='gmail social-button'></button>
              <button className='github social-button' onClick={() => navigateToSocial('https://www.github.com/pnavab')}></button>
              <button className='linkedin social-button' onClick={() => navigateToSocial('https://www.linkedin.com/in/pablonavabarrera')}></button>
            </div>
          </div>
      </div>
    </> 
  );
}
