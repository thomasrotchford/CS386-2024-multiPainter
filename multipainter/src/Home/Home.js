import './home.css';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import * as DataBaseQueries from '../utilities/DataBaseQueries'; // Import the query function

function Home() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const templatesArray = await DataBaseQueries.queryTemplates();
        if (templatesArray.length > 2) {
          setRandomTemplates(templatesArray);
        } else {
          setTemplates(templatesArray); // Fallback in case there aren't enough templates
        }
      } catch (error) {
        console.error("Failed to fetch templates:", error);
      }
    }
    fetchTemplates();
  }, []);

  // Function to pick 3 random unique templates
  const setRandomTemplates = (templatesArray) => {
    let randomIndices = new Set();
    while (randomIndices.size < 3) {
      randomIndices.add(Math.floor(Math.random() * templatesArray.length));
    }
    const randomTemplates = Array.from(randomIndices).map(index => templatesArray[index]);
    setTemplates(randomTemplates);
  };


  // Function to render each board based on its template data
  const renderBoards = (template) => {
    if (!template || !template.colorGrid || !template.numberGrid) return null;
    // Create an array of squares with color properties from the template
    const squares = template.numberGrid.map(index => ({
      color: template.colorGrid[index]
    }));

    return <DataBaseQueries.CreateBoard squares={squares} />;
  };

  return (
    <>
      <Helmet>
        <title>Multi Pixel | Home</title>
      </Helmet>
      <div className='main-container'>
        <div className='img-slider-container'>
          {templates.length > 2 && (
            <>
              {renderBoards(templates[1])}
              {renderBoards(templates[0])}
              {renderBoards(templates[2])}
            </>
          )}
        </div>
        <div className='about-section'>
          <div className='about-section-title'>
            WELCOME TO MULTIPIXEL
          </div>
          <div className='about-section-body'>
            Click FreeDraw to get started creating, or Click Community to look through Ideas!
          </div>
          <div className='button-container'>
            <a href='/create'><div className='free-draw-button'>Free Draw</div></a>
            <a href='/paint'><div className='free-draw-button'>Paint (WIP) </div></a>
            <a href='/community'><div className='free-draw-button'>Community</div></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
