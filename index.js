const navTriangle = document.getElementById('navStyle')
const navBar = document.getElementById('letters')
const navWelcome = document.getElementById('navWelcome')
const navAbout = document.getElementById('navAbout')
const navSection = document.getElementById('navSection')
const header = document.getElementById('header')
const about = document.getElementById('AboutContent')
const accroche = document.getElementById('headerAccroche')
const headerTitle = document.getElementById('headerTitle')
const topImg = document.getElementById('top-image')
const centerImg = document.getElementById('center-image')
const bottomImg = document.getElementById('bottom-image')
const centerAnnim = document.getElementById('centerAnnim')
const section = document.getElementById('sectionToHover')
const paragrapheTop = document.getElementById('paraTop')
const paragrapheCenter = document.getElementById('paraCenter')
const paragrapheBottom = document.getElementById('paraBottom')
const pathImagescountainer = document.getElementById('pathSection')
const allScreenMoov = document.getElementById('toMoov')
const aboutSection = document.getElementById('aboutSection')
const portfolioSection = document.getElementById('portfolioSection')
const contactSection = document.getElementById('contactSection')

var isAboutOppen = false
var isSectionDeployed = false

centerAnnim.style.top = section.offsetTop + 100 + 'px'
centerAnnim.style.left = section.offsetLeft + 'px'

const aboutOppenClose = (Aboutbutton) => {
  if (isAboutOppen == true) {
    isAboutOppen = false
    about.style.marginLeft = '-25vw'
    Aboutbutton.innerHTML = '&#8631;'
    getScrollSection()
  } else if (isAboutOppen == false) {
    isAboutOppen = true
    about.style.marginLeft = '0'
    Aboutbutton.innerHTML = '&#8630;'
  }
}

// make the texte apear letter by letter
function hideTexte(element) {
  var text = []
  var isEllementInside = false
  var parentWidth
  var length
  function SetContainer(element) {
    parentWidth = element.parentElement.offsetWidth
  }

  SetContainer(element)
  text = [element.innerText]
  for (var i = 0; i < element.innerHTML.length; i++) {
    text[i] = element.innerHTML[i]
    console.log(element.innerHTML) /*
    console.log(element.innerText)*/
  }
  length = element.innerText.length
  console.log(length)
  element.innerHTML = ''

  showTexte(element, parentWidth, text)
}

function showTexte(element, parentWidth, text) {
  element.parentElement.style.width = parentWidth + 'px'
  var i = 0 //  set your counter to 1
  var isTag = false
  var curentTag
  console.log(text)
  function myLoop() {
    var TagIs = ''
    var ClassIs = ''
    //  create a loop function
    setTimeout(function () {
      if (text[i] == '<') {
        if (text[i + 1] == '/') {
          while (text[i] != '>') {
            i++
          }
        } else {
          i++
          isTag = true

          while (text[i] != '>' && text[i] != ' ') {
            TagIs = TagIs + text[i]

            i++
            console.log(TagIs)
          }
          curentTag = document.createElement(TagIs)

          if (text[i] == ' ') {
            while (text[i] != '=') {
              i++
            }
            i += 3
            while (text[i] != '>') {
              ClassIs = ClassIs + text[i - 1]
              i++
            }
            console.log(ClassIs)
            console.log('hey')
            curentTag.classList.add(ClassIs)
          }
        }
        element.appendChild(curentTag)
        i++
      }
      if (text[i] == '\n') {
        console.log('hey')
        i += 2
      }
      if (isTag == true) {
        if (text[i] == ' ') {
          if (text[i + 1] != undefined) {
            curentTag.innerText = curentTag.innerText + ' ' + text[i + 1]
            i += 2
          }
        }

        curentTag.innerText = curentTag.innerText + text[i]
      } else {
        element.innerHTML = element.innerHTML + text[i]
      }
      i++ //  increment the counter
      if (i < text.length) {
        //  if the counter < 10, call the loop function
        myLoop() //  ..  again which will trigger another
      } //  ..  setTimeout()
    }, 50)
  }

  element.parentElement.style.width = parentWidth
  myLoop()
}
addEventListener('loadstart', hideTexte(accroche))

addEventListener('loadstart', hideTexte(headerTitle))

//make the sections oppen

section.onclick = () => {
  if (isSectionDeployed == false) {
    centerImg.style.animationName = 'centerImageAnim'
    centerAnnim.style.display = 'none'
  } else if (isSectionDeployed) {
    centerImg.style.animationName = 'centerImageAnimOut'
    bottomImg.style.animationName = 'hoverSectionsOutBottom'
    topImg.style.animationName = 'hoverSectionsOutTop'
    paragrapheCenter.style.color = 'transparent'
    paragrapheBottom.style.color = 'transparent'
    paragrapheTop.style.color = 'transparent'
    paragrapheTop.style.animationName = ''
    paragrapheBottom.style.animationName = ''
    paragrapheCenter.style.animationName = ''
  }
}
centerImg.onanimationstart = () => {
  if (isSectionDeployed == false) {
    bottomImg.style.animationName = 'hoverSections'
    topImg.style.animationName = 'hoverSections'
  }
}

