import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo.png';
import squirrel from '../assets/Screenshot 2023-09-19 194312.png'
import './Community.css';

// New Feature Artworks
import Feature1 from '../Art/TetrInsurrection.png';
import Feature2 from '../Art/ColorFilled.png'
import Feature3 from '../Art/CopyWriteStrike.png'
import Feature4 from "../Art/Everyone's_Favorite.png"
import Feature5 from "../Art/FairGame.png"
import Feature6 from "../Art/Honse.png"
import Feature7 from "../Art/PastelPalette.png"
import Feature8 from "../Art/RadicalRed.png"


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
          {/* Image posts, in sets of Logo, Image, Title*/}
          <ImagePost imageUrl={logo} />
          <ImagePost imageUrl={Feature1} />

          <ImagePost imageUrl={logo} />
          <ImagePost imageUrl={Feature2} />

          <ImagePost imageUrl={logo} />
          <ImagePost imageUrl={Feature3} />

          <ImagePost imageUrl={logo} />
          <ImagePost imageUrl={Feature4} />

          <ImagePost imageUrl={logo} />
          <ImagePost imageUrl={Feature5} />

          <ImagePost imageUrl={logo} />
          <ImagePost imageUrl={Feature6} />

          <ImagePost imageUrl={logo} />
          <ImagePost imageUrl={Feature7} />

          <ImagePost imageUrl={logo} />
          <ImagePost imageUrl={Feature8} />

          <ImagePost imageUrl={logo} />
          <ImagePost imageUrl={squirrel} />
      </div>
    </div>
  </div>
  );
}

export default Community;
