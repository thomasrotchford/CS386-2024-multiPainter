let currentMoleTile;
let currentBombTile;

let Red;
let Orange;
let Yellow;
let LGreen;
let DGreen;

let LBlue;
let DBlue;
let Purple;
let Violet;
let Blank;

let score = 0;
let brush = 9;
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

  // set up the palette
  for (index = 100; index <110; index++) {
    tile = document.createElement("div");
    tile.id = index.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("palette").appendChild(tile);
  }

  // atleast once
  setBomb();
  setMole();
  setPalette();
  

  // Note: -score doesnt work, since this only updates once
  setInterval(setMole, 1142); // every 2 seconds
  setInterval(setBomb, 1973);
}

function getRandomTile(){
  // math.random --> (0-1) * 9 = (0-9) --> round down 0-8
  let num = Math.floor(Math.random() * 25);
  return num.toString();
}

function setPalette(){
  if (gameOver) {
    return;
}
  let redimg = document.createElement("img");
  redimg.src = "./Images/bomb.png";

  Red = document.getElementById(100);
  Red.appendChild(redimg);

  let orangeimg = document.createElement("img");
  orangeimg.src = "./Images/bomb.png";

  Orange = document.getElementById(101);
  Orange.appendChild(orangeimg);

  let yimg = document.createElement("img");
  yimg.src = "./Images/bomb.png";

  Yellow = document.getElementById(102);
  Yellow.appendChild(yimg);

  let lgimg = document.createElement("img");
  lgimg.src = "./Images/bomb.png";

  LGreen = document.getElementById(103);
  LGreen.appendChild(lgimg);

  let dgimg = document.createElement("img");
  dgimg.src = "./Images/bomb.png";

  DGreen = document.getElementById(104);
  DGreen.appendChild(dgimg);


  let lbimg = document.createElement("img");
  lbimg.src = "./Images/bomb.png";

  LBlue = document.getElementById(105);
  LBlue.appendChild(lbimg);
  
  let dbimg = document.createElement("img");
  dbimg.src = "./Images/bomb.png";

  DBlue = document.getElementById(106);
  DBlue.appendChild(dbimg);
  
  let pimg = document.createElement("img");
  pimg.src = "./Images/bomb.png";

  Purple = document.getElementById(107);
  Purple.appendChild(pimg);

  let vimg = document.createElement("img");
  vimg.src = "./Images/bomb.png";

  Violet = document.getElementById(108);
  Violet.appendChild(vimg);

  let bimg = document.createElement("img");
  bimg.src = "./Images/bomb.png";

  Blank = document.getElementById(109);
  Blank.appendChild(bimg);
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
  mole.src = "./Images/mole.png";

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
  bomb.src = "./Images/bomb.png";

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
    score+= 10;
    document.getElementById("score").innerText = score.toString(); //update score
    
    // make a new one
    setMole();
  }

  else if (this == currentBombTile){
    gameOver = true;
  }

  else if (this == Red){
    
    document.getElementById("brush").innerText = "Current Brush Color # Red ";
    brush = 0;
  }

  else if (this == Orange){
    
    document.getElementById("brush").innerText = "Current Brush Color # Orange ";
    brush = 1;
  }

  else if (this == Yellow){
    
    document.getElementById("brush").innerText = "Current Brush Color # Yellow ";
    brush = 2;
  }

  else if (this == LGreen){
    
    document.getElementById("brush").innerText = "Current Brush Color # LGreen ";
    brush = 3;
  }

  else if (this == DGreen){
    
    document.getElementById("brush").innerText = "Current Brush Color # DGreen ";
    brush = 4;
  }



  else if (this == LBlue){
    
    document.getElementById("brush").innerText = "Current Brush Color # LBlue ";
    brush = 5;
  }

  else if (this == DBlue){
    
    document.getElementById("brush").innerText = "Current Brush Color # DBlue ";
    brush = 6;
  
  }

  else if (this == Purple){
    
    document.getElementById("brush").innerText = "Current Brush Color # Purple ";
    brush = 7;
  }

  else if (this == Violet){
    
    document.getElementById("brush").innerText = "Current Brush Color # Violet ";
    brush = 8;
  
  }

  else if (this == Blank){
    
    document.getElementById("brush").innerText = "Current Brush Color # Blank ";
    brush = 9;
  }
}