/* START IMPORTS */

  import { React, useState, useEffect } from 'react';

  /* Affects the lay out of the PixelBoard */
  import '../utilities/PixelBoard.css';

  /* Affects the layout of the pallete */
  import '../utilities/Palette.css'
  /* Affects Palette Functionality and Palette classClasses */
  import {PaletteClass, PaletteBoard} from '../utilities/Palette.js'

  import { Helmet } from 'react-helmet';
  import Modal from 'react-modal';
  // import {withAuthenticator} from '@aws-amplify/ui-react';
  // import '@aws-amplify/ui-react/styles.css';


  /* Box Icons */
  import * as FaIcons from 'react-icons/fa';

  /* Data Base Imports and configuration */
  import { generateClient } from "aws-amplify/api"; // imports a function that creates a driver for the DB
                                                    // this allows us to run commands on the database essentially with the client object
  
  import { createTemplates } from '../graphql/mutations'; // this imports a pre-defined query
  
  import { getTemplates } from '../graphql/queries';      // this imports a pre-defined query
  
  import config from "../aws-exports.js"; // this imports our configuration file, (actual file should not be
                                          // uploaded to the database "aws-exports.js")
  
  import { Amplify } from 'aws-amplify';  // imports Amplify functions needed to start connection
  // configures the set up with an imported config file
  Amplify.configure(config);
  // generates a client object that allows us to run query scripts and actually mutate
  // and read the data base
  const client = generateClient();


/* START END IMPORTS */

/* START CONSTANTS */

// color palette for the create board


  // Make sure to capitialize

  const palette1= new PaletteClass(["Red", "Green", "Blue","Yellow"]);

  const palette2 = new PaletteClass(["LightBlue", "Cyan", "Teal",
                                    "Olive", "HotPink", "Red",
                                    "DarkRed", "Green", "Blue"]);

  const palette3 = new PaletteClass(["Red", "Orange", "Yellow", "Lightgreen", 
                                    "Darkgreen", "LightBlue", "DarkBlue", "Purple", 
                                    "Violet", "White", "Black", "Brown",
                                    "Cyan", "Magenta", "Lime", "Pink" ]);

  const palette4 = new PaletteClass(["DarkRed", "Brown", "FireBrick",
                                     "White", "Black", "DarkGrey",
                                    "Chocolate", "Maroon", "Peru"])
                          

  /* Set a base value to avoid errors */
  let paletteIndex = 0;
  let paletteOptions = [palette1, palette2, palette3, palette4];
  let palette = paletteOptions[paletteIndex];

/* END CONSTANTS */

// NOT A COLOR : Walnut, Rouge, 

