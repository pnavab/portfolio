import React from 'react';
import './Home.css';
import { triangleSymbol } from './SVG';
import { Col, Row } from 'reactstrap';

export default function Home() {
    return (
      <>
        <div className='home-page'>
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
