import { stateOfGame } from "./app.js";
import { ctx, halfCanvasWidth } from "./canvas.js";

//TODO von 8.1.2026
//bei levelup wir immer ein objekt in die highscorelist hinzugefügt obwohl das level geringer ist als der highscore

//TODO von 15.1.26
//Liste begrenzen / direkt neuen highscore mit altem erstzen
function getMinimum(listOfHighscoreObjects) {
  let minHighscoreObject = null;
  for (let element of listOfHighscoreObjects) {
    if (
      minHighscoreObject === null ||
      element.highscore < minHighscoreObject.highscore
    ) {
      minHighscoreObject = element;
    }
  }
  return minHighscoreObject;
}

export function drawHighscoreScreenBackground() {
  ctx.fillStyle = "rgba(128, 128, 128, 0.85)";
  ctx.beginPath();
  ctx.roundRect(60, 115, 480, 600, [70]);
  ctx.fill();
}

export function setHighscoreList(highscoreObject) {
  const LIST_LENGTH = 7;
  const scoreListStorage = localStorage.getItem("highscoreList");
  if (scoreListStorage) {
    const parsedList = JSON.parse(scoreListStorage);
    parsedList.sort((a, b) => b.highscore - a.highscore);
    const minimum = getMinimum(parsedList);
    console.log(parsedList);
    console.log(parsedList.length);

    //Bedingung:
    //  Wenn der aktuelle Highscore größer als der kleinste Highscore in der Liste ist
    //  Und wenn das currentLevel größer als der kleinste Highscore in der Liste ist
    //  Und wenn die Länge der Highscore Liste kleiner als die angegebene LIST_LENGTH ist
    if (
      highscoreObject.highscore > minimum.highscore &&
      stateOfGame.currentLevel > minimum.highscore &&
      parsedList.length < LIST_LENGTH
    ) {
      //parsedList.push(highscoreObject);
      const newListEntry = {
        highscore: stateOfGame.currentLevel,
        time: new Date(),
      };
      console.log("New Entry:", newListEntry);
      parsedList.push(newListEntry);
      parsedList.sort((a, b) => b.highscore - a.highscore);
      localStorage.setItem("highscoreList", JSON.stringify(parsedList));
    } else if (
      highscoreObject.highscore > minimum.highscore &&
      stateOfGame.currentLevel > minimum.highscore &&
      parsedList.length === LIST_LENGTH
    ) {
      parsedList.pop();
      parsedList.push(highscoreObject);
      parsedList.sort((a, b) => b.highscore - a.highscore);
      localStorage.setItem("highscoreList", JSON.stringify(parsedList));
      console.log(parsedList);
    }
  } else {
    let highscoreObject = {
      highscore: stateOfGame.currentLevel,
      time: new Date(),
    };
    let firstEntryHighscoreList = [highscoreObject];
    localStorage.setItem(
      "highscoreList",
      JSON.stringify(firstEntryHighscoreList),
    );
  }
}

export const setHighscore = () => {
  let highscoreObject = {
    highscore: stateOfGame.currentLevel,
    time: new Date(),
  };
  let highScoreStorage = JSON.parse(localStorage.getItem("highscore"));
  if (highScoreStorage) {
    if (stateOfGame.currentLevel > highScoreStorage.highscore) {
      let updatedHighscoreObject = {
        highscore: stateOfGame.currentLevel,
        time: new Date(),
      };
      localStorage.setItem("highscore", JSON.stringify(updatedHighscoreObject));
    }
  } else localStorage.setItem("highscore", JSON.stringify(highscoreObject));
  const updatedHighscoreStorage = JSON.parse(localStorage.getItem("highscore"));
  console.log(updatedHighscoreStorage);
  setHighscoreList(updatedHighscoreStorage);
  return updatedHighscoreStorage;
};

function getHighscore() {
  return JSON.parse(localStorage.getItem("highscore"));
}

export function displayHighscore() {
  const highscore = getHighscore() ? getHighscore().highscore : 1;
  ctx.font = " 35px Arial";
  ctx.fillStyle = "#e74c3c";
  ctx.fillText("Highscore: " + highscore, 20, 58);
}

export function displayHighscoreInCrash() {
  const highscore = getHighscore() ? getHighscore().highscore : 1;
  ctx.font = " 45px Arial";
  ctx.fillStyle = "#e74c3c";
  ctx.fillText("Highscore: " + highscore, halfCanvasWidth - 140, 680);
}

export function createHighscoreList() {
  let highscoreListStorage = localStorage.getItem("highscoreList");
  const parsedList = JSON.parse(highscoreListStorage);
  const list = document.getElementById("highscore-list");
  parsedList.forEach((element, index) => {
    const date = new Date(element.time);
    const europeanFormat = date.toLocaleString("de-DE");
    const ul = document.createElement("ul");
    const liHighscore = document.createElement("li");
    const liDate = document.createElement("li");
    liDate.textContent = `${europeanFormat}`;
    liDate.style.paddingLeft = "16px";
    liDate.style.paddingBottom = "10px";
    liDate.style.fontSize = "26px";
    liHighscore.textContent = `• ${index + 1}. Score: ${element.highscore}`;
    ul.appendChild(liHighscore);
    ul.appendChild(liDate);
    console.log(element);
    //li.textContent = `Score: ${element.highscore} Time: ${europeanFormat}`;
    list.appendChild(ul);
  });
  toggleHighscoreList();
}

export function removeElements() {
  const list = document.getElementById("highscore-list");
  const listArray = Array.from(list.children);
  listArray.forEach((element) => {
    list.removeChild(element);
  });
}

export function toggleHighscoreList() {
  const highscoreListOL = document.getElementById("highscore-list");
  if (stateOfGame.isHighscoreScreen) {
    highscoreListOL.style.display = "block";
  } else {
    highscoreListOL.style.display = "none";
  }
}
