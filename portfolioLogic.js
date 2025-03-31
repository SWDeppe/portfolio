const backBtn = document.getElementById('backBtn')
var initialHTML = ''
var clickedCompParent = ''
var titleComp = ''
function oppenPortfolio(clickedComponent, elementNum) {
  clickedComponent.parentElement.parentElement.children[0].style.display =
    'block'

  clickedComponent.parentElement.parentElement.children[1].innerText =
    clickedComponent.children[0].innerText // give to title clicked element title
  clickedCompParent = clickedComponent.parentElement
  initialHTML = clickedComponent.parentElement.innerHTML
  titleComp = clickedComponent.parentElement.parentElement.children[1]
  if (elementNum == 1) {
    clickedComponent.parentElement.innerHTML = `<div class="chowArt"><p class="desciption">Online pong game written in C++ with the SFML librery. For personal expience(be award that the game may not be downloadable cause of windows security. Meanwhile you could, the server is schurely not running at the time you are reading this. And need 2 players)<br><a href="https://swdeppe.github.io/pongWebInstaller/">download link</a></p><img src="photos/pongIllustrate.png" class="illustrate" /></div>`
  } else if (elementNum == 2) {
    clickedComponent.parentElement.innerHTML = `<div class="chowArt"><p class="desciption">Class project for my 12th year in the hight scool, les Catalins. The objective was to make, in 25h, a dryer for closes in an sky station every one had it own part to do mine was to make so that the temperature autimatically comes to 40°. I made it on arduino uno so you can have acces to my thinkercad project </p><a href="https://www.tinkercad.com/things/78UvvguVpA2-stunning-kup">try it yourself on thinkercad</a></div>`
  } else if (elementNum == 3) {
    clickedComponent.parentElement.innerHTML = `<div class="chowArt"><p class="desciption">Class project for my 12th year in the hight scool, les Catalins. The objective was to make, in 40h, a automatical shopping cart where you can scan and pay for you products, my part of the project was to initialise the screen and the QrScaner. </p>
    <a
      href="https://scontent-dus1-1.cdninstagram.com/v/t42.3356-2/487944241_28972405912406344_8271455230158842644_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=bFJZXf5717oQ7kNvgEEIfSg&_nc_oc=AdmFSZueW9sWy106IL0H8XhaRdcPhMSCj4f3hNpbX7aVawhKpcxq2FGbtrIJcqSCvLZAlUDUmoLk4yCKYU4SB74C&_nc_zt=28&_nc_ht=scontent-dus1-1.cdninstagram.com&_nc_gid=FfK1LQaPvrzAoE2YUTLMfw&oh=03_Q7cD1wGGCQbxBdjl3eTgvDZAOXXSer0VNutI0dOp1Yrz8g7SJA&oe=67EC4A89&dl=1"
    >
      download video of a test of the project</a
    ></div>`
  }
}
function backBtnClick() {
  clickedCompParent.innerHTML = initialHTML
  backBtn.style.display = 'none'
  titleComp.innerText = 'Portfolio'
}
