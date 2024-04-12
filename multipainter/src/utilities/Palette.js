import React from 'react';


export default function PaletteBoard({ChooseColor, palette}) {
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
  