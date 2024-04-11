import './home.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import thomas from '../assets/IMG_2591.jpeg';

function Home() {
  return (
    <>
    {/* Helemt allows for the meta data on the tab to be changed, this one makes the tab be named the text in the window name on the browser */}
      <Helmet><title> Multi Pixel | Home </title></Helmet>
    <div className='main-container'>

    {/* Creates a container for the trendig image container, TODO: eventually pull a trending image from the database, maybe a cycle feature through the trending? */}
      <div className='trending-image-container'>
        <img src={thomas} className='trending-image'></img>
      </div>
      {/* About section of the home page, displays some text about the site with a quick link to the free draw tab*/}
      <div className='about-section'>
        {/* about sectin title */}
        <div className='about-section-title'>
          MULTIPIXEL
        </div>
        {/* about section body text */}
        <div className='about-section-body'>
          and we are here to make you think about how cool you are and get happy and stuff!
        </div>
        <div className='button-container'>
          <div className='free-draw-button'>
            <a href='/create'>Free Draw</a>
          </div>
          <div className='free-draw-button'>
            <a href='/community'>Community Page</a>
          </div>
        </div>
      </div>
    </div>
    </>
    );
  }
  
  export default Home;