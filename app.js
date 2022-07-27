let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#text-area");

btnTranslate.addEventListener("click", function clickEventHandler() {
  console.log("clicked");
  console.log(textInput.value);
});
