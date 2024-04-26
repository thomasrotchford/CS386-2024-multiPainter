/* START IMPORTS */

  import { React, useState, useEffect, useRef } from 'react';

  /* Affects the lay out of the PixelBoard */
  import '../utilities/PixelBoard.css';

  /* Affects the layout of the pallete */
  import '../utilities/Palette.css'
  /* Affects Palette Functionality and Palette classClasses */
  import {PaletteClass, PaletteBoard, AdditionalProps} from '../utilities/Palette.js'

  import { Helmet } from 'react-helmet';
  import Modal from 'react-modal';

  import { HexColorPicker } from "react-colorful"; // this is a hexidecimal color picker

  // import {withAuthenticator} from '@aws-amplify/ui-react';
  // import '@aws-amplify/ui-react/styles.css';


  /* Box Icons */
  import * as FaIcons from 'react-icons/fa';

  /* Data Base Imports and configuration */
  import { generateClient } from "aws-amplify/api"; // imports a function that creates a driver for the DB
                                                    // this allows us to run commands on the database essentially with the client object
  
  import { createTemplates } from '../graphql/mutations'; // this imports a pre-defined query
    
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
    // the following are alos just hardcoded in PaintboardUtils.js. The goal is for these both to be consolodated into
    // a boardTemplate class where this is all kept for cleaner code. 
const MAX_STD_BOARD_WIDTH = 22; 
const SMALLEST_SQ_PX = 25;
const DEFAULT_BOARD_SIZE = "500px";

const paletteType = {
  normalPalette: "Normal Palette", 
  hexPalette: "Hex Palette"
};

// color palette for the create board
  // Make sure to capitialize

  // NEW: There is a title to these now, can be found right after the color array
  // MAKE SURE the title name is SMALLER than the size,
  // for refrence Palette Microsoft is about 200px, and you get an extra 100 per size

  const palette1= new PaletteClass(["Red", "Green", "Blue","Yellow", "White", "Black"], "Base");

  const palette2 = new PaletteClass(["FireBrick", "Crimson", "IndianRed",
                                      "LightCoral", "Salmon", "LightSalmon",
                                      "Coral", "Tomato", "Red"], "Warm Colors #1");

  const palette3 = new PaletteClass([ "Coral", "Gold", "PeachPuff",
                                        "Yellow"," Peru","OrangeRed",
                                        "Wheat", "DarkOrange", "Orange"], "Warm Colors #2");

  const palette4 = new PaletteClass([ "Lime", "LimeGreen", "SpringGreen",
                                        "MediumSpringGreen"," DarkSeaGreen","MediumSeaGreen",
                                        "SeaGreen", "ForestGreen", "Green"], "Mid Colors #1");

  const palette5 = new PaletteClass(["PowderBlue", "LightBlue", "SkyBlue",
                                      "LightSkyBlue", "DeepSkyBlue", "DodgerBlue",
                                      "CornflowerBlue", "RoyalBlue", "SteelBlue"], "Cool Colors #1");

  const palette6 = new PaletteClass(["Lavender", "Thistle", "Plum",
                                      "Violet", "Orchid", "Fuchsia",
                                      "MediumOrchid", "DarkOrchid", "DarkViolet"], "Cool Colors #2");

  const palette7 = new PaletteClass(["Red", "OrangeRed", "Orange", "Gold", 
                                     "Yellow", "Lime", "Green", "Turquoise", 
                                     "SkyBlue", "DodgerBlue", "Blue", "MediumPurple", 
                                     "Indigo", "DarkOrchid", "MediumVioletRed", "Crimson"], "Rainbow #1");

  const palette8 = new PaletteClass(["Red", "OrangeRed", "Orange", "Gold", "Yellow", 
                                     "Lime", "Green", "Turquoise", "LightSeaGreen", "SkyBlue", 
                                     "DodgerBlue", "Blue", "MediumPurple", "Indigo", "DarkOrchid", 
                                     "MediumVioletRed", "Crimson", "Tomato", "DarkOrange", "DeepPink", 
                                     "HotPink", "Salmon", "Lavender", "MediumSpringGreen", "CornflowerBlue"], "Rainbow #2 ");
  
                                                              
  /* Set a base value to avoid errors */
  let paletteProps = {
    paletteIndex: 0,
    paletteOptions: [palette1, palette2, palette3, palette4, palette5, palette6, palette7, palette8]
  }

