import { useState } from 'react';
import './PixelBoard.css';
import React from 'react';
import floor from 'math.js';
import PaletteBoard from '../utilities/Palette';


var BOARD_SIZE = 5;

export default function CreateBoardPage() {
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

function BoardSquare({typeOfSquare, brush, index}){
    const [ color, SetColor ] = useState((index + floor(index / BOARD_SIZE) % 2) === 0 ? "white" : "gainsboro");
    
    return(
      <div className={typeOfSquare} style={{backgroundColor: color}} onClick={() => SetColor(brush)}>{index + (index / BOARD_SIZE)}</div>
    );
  }
  
  function CreativeBoard({paintBrush}) {
    var squares = [...Array(BOARD_SIZE*BOARD_SIZE).keys()];
    
    return(
      <>
        { squares.map(square =>(
          <BoardSquare typeOfSquare="board" brush={paintBrush} index={square} />
        ))}
      </>
    );
  }
  
