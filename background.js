 
console.log('background running');

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(/^https:\/\/www\/google/.test(current_tab_info.url)) {
            chrome.tabs.executeScript(null, {file: '/popup.js'}, () => console.log('injected'))
        }
    })
});

var audio= new Audio("Royalty-Free-Kalimba-Sound-Effects-Sample-Pack/freetousesounds - Royalty Free Kalimba Sound Effects Sample Pack - 04 MUSCInst, Kalimba, G4-004.mp3")
var sound= document.getElementById("tracks");
sound.addEventListener("click", function() {
  sound.addEventListener("change", function() {
    if(sound.value == "chime")
    {
      audio= new Audio ("Royalty-Free-Kalimba-Sound-Effects-Sample-Pack/freetousesounds - Royalty Free Kalimba Sound Effects Sample Pack - 09 MUSCInst, Kalimba, G4-009.mp3");
      
    }else if(sound.value=="alarm") {
      audio= new Audio("Royalty-Free-Kalimba-Sound-Effects-Sample-Pack/freetousesounds - Royalty Free Kalimba Sound Effects Sample Pack - 50 MUSCInst, Kalimba, E4-005.mp3");
    }
});
});



