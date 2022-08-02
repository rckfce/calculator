let numbers = [];
let action = "";
const displayDefault = 0;
let numberCounter = 1;
let actionCounter = 0;
const disp = document.getElementById("display");

defaultDisplay();

function defaultDisplay() {
    disp.textContent = displayDefault;
}

function add(a, b) {
    return (parseFloat(a) * 10000 + parseFloat(b) * 10000) / 10000;
}

function divide(a, b) {
    return (parseFloat(a) * 10000) / (parseFloat(b) * 10000);
}

function subtract(a, b) {
    return (parseFloat(a) * 10000 - parseFloat(b) * 10000) / 10000;
}

function multiply(a, b) {
    return ((parseFloat(a) * 10000) * (parseFloat(b) * 10000)) / 100000000;
}

function zeroDivision(a, b) {
    if(a === "0" || b === "0") {
        alert("Cannot divide by 0!");
        clear();
        return true;
    }
    return false;
}

/* listening to keypress */
document.addEventListener("keyup", e => keycodes(e.key));


/* listening to backspace button*/
const toErase = document.getElementById("backspace");
toErase.addEventListener("click", backspace);

function backspace() {
    if(disp.textContent === "0") return;
    let newText = numbers[numberCounter - 1];
    numbers[numberCounter - 1] = "";
    displayPrint(newText.slice(0, -1), numberCounter);
}

/* listening to clear button */
const toClear = document.getElementById("clear");
toClear.addEventListener("click", clear);

function clear() {
    defaultDisplay();
    numbers = [];
    action = "";
    numberCounter = 1;
    actionCounter = 0;
    displayPrint(displayDefault, numberCounter);
}

function operate(operator, a, b) {
    switch(operator) {
        case "add":
            return add(a, b);
        case "divide":
            return divide(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
    }
}

/* listening to operator button */
const nextAction = document.querySelectorAll(".operator");
nextAction.forEach(each => each.addEventListener("click", getAction));

function getAction() {
    numberCounter++;
    actionCounter++;
    if (actionCounter > 1) {
        let result = operate(action, numbers[0], numbers[1]).toString();
        numberCounter = 2;
        numbers = [];
        displayPrint(result, 1);
    }
    if(this.id) action = this.id;
}

/* listening to equals button */
const equal = document.getElementById("operate");
equal.addEventListener("click", isEqual);

function isEqual() {
    if(numberCounter === 1) return;
    if(!zeroDivision(numbers[0], numbers[1])) {
        let result = operate(action, numbers[0], numbers[1]).toString();
        numberCounter = 1;
        actionCounter = 0;
        numbers = [];
        displayPrint(result, numberCounter);
    }  
}

/* listening to dot button */
const decimal = document.getElementById("dot");
decimal.addEventListener("click", dot) 

function dot() {
    if(actionCounter > 0 && numbers[numberCounter - 1] === undefined) {
        displayPrint("0.", numberCounter);
    }
    if(disp.textContent.indexOf(".") == -1) {
        if(disp.textContent[0] === "0") {
            displayPrint("0.", numberCounter);
        } else {
            displayPrint(".", numberCounter);
        }
    }
}

/* listening to number buttons */
const btn = document.querySelectorAll(".number");
btn.forEach(each => each.addEventListener("click", getNumber));

function getNumber(e) {
    let userInput = convert(this.id);
    displayPrint(userInput, numberCounter);
}

function displayPrint(value,operator) {
    disp.textContent = numbers[operator - 1];
    if (disp.textContent.length < 2 && disp.textContent === "0") {     /* clears default zero */
        disp.textContent = "";
    }
    if (disp.textContent.length < 9) {      /* only 9 digits long */
        if (value.length > 9) {
            disp.textContent = value.slice(0, 8) + "..";
        } else {
            disp.textContent += value;
        }
        numbers[operator - 1] = disp.textContent;
    }
}

/* seperates numbers from operations */

function seperator(input) {
    if (input.length > 1) {
        return true;
    }
    return false;
}

/* converts buttons pressed to numbers*/

function convert(input) {
    switch(input) {
        case "one":
            return 1;
        case "two":
            return 2;
        case "three":
            return 3;
        case "four":
            return 4;
        case "five":
            return 5;
        case "six":
            return 6;
        case "seven":
            return 7;
        case "eight":
            return 8;
        case "nine":
            return 9;
        case "zero":
            return 0;          
    }
}

/* keyboard support */
function keycodes(input) {
    switch(input) {
        case "Backspace":
            backspace();
            break;
        case "Escape":
            clear();
            break;
        case "Enter":
            isEqual();
            break;
        case "*":
            action = "multiply";
            getAction();
            break;
        case "-":
            action = "subtract";
            getAction();
            break;
        case "/":
            action = "divide";
            getAction();
            break;
        case "+":
            action = "add";
            getAction();
            break;
        case "1":
            displayPrint("1", numberCounter);
            break;
        case "2":
            displayPrint("2", numberCounter);
            break;
        case "3":
            displayPrint("3", numberCounter);
            break;
        case "4":
            displayPrint("4", numberCounter);
            break;
        case "5":
            displayPrint("5", numberCounter);
            break;
        case "6":
            displayPrint("6", numberCounter);
            break;
        case "7":
            displayPrint("7", numberCounter);
            break;
        case "8":
            displayPrint("8", numberCounter);
            break;
        case "9":
            displayPrint("9", numberCounter);
            break;
        case "0":
            displayPrint("0", numberCounter);
            break;
        case ".":
            dot();
            break;
    }
}