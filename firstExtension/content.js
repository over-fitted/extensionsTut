console.log("hello extensions!");

// makes all search result descriptions in google red
let paragraphs = document.getElementsByTagName("div");
for (const i of paragraphs){
    i.style['color'] = "red"
}