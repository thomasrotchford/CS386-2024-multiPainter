let brush = 9;
let paintbrush; // variable that holds the paintbrush color
let paintbrushElement; // variable to hold paintbrush element 
let gameOver = false;


window.onload = function(){
  setGame();
}

function setGame(){
  // set up the grig for the game board in html
  for (let index = 0; index < 25; index++) {
    // div id 0-8
    let tile = document.createElement("div");
    tile.id = index.toString();
    tile.classList.add("paintable"); 
    if( index % 2 === 0)
    {
      tile.style.backgroundColor = "white";
    }
    else{
       tile.style.backgroundColor = "Gainsboro";
    }
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }

  // set up the palette
  for (index = 100; index <110; index++) {
    tile = document.createElement("button");
    tile.id = `p${index.toString()}`;
    tile.addEventListener("click", selectTile);
    tile.classList.add("palette");
    document.getElementById("palette").appendChild(tile);
  }
  // set default paintbrush
  paintbrushElement = document.getElementById("p100")
  paintbrushElement.classList.add("selected");
}

function selectTile() {
    if (this.classList.contains("palette")){
      paintbrushElement.classList.remove("selected");
      paintbrush = getComputedStyle(this).backgroundColor;
      paintbrushElement = this;
      paintbrushElement.classList.add("selected");
    }
    else if (this.classList.contains("paintable")){
      this.style.backgroundColor = paintbrush;
    }
}