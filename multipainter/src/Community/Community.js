import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo.png';
import squirrel from '../assets/Screenshot 2023-09-19 194312.png'
import './Community.css';
import { useState, useEffect } from 'react';

import * as DataBaseQueries from '../utilities/DataBaseQueries'; // Import the query function

// New Feature Artworks
import { MdPodcasts } from 'react-icons/md';

// the database stuff below
import { generateClient } from "aws-amplify/api"; // imports a function that creates a driver for the DB
                                                    // this allows us to run commands on the database essentially with the client object
import { listTemplates } from '../graphql/queries';      // this imports a pre-defined query
import config from "../aws-exports.js"; // this imports our configuration file, (actual file should not be
// uploaded to the database "aws-exports.js")

import { Amplify } from 'aws-amplify';  // imports Amplify functions needed to start connection
// configures the set up with an imported config file
Amplify.configure(config);
// generates a client object that allows us to run query scripts and actually mutate
// and read the data base
const client = generateClient();




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

async function queryTemplates(){

  // queries for all templates
  let allTemplates = await client.graphql({
    query: listTemplates  
  });

  // gets just the actual items
  allTemplates = allTemplates.data.listTemplates.items;

  console.log(allTemplates);
  
  // Sort the templates by their creation time
  const sortedTemplates = allTemplates.sort(compareAWSDateTime);

  return sortedTemplates;
}



function TemplatePost({ template }) 
{
  return (
    <div className="ImagePost" style={{padding: "10px"}}>
      <GenerateBoard template={template} />
    </div>
  );
}



// Comparator function to compare AWSDateTime strings
// sorts from newest to oldes
function compareAWSDateTime(a, b) {
  // gets two dates and times and compares them. 
  const dateA = new Date(a.timeCreated);
  const dateB = new Date(b.timeCreated);
  return dateB - dateA;
}


function GenerateBoard({template}) {
  // maybe put the board square stuff all in this function so it does stuff? Or maybe remove that for modularity. 
  // this could potentially help with rendering or it will do the exact opposite lol. Takes away a layer
  // if we render the board always. 
    let squares = template.numGrid;
    let colorGrid = template.colorGrid;


    var boardSizes = "";
    for ( let index = 0; index < Math.sqrt(squares.length); index++) {
      boardSizes = boardSizes + "1fr ";
    }

    return(
      <div id="board" className='image-box' style={{gridTemplateColumns: boardSizes}}>
        {squares.map(index => (
          <div
           style={{backgroundColor: colorGrid[index], border: ".5px solid gainsboro"}} 
          >
          </div>
        ))}
      </div>
    );
  
}

function NewCommunity(){
  const [boards, setBoards] = useState([]);  // Change initial state to null for better checking

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const array = await queryTemplates();
        setBoards(array);  // Update state when promise resolves
      } catch (error) {
        console.error(error);
      }
    }

    fetchTemplates();
  }, []); 

  let posts = [];

  for ( let index = 0; index < boards.length; index++) {
    posts.push(<TemplatePost template={boards[index]}/>);
  }

console.log(posts);
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
          {posts}
      </div>
    </div>
  </div>
  );
}


export default NewCommunity;
