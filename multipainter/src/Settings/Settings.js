import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo.png';

/* Box Icons */
import * as FaIcons from 'react-icons/fa';

/* CSS */
import "./Settings.css";

// Function to create a post with a title and main body of content


// Function to create a post with only an image
 

function Settings() {
  return (
    <div className="settings-main-container">
      {/* Helmet component for changing document head */}
      <Helmet>
        <title>  Settings </title>
      </Helmet>
      
      {/* Title to the Settings List */}
      <h1> <FaIcons.FaCog /> Settings <FaIcons.FaCog /> </h1>

      {/* First Setting */}
      {/* name is used for making pairs of data, 
       the output on screen is the plan text */}
      <label>
        <input type='checkbox' name="option1" />
        Option 1
      </label>

      {/* First Setting */}
      <label>
        <input type='checkbox' name="option2" />
        Option 2
      </label>

      {/* First Setting */}
      <form action="/submit" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"/>
        <br/> 
        <input type="submit" value="Submit"/>
      </form>

      {/* First Setting */}

      {/* First Setting */}

      {/* First Setting */}


    </div>
  );
}

export default Settings;
