import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo.png';
import squirrel from '../assets/Screenshot 2023-09-19 194312.png'
import './Community.css';

// Function to create a post with a title and main body of content
function ContentPost({ title, body }) {
  const postStyle = {
    maxWidth: '100%', // Full width
  };

  return (
    <div className="post" style={postStyle}>
        {title && <h2 className='post-title'>{title}</h2>}
        {body && <div className="post-body">{body}</div>}
    </div>
  );
}

// Function to create a post with only an image
function ImagePost({ imageUrl }) {
  return (
    <div className="post">
      {imageUrl && (
        <div className="post-content">
          <img src={imageUrl} alt="Post Image" />
        </div>
      )}
    </div>
  );
}

function Community() {
  return (
    <div className="main-container">
      <Helmet>
        <title>Community</title>
      </Helmet>

      <div className="community-container">
        {/* Post with only image */}
        <div className='image-container'>
          <ImagePost imageUrl={logo} />

          <ImagePost imageUrl={squirrel} />

          <ImagePost imageUrl={logo} />

          <ImagePost imageUrl={squirrel} />
        </div>

        {/* Post with title and main body content */}
        <div className='text-post-container'>
          <ContentPost title="Post Title" body = "poopy" />
        </div>
      </div>
    </div>
  );
}

export default Community;