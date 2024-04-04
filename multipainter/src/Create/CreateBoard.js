import { useState, useEffect } from 'react';
import '../utilities/PixelBoard.css';
import React from 'react';
import PaletteBoard from '../utilities/Palette';
import { Helmet } from 'react-helmet';

// color palette for the create board
const palette = ["Red", "Orange", "Yellow", "Lightgreen", "Darkgreen", "LightBlue", "DarkBlue", "Purple", "Violet", "White"];

export default function CreateBoardPage() {
  // the paint brush functions 
    const [ paintBrush, SetBrush ] = useState("white");
    // a function to pass down that will set brush color when called
    const ChooseColor = (color)=>{
      SetBrush(color);
    };  
  
  // settings options and functions
    const [settingsGroup, SetSettings] = useState({
      boardSize: 5,  // board width
      drag: true    // whether or not you can drag
    })
    // function to set settings
    const ApplySettings = (newSettings) =>{
      // function that changes the board size when the setting is changed
      if(newSettings.boardSize !== settingsGroup.boardSize){
        // set board if size changed
        SetSquares(Array.from({length: newSettings.boardSize*newSettings.boardSize}, () => ({
          color: "white"
        })));
      }
      // set the updated settings
      SetSettings({ ...newSettings}); 
    }
    // set the board size in the css 
    var boardSizes = "";
    for ( let index = 0; index < settingsGroup.boardSize; index++) {
      boardSizes = boardSizes + "1fr ";
    }

    // set squares for the board
    // in this function we are using the useState to keep track of the state of the board. The submit button should update the state. 
    // The array.from method is making array from a length of the square board. It is using the mapping funciton we define which just sets everything
    // to an object with a specific color. 
    const [squares, SetSquares] = useState(Array.from({length: settingsGroup.boardSize*settingsGroup.boardSize}, () => ({
      color: "white"
    })));
    function setColorSquare(newSquares){
      SetSquares(newSquares);
    };

    return (
      <>
        <Helmet><title> Multi Pixel | Create </title></Helmet>
        <h1 id="brush" style={{color: paintBrush}}> Current Brush Color {paintBrush}</h1>
        
        <div style={{padding: "20px"}}></div>
        <div id="holder">
          <div id="palette">
            <PaletteBoard ChooseColor={ChooseColor} palette={palette} />
          </div>
          <div id="board" style={{gridTemplateColumns: boardSizes}}>
            <CreativeBoard paintBrush={paintBrush} settings={settingsGroup} squares={squares} handleChange={setColorSquare}/>
          </div>
          <Settings props={settingsGroup} handleChange={ApplySettings}/>
        </div>
        <div id="bottom">
          <GameButtons squares={squares} setSquares={SetSquares} />
        </div>
      </>
    );
}

function BoardSquare({typeOfSquare, brush, dragSetting, square}) {
    const [ color, SetColor ] = useState(square.color); 

    // adding a function to implement drag and drop
    const checkButtonPress = (e) => {
      if (e.buttons === 1) {
        // set the board color for the square
        SetColor(brush);
        square.color = brush;
      }
    }
    function noDrag(){
      // funciton to pass and turn off drag. I know, not excellent coding
    }

    // choose witch function based on the drag
    const dragFunction = dragSetting ? checkButtonPress : noDrag;
    
    return(
      <div 
        className={typeOfSquare} 
        style={{backgroundColor: square.color, border: ".5px solid gainsboro"}} 
        onMouseDown={checkButtonPress}
        onMouseMove={dragFunction}
       >
      </div>
    );
  };
  
function CreativeBoard({paintBrush, settings, squares, handleChange}) {
    // maybe put the board square stuff all in this function so it does stuff? Or maybe remove that for modularity. 
    // this could potentially help with rendering or it will do the exact opposite lol. Takes away a layer
    // if we render the board always. 
    return(
      <>
        {squares.map(square => (
          <BoardSquare typeOfSquare="board" brush={paintBrush} dragSetting={settings.drag} square={square}/>
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

function GameButtons({squares, setSquares}){
  function resetBoard() {
    setSquares(Array.from({length: squares.length}, () => ({
      color: "white"
    })));
  }
  function submitBoard() {
    // create a color array
    let color = Array()
    let indicies = Array.from({length: squares.length})

    // iterate through the squares and add the color to the array and another array to keep track of the
    // index of the color array.

    // submits the square array. It is already set up. 
    console.log(squares);
  }
  return(
    <>
      <button class="submit" onClick={submitBoard}>Submit</button>
      <button class="reset " onClick={resetBoard} >Reset</button>
    </>
  );
}