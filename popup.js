console.log('this is the forground')

document.getElementById ("char").addEventListener ("click", initChar, false);
document.getElementById ("focusTimer").addEventListener ("click", focusTimer, false);
document.getElementById ("shortBreakTimer").addEventListener ("click", shortTimer, false);
document.getElementById ("longBreakTimer").addEventListener ("click", longTimer, false);


function initChar() {
  window.open('Character_B.png','','height=150,width=190,scrollbars=no,titlebar=no,menubar=no,channelmode=yes');
}

function focusTimer(){
  var sec = 45;
  var timer = setInterval(function(){
      document.getElementById('focusTime').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}

function shortTimer(){
  var sec = 10;
  var timer = setInterval(function(){
      document.getElementById('shortTime').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}

function longTimer(){
  var sec = 20;
  var timer = setInterval(function(){
      document.getElementById('longTime').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}

var acc = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      notification();
    }
  });
  
}


function notification(){
 chrome.notifications.create(
  {
    type: 'basic',
    iconUrl: 'images/sbIcon.png',
    title: 'Test Notification',
    message: 'Something has been clicked!!!!!!'
  }
   )
}






// var imageIds = ["images/girl"];

// let loadButton = document.createElement('button');
// loadButton.innerText = 'Load images';
// loadButton.addEventListener('click', handleLoadRequest);

// document.querySelector('body').append(loadButton);

// function handleLoadRequest() {
//   for (var id of imageIds) {
//     console.log(id +"this is ID");
//     var element = document.getElementById(id);
//     console.log(element +"this is element");
//     element.src = chrome.runtime.getURL(`${id}.png`);
//     // fetch(element.src)
    
//   }
//}