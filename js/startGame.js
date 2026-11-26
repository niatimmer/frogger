//document.getElementById("start-btn").addEventListener("click", checkUsername)

export function startGame(user) {
    const canvasDiv = document.getElementsByClassName("canvas-container")[0]
    const loginForm = document.getElementById("login-form")
    const registerForm = document.getElementById("register-form")
    const headerContainer = document.getElementById("header-container")
    const headerText = document.getElementById("frogger-header")
    const headerFrog = document.getElementById("frogger-icon")
    const usernameDisplay = document.getElementById("username-display")
    canvasDiv.style.display = "block"
    loginForm.style.display = "none"
    registerForm.style.display = "none"
    headerText.style.fontSize = "4rem"
    headerFrog.style.width = "65px"
    headerFrog.style.right = "-35px"
    usernameDisplay.innerHTML = user.username
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

