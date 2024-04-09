import './home.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import thomas from '../assets/IMG_2591.jpeg';

function Home() {
  return (
    <>
      <Helmet><title> Multi Pixel | Home </title></Helmet>
    <div className='main-container'>
      <div className='trending-image-container'>
        <img src={thomas} className='trending-image'></img>
      </div>
      <div className='about-section'>
        <div className='about-section-title'>
          WE ARE MULTIPIXEL!!!
        </div>
        <div className='about-section-body'>
          and we are here to make you think about how cool you are and get happy and stuff!
        </div>
        <div className='about-section-body'>
          <a href='/create'> Click here to get painting! </a>
        </div>
      </div>
    </div>
    </>
    );
  }
  
  export default Home;