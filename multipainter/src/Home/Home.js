import './home.css';
import '../utilities/PixelBoard.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import thomas from '../assets/IMG_2591.jpeg';
import squirrel from '../assets/Screenshot 2023-09-19 194312.png'
import { useState, useEffect } from 'react';


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


const IMAGES = []

function ImageSlider({imageUrls})
{
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <div >
      <div className='img-slider'>
        <img src={imageUrls[imageIndex]} className='img-slider-img'/>
      </div>
    </div>
  );
}

function BoardSquare({square}) {
  return(
    <div
      style={{backgroundColor: square.color, border: ".5px solid gainsboro"}} 
     >
    </div>
  );
};


function CreativeBoard({squares}) {
  // maybe put the board square stuff all in this function so it does stuff? Or maybe remove that for modularity. 
  // this could potentially help with rendering or it will do the exact opposite lol. Takes away a layer
  // if we render the board always. 

    console.log(squares);

    var boardSizes = "";
    for ( let index = 0; index < Math.sqrt(squares.length); index++) {
      boardSizes = boardSizes + "1fr ";
    }

    return(
      <div id="board" style={{gridTemplateColumns: boardSizes}}>
        {squares.map(square => (
          <BoardSquare square={square}/>
        ))}
      </div>
    );
  
}

async function queryTemplates(){
  
  let multipleSquares = [];

  const allTemplates = await client.graphql({
    query: listTemplates  
  });

  let numGrid = allTemplates.data.listTemplates.items[0].numGrid
  let colorGrid = allTemplates.data.listTemplates.items[0].colorGrid

  let squares = numGrid.map(index => (
    {color: colorGrid[index]}
  ))

  multipleSquares.push(squares);

  numGrid = allTemplates.data.listTemplates.items[1].numGrid
  colorGrid = allTemplates.data.listTemplates.items[1].colorGrid

  squares = numGrid.map(index => (
    {color: colorGrid[index]}
  ))

  multipleSquares.push(squares);

  numGrid = allTemplates.data.listTemplates.items[3].numGrid
  colorGrid = allTemplates.data.listTemplates.items[3].colorGrid

  squares = numGrid.map(index => (
    {color: colorGrid[index]}
  ))

  multipleSquares.push(squares);


  return multipleSquares;
}



function Home() {
  const [squares, setSquares] = useState(null);  // Change initial state to null for better checking

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const array = await queryTemplates();
        setSquares(array);  // Update state when promise resolves
      } catch (error) {
        console.error(error);
      }
    }

    fetchTemplates();
  }, []); 

  return (
    <>
    {/* Helemt allows for the meta data on the tab to be changed, this one makes the tab be named the text in the window name on the browser */}
      <Helmet><title> Multi Pixel | Home </title></Helmet>
    <div className='main-container'>
    {/* Creates a container for the trendig image container, TODO: eventually pull a trending image from the database, maybe a cycle feature through the trending? */}
    <div className='img-slider-container'>
          {squares && squares.length > 2 && (
            <>
              <CreativeBoard squares={squares[1]} />
              <CreativeBoard squares={squares[0]} />
              <CreativeBoard squares={squares[2]} />
            </>
          )}
        </div>
      {/* About section of the home page, displays some text about the site with a quick link to the free draw tab*/}
      <div className='about-section'>
        {/* about sectin title */}
        <div className='about-section-title'>
          WELCOME TO MULTIPIXEL
        </div>
        {/* about section body text */}
        <div className='about-section-body'>
          and we are here to make you think about how cool you are and get happy and stuff!
        </div>
        <div className='button-container'>
          <a href='/create'>
            <div className='free-draw-button'>Free Draw </div>
          </a>
          <a href='/paint'>
            <div className='free-draw-button'>Templates </div>
          </a>
          <a href='/community'>
            <div className='free-draw-button'>Community Page</div>
          </a>
        </div>
      </div>
    </div>
    </>
    );
  }
  
  export default Home;