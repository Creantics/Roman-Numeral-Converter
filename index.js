const userInput = document.getElementById('userInput');
const paragraphValid = document.getElementById('paragraphValid');
let convertButton = document.getElementById('convertButton');

console.log(userInput.innerHTML);

function convert() {
    paragraphValid.innerHTML = userInput.value;
}
