 
console.log('background running');

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        console.log(current_tab_info.url)
        console.log((JSON.parse(localStorage.getItem('extensionStorage')).restrictedSites))
       if((JSON.parse(localStorage.getItem('extensionStorage')).restrictedSites).includes(current_tab_info.url)){
           console.log("MATCH FOUND!")
            alert("This site has been restricted!");
       }

    });
});

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(/^https:\/\/www\/google/.test(current_tab_info.url)) {
            chrome.tabs.executeScript(null, {file: '/popup.js'}, () => console.log('injected'))
        }
    })
});





