console.log('this is the forground')

document.getElementById ("char").addEventListener ("click", initChar, false);
document.getElementById ("focusTimer").addEventListener ("click", focusTimer, false);
document.getElementById ("shortBreakTimer").addEventListener ("click", shortTimer, false);
document.getElementById ("longBreakTimer").addEventListener ("click", longTimer, false);


/******************  CHARACTER *********************************/
function initChar() {
  window.open('character.html','','height=202,width=240,scrollbars=no,titlebar=no,menubar=no,channelmode=yes');
}


/******************  POMODORO TIMER *********************************/
function focusTimer(){
  var sec = 8;
  var timer = setInterval(function(){
      document.getElementById('focusTime').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
        clearInterval(timer);
        notification();
        chrome.notifications.onButtonClicked.addListener(yesButton);
      }
  }, 1000);
}

function shortTimer(){
  var sec = 2;
  var timer = setInterval(function(){
      document.getElementById('shortTime').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
        clearInterval(timer);
        notification();
      }
  }, 1000);
}

function longTimer(){
  var sec = 5;
  var timer = setInterval(function(){
      document.getElementById('longTime').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
          notification();
      }
  }, 1000);
}


/******************  NOTIFICATION & DROP DOWN *********************************/
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


// function notification(){
//   messages [
//     'Generic Message',

//   ]


function notification() {
  chrome.notifications.create('basicNotification',
    {
      type: 'basic',
      iconUrl: 'images/sbIcon.png',
      title: 'Test Notification',
      message: 'Message',
      priority: 2,
      buttons: [
        {
          title: 'Yes',
          //iconUrl: 'images/sbIconpng'
        },
        {
          title: 'No'
        }
      ]

    }
   ) 
   //the following section is cut the audio short
 audio.play(); 
 setTimeout(() => {
   audio.pause();
   audio.currentTime = 0; 
}, 300);
}

function yesButton(){
  shortTimer();
  console.log('yes button worked');
}





/*  THIS IS THE SECTION FOR THE POP IMAGE 
var imageIds = ["images/girl"];
Making the button. When clciked it should show the image 
let loadButton = document.createElement('button');
loadButton.innerText = 'Load images';
loadButton.addEventListener('click', handleLoadRequest);
document.querySelector('body').append(loadButton);
function handleLoadRequest() {
  for (var id of imageIds) {
    console.log(id +"this is ID");
    var element = document.getElementById(id);
    console.log(element +"this is element");
  element.src = chrome.runtime.getURL(`${id}.png`);
  console.log(element.src);
  chrome.sendMessage(element.src)
   var imgURL = chrome.runtime.getURL("images/girl.png");
   document.getElementById("images/girl").src = imgURL;
    
   }
}
*/ 