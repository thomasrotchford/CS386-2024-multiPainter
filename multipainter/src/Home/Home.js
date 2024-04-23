import './home.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';

import * as DataBaseQueries from '../utilities/DataBaseQueries'; // Import the query function

function Home() {

  const [squares, setSquares] = useState(null);  // Change initial state to null for better checking

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const array = await DataBaseQueries.queryTemplates();
        setSquares(array);  // Update state when promise resolves
      } catch (error) {
        console.error(error);
      }
    }

    fetchTemplates();
  }, []); 

  return (
    <>
    {/* Helemt allows for the meta data on the tab to be changed, this one makes the tab be named the text in the window name on the browser */}
      <Helmet><title> Multi Pixel | Home </title></Helmet>
    <div className='main-container'>
    {/* Creates a container for the trendig image container, TODO: eventually pull a trending image from the database, maybe a cycle feature through the trending? */}
    <div className='img-slider-container'>
          {squares && squares.length > 2 && (
            <>
              <DataBaseQueries.CreateBoard squares={squares[1]} />
              <DataBaseQueries.CreateBoard squares={squares[0]} />
              <DataBaseQueries.CreateBoard squares={squares[2]} />
            </>
          )}
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
            <div className='free-draw-button'>Community</div>
          </a>
        </div>
      </div>
    </div>
    </>
    );
  }
  
  export default Home;