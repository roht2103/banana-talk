var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

function clickHandler() {
  outputDiv.innerText = txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler);
