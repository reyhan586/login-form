const array = [
  { username: "reyhane", password: 6565 },
  { username: "mostafa", password: 140144 },
  { username: "behzad", password: 3424 },
  ];
  
  const loginButton = document.getElementById("login");
  
  loginButton.addEventListener("click", login);
  
  function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  let found = false;
  array.forEach((user) => {
  if (user.username === username && user.password === parseInt(password)) {
  found = true;
  }
  });
  if (found) {
  alert("Welcome! You have successfully logged in");
  } else {
  alert("Invalid username or password. Please try again");
  }}