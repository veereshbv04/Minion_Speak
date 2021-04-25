console.log("Script is working from a differsnt file");
var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output-div");

var serverURL = "https://api.funtranslations.com/translate/minion.json" ;

function getserverURL(text){
    return serverURL + "?" + "text=" + text ;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with server,try again");
}

function clickHandler(){

    var inputText = textInput.value;

    fetch(getserverURL(inputText))
    .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)

}

btnTranslate.addEventListener("click",clickHandler);