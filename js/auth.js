document.getElementById("register-btn").addEventListener("click", displayRegister)

function displayRegister() {
        const canvasDiv = document.getElementsByClassName("canvas-container")[0]
        const inputContainer = document.getElementById("input-container")
        const registerButton = document.getElementById("register-btn")
        const froggerHeader = document.getElementById("frogger-header")
        const playButton = document.getElementById("play-btn")
        inputContainer.style.display = "none"
        playButton.style.display = "none"
}