// default export at the bottom
function CreateBoardPage() {
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

    /* UseEffect : Triggers when Palette.Size is updated
       Inner IF only triggers IF paletteContainer isnt NULL
       IE: palette-container exists  */
    useEffect(() => {
    const paletteContainer = document.getElementById("palette-container");
    if (paletteContainer) {
       /* These varibles do not NEED to be defined here, 
       But It does save processing Power, Also dont need CONST
       But allows us to avoid the initialization */
      let paintTinSize = 105;
      let containerSizeInPx = palette.size * paintTinSize;

       /* Sets all our varibles, resizes grid */
       paletteContainer.style.setProperty("--palette-size", palette.size);
       paletteContainer.style.width = containerSizeInPx + 'px';
       paletteContainer.style.height = containerSizeInPx + 'px';
      }
    /* Triggers on Change of Color OR Change of Size */
    }, palette);

    return (
      <>
        <Helmet><title> Multi Pixel | Create </title></Helmet>
        <h1 id="brush" style={{color: paintBrush}}> Current Brush Color {paintBrush}</h1>
        
        <div style={{padding: "20px"}}></div>

        <div id="holder">
          <div id="palette-container">
            <PaletteBoard ChooseColor={ChooseColor} palette={palette.colors} />
          </div>
          
          <div id="board" style={{gridTemplateColumns: boardSizes}}>
            <CreativeBoard paintBrush={paintBrush} settings={settingsGroup} squares={squares} />
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
  






function CreativeBoard({paintBrush, settings, squares}) {
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

  

// Used to create the settings to the side
function Settings({props, handleChange}){

  var newSettings = {
    boardSize: props.boardSize,
    drag: props.drag
  }

  const changePalette = (direction) =>{
    if(direction === "right"){
      paletteIndex++;
    }else{
      paletteIndex--;
    }
    paletteIndex = ( paletteIndex + 4 ) % 4;
    palette = paletteOptions[paletteIndex];
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

  /* The HTML */

  return(

    <div className="boardSettings" style={{padding: "4em"}}>

      <h3> <FaIcons.FaCog /> [Board Settings] <FaIcons.FaCog /></h3>

      <label className="checkbox-label">
        Drag and Paint: {' '}
        <input 
          type="checkbox" 
          name="drag" 
          checked={props.drag} 
          onChange={e => changeIndividualSetting(e)}
          className="custom-checkbox"
        />
      </label>

      <br/>

      <label>
        {"Board Size (0-50):  "}
        <input 
          type="number" 
          name="boardSize" 
          defaultValue="5" 
          min="1" 
          max="50" 
          onChange={e => changeIndividualSetting(e)}/>
      </label>
      
      {/* These are the left and right buttons */}
      <button 
        className="better-button" 
        onClick={ () => changePalette("right")}>
          {/* The text inside */}
          Left Button
      </button>

      <button 
        className="better-button" 
        onClick={ () => changePalette("left")}>
          {/* The text inside */}
          Right Button
      </button>

    </div>
  );
}

function GameButtons({squares, setSquares}){

  function resetBoard() {
    setSquares(Array.from({length: squares.length}, () => ({
      color: "white"
    })));
  }


  async function submitBoard(tempProps) {
    // create a color array
    let colorGrid = []
    let numGrid = Array.from({length: squares.length})

    // iterate through the squares and add the color to the array and another array to keep track of the
    // index of the color array.
    for(let i = 0; i < squares.length; i++){
      if(!colorGrid.includes(squares[i].color)){
        colorGrid.push(squares[i].color);
      };
      numGrid[i] = colorGrid.indexOf(squares[i].color)
    }
    

    // submits a query and returns the template we submitted as newTemplate
    const newTemplate = await client.graphql({
      query: createTemplates,
      variables: {
        input: { 
        "timeCreated": "2020-03-12T13:00:00.00Z", // Date.now(),//this might be bad
        "numGrid":  numGrid,
        "colorGrid":  colorGrid,
        "artName": tempProps.artName,
        "creator": tempProps.creator,
        "creationMessage": tempProps.creationMessage,
        "tags": tempProps.tags
        }
      }
    });

    // at end of function, reset board
    resetBoard();

    console.log(newTemplate);
  }


  return(
    <>
      <button className="better-button" onClick={resetBoard} >Reset</button>
      <GetTemplateProps submitFunction={submitBoard}/>
    </>
  );
}







// a react component that creates a div for a submit button
// additionally rendering a pop up to prompt information for a submit.
function GetTemplateProps({submitFunction}){
  const [isOpen, setIsOpen] = useState(false);
  const [newProps, setNewProps] = useState({
    artName: "nada", 
    creator: "Name", 
    creationMessage: "None", 
    tags:"None"});
  
  // functions for opening and closing the Modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => {setIsOpen(false); }; // closes and redirects to home page

  // function that handles a submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProps !== null) {
      alert(`Thank you for submitting your painting!`);
      submitFunction(newProps);
      closeModal();
    } else {
      alert('Please fill the fields in.');
    }
  };

  return (
    <div>
      <button className="better-button" onClick={openModal}>Submit</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Submit Your Information"
      >
        <h2>Submit Your Information</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setNewProps({...newProps, creator:  e.target.value})}
          />
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setNewProps({...newProps, artName:  e.target.value})}
          />
          <input
            type="text"
            placeholder="Describe this Image"
            onChange={(e) => setNewProps({...newProps, creationMessage:  e.target.value})}
          />
          <input
            type="text"
            placeholder="Tags"
            onChange={(e) => setNewProps({...newProps, tags:  e.target.value})}
          />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};



export default CreateBoardPage;

