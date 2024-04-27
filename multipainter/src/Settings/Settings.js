import React from 'react';
import { Helmet } from 'react-helmet';

/* Box Icons */
import * as FaIcons from 'react-icons/fa';

import ReactAudioPlayer from 'react-audio-player';

// Function to create a post with a title and main body of content


// Function to create a post with only an image
 
function Settings() {
  return (
    <div className="main-container">
      {/* Helmet component for changing document head */}
      <Helmet>
        <title>Settings</title>
      </Helmet>
      
      {/* Title to the Settings List */}
      <h1><FaIcons.FaCog /> Settings <FaIcons.FaCog /></h1>

      {/* Render the App component */}
      <div>
      <h1>My Music Player</h1>

      </div>

      {/* First Setting */}
      {/* name is used for making pairs of data, 
       the output on screen is the plan text */}
      <label>
        <input type='checkbox' name="option1" />
        Option 1
      </label>

      {/* Second Setting */}
      <label>
        <input type='checkbox' name="option2" />
        Option 2
      </label>

      {/* Third Setting */}
      <form action="/submit" method="post">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username"/>
        <br/> 
        <input type="submit" value="Submit"/>
      </form>

      {/* Additional Settings */}
      {/* Add more settings as needed */}

    </div>
  );
}

export default Settings;