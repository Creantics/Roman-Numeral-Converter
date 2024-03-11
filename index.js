const userInput = document.getElementById('userInput');
const paragraphValid = document.getElementById('paragraphValid');
const validLess = document.getElementById('resultSquareLess');
const validMore = document.getElementById('resultSquareMore');
const validEmpty = document.getElementById('resultSquareNotValid');

let convertButton = document.getElementById('convertButton');
let numberToConvert = "";

console.log(userInput.innerHTML);

function convertLess() {
    numberToConvert = userInput.value;
    if (numberToConvert <= 0 && numberToConvert) {
        validLess.classList.remove('hidden');
        validMore.classList.add('hidden');
    } 
}

function convertMore() {
    numberToConvert = userInput.value;
    if (numberToConvert > 3999) {
        validMore.classList.remove('hidden');
        validLess.classList.add('hidden');
    } 
}
