let min = 30
let sec = 00

let click_sound = new Audio("click.mp3")
let bell = new Audio("bell.mp3")

function template(){
  if (min < 10) {
    min = "0" + min
  }
  if (sec < 10) {
    sec = "0" + sec
  }
  document.getElementById('timer').innerHTML = min + ":" + sec
}

function start() {
  min = 29
  sec = 59
  click_sound.play()  

  if (min < 10) {
    min = "0" + min
  }
  if (sec < 10) {
    sec = "0" + sec
  }

  document.getElementById('timer').innerHTML = min + ":" + sec
  
  var minSet = setInterval(setMinutes, 60000)
  var secSet = setInterval(setSeconds, 1000)
  
  function setMinutes() {
    min = min - 1
    document.getElementById('timer').innerHTML = min + ":" + sec
  }
  
  function setSeconds() {
    sec = sec - 1
    if (sec < 10) {
      sec = "0" + sec
    }
  
    document.getElementById('timer').innerHTML = min + ":" + sec

    if (sec <= 0) { 
    if (min <= 0){
        clearInterval(minSet)
        clearInterval(secSet)
        bell.play()
      }
      sec = 60
    }
    }
  }