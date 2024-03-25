import React from 'react';


export default function PaletteBoard({ChooseColor}) {
    // const palette = ["blue", "red", "purple", "lightBlue", "orange", "green", "black", "white"];
    const palette2 = ["Red", "Orange", "Yellow", "Lightgreen", "Darkgreen", "LightBlue", "DarkBlue", "Purple", "Violet", "White"];
  
    return(
      <>
        { palette2.map(color =>(
          <button 
            className="palette" 
            style={{backgroundColor: color}} 
            onClick={() => ChooseColor(color)}>
          </button>
        ))}
      </>
    );
  }
  