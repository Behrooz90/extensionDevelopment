/******************* READING AND WRITING JSON *******************/
// $.getJSON('data.json', function (data) {
//   (localStorage.setItem('extensionStorage', JSON.stringify(data))); 
// });
// console.log(JSON.parse(localStorage.getItem('extensionStorage')));





console.log('this is the forground')

document.getElementById ("char").addEventListener ("click", initChar, false);
document.getElementById ("focusTimer").addEventListener ("click", focusTimer, false);
document.getElementById ("shortBreakTimer").addEventListener ("click", shortTimer, false);
document.getElementById ("longBreakTimer").addEventListener ("click", longTimer, false);


function initChar() {
  window.open('images/girl.png','','height=150,width=175,scrollbars=no,titlebar=no,menubar=no,channelmode=yes');
}

// PRESENTATION on monday
// create the timer on page load instead
// or, make the frame invisible 


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


/****************** DROP DOWN *********************************/
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
/**************** SOUND ***************/
var currentData= JSON.parse(localStorage.getItem('extensionStorage'))
var sound= document.getElementById("tracks");
var newData= {
  audio: currentData.src, 
  restrictedSites: currentData.restrictedSites
};
sound.addEventListener("click", function() {
  sound.addEventListener("change", function() {
    if(sound.value == "chime")
    {
      newData.audio= new Audio("Royalty-Free-Kalimba-Sound-Effects-Sample-Pack/freetousesounds - Royalty Free Kalimba Sound Effects Sample Pack - 02 MUSCInst, Kalimba, G4-002.mp3").src;
      
    }else if(sound.value=="alarm") {
      newData.audio= new Audio("Royalty-Free-Kalimba-Sound-Effects-Sample-Pack/freetousesounds - Royalty Free Kalimba Sound Effects Sample Pack - 50 MUSCInst, Kalimba, E4-005.mp3").src;
    }
   
    console.log(newData.audio);
    (localStorage.setItem('extensionStorage', JSON.stringify(newData)))
   console.log(JSON.parse(localStorage.getItem('extensionStorage')))
});
});

/** NOTIFICATION **/
function notification() {
  console.log("Entered Notifications!")
  chrome.notifications.create('basicNotification',
    {
      type: 'basic',
      iconUrl: 'images/new-icon.png',
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
 audios= new Audio(JSON.parse(localStorage.getItem('extensionStorage')).audio);
 console.log(audios)

 var playPromise = audios.play();
  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
      setTimeout(() => {
        audios.pause();
        audios.currentTime = 0; 
     }, 300);
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }
 
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