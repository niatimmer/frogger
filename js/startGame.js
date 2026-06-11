document.getElementById("start-btn").addEventListener("click", checkUsername)

function startGame() {
    const canvasDiv = document.getElementsByClassName("canvas-container")[0]
    const inputContainer = document.getElementById("input-container")
    canvasDiv.style.display = "block"
    inputContainer.style.display = "none"
    
}

function checkUsername() {
    const username = document.getElementById("name-input").value
    if (username.length > 2 && username.length < 20) {
        startGame()
    } else {
        document.getElementById("name-input").value = "Username must be 3-20 chars"
    }
}