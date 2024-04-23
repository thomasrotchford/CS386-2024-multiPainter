import React from 'react';

// We use MATH, but theres no need to import, its naturaly in JS
// Used to define our Pallete Class
  // Has 2 Atrribues
    // List of Valid Classes
      // TODO: Find a way to check these?
    // Squareroot (ROUND UP) of # of colors
  // Has 0 Methods
export class PaletteClass{
  constructor(colors) {
      this.colors = colors;
      this.size = Math.ceil(Math.sqrt(colors.length));
  }

  setContainerCSS(paletteContainer) {
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
  }

}

export function PaletteBoard({ChooseColor, palette}) {
    // const palette = ["blue", "red", "purple", "lightBlue", "orange", "green", "black", "white"];
    // const palette2 = ["Red", "Orange", "Yellow", "Lightgreen", "Darkgreen", "LightBlue", "DarkBlue", "Purple", "Violet", "White"];
    // const palette3 = ["Red", "Blue", "LightBlue", "White"];
    
    // below is code for a color grid. Potential to use int he futruea
    // <input type="color" id="head" name="head" value="#e66465" onChange={(e) => ChooseColor(e.target.value)}/>
    // <label for="head">Head</label>

    return(
      <>
        { palette.map(color =>(
          <button 
            className="palette" 
            style={{backgroundColor: color}} 
            onClick={() => ChooseColor(color)}>
          </button>
        ))}
      </>
    );
  }
  