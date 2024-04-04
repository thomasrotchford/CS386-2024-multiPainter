import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo.png';
import squirrel from '../assets/Screenshot 2023-09-19 194312.png'
import './Community.css';
import thomas from '../assets/IMG_2591.jpeg';

// Function to create a post with a title and main body of content
function TextPost({ title, body }) {
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
function ImagePost({ imageUrl }) {
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

function Settings() {
  return (
    <div className="main-container">
      {/* Helmet component for changing document head */}
      <Helmet>
        <title>Community</title>
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
          <TextPost title="i honestly love pooping so much." body="I'm sitting here pooping away at the end of a long day before bed. Sitting here browsing the web and watching random stuff online is like meditation and therapy for me. The outside world kind of just disappears for a bit and my mind just quiets down." />
          <TextPost title="My wife of 24 years just farted in front of me for the first time ever." body="It's never happened before. She's huge on manners and would never discuss anything like farting or pooping, let alone do it in front of someone. I have heard her fart in her sleep before and she would get embarrassed if I mentioned it, so I usually shut up about it. I mean, it's just farts. But we've been quarantined with our 4 kids for weeks now and it's... it's a lot. A few hours ago we were sitting on the couch, drinking our coffee and she just let it out. There was a moment of silence followed by a look of defeat in her eyes and a simple sorry.I'm so happy. It's just a fart, it's weird but it was such a liberating, humorous moment for the two of us and it made my day." />
          <TextPost title="Post Title" body="poopy" />
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

export default Settings;
