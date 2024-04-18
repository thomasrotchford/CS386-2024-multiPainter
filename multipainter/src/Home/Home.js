import './home.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import thomas from '../assets/IMG_2591.jpeg';
import squirrel from '../assets/Screenshot 2023-09-19 194312.png'
import { useState } from 'react';

const IMAGES = []

function ImageSlider({imageUrls})
{
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <div >
      <div className='img-slider'>
        <img src={imageUrls[imageIndex]} className='img-slider-img'/>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
    {/* Helemt allows for the meta data on the tab to be changed, this one makes the tab be named the text in the window name on the browser */}
      <Helmet><title> Multi Pixel | Home </title></Helmet>
    <div className='main-container'>
    {/* Creates a container for the trendig image container, TODO: eventually pull a trending image from the database, maybe a cycle feature through the trending? */}
      <div className='img-slider-container'>
        <ImageSlider imageUrls = {IMAGES}/>
        <ImageSlider imageUrls = {IMAGES}/>
        <ImageSlider imageUrls = {IMAGES}/>
      </div>
      {/* About section of the home page, displays some text about the site with a quick link to the free draw tab*/}
      <div className='about-section'>
        {/* about sectin title */}
        <div className='about-section-title'>
          WELCOME TO MULTIPIXEL
        </div>
        {/* about section body text */}
        <div className='about-section-body'>
          and we are here to make you think about how cool you are and get happy and stuff!
        </div>
        <div className='button-container'>
          <a href='/create'>
            <div className='free-draw-button'>Free Draw </div>
          </a>
          <a href='/paint'>
            <div className='free-draw-button'>Templates </div>
          </a>
          <a href='/community'>
            <div className='free-draw-button'>Community Page</div>
          </a>
        </div>
      </div>
    </div>
    </>
    );
  }
  
  export default Home;