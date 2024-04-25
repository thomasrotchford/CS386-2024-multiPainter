import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// We use MATH, but theres no need to import, its naturaly in JS
// Used to define our Pallete Class
  // Has 3 Atrribues
    // List of Valid Classes
      // TODO: Find a way to check these?
    // Squareroot (ROUND UP) of # of colors
    // Name
  // Has 1 Methods
    // setCointainer()
      // adjustes the CSS for visible HTML to fit the palette
export class PaletteClass{
  constructor(colors, palettename) {
      this.colors = colors;
      this.size = Math.ceil(Math.sqrt(colors.length));
      this.palettename = palettename || "Default Name"
  }
  
  // changing varible, as I'm aming for 3 now
  setContainerCSS() {
    // Get refrences to the 3 things we need to change
    const paletteContainerContainer = document.getElementById("palette-container-container");
    const paletteContainer = document.getElementById("palette-container");
    const paletteTitle = document.getElementById("palette-title");

    // Set Container
    if (paletteContainer) {
      /* These varibles do not NEED to be defined here, 
      But It does save processing Power, Also dont need CONST
      But allows us to avoid the initialization */
     let paintTinSize = 105;
     let containerSizeInPx = this.size * paintTinSize;

      /* Sets all our varibles, resizes grid */
      paletteContainer.style.setProperty("--palette-size", this.size);
      paletteContainer.style.width = containerSizeInPx + 'px';
      paletteContainer.style.height = containerSizeInPx + 'px';
    }

    // Set title
    if (paletteTitle) {
      paletteTitle.textContent = "Palette: " + this.palettename;
    }

    // set container-container
    // I KNOW its a terrible name, dont @ me
    if (paletteContainerContainer){
      // Calculate the width and height of paletteContainerContainer
      const containerWidthInPx = parseFloat(paletteContainer.style.width) + 50;
      const containerHeightInPx = parseFloat(paletteContainer.style.width) + 80;

      // Set the width and height of paletteContainerContainer
      paletteContainerContainer.style.width = containerWidthInPx + "px";
      paletteContainerContainer.style.height = containerHeightInPx + "px";
    }
  }

}

export function PaletteBoard({ChooseColor, palette, props, setPalette}) {


  const changePalette = (direction) =>{
    if(direction === "right"){
      props.paletteIndex++;
    }else{
      props.paletteIndex--;
    }
    console.log(props.paletteIndex);
    props.paletteIndex = ( props.paletteIndex + props.paletteOptions.length ) % props.paletteOptions.length;
    setPalette(props.paletteOptions[props.paletteIndex]);
  }

  return(
    <>
      { palette.map(color =>(
        <button 
          className="palette" 
          style={{backgroundColor: color}} 
          onClick={() => ChooseColor(color)}>
        </button>
      ))}
      {setPalette !== null ? <AdditionalProps changePalette={changePalette}/> : null}
    </>
  );
}
  
function AdditionalProps({changePalette}){
  return(
    <div className='arrow-button-container'>
      <button 
        className="better-button" 
        onClick={ () => changePalette("left")}>
        <div className="icon-left">
          <IoIosArrowBack />
        </div>
      </button>

      <button 
        className="better-button" 
        onClick={ () => changePalette("right")}>
          <div className="icon-right">
            <IoIosArrowForward />
          </div>
      </button>
    </div>
  );
}