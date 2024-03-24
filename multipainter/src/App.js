import { useState } from 'react';
import './App.css';
import React from 'react';

// constants 
const BOARD_SIZE = 5;

function App() {
  const [ paintBrush, SetBrush ] = useState("white");
  const ChooseColor = (color)=>{
    SetBrush(color);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title> Multi Pixel </title>
      <link rel="stylesheet" href="mp.css" />
      <h1 id="brush" style={{color: paintBrush}}> Current Brush Color {paintBrush}</h1>
      <div id="holder">
        <div id="palette">
          <PaletteBoard ChooseColor={ChooseColor} />
        </div>
        <div id="board">
          <CreativeBoard paintBrush={paintBrush}/>
        </div>
      </div>
    </>
    
  );
}

function BoardSquare({typeOfSquare, brush}){
  const [ color, SetColor ] = useState("white");
  
  return(
    <div className={typeOfSquare} style={{backgroundColor: color}} onClick={() => SetColor(brush)}></div>
  );
}

function CreativeBoard({paintBrush}) {
  var squares = [...Array(BOARD_SIZE*BOARD_SIZE).keys()];

  return(
    <>
      { squares.map(square =>(
        <BoardSquare typeOfSquare="board" brush={paintBrush}  />
      ))}
    </>
  );
}

function PaletteBoard({ChooseColor}) {
  const palette = ["blue", "red", "purple", "lightBlue", "orange", "green", "black", "white"];
  const palette2 = ["Red", "Orange", "Yellow", "Lightgreen", "Darkgreen", "LightBlue", "DarkBlue", "Purple", "Violet", "White"];

  return(
    <>
      { palette2.map(color =>(
        <button 
          className="palette" 
          style={{backgroundColor: color}} 
          onClick={() => ChooseColor(color)}>
          </button>
      ))}
    </>
  );
}



export default App;
