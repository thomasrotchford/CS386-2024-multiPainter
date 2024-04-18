import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo.png';
import squirrel from '../assets/Screenshot 2023-09-19 194312.png'
import './Community.css';
import thomas from '../assets/IMG_2591.jpeg';

// Function to create a post with only an image
function ImagePost({ imageUrl }) 
{
  return (
    <div className="ImagePost">
      {/* Render image if imageUrl is provided */}
      {imageUrl && (
      <div className='image-box'>
        <img src={imageUrl} alt="Post Image"/>
      </div>
      )}
    </div>
  );
}

function Community() 
{
  return (
    <div className="main-container">
      {/* Helmet component for changing document head */}
      <Helmet>
        <title>MultiPixel | Community</title>
      </Helmet>

      <div className="community-container">
        {/* Container for posts with images */}
        <div className='images-container'>
          {/* Image posts */}
          <ImagePost imageUrl={logo} />
          <ImagePost imageUrl={thomas} />
          <ImagePost imageUrl={logo} />
          <ImagePost imageUrl={squirrel} />
          <ImagePost imageUrl={logo} />
          <ImagePost imageUrl={squirrel} />
          <ImagePost imageUrl={logo} />
          <ImagePost imageUrl={squirrel} />
        </div>

      </div>
    </div>
  );
}

export default Community;
