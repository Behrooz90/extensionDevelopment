document.getElementById("char").addEventListener("click", initChar, false);

function initChar() {
  window.open('Character_B.png','','height=150,width=190,scrollbars=no,titlebar=no,menubar=no,channelmode=yes');
}

console.log('this is the forground')




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