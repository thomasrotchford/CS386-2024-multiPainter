import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo.png';
import squirrel from '../assets/Screenshot 2023-09-19 194312.png'
import './Community.css';
import thomas from '../assets/IMG_2591.jpeg';

// Function to create a post with a title and main body of content
function TextPost({ title, body }) 
{
  return (
    <div className="TextPost">
      {/* Render title if provided */}
      {title && <h2 className='text-post-title'>{title}</h2>}
      {/* Render body if provided */}
      {body && <div className="text-post-body">{body}</div>}
    </div>
  );
}

// Function to create a post with only an image
function ImagePost({ imageUrl }) 
{
  return (
    <div className="ImagePost">
      {/* Render image if imageUrl is provided */}
      {imageUrl && (
      <div className='image-box'>
        <img src={imageUrl} alt="Post Image" className="image-box-img" />
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
        </div>

        {/* Container for text posts */}
        <div className='text-post-container'>
          {/* Text post */}
          <TextPost title="I honestly love walking so much." body="I'm sitting here walking away at the end of a long day before bed. Sitting here browsing the web and watching random stuff online is like meditation and therapy for me. The outside world kind of just disappears for a bit and my mind just quiets down." />
          <TextPost title="I love community." body="I have always really enjoined the community that I can experience on this onlin platform that adds a level of creativity that helps me express myself." />
          <TextPost title="Post Title" body="Test" />
        </div>

        <div className='images-container'>
          {/* Image posts */}
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
