console.log('this is the forground')

document.getElementById ("char").addEventListener ("click", initChar, false);
document.getElementById ("focusTimer").addEventListener ("click", focusTimer, false);
document.getElementById ("shortBreakTimer").addEventListener ("click", shortTimer, false);
document.getElementById ("longBreakTimer").addEventListener ("click", longTimer, false);


function initChar() {
  window.open('images/Character_B.png','','height=150,width=190,scrollbars=no,titlebar=no,menubar=no,channelmode=yes');
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



//******************** Picking a sound that will be passed to notification******************/
//first default
var audio= new Audio("Royalty-Free-Kalimba-Sound-Effects-Sample-Pack/freetousesounds - Royalty Free Kalimba Sound Effects Sample Pack - 04 MUSCInst, Kalimba, G4-004.mp3")
var sound= document.getElementById("tracks");
sound.addEventListener("click", function() {
  console.log("/"+sound.querySelectorAll("select")[0]);
  sound.addEventListener("change", function() {
    if(sound.value == "chime")
    {
      audio= new Audio ("Royalty-Free-Kalimba-Sound-Effects-Sample-Pack/freetousesounds - Royalty Free Kalimba Sound Effects Sample Pack - 09 MUSCInst, Kalimba, G4-009.mp3");
    }else if(sound.value=="alarm") {
      audio= new Audio("Royalty-Free-Kalimba-Sound-Effects-Sample-Pack/freetousesounds - Royalty Free Kalimba Sound Effects Sample Pack - 50 MUSCInst, Kalimba, E4-005.mp3");
    }
});
});


/******************  NOTIFICATION *********************************/
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
 ) //the following section is to cut the audio short
  audio.play(); 
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0; 
}, 300);
}




// var imageIds = ["images/girl"];
// Making the button. When clciked it should show the image 
let loadButton = document.createElement('button');
loadButton.innerText = 'Load images';
loadButton.addEventListener('click', handleLoadRequest);
document.querySelector('body').append(loadButton);

 function handleLoadRequest() {
  // for (var id of imageIds) {
  //   console.log(id +"this is ID");
  //   var element = document.getElementById(id);
  //   console.log(element +"this is element");
  // element.src = chrome.runtime.getURL(`${id}.png`);
  // console.log(element.src);
  // chrome.sendMessage(element.src)
    var imgURL = chrome.runtime.getURL("images/girl.png");
    document.getElementById("images/girl").src = imgURL;

    
   //}
}