centerImg.onanimationend = () => {
  if (isSectionDeployed == false) {
    isSectionDeployed = true
    centerImg.style.rotate = '270.4deg'
    topImg.style.transform = 'translate(0)'
    bottomImg.style.transform = 'translate(0)'
    topImg.style.opacity = '1'
    bottomImg.style.opacity = '1'
    paragrapheTop.style.color = 'white'
    paragrapheTop.style.animationName = 'textApear'
    paragrapheBottom.style.color = 'white'
    paragrapheBottom.style.animationName = 'textApear'
    paragrapheCenter.style.color = 'white'
    paragrapheCenter.style.animationName = 'textApear'
  } else if (isSectionDeployed == true) {
    isSectionDeployed = false
    centerImg.style.rotate = '0deg'
    topImg.style.transform = 'translate(100px, 0)'
    bottomImg.style.transform = 'translate(0, -100px)'
    topImg.style.opacity = '0'
    bottomImg.style.opacity = '0'
  }
}

//bring to selected section on clique
function createImageElement(cilckedParent) {
  var parentPositions = cilckedParent.getBoundingClientRect()
  let createElement = document.createElement('img')
  createElement.src = 'photos/line-horizonrally.png'
  createElement.style.height = centerImg.offsetHeight + 'px'

  var transform = window.getComputedStyle(section).transform
  var matrixArray = transform.replace('matrix(', '').split(',')
  createElement.style.scale = matrixArray[0]
  createElement.style.position = 'absolute'
  createElement.style.top = parentPositions.top + 'px'
  createElement.style.left = parentPositions.left + 100 + 'px'

  pathImagescountainer.appendChild(createElement)
  return createElement
}
var whichSection = 0
function repeatElement(elementRepeat) {
  pathImagescountainer.innerHTML = ''
  let numToReapeat = window.innerWidth / 100

  let images = new Array(Math.floor(numToReapeat))
  for (let i = 0; i < numToReapeat; i++) {
    console.log(i)
    images[i] = elementRepeat
    elementRepeat.classList.add('path-img-' + i)
    elementRepeat = createImageElement(elementRepeat)
  }

  elementRepeat.onanimationstart = () => {
    section.style.animationName = 'baleyOppener'
    allScreenMoov.style.animationName = 'baleyScreen'
    console.log('animation start')
    centerAnnim.style.display = 'none'
    if (whichSection == 1) {
      aboutSection.style.animationName = 'sectionsArriv'
      aboutSection.style.display = 'inline-block'
      contactSection.style.animationName = 'sectionsGo'
      portfolioSection.style.animationName = 'sectionsGo'
    }
    if (whichSection == 2) {
      portfolioSection.style.animationName = 'sectionsArriv'
      portfolioSection.style.display = 'inline-block'
      aboutSection.style.animationName = 'sectionsGo'
      contactSection.style.animationName = 'sectionsGo'
    }

    if (whichSection == 3) {
      contactSection.style.animationName = 'sectionsArriv'
      contactSection.style.display = 'inline-block'
      aboutSection.style.animationName = 'sectionsGo'
      portfolioSection.style.animationName = 'sectionsGo'
    }
  }

  elementRepeat.onanimationend = () => {
    images.forEach((image) => {
      image.style.left = '0px'
      image.style.animationName = 'baleyScreenPath2'
    })
    setTimeout(() => {
      images.forEach((image) => {
        image.style.top = '10vh'
      })
    }, 3000)
    images[1].style.display = 'none'
    allScreenMoov.style.marginLeft = '-100vw'
    section.style.animationName = ''
    if (whichSection == 1) {
      aboutSection.style.left = '0'
      portfolioSection.style.left = '100vw'
      contactSection.style.left = '100vw'

      portfolioSection.display = 'none'
      contactSection.display = 'none'
    }
    if (whichSection == 2) {
      aboutSection.style.left = '100vw'
      portfolioSection.style.left = '0'
      contactSection.style.left = '100vw'

      contactSection.display = 'none'
      aboutSection.display = 'none'
    }
    if (whichSection == 3) {
      aboutSection.style.left = '100vw'
      portfolioSection.style.left = '100vw'
      contactSection.style.left = '0'

      aboutSection.display = 'none'
      portfolioSection.display = 'none'
    }
  }
}
function ClickedSection(num, elementToRepeat) {
  whichSection = num
  console.log(num)
  repeatElement(elementToRepeat)
}
