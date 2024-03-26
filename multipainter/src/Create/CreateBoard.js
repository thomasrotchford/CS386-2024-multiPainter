import { useState } from 'react';
import '../utilities/PixelBoard.css';
import React from 'react';
import PaletteBoard from '../utilities/Palette';
import { Helmet } from 'react-helmet';

export default function CreateBoardPage() {
    const [ paintBrush, SetBrush ] = useState("white");
    const ChooseColor = (color)=>{
      SetBrush(color);
    };
    const [boardSize, setBoardSize] = useState(5);
  

    var index;
    var boardSizes = "";
    for ( index = 0; index < boardSize; index++) {
      boardSizes = boardSizes + "1fr ";
    }
  
    return (
      <>
        <Helmet><title> Multi Pixel | Create </title></Helmet>
        <h1 id="brush" style={{color: paintBrush}}> Current Brush Color {paintBrush}</h1>
        <select name="sizes" defaultValue="5" 
                onChange={e => setBoardSize(parseInt(e.target.value))}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <div style={{padding: "20px"}}></div>
        <div id="holder">
          <div id="palette">
            <PaletteBoard ChooseColor={ChooseColor} />
          </div>
          <div id="board" style={{gridTemplateColumns: boardSizes}}>
            <CreativeBoard paintBrush={paintBrush} size={boardSize}/>
          </div>
        </div>
      </>
    );
}

function BoardSquare({typeOfSquare, brush}){
    const [ color, SetColor ] = useState("white"); // (index % 2) === 0 ? "white" : "gainsboro"

    // adding a function to implement drag and drop
    const checkButtonPress = (e) => {
      if (e.buttons === 1) {
        SetColor(brush);
      }
    }
    
    return(
      <div 
        className={typeOfSquare} 
        style={{backgroundColor: color, border: ".5px solid gainsboro"}} 
        onMouseDown={checkButtonPress}
        onMouseMove={checkButtonPress}
       >
        </div>
    );
  }
  
  function CreativeBoard({paintBrush, size}) {
    var squares = [...Array(size*size).keys()];
    
    return(
      <>
        { squares.map(square =>(
          <BoardSquare typeOfSquare="board" brush={paintBrush} />
        ))}
      </>
    );
  }
  
function Settings(){
  return(
    <div>
      
    </div>
  );
}