/* END CONSTANTS */

// NOT A COLOR : Walnut, Rouge, 

// default export at the bottom
function CreateBoardPage() {
  // the paint brush functions 
    const [ paintBrush, SetBrush ] = useState("White");
    // a function to pass down that will set brush color when called
    const ChooseColor = (color)=>{
      SetBrush(color);
    };  

  
  // settings options and functions
    const [settingsGroup, SetSettings] = useState({
      boardSize: 5,  // board width
      drag: true,    // whether or not you can drag
      typeOfPalette: paletteType.normalPalette  // can be a type of enum from above
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

    // gets the board size rendered correctly with flex
    const boardWidth = settingsGroup.boardSize;
    let pixels; // this variable is the pixel width and height for the board 
    if(boardWidth > MAX_STD_BOARD_WIDTH){
      // if the board width is larger than max board width, then expand the container for it
      pixels = boardWidth * SMALLEST_SQ_PX; // finds the total pixel dimensions
      // change pixels to a string with proper formatting
      pixels = pixels + 'px';
    }else{
      // set pixels to default board size
      pixels = DEFAULT_BOARD_SIZE;
    }



    // set squares for the board
    // in this function we are using the useState to keep track of the state 
    // of the board. The submit button should update the state. 
    // The array.from method is making array from a length of the square board. 
    // It is using the mapping funciton we define which just sets everything
    // to an object with a specific color. 
    const [squares, SetSquares] = useState(Array.from({length: settingsGroup.boardSize*settingsGroup.boardSize}, () => ({
      color: "white"
    })));

    /* UseState : Triggers when Palette.Size is updated
       Inner IF only triggers IF paletteContainer isnt NULL
       IE: palette-container exists  */
    const [palette, setPalette] = useState(paletteProps.paletteOptions[paletteProps.paletteIndex]);
    useEffect(() => {
      let paletteContainer = document.getElementById("palette-container");
      palette.setContainerCSS(paletteContainer);

    /* Triggers on  Change of Size & colors or the type of palette being used */
    }, [palette.size, palette.colors, settingsGroup.typeOfPalette, paletteProps.paletteIndex]);

    return (
      <>
        <Helmet><title> Multi Pixel | Create </title></Helmet>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: "25px"}}>
          <h1 id="brush" style={{color: paintBrush}}> Current Brush Color</h1>
          <div id="brush-box-display" style={{outline: "1px solid black", borderRadius: "100%" ,background: paintBrush, width: "50px", height: "50px", marginTop: "auto", marginBottom: "auto", marginLeft: "20px"}}></div>
        </div>
        
        <div id="holder">
          {settingsGroup.typeOfPalette === paletteType.normalPalette ?
            <>
              <div className='freedraw-palette-container'>
                <div id="palette-title"> Palette: Dummy Text </div>
                <div className='freedraw-palette'>
                  <PaletteBoard ChooseColor={ChooseColor} palette={palette.colors} props={paletteProps} setPalette={setPalette}/>               
                </div>
                <AdditionalProps changePalette={(direction) => {
                const newIndex = direction === 'right' ? (paletteProps.paletteIndex + 1) % paletteProps.paletteOptions.length : (paletteProps.paletteIndex - 1 + paletteProps.paletteOptions.length) % paletteProps.paletteOptions.length;
                setPalette(paletteProps.paletteOptions[newIndex]);
                paletteProps.paletteIndex = newIndex; // Ensure the index is updated globally if needed
              }}/>
              </div>
              {/* Render AdditionalProps conditionally */}

            </>
            :
            <HexColorPicker color={paintBrush} onChange={ChooseColor} />
          }
    
          <div id="board" style={{
            gridTemplateColumns: boardSizes,
            width: pixels,
            height: pixels
            }}>
            <CreativeBoard paintBrush={paintBrush} settings={settingsGroup} squares={squares} />
          </div>
          <div className='settings-container'>
            <Settings props={settingsGroup} handleChange={ApplySettings} />
            <GameButtons squares={squares} setSquares={SetSquares} />
          </div>
        </div>
      </>
    );
  }    




