import { useState } from 'react';
import '../utilities/PixelBoard.css';
import React from 'react';
/* Affects functionality and Classes */
import {Palette, PaletteBoard} from '../utilities/Palette.js'
import { Helmet } from 'react-helmet';


const BOARD_SIZE = 10;

export default function PaintBoard() {
  const [ paintBrush, SetBrush ] = useState("white");
  const ChooseColor = (color)=>{
  SetBrush(color);
  };

  const picture = 
  [1 ,2 ,1 ,2 ,3 ,3 ,3 ,3 ,3 ,3,
    2 ,1 ,2 ,1 ,0 ,0 ,0 ,0 ,0 ,0,
    1, 2 ,1 ,2 ,3 ,3 ,3 ,3 ,3 ,3,
    2 ,1 ,2 ,1 ,0 ,0 ,0 ,0 ,0 ,0,
    3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3,
    
    0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0,
    3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3,
    0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0,
    3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3,
    0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0,]

  const colorPicture = ["Red", "Blue", "LightBlue", "White"];
  
  var index;
  var boardSizes = "";
  for ( index = 0; index < BOARD_SIZE; index++) {
      boardSizes = boardSizes + "1fr ";
    }

  return (
    <>
      <Helmet><title> Multi Pixel | Paint </title></Helmet>
      <h1 id="brush" style={{color: paintBrush}}> Current Brush Color {paintBrush}</h1>
      <div id="holder">
        <div id="palette-container">
          <PaletteBoard ChooseColor={ChooseColor} palette={colorPicture} />
        </div>
        <div id="board" style={{gridTemplateColumns: boardSizes}}>
          <PaintableBoard 
            paintBrush={paintBrush}
            picture={picture}
            colorPicture={colorPicture}/>
        </div>
        <div id="key">
            <DisplayKey colorPicture={colorPicture}/>
        </div>
      </div>
    </>
  );
};

function PaintableBoard({paintBrush, picture, colorPicture}){

  var squares = [...Array(BOARD_SIZE*BOARD_SIZE).keys()];

  return(
    <>
    { squares.map(square =>(
        <BoardSquare 
        typeOfSquare="board" 
        brush={paintBrush} 
        value={picture[square]} 
        trueColor={colorPicture[picture[square]]}/>
      ))}
    </>
  )

};

function BoardSquare({typeOfSquare, brush, value, trueColor}){
    const [ color, SetColor ] = useState("white"); 
    var actValue = trueColor === color ? '' : value + 1;
    return(
      <div className={typeOfSquare} 
           style={{
            backgroundColor: color, 
            border: ".5px solid gainsboro"}} 
           onClick={() => SetColor(brush)}>
        {actValue}
      </div>
    );
  }


function DisplayKey({colorPicture}){
  return(
    <>
      <ol >
      {colorPicture.map(color =>(
         <li style={{fontSize: "25px"}}><button 
            className="palette" 
            style={{backgroundColor: color}} >
          </button></li>
        
      ))}
       </ol>
    </>
  );
}
