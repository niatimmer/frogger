document.getElementById("start-btn").addEventListener("click", checkUsername)

function startGame() {
    const canvasDiv = document.getElementsByClassName("canvas-container")[0]
    const inputContainer = document.getElementById("input-container")
    const registerButton = document.getElementById("register-btn")
    const headerContainer = document.getElementById("header-container")
    canvasDiv.style.display = "block"
    inputContainer.style.display = "none"
    registerButton.style.display = "none"
    headerContainer.style.scale = 0.5
}

function checkUsername() {
    const username = document.getElementById("name-input").value
    const startBtn = document.getElementById("start-btn")
    if (username.length > 2 && username.length < 20) {
        startBtn.style.transition = "all 800ms";
        startBtn.style.boxShadow = "-1px -1px 5px #4c8a35, 1px 1px 5px #4c7a4e";
        startBtn.style.scale = 2
        startBtn.style.backgroundColor = "#355727";
        startBtn.style.opacity = "0.85"
        setTimeout(startGame, 600)
    } else {
        document.getElementById("error-message").style.opacity = "1"
    }
}