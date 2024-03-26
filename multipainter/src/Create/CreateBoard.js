import { useState } from 'react';
import '../utilities/PixelBoard.css';
import React from 'react';
import PaletteBoard from '../utilities/Palette';
import { Helmet } from 'react-helmet';

export default function CreateBoardPage() {
  // the paint brush functions 
    const [ paintBrush, SetBrush ] = useState("white");
    const ChooseColor = (color)=>{
      SetBrush(color);
    };
    
  // set the variable for board size
  // const [boardSize, setBoardSize] = useState(5);
  
  // settings options and functions
    const [settingsGroup, SetSettings] = useState({
      boardSize: 5,
      drag: true
    })
    // function to set settings
    const ApplySettings = (newSettings) =>{
      SetSettings({ ...newSettings});
    }

    // set the board size in the css 
    var index;
    var boardSizes = "";
    for ( index = 0; index < settingsGroup.boardSize; index++) {
      boardSizes = boardSizes + "1fr ";
    }

    return (
      <>
        <Helmet><title> Multi Pixel | Create </title></Helmet>
        <h1 id="brush" style={{color: paintBrush}}> Current Brush Color {paintBrush}</h1>
        
        <div style={{padding: "20px"}}></div>
        <div id="holder">
          <div id="palette">
            <PaletteBoard ChooseColor={ChooseColor} />
          </div>
          <div id="board" style={{gridTemplateColumns: boardSizes}}>
            <CreativeBoard paintBrush={paintBrush} size={settingsGroup.boardSize} dragSetting={settingsGroup.drag} />
          </div>
          <Settings props={settingsGroup} handleChange={ApplySettings}/>
        </div>
      </>
    );
}

function BoardSquare({typeOfSquare, brush, dragSetting}){
    const [ color, SetColor ] = useState("white"); // (index % 2) === 0 ? "white" : "gainsboro"

    // adding a function to implement drag and drop
    const checkButtonPress = (e) => {
      if (e.buttons === 1) {
        SetColor(brush);
      }
    }
    function noDrag(){
      // funciton to pass and turn off drag. I know, not excellent coding
    }

    const dragFunction = dragSetting ? checkButtonPress : noDrag;
    
    return(
      <div 
        className={typeOfSquare} 
        style={{backgroundColor: color, border: ".5px solid gainsboro"}} 
        onMouseDown={checkButtonPress}
        onMouseMove={dragFunction}
       >
      </div>
    );
  }
  
  function CreativeBoard({paintBrush, size, dragSetting}) {
    var squares = [...Array(size*size).keys()];
    
    return(
      <>
        { squares.map(square =>(
          <BoardSquare typeOfSquare="board" brush={paintBrush} dragSetting={dragSetting}/>
        ))}
      </>
    );
  }
  
function Settings({props, handleChange}){
  var newSettings = {
    boardSize: props.boardSize,
    drag: props.drag
  }
  const changeIndividualSetting = (e) =>{
    // check for drag setting
    if(e.target.name === "drag"){
      newSettings.drag = e.target.checked;
    }
    if(e.target.name === "boardSize"){
      newSettings.boardSize = e.target.value;
    } 
    console.log(newSettings.boardSize);   
    handleChange(newSettings);
  }
  return(
    <div className="boardSettings" style={{padding: "4em"}}>
      <h3>Settings</h3>
      <label>
        Drag and Paint: {' '}
        <input type="checkbox" name="drag" checked={props.drag} onChange={e => changeIndividualSetting(e)}/>
      </label>
      <br/>
      <label>
        Board Size: {' '}
        <select name="boardSize" defaultValue="5" 
                  onChange={e => changeIndividualSetting(e)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
      </label>
    </div>
  );
}