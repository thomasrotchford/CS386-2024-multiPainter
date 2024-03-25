import React, { useState } from 'react';

const ForumPage = () => {
  // Example data for posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'John Doe',
      datePosted: 'March 24, 2024',
      likes: 10,
      comments: 5,
      description: 'This is the first post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      author: 'Jane Smith',
      datePosted: 'March 25, 2024',
      likes: 15,
      comments: 8,
      description: 'This is the second post. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more posts as needed
  ]);

  // Function to handle button click
  const handleButtonClick = () => {
    // Add functionality for button click here
    console.log('Button clicked');
  };

  return (
    <div>
      <h1>Forum</h1>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h2>{post.author}</h2>
          <p>Date Posted: {post.datePosted}</p>
          <p>Likes: {post.likes}</p>
          <p>Comments: {post.comments}</p>
          <p>Description: {post.description}</p>
        </div>
      ))}
      <button onClick={handleButtonClick}>Open Template</button>
    </div>
  );
};

export default ForumPage;