import React from 'react';
import './Home.css';
import { triangleSymbol } from './SVG';
import { Col, Row } from 'reactstrap';
import Typewriter from 'typewriter-effect';

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
                  {triangleSymbol()}
                </div>
                <div className='text-selection'>
                  <a href='/'>Overview</a>
                </div>
              </Row>
              <Row className='select-row'>
                <Col>
                  <div className='triangle'>
                    {triangleSymbol()}
                  </div>
                </Col>
                <Col>
                  <div className='text-selection'>
                    <a href='/'>Projects</a>
                  </div>
                </Col>
              </Row>
              <Row className='select-row'>
                <Col>
                  <div className='triangle'>
                    {triangleSymbol()}
                  </div>
                </Col>
                <Col>
                  <div className='text-selection'>
                    <a href='/'>Contact Me</a>
                  </div>
                </Col>
              </Row>
            </div>
        </div>
      </> 
    );
}
