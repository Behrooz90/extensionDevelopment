document.getElementById ("char").addEventListener ("click", initChar, false);

function initChar() {
  window.open('Character_B.png','','height=150,width=190,scrollbars=no,titlebar=no,menubar=no,channelmode=yes');
}

console.log('this is the forground')

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
