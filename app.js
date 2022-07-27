let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#text-area");
let outputDiv = document.querySelector("#output");

btnTranslate.addEventListener("click", function clickEventHandler() {
  outputDiv.innerText = "fdsddsfds " + textInput.value;
});
