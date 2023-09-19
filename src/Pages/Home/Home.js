import React from 'react';
import './Home.css';
import { triangleSymbolPointingLeft } from './SVG';
import { Col, Row } from 'reactstrap';
import Typewriter from 'typewriter-effect';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Home() {
  return (
    <>
      <div className='home-page'>
          <div className='portfolio-title'>
            <Typewriter className='title' options={{
              strings: [`Initializing Portfolio...`],
              autoStart: true,
              loop: true,
              pauseFor: 9999999,
              delay: 30,
              deleteSpeed: 1
            }}/>
          </div>
          <div className='center-text'>
            <Row className='select-row'>
              <div className='triangle'>
                {triangleSymbolPointingLeft()}
              </div>
              <div className='text-selection'>
                <Link
                  activeClass="active"
                  to="overview-page"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                > Overview
                </Link>
              </div>
            </Row>
            <Row className='select-row'>
              <Col>
                <div className='triangle'>
                  {triangleSymbolPointingLeft()}
                </div>
              </Col>
              <Col>
                <div className='text-selection'>
                  <Link
                    activeClass="active"
                    to="projects-page"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  > Projects
                  </Link>
                </div>
              </Col>
            </Row>
            <Row className='select-row'>
              <Col>
                <div className='triangle'>
                  {triangleSymbolPointingLeft()}
                </div>
              </Col>
              <Col>
                <div className='text-selection'>
                  <Link
                    activeClass="active"
                    to="contact-me"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  > Contact Me
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
      </div>
    </> 
  );
}
