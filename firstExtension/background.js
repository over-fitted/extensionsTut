// view console in inspect views in chrome://extensions
console.log("background on");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg)
} 