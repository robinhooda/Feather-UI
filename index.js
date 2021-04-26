let themeIcon = document.querySelector("#iconToggle");
let body = document.getElementsByTagName("body")[0];

function changeThemeHandler() {

  // .getAttribute("src") is used instead of .src in order to get relative path instead of absolute path
  let themeIconPath = themeIcon.getAttribute("src");

  if (themeIconPath === "images/lightMode.svg") {
    body.classList.remove("darkMode");
    themeIcon.src = "images/darkMode.svg";
  } else {
    body.classList.add("darkMode");
    themeIcon.src = "images/lightMode.svg";
  }
}

themeIcon.addEventListener("click", changeThemeHandler);
