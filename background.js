
//The button clicked and action listener will work only when borwserAction has only browser icon as a
console.log('background running');
chrome.browserAction.onClicked.addListener(buttonClicked)
//document.getElementsByClassName("buttons").addListener.onClicked(buttonClicked)

function buttonClicked(){
    console.log("icon clicked!");
}