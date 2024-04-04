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
    function setColorSquare(oldSquares){
      let newSquares = [...oldSquares];
      newSquares[2] = "blue";
      SetSquares(newSquares);
    };
    // this is going ot be used for keeping track of colors for the squares, hopefully used to render boards
    // in the future
    // make creative board and the buttons and settings under One div to help re renders. 

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
            <CreativeBoard paintBrush={paintBrush} size={settingsGroup.boardSize} dragSetting={settingsGroup.drag} squares={squares} />
          </div>
          <Settings props={settingsGroup} handleChange={ApplySettings}/>
        </div>
        <div id="bottom">
          <GameButtons />
        </div>
      </>
    );
}

function BoardSquare({typeOfSquare, brush, dragSetting, square}) {
    const [ color, SetColor ] = useState(square.color); // (index % 2) === 0 ? "white" : "gainsboro"

    // change color only when the square.color component changes. 
    useEffect(() => {
      // set the brush color (it is square.color already)
      SetColor(square.color);
    }, [square.color]);

    // adding a function to implement drag and drop
    const checkButtonPress = (e) => {
      if (e.buttons === 1) {
        // set the board color for the square
        SetColor(brush)
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
        style={{backgroundColor: color, border: ".5px solid gainsboro"}} 
        onMouseDown={checkButtonPress}
        onMouseMove={dragFunction}
       >
      </div>
    );
  };
  
function CreativeBoard({paintBrush, size, dragSetting, squares}) {
    var squaresTemp = [...squares]// [...Array(size*size).keys()];
    {/*{ squaresTemp.map(square =>(
          <BoardSquare typeOfSquare="board" brush={paintBrush} dragSetting={dragSetting}/>
        ))}*/}
    return(
      <>
        {squaresTemp.map(square => (
          <BoardSquare typeOfSquare="board" brush={paintBrush} dragSetting={dragSetting} square={square}/>
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

function GameButtons(){
  return(
    <>
      <button class="submit">Submit</button>
      <button class="reset">Reset</button>
    </>
  );
}