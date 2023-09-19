import React from 'react';
import './Projects.css';
import Typewriter from 'typewriter-effect';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-scroll';
import { triangleSymbolPointingRight } from '../Home/SVG';

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
          <div className='project-selector'>
            <Row className='select-row'>
              <p>Project 1</p>
              <div className='triangle'>
                {triangleSymbolPointingRight()}
              </div>
              <div className='text-selection'>
              </div>
            </Row>
            <Row className='select-row'>
              <Col>
                <div className='triangle'>
                  {triangleSymbolPointingRight()}
                </div>
              </Col>
              <Col>
                <div className='text-selection'>
                </div>
              </Col>
            </Row>
            <Row className='select-row'>
              <Col>
                <div className='triangle'>
                  {triangleSymbolPointingRight()}
                </div>
              </Col>
              <Col>
                <div className='text-selection'>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        
        <div className='project 1'>

        </div>
        <div className='project 2'>

        </div>
        <div className='project 3'>

        </div>
      </> 
    );
}
