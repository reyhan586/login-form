
const loginButton = document.getElementById("login");
const modal = document.querySelectorAll('.modal-box');
loginButton.addEventListener("click", login);
modal.innerHtml = "Your username must have at least 12 characters and your password must have at least 8 characters.";



function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username.length <12 || password.length <8){
    alert('Invalid username or password. Please try again')
  }
  else{
    alert('Welcome! You have successfully logged in')
  }
  }

const close = document.querySelector(".close");
close.addEventListener("click" , ()=>{ document.querySelector(".modal").style.display= "none";});