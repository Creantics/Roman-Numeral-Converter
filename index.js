const userInput = document.getElementById('userInput');
const userInputString = document.getElementById('userInput').toString();
const paragraphValid = document.getElementById('paragraphValid');
const validLess = document.getElementById('resultSquareLess');
const validMore = document.getElementById('resultSquareMore');
const validEmpty = document.getElementById('resultSquareNotValid');
const valid = document.getElementById('resultSquareValid');

let convertButton = document.getElementById('convertButton');
let numberToConvert = "";

console.log(userInput.innerHTML);

function convertLess() {
    numberToConvert = userInput.value;
    if (numberToConvert <= 0 && numberToConvert) {
        validLess.classList.remove('hidden');
        validMore.classList.add('hidden');
        validEmpty.classList.add('hidden');
        valid.classList.add('hidden');
    } 
}

function convertMore() {
    numberToConvert = userInput.value;
    if (numberToConvert > 3999) {
        validMore.classList.remove('hidden');
        validLess.classList.add('hidden');
        validEmpty.classList.add('hidden');
        valid.classList.add('hidden');
    } 
}

function convertEmpty() {
    if (userInput.value === '') {
        validEmpty.classList.remove('hidden');
        validLess.classList.add('hidden');
        validMore.classList.add('hidden');
        valid.classList.add('hidden');
    }
}

function convertValid() {
    if (numberToConvert > 0 && numberToConvert <= 3999) {
        valid.classList.remove('hidden');
        validLess.classList.add('hidden');
        validMore.classList.add('hidden');
        validEmpty.classList.add('hidden');
        paragraphValid.innerHTML = numberToConvert;
    }
}