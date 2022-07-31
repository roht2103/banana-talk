var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslatedURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something went wrong with server , Please try again after some time");
}

function clickHandler() {
  // outputDiv.innerText = txtInput.value;

  var inputText = txtInput.value;

  fetch(getTranslatedURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

// outputDiv.innerText = fetch(inputText);

btnTranslate.addEventListener("click", clickHandler);
