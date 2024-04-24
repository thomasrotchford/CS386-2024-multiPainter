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

/* END IMPORTS */

// CONSTANTS
const MAX_STD_BOARD_WIDTH = 22; 
const SMALLEST_SQ_PX = 25;
const DEFAULT_BOARD_SIZE = "500px";

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
  const [ paintBrush, SetBrush ] = useState("White");

  const ChooseColor = (color)=>{
    SetBrush(color);
    };
  
  const palette = new PaletteClass(template.colorGrid);
  // use effect to run the one instance of setting board size (will only need once)
  useEffect(() => {
    let paletteContainer = document.getElementById("palette-container");
    palette.setContainerCSS(paletteContainer);

  /* Triggers on Change of Color OR Change of Size */
  }, [palette.size]);

  /* Sets the colors */
  const colorPicture = palette.colors;
  
  // gets the board size rendered correctly with flex
  const boardWidth = Math.sqrt(template.numGrid.length);
  let pixels; // this variable is the pixel width and height for the board 
  if(boardWidth > MAX_STD_BOARD_WIDTH){
    // if the board width is larger than max board width, then expand the container for it
    pixels = boardWidth * SMALLEST_SQ_PX; // finds the total pixel dimensions
    // change pixels to a string with proper formatting
    pixels = pixels + 'px';
  }else{
    // set pixels to default board size
    pixels = DEFAULT_BOARD_SIZE;
  }


  // belwo this sets the amount of columns basically in string format
  var index;
  var boardSizes = "";
  for ( index = 0; index < boardWidth; index++) {
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

        <div id="board" style={{
          gridTemplateColumns: boardSizes,
          width: pixels,
          height: pixels
          }}>
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
    const [ color, SetColor ] = useState("rgb(255,255,255)"); // the value is compared as text to "trueColor"
                                                              // so this makes sure initial render dispalys a number but the color is still white

    var displayColor = trueColor === color ? color : "black"; // this sets the display color of the text
                                                            // which makes it visible or not when it is clicked
    if(color.toLowerCase() === "black"){
      displayColor = trueColor === color ? color : "white" // checks case when a non black is colored black
    }                  
    
    // adding a function to implement drag and drop
    const checkButtonPress = (e) => {
      if (e.buttons === 1) {
        // set the board color for the square
        SetColor(brush);
      }
    }

    
    return(
        <div className={typeOfSquare} 
            style={{
              backgroundColor: color, 
              color: displayColor,
              border: ".1em solid gainsboro"}} 
              onMouseDown={checkButtonPress}
              onMouseMove={checkButtonPress}>
            {/*This is a sub div that displays text without highlight*/}
            <div style={{
              userSelect: "none",
              color: displayColor
            }}>
              {trueColor === color ? '\0' : value + 1}
            </div>
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



