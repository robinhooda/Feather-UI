let githubIcon = document.querySelector('#githubIcon')
let themeIcon = document.querySelector('#themeToggle')
let body = document.getElementsByTagName('body')[0]
let hamburger = document.querySelector('#hamburger-icon')
let cancel = document.querySelector('#cancel-icon')
let aside = document.getElementsByTagName('aside')[0]

const setdarkTheme = () => {
  body.classList.add('darkMode')
  githubIcon.src = '../icons/github-logo--light.svg'
  themeIcon.src = '../images/lightMode.svg'
}

const setLightTheme = () => {
  body.classList.remove('darkMode')
  githubIcon.src = '../icons/github-logo--dark.svg'
  themeIcon.src = '../images/darkMode.svg'
}

const getThemeFromLocalStorage = () => {
  const userTheme = localStorage.getItem('theme')
  userTheme === 'dark' && setdarkTheme()
}

const changeThemeHandler = () => {
  // .getAttribute("src") is used instead of .src in order to get relative path instead of absolute path
  let themeIconPath = themeIcon.getAttribute('src')
  if (themeIconPath === '../images/lightMode.svg') {
    setLightTheme()
    localStorage.setItem('theme', 'light')
  } else {
    setdarkTheme()
    localStorage.setItem('theme', 'dark')
  }
}

const showMenu = () => {
  // hamburger.classList.toggle("hide")
  hamburger.style.display = 'none'
  cancel.style.display = 'block'
  aside.classList.add('aside-show')
}

const hideMenu = () => {
  hamburger.style.display = 'block'
  cancel.style.display = 'none'
  aside.classList.remove('aside-show')
  console.log(hamburger, cancel)
}

themeIcon.addEventListener('click', changeThemeHandler)

// handling errors for home page because hamburger and cancel icon not present in it
hamburger !== null && hamburger.addEventListener('click', showMenu)
cancel !== null && cancel.addEventListener('click', hideMenu)

getThemeFromLocalStorage()