function BoardSquare({typeOfSquare, brush, dragSetting, square}) {
    const [ color, SetColor ] = useState(square.color); 

    // adding a function to implement drag and drop
    const checkButtonPress = (e) => {
      if (e.buttons === 1) {
        SetColor(brush);
        square.color = brush;
      }
    }

    // adding use effect to re render square color
    useEffect(() => {
      // set the board color for the square
      SetColor(square.color);
    }, [square.color]);

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
    drag: props.drag,
    paletteType: props.paletteType
  };

  const changeIndividualSetting = (e) =>{
    // check for drag setting
    if(e.target.name === "drag"){
      newSettings.drag = e.target.checked;
    }

    if(e.target.name === "boardSize"){
      newSettings.boardSize = e.target.value;
    } 

    if(e.target.name === "typeOfPalette"){
      newSettings.typeOfPalette = e.target.value;
      console.log(e.target.value);
    }

    handleChange(newSettings);
  }

  /* The HTML */

  return(

    <div className="boardSettings">

      <h3> <FaIcons.FaCog /> [Board Settings] <FaIcons.FaCog /></h3>
      
      {/*This is the drag settings */}
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
      {/*This is the board size settings */}
      <label>
        {"Board Size (1-50):  "}
        <input 
          type="number" 
          name="boardSize" 
          defaultValue={props.boardSize}
          min="1" 
          max="50" 
          onChange={e => changeIndividualSetting(e)}/>
      </label>
      <br/>

      {/*This is the board paletteType settings */}
      <label>
        {"Type of palette: "}
        <select id="options" name="typeOfPalette" value={props.paletteType} onChange={e => changeIndividualSetting(e)}>
          {Object.keys(paletteType).map((type) =>{ 
            return(
            <option value={paletteType[type]}>{paletteType[type]}</option>
          );})}
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
        "timeCreated": getCurrentAWSDateTime(), // Date.now(),//this might be bad
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
      <button className="submit-button" onClick={resetBoard} >Reset</button>
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
    <div >
      <button className="submit-button" onClick={openModal}>Submit</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Submit Your Information"
      >
        <div className='modal'>
          <h2>Submit Your Information</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              maxLength={20}
              onChange={(e) => setNewProps({...newProps, creator:  e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Title"
              maxLength={20}
              onChange={(e) => setNewProps({...newProps, artName:  e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Describe this Image in 200 characters or less"
              maxLength={200}
              onChange={(e) => setNewProps({...newProps, creationMessage:  e.target.value})}
            />
            <input
              type="text"
              placeholder="Tags"
              onChange={(e) => setNewProps({...newProps, tags:  e.target.value})}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

// function to get the AWS time

function getCurrentAWSDateTime() {
  const currentDate = new Date();

  const year = currentDate.getUTCFullYear();
  const month = ('0' + (currentDate.getUTCMonth() + 1)).slice(-2); // Add leading zero if month is less than 10
  const day = ('0' + currentDate.getUTCDate()).slice(-2); // Add leading zero if day is less than 10
  const hours = ('0' + currentDate.getUTCHours()).slice(-2); // Add leading zero if hours is less than 10
  const minutes = ('0' + currentDate.getUTCMinutes()).slice(-2); // Add leading zero if minutes is less than 10
  const seconds = ('0' + currentDate.getUTCSeconds()).slice(-2); // Add leading zero if seconds is less than 10

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
}




export default CreateBoardPage;

