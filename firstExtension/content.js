// can view console in browser
console.log("hello extensions!");

chrome.runtime.onMessage.addListener(gotMessage);

// listener function for messages from background.js
function gotMessage(message, sender, sendResponse){
    console.log(message.txt);
    if (message.txt === "hello") {
        // makes all search result descriptions in google red
        let paragraphs = document.getElementsByTagName("div");
        for (const i of paragraphs){
            i.style['color'] = "red"
        }
    }
}