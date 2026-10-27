document
  .getElementById("register-btn")
  .addEventListener("click", displayRegister);
document.getElementById("register-form").style.display = "none";

document
  .getElementById("link-to-login")
  .addEventListener("click", displayLogin);

const loginForm = document.getElementById("login-form")
loginForm.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log("Hello World!");
  const formData = new FormData(loginForm)
  console.log([...formData]);
  if (!localStorage.getItem("userList")) console.log("Liste existiert nicht")
  login(formData)
})

const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(registerForm);
  console.log([...formData]);
  if (!localStorage.getItem("userList")) initializeUserList();
  addUser(formData);
});

function displayRegister() {
  const loginForm = document.getElementById("login-form");
  loginForm.style.display = "none";
  const registerForm = document.getElementById("register-form");
  registerForm.style.display = "flex";
}

function displayLogin() {
  const loginForm = document.getElementById("login-form");
  loginForm.style.display = "flex";
  const registerForm = document.getElementById("register-form");
  registerForm.style.display = "none";
}

function getUserList() {
  const storedList = localStorage.getItem("userList");
  if (storedList) {
    const parsedList = JSON.parse(storedList);
    return parsedList;
  } else return "Keine Liste vorhanden";
}

function setUserList(userList) {
  localStorage.setItem("userList", JSON.stringify(userList));
}

function initializeUserList() {
  let userList = [];
  localStorage.setItem("userList", JSON.stringify(userList));
}

function getId() {
  const userList = getUserList();
  const maxId = Math.max(...userList.map((user) => user.id));
  return maxId + 1;
}

function usernameExists(username, userList) {
  const usernames = userList.map((user) => user.username);
  return usernames.includes(username);
}

function addUser(formData) {
  const userList = getUserList();
  const formInput = [...formData];
  const username = formInput[0][1];
  const password = formInput[1][1];

  if (usernameExists(username, userList)) {
    console.log("Username already exists!");
  } else {
    const id = getId();
    const user = {
      id: id,
      username: username,
      password: password,
    };
    userList.push(user);
    setUserList(userList);
  }
}

function login(formData) {
  const userList = getUserList()
  const formInput = [...formData];

  const username = formInput[0][1];
  const password = formInput[1][1];

  if (!usernameExists(username, userList)) {
    console.log("Username doesnt exist!");
  }
}