import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the Home Page!</p>
        <Link to="/create">Create Board</Link>
      </div>
    );
  }
  
  export default Home;