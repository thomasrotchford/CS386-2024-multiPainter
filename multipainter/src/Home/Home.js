import './home.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import thomas from '../assets/IMG_2591.jpeg';

function Home() {
  return (
    <div>
      <Helmet><title> Multi Pixel | Home </title></Helmet>

      <div>
        <img src={thomas} className='thomas'/>
      </div>
    </div>
    );
  }
  
  export default Home;