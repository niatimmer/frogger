document.getElementById("start-btn").addEventListener("click", startGame)
function startGame() {
    const canvasDiv = document.getElementsByClassName("canvas-container")[0]
    console.log(canvasDiv)
    canvasDiv.style.display = "block"
    const username = document.getElementById("name-input").value
    console.log(username)
}
console.log("tests")