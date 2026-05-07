import { stateOfGame, player, cars, crashPlayer } from "./app.js";
import { canvasHeight, canvasWidth, halfCanvasWidth } from "./canvas.js";
import { createHighscoreList } from "./highscore.js";

const image = new Image();
image.src = './favicon.png';

export let radius = 25;
export let playerX = 300;
export let playerY = canvasHeight - radius - 5;

export function getStartPosition(player) {
  player.x = halfCanvasWidth;
  player.y = canvasHeight - radius - 65;
}

export function drawPlayer(ctx) {
  ctx.drawImage(image, player.x-30, player.y-30, 60, 60)
}

export function onKeyDown(a) {
  if (a.key === "h") {
    if (stateOfGame.isHighscoreScreen === false) {
      stateOfGame.isHighscoreScreen = true;
      createHighscoreList();
    }
  }
  if (a.key === "Escape") {
    stateOfGame.isHighscoreScreen = false;
  }
  if (!stateOfGame.gameOver) {
    if (a.key == "ArrowRight" || a.key == "d" && player.x !== 540) {
      player.x = player.x + 60;
    } else if (a.key == "ArrowLeft" || a.key == "a" && player.x !== 60) {
      player.x = player.x - 60;
    } else if (a.key == "ArrowDown" || a.key == "s" && player.y !== 770 ) {
      player.y = player.y + 60;
    } else if (a.key == "ArrowUp" || a.key == "w") {
      player.y = player.y - 60;
    }
  } else {
    if (a.key == "ArrowRight" || a.key == "d") {
      crashPlayer.x = crashPlayer.x + 60;
    } else if (a.key == "ArrowLeft" || a.key == "a") {
      crashPlayer.x = crashPlayer.x - 60;
    } else if (a.key == "ArrowDown" || a.key == "s") {
      crashPlayer.y = crashPlayer.y + 60;
    } else if (a.key == "ArrowUp" || a.key == "w") {
      crashPlayer.y = crashPlayer.y - 60;
    }
  }
}

export function getFromCrashToGame(player, stateOfGame) {
  stateOfGame.gameOver = false;
  player.x = halfCanvasWidth;
  player.y = canvasHeight - radius - 5;
  crashPlayer.x = halfCanvasWidth;
  crashPlayer.y = 300;
}

export function isNewLevel(player) {
  if (player.x > 0 && player.y > 0 && player.x < canvasWidth && player.y < 85) {
    return true;
  } else return false;
}

export function collideWithCar() {
  for (let i = 0; i < cars.length; i++) {
    if (
      player.x + radius > cars[i].x && //checkt linke Seite
      player.x - radius < cars[i].x + cars[i].width &&
      player.y > cars[i].y &&
      player.y < cars[i].y + cars[i].height
    ) {
      stateOfGame.gameOver = true;
    }
  }
}
