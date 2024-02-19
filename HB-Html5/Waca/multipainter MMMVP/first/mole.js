let currentMoleTile;


window.onload = function(){
  setGame();
}

function setGame(){
  // set up the grig for the game board in html
  for (let index = 0; index < 9; index++) {
    // div id 0-8
    let tile = document.createElement("div");
    tile.id = index.toString();
    document.getElementById("board").appendChild(tile);
  }

  setInterval(setMole, 2000); // every 2 seconds
}

function getRandomTile(){
  // math.random --> (0-1) * 9 = (0-9) --> round down 0-8
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole(){

  let mole = document.createElement("img");
  mole.src = "./mole.png";

  let num = getRandomTile();
  currentMoleTile = document.getElementById(num);
  currentMoleTile.appendChild(mole);
}