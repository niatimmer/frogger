const redFrog = new Image();
redFrog.src = "./redfrog.png";

export function drawCrashPlayer(ctx, crashPlayer) {
  ctx.drawImage(redFrog, crashPlayer.x - 10, crashPlayer.y - 10, 60, 60);
}

export function drawLevelInCrash(ctx, currentLevel, canvasWidth) {
  ctx.font = " 44px Arial";
  ctx.fillStyle = "#c0392b";
  ctx.fillText("Your Score", canvasWidth - 415, 200);
  ctx.fillText("Level: " + currentLevel, canvasWidth - 375, 237);
}

function drawRestartButton(ctx) {
  ctx.fillStyle = "#d4af37";
  ctx.beginPath();
  ctx.roundRect(300 - 115, 470, 230, 100, 27);
  ctx.fill();
  ctx.font = "30px Arial Rounded MT Bold";
  ctx.fillStyle = "black";
  ctx.fillText("Restart", 242, 530);
}

export function crash(ctx, stateOfGame, canvasWidth) {
  stateOfGame.isHighscoreScreen = false;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 600, 800);
  ctx.font = "50px Arial Rounded MT Bold";
  ctx.fillStyle = "white";
  ctx.fillText("💥 Crash 💥", canvasWidth / 2 - 130, 100);
  drawRestartButton(ctx);
  drawLevelInCrash(ctx, stateOfGame.currentLevel, canvasWidth)
}

export function crashCanvasEnd(crashPlayer, canvas) {
  if (crashPlayer.y - crashPlayer.height < 0) {
    crashPlayer.y = 50;
  }
  if (crashPlayer.y + crashPlayer.height > canvas.height) {
    crashPlayer.y = 770;
  }
  if (crashPlayer.x - crashPlayer.width < 0) {
    crashPlayer.x = 60;
  }
  if (crashPlayer.x + crashPlayer.width > canvas.width) {
    crashPlayer.x = 540;
  }
}
