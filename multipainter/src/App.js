// import { useState } from 'react';
import './App.css';
import React from 'react';

function App() {

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title> Multi Pixel </title>
      <link rel="stylesheet" href="mp.css" />
      <h1>I LIKE BOOBIES</h1>
      <h1 id="brush"> Current Brush Color Loading</h1>
      <div id="holder">
        <div id="palette">
        </div>
        <div id="board">
          <creativeBoard />
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
