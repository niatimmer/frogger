import {
  displayHighscore,
  displayHighscoreInCrash,
  removeElements,
  drawHighscoreScreenBackground,
  setHighscore,
} from "./highscore.js";
import { createCars } from "./cars.js";
import {
  onKeyDown,
  playerX,
  playerY,
  getFromCrashToGame,
  getStartPosition,
  isNewLevel,
  collideWithCar,
  drawPlayer,
} from "./player.js";
import { canvas, canvasHeight, canvasWidth, ctx } from "./canvas.js";
let crashPlayer2;
let playerX2;
let playerY2;
import {
  drawLevelInCrash,
  crash,
  crashCanvasEnd,
  drawCrashPlayer,
} from "./crash.js";
export let player = {
  x: 300,
  y: canvasHeight - 30,
};
console.log(player.y);

export let crashPlayer = {
  x: canvasWidth / 2 - 20,
  y: 300,
  width: 40,
  height: 40,
};

function aufrufenPlayers() {
  crashPlayer2 = crashPlayer; // Rufe aufrufen erst jetzt auf
  playerX2 = playerX;
  playerY2 = playerY;
}

document.addEventListener("keydown", onKeyDown); //Spieler (player.js)

export let stateOfGame = {
  gameOver: false,
  isHighscoreScreen: false,
  currentLevel: 1,
};


export const cars = createCars();

let strassen = [];
let strasse1 = { x: 0, y: 140 };
let strasse2 = { x: 0, y: 200 };
let strasse3 = { x: 0, y: 375 };
let strasse4 = { x: 0, y: 560 };
let strasse5 = { x: 0, y: 620 };
let strassenY = 0;
strassen.push(strasse1, strasse2, strasse3, strasse4, strasse5);

function move() {
  for (let i = 0; i < cars.length; i++) {
    cars[i].x += cars[i].speed;
  }
}

function Cars() {
  for (let index = 0; index < cars.length; index++) {
    ctx.fillStyle = cars[index].colour;
    ctx.beginPath();
    ctx.rect(
      cars[index].x,
      cars[index].y,
      cars[index].width,
      cars[index].height
    );
    ctx.fill();
    ctx.closePath();
    if (cars[index].x > 650) {
      cars[index].x = -50;
    } else if (cars[index].x < -60) {
      cars[index].x = 640;
    }
  }
}

function buildStrassen() {
  for (let index = 0; index < strassen.length; index++) {
    strassenY = strassen[index].y;
    buildStrasse(strassenY);
  }
}

function buildStrasse(y) {
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.rect(0, strassenY, canvas.width, 5);
  ctx.fill();
  ctx.closePath();
}

let rastZonen = [];
let rastZone1 = {
  colour: "black",
  x: 0,
  y: 0,
  width: canvas.width,
  height: 85,
};
let rastZone2 = {
  colour: "black",
  x: 0,
  y: 260,
  width: canvas.width,
  height: 60,
};
let rastZone3 = {
  colour: "black",
  x: 0,
  y: 440,
  width: canvas.width,
  height: 60,
};
let rastZone4 = {
  colour: "black",
  x: 0,
  y: 680,
  width: canvas.width,
  height: 60,
};
rastZonen.push(rastZone1, rastZone2, rastZone3, rastZone4);

function buildRastZonen() {
  for (let i = 0; i < rastZonen.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = rastZonen[i].colour;
    ctx.rect(
      rastZonen[i].x,
      rastZonen[i].y,
      rastZonen[i].width,
      rastZonen[i].height
    );
    ctx.fill();
    ctx.closePath();
  }
}

/*function drawBall() {
  ctx.fillStyle = "#008000";
  ctx.beginPath();
  ctx.arc(player.x, player.y, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}*/

function levelDisplay() {
  ctx.font = " 44px Arial";
  ctx.fillStyle = "#4169E1";
  ctx.fillText("Level: " + stateOfGame.currentLevel, canvas.width - 195, 60);
}

function newLevel() {
  stateOfGame.currentLevel += 1;
  setHighscore()

  getStartPosition(player);

  if (
    (stateOfGame.currentLevel > 5 && stateOfGame.currentLevel < 10) ||
    (stateOfGame.currentLevel > 15 && stateOfGame.currentLevel < 20) ||
    (stateOfGame.currentLevel > 25 && stateOfGame.currentLevel < 30) ||
    (stateOfGame.currentLevel > 35 && stateOfGame.currentLevel < 40)
  ) {
    for (let i = 0; i < cars.length; i++) {
      cars[i].speed -= 0.1;
    }
  } else {
    for (let i = 0; i < cars.length; i++) {
      if (stateOfGame.currentLevel % 5 == 0) {
        cars[i].speed = -cars[i].speed;
        if (stateOfGame.currentLevel % 2 == 0) {
          cars[i].speed += 0.1;
        } else {
          cars[i].speed -= 0.1;
        }
      } else {
        cars[i].speed += 0.1;
      }
    }
  }

  //*/
}

function resetLevel() {
  stateOfGame.currentLevel = 1;
}

function resetLevelSpeed() {
  if (stateOfGame.currentLevel % 5 == 0) {
  }
  for (let i = 0; i < cars.length; i++) {
    if (
      (stateOfGame.currentLevel >= 5 && stateOfGame.currentLevel < 10) ||
      (stateOfGame.currentLevel >= 15 && stateOfGame.currentLevel < 20) ||
      (stateOfGame.currentLevel >= 25 && stateOfGame.currentLevel < 30) ||
      (stateOfGame.currentLevel >= 35 && stateOfGame.currentLevel < 40)
    ) {
      cars[i].speed = -cars[i].speed;
    }
    let newSpeed = cars[i].speed - (stateOfGame.currentLevel - 1) * 0.1;
    cars[i].speed = newSpeed;
  }
}

function aufrufen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!stateOfGame.gameOver) {
    Cars();
    aufrufenPlayers();
    move();
    buildRastZonen();
    buildStrassen();
    drawPlayer(ctx);
    collideWithCar();
    levelDisplay();
    if (isNewLevel(player)) {
      newLevel();
    }
    displayHighscore();
    crashPlayer2 = { x: canvas.width / 2, y: 300, width: 40, height: 40 };
  } else {
    crash(ctx, stateOfGame, canvasWidth);
    crashCanvasEnd(crashPlayer, canvas);
    drawLevelInCrash(ctx, stateOfGame.currentLevel, canvas.width);
    displayHighscoreInCrash();
    drawCrashPlayer(ctx, crashPlayer);
    if (
      crashPlayer.x + crashPlayer.width > 200 &&
      crashPlayer.x + crashPlayer.width < 430 &&
      crashPlayer.y > 470 &&
      crashPlayer.y < 570
    ) {
      getFromCrashToGame(player, stateOfGame);
      resetLevelSpeed();
      resetLevel();
    }
  }

  if (stateOfGame.isHighscoreScreen) {
    drawHighscoreScreenBackground();
  } else {
    removeElements();
  }

  requestAnimationFrame(aufrufen);
}

document.addEventListener("DOMContentLoaded", () => {
  aufrufen(); // Rufe aufrufen erst jetzt auf
});
