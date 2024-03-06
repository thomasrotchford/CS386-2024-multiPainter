// import { useState } from 'react';
import './App.css';

function renderHTMLHeaders() {
  return(
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> Multi Pixel </title>
    <link rel="stylesheet" href="mp.css" />
    <h1 id="brush"> Current Brush Color Loading</h1>
    </>
  );
}

function App() {
  return (
    <>
      <renderHTMLHeaders/>
      {/* Flex Holder for Palette + Board*/}
      <div id="holder">
        {/* Flex palette for colors*/}
        <div id="palette">
        </div>
        {/* Board for colors, can be resized*/}
        <div id="board">
          {/*check to set which board*/}
          <creativeBoard/>
        </div>
      </div>
    </>
  );
}

function boardSquare({typeOfSquare, action}){
  return(
    <div className={typeOfSquare} onClick={action}></div>
  );
}
function creativeBoard(){
  <h1>GETTING SOMEWHERE</h1>

  function selectTile(){
    return null;
  }
  return(
    <>
      <div id='board'>
        <boardSquare typeOfSquare="paintable" action={() => selectTile()} />
        <boardSquare typeOfSquare="paintable" action={() => selectTile()} />
        <boardSquare typeOfSquare="paintable" action={() => selectTile()} />
        <boardSquare typeOfSquare="paintable" action={() => selectTile()} />
        <boardSquare typeOfSquare="paintable" action={() => selectTile()} />
      </div>
    </>
  );
}



export default App;
