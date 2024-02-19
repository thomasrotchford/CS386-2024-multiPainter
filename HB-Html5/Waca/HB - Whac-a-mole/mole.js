let currentMoleTile;
let currentBombTile;
let score = 0;
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
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }

  // atleast once
  setBomb()
  setMole()
  

  // Note: -score doesnt work, since this only updates once
  setInterval(setMole, 1142); // every 2 seconds
  setInterval(setBomb, 1973);
}

function getRandomTile(){
  // math.random --> (0-1) * 9 = (0-9) --> round down 0-8
  let num = Math.floor(Math.random() * 25);
  return num.toString();
}

function setMole(){
  if (gameOver) {
    return;
}

  /* clear prev tile */
  if (currentMoleTile) {
    currentMoleTile.innerHTML = "";
  }

  let mole = document.createElement("img");
  mole.src = "./mole.png";

  let num = getRandomTile();
  /* account for things on same tile */
  if (currentBombTile && currentBombTile.id == num) {
    return;
  }

  currentMoleTile = document.getElementById(num);
  currentMoleTile.appendChild(mole);
}

function setBomb() {
  if (gameOver) {
    return;
}

  if (currentBombTile){
    currentBombTile.innerHTML = "";
  }

  let bomb = document.createElement("img");
  bomb.src = "./bomb.png";

  let num = getRandomTile();
  /* account for things on same tile */
  if (currentMoleTile && currentMoleTile.id == num) {
    return;
  }
  currentBombTile = document.getElementById(num);
  currentBombTile.appendChild(bomb);
}

function selectTile() {
  if (gameOver) {
    return;
}

  if (this == currentMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString(); //update score
    
    // make a new one
    setMole()
  }

  else if (this == currentBombTile){
    document.getElementById("score").innerText = "GAME OVER: " + score.toString();

    gameOver = true;
  }
}