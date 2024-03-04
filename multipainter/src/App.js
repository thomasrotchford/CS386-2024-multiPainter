import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title> Hunte A Mole </title>
  <link rel="stylesheet" href="mp.css" />
  <h1 id="brush"> Current Brush Color Loading</h1>
  {/* Flex Holder for Palette + Board*/}
  <div id="holder">
    {/* Flex palette for colors*/}
    <div id="palette" />
    {/* Board for colors, can be resized*/}
    <div id="board" />
  </div>
</>

  );
}

function

export default App;
