console.log('this is the forground')

document.getElementById ("char").addEventListener ("click", initChar, false);
document.getElementById ("focusTimer").addEventListener ("click", focusTimer, false);
document.getElementById ("shortBreakTimer").addEventListener ("click", shortTimer, false);
document.getElementById ("longBreakTimer").addEventListener ("click", longTimer, false);


function initChar() {
  window.open('Character_B.png','','height=150,width=190,scrollbars=no,titlebar=no,menubar=no,channelmode=yes');
}

function focusTimer(){
  var sec = 30;
  var timer = setInterval(function(){
      document.getElementById('focusTime').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}

function shortTimer(){
  var sec = 30;
  var timer = setInterval(function(){
      document.getElementById('shortTime').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}

function longTimer(){
  var sec = 30;
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
    }
  });
}
