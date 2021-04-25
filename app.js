console.log("Script is working from a differsnt file");
var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");

function clickHandler(){
    console.log("Button is clicked");
    console.log("input",textInput.value)
}



btnTranslate.addEventListener("click",clickHandler);