import { useState } from 'react';
import './App.css';
import React from 'react';

function Square({ typeOfSquare, action }) {
  return (
    <button className={typeOfSquare} onClick={action}></button>
  );
}

function Board() {
  function handleClick(i) {
    return(
      <><h1>i</h1></>
    );
  }

  return (
    <>
      <div className="status"></div>
      <div className="board-row">
        <Square typeOfSquare="paintable" onSquareClick={() => handleClick(0)} />
        <Square typeOfSquare="paintable" onSquareClick={() => handleClick(1)} />
        <Square typeOfSquare="paintable" onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square typeOfSquare="paintable" onSquareClick={() => handleClick(3)} />
        <Square typeOfSquare="paintable" onSquareClick={() => handleClick(4)} />
        <Square typeOfSquare="paintable" onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square typeOfSquare="paintable" onSquareClick={() => handleClick(6)} />
        <Square typeOfSquare="paintable" onSquareClick={() => handleClick(7)} />
        <Square typeOfSquare="paintable" onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

/*export default function Game() {

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
      </div>
    </div>
  );
}*/

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
          <CreativeBoard />
        </div>
      </div>
    </>
    
  );
}

function BoardSquare({typeOfSquare}){
  const [ color, SetColor ] = useState('white');
  function PaintSquare(){
    SetColor('grey');
  }
  return(
    <div className={typeOfSquare} style={{backgroundColor: color}} onClick={PaintSquare}></div>
  );
}

function CreativeBoard() {
  
  return(
    <>
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
      <BoardSquare typeOfSquare="board"  />
    </>
  );
}



export default App;
