let githubIcon =  document.querySelector("#githubIcon");
let themeIcon = document.querySelector("#themeToggle");
let body = document.getElementsByTagName("body")[0];
let hamburger = document.querySelector("#hamburger-icon");
let cancel = document.querySelector("#cancel-icon");
let aside = document.getElementsByTagName("aside")[0];
function changeThemeHandler() {

  // .getAttribute("src") is used instead of .src in order to get relative path instead of absolute path
  let themeIconPath = themeIcon.getAttribute("src");
  if (themeIconPath === "images/lightMode.svg") {
    body.classList.remove("darkMode");
    githubIcon.src = "icons/github-logo--dark.svg";
    themeIcon.src = "images/darkMode.svg";
  } else {
    body.classList.add("darkMode");
    githubIcon.src = "icons/github-logo--light.svg";
    themeIcon.src = "images/lightMode.svg";
  }
}
function showMenu(){
  hamburger.style.display="none";
  cancel.style.display="block";
  aside.classList.add("aside-show");
  console.log(aside)
}

function hideMenu(){
  hamburger.style.display="block";
  cancel.style.display="none";
  aside.classList.remove("aside-show");
}
themeIcon.addEventListener("click", changeThemeHandler);
hamburger.addEventListener("click", showMenu)
cancel.addEventListener("click", hideMenu)
