/* Start Imports */

import { useState, useEffect } from 'react';
import '../utilities/PixelBoard.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import * as DataBaseQueries from '../utilities/DataBaseQueries'; // Import the query function

/* Affects functionality and Classes */


/* Affects the layout of the pallete */
import '../utilities/Palette.css'
/* Affects Palette Functionality and Palette classClasses */
import {PaletteClass, PaletteBoard} from '../utilities/Palette.js'

import { Helmet } from 'react-helmet';

/* NEW for CSS */
import './PaintBoard.css';


// the database stuff below
import { generateClient } from "aws-amplify/api"; // imports a function that creates a driver for the DB
                                                    // this allows us to run commands on the database essentially with the client object
import config from "../aws-exports.js"; // this imports our configuration file, (actual file should not be
// uploaded to the database "aws-exports.js")

import { Amplify } from 'aws-amplify';  // imports Amplify functions needed to start connection
// configures the set up with an imported config file
Amplify.configure(config);
// generates a client object that allows us to run query scripts and actually mutate
// and read the data base
const client = generateClient();



/* END IMPORTS */


/* Function to make paint board */
export default function PaintBoard() {
  // sets a useState for template default is american flag
  const [template, setTemplate] = useState({
    colorGrid: ["Red", "Blue", "LightBlue","White"],
    numGrid: [1 ,2 ,1 ,2 ,3 ,3 ,3 ,3 ,3 ,3,
      2 ,1 ,2 ,1 ,0 ,0 ,0 ,0 ,0 ,0,
      1, 2 ,1 ,2 ,3 ,3 ,3 ,3 ,3 ,3,
      2 ,1 ,2 ,1 ,0 ,0 ,0 ,0 ,0 ,0,
      3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3,
      
      0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0,
      3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3,
      0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0,
      3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3,
      0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0,],
    artName: "American Flag"
  });
  

  // pulls the template id as a param
  const {id} = useParams();


  // use effect to query the templates, will query for existing but leave unchanged if null
  useEffect(() => {
    async function fetchTemplate() {
      try {
        const returnTemplate = await DataBaseQueries.getSpecificTemplate(id);
        setTemplate(returnTemplate);  // Update state when promise resolves
      } catch (error) {
        console.error(error);
      }
    }

    fetchTemplate();
  }, []); 
  

  /* Start as white */
  const [ paintBrush, SetBrush ] = useState("white");

  const ChooseColor = (color)=>{
    SetBrush(color);
    };
  
  const palette = new PaletteClass(template.colorGrid);

  /* Sets the colors */
  const colorPicture = palette.colors;
  
  // gets the board size rendered correctly with flex
  var index;
  var boardSizes = "";
  for ( index = 0; index < Math.sqrt(template.numGrid.length); index++) {
      boardSizes = boardSizes + "1fr ";
    }

  return (
    <>
      <Helmet><title> Multi Pixel | Paint </title></Helmet>
      <h1>{template.artName}</h1>
      <h1 id="brush" style={{color: paintBrush}}> Current Brush Color {paintBrush}</h1>
      <div id="holder">

        {/* Makes a Palette based on our past colors */}
        <div id="palette-container">
          <PaletteBoard ChooseColor={ChooseColor} palette={colorPicture} />
        </div>

        <div id="board" style={{gridTemplateColumns: boardSizes}}>
          <PaintableBoard 
            paintBrush={paintBrush}
            numGrid={template.numGrid}
            colorPicture={colorPicture}/>
        </div>

        <div id="key">
            <DisplayKey colorPicture={colorPicture}/>
        </div>

      </div>
    </>
  );
};



function PaintableBoard({paintBrush, numGrid, colorPicture }){
  return(
    <>
    { numGrid.map(value =>( // maps the number grid array which contains the index value of which color
                            // the square should be in the colorPicture array
        <BoardSquare 
        typeOfSquare="board" 
        brush={paintBrush} 
        value={value} 
        trueColor={colorPicture[value]}/>
      ))}
    </>
  )

};

function BoardSquare({typeOfSquare, brush, value, trueColor}){
    const [ color, SetColor ] = useState("white"); 
    var actValue = trueColor === color ? '\0' : value + 1;
    var displayColor = trueColor === color ? color : "black"; // this sets the display color of the text
                                                            // which makes it visible or not when it is clicked
    if(color.toLowerCase() === "black"){
      displayColor = trueColor === color ? color : "white" // checks case when a non black is colored black
    }                                                        
    
    return(
      <div className={typeOfSquare} 
           style={{
            backgroundColor: color, 
            color: displayColor,
            border: ".1em solid gainsboro"}} 
            onClick={() => SetColor(brush)}>
        {actValue}
      </div>
    );
  }


/* Used to make the key */
function DisplayKey({colorPicture}) {
  return (
    <>
      <ol className="key-button-list">
        {colorPicture.map((color, index) => (
          <li key={index}>
            <button 
              className="key-button"
              style={{backgroundColor: color}} >
              {index + 1} {/* Labels the button */}
            </button>
          </li>
        )
        )
        }
      </ol>
    </>
  );
}



