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
        setTemplates(templatesArray);
      } catch (error) {
        console.error("Failed to fetch templates:", error);
      }
    }
    fetchTemplates();
  }, []);

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
            and we are here to make you think about how cool you are and get happy and stuff!
          </div>
          <div className='button-container'>
            <a href='/create'><div className='free-draw-button'>Free Draw</div></a>
            <a href='/paint'><div className='free-draw-button'>Templates</div></a>
            <a href='/community'><div className='free-draw-button'>Community</div></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
