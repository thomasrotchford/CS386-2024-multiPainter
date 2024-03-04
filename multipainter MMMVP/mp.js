let brush = 10;
let boardSize = 9; // CHANGE ME if you want a different board
let tileCount = boardSize * boardSize; // gives use tile count
let paintbrush = "red"; // variable that holds the paintbrush color
let paintbrushElement; // variable to hold paintbrush element 
let index = 0; // used in our loops
let gitThis;
let colorArray = ["Red", "Orange", "Yellow", "Lightgreen", "Darkgreen",
                  "LightBlue", "DarkBlue", "Purple", "Violet", "White"];
                  // used in brush text changing


window.onload = function(){
  setGame();
}

// Our function that triggers on page load
// Trigger all set functions
function setGame(){
  setBoard();
  setPalette();
  setBrush();
}

// Used to make board interactible
function setBoard() {
  
  // set up the grid for the game board in html
  for ( index = 0; index < tileCount; index++) {

    // Gives us div id's 0-tileCount^2 -1

    // Create a JS object, and make a div inside the html
    let tile = document.createElement("div");

    // give Html item an ID = current index
    tile.id = index.toString();

    // give it the paintable class 
    // Has no details in CSS, more used as a flag
    tile.classList.add("paintable"); 

    // Define our color here, since we need it to change
    // based on our ID, we might be unable to do this in css
    if( index % 2 === 0)
    {
      tile.style.backgroundColor = "white";
    }
    else{
       tile.style.backgroundColor = "Gainsboro";
    }

    // Add an event listener looking for a click
    tile.addEventListener("click", selectTile);

    // Append this new element into the file, as a div under the board
    // it will automatically go to the right place with the div element
    document.getElementById("board").appendChild(tile);
  }

}

// Used to make palette interactible
function setPalette() {
   // Set up the palette for JS and Html

   for (index = 0; index <10; index++) {

    // Gives us divs 0-9

    // create an element, class button
    // rules for button in CSS
    tile = document.createElement("button");

    // creates an ID for the button
    // "p + index"
    // ${} is just format for adding a varible
    //tile.id = `p${index.toString()}`;
    tile.id = index.toString()

    // Add an event listener looking for a click
    tile.addEventListener("click", selectTile);

    // Append this new element into the file, as a div under the board
    // it will automatically go to the right place with the div element
    tile.classList.add("paint");
    document.getElementById("palette").appendChild(tile);
  }
}

// Used to place brush somewhere
function setBrush() {
    // set default paintbrush
    paintbrushElement = document.getElementById("0");

    // select that color
    paintbrushElement.classList.add("selected");

    // since this Is set without a click
    // we cannot use selectTile(), we do not have a this
    // i'll do its parts manually
    var brushText = document.getElementById("brush");
    brushText.innerText = "Current Brush Color: " + colorArray[0];
    brushText.style.color = colorArray[0];
    paintbrush = colorArray[0];
    
}

// Our function for selecting tiles
function selectTile() {
    if (this.classList.contains("paint")){
      paintbrushElement.classList.remove("selected");
      paintbrush = getComputedStyle(this).backgroundColor;
      paintbrushElement = this;
      paintbrushElement.classList.add("selected");

      var brushText = document.getElementById("brush");
      brushText.innerText = "Current Brush Color: " + colorArray[this.id];
      brushText.style.color = colorArray[this.id];
    }
    
    else if (this.classList.contains("paintable")){
      this.style.backgroundColor = paintbrush;
    }
}
