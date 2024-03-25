import React, { useState } from 'react';
import "./WorkShop.css";

const ForumPage = () => {
  const [posts, setPosts] = useState([
    // Existing posts...
  ]);

  const [newPostData, setNewPostData] = useState({
    author: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPostData({ ...newPostData, [name]: value });
  };

  const handleNewPostClick = () => {
    // Validate if author and description are not empty
    if (!newPostData.author || !newPostData.description) {
      alert('Please fill in all fields.');
      return;
    }

    // Add the new post to the list
    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        datePosted: new Date().toLocaleDateString(),
        likes: 0,
        comments: 0,
        ...newPostData,
      },
    ]);

    // Clear the form fields
    setNewPostData({ author: '', description: '' });
  };

  const handleImportTemplateClick = () => {
    console.log('Importing a template');
  };

  document.body.classList.add('background-red');

  return (
    <div>
      <h1>Workshop</h1>
      {posts.map(post => (
        <div key={post.id} className="post-container">
          <h2>{post.author}</h2>
          <p>Date Posted: {post.datePosted}</p>
          <p>Description: {post.description}</p>
        </div>
      ))}
      <form>
        <label>
          Author:
          <input type="text" name="author" value={newPostData.author} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={newPostData.description} onChange={handleInputChange} />
        </label>
        <br />
      </form>
      <button onClick={handleNewPostClick} className="button">Create New Post</button>
      <button onClick={handleImportTemplateClick} className="button">Import Template</button>
    </div>
  );
};

export default ForumPage;