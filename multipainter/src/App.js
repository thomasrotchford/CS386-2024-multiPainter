import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
  {/*Labels our Doc as HTML*/}
  {/*Labels Our Doc's main language as English*/}
  {/*Not TOO sure how important this is, I think its just formality*/}
  {/*START OF HEAD*/}
  <meta charSet="UTF-8" />
  {/* Used if we want to make it responsive to page size*/}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* Title of page*/}
  <title> Hunte A Mole </title>
  {/* Link to CSS*/}
  <link rel="stylesheet" href="mp.css" />
  {/*END OF HEAD :(*/}
  {/*START OF BODY*/}
  {/* Header: Tracks current brush color*/}
  <h1 id="brush"> Current Brush Color Loading</h1>
  {/* Flex Holder for Palette + Board*/}
  <div id="holder">
    {/* Flex palette for colors*/}
    <div id="palette" />
    {/* Board for colors, can be resized*/}
    <div id="board" />
  </div>
  {/*END OF HOLDER*/}
  {/* Moved JS link to bottom of body*/}
  {/* HTML Files load top to bottom, so JS links at bottom makes page load faster*/}
  {/*END OF BODY*/}
  {/* END OF FILE */}
</>

  );
}

export default App;
