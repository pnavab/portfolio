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
        </div>
      </> 
    );
}
