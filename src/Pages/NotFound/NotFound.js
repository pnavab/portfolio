import React from 'react';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
      <>
        <div className='page'>
          <Header title='Not Found'></Header>
          <Link to='/'>Return Home</Link>
        </div>
      </>
    );
}
