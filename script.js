let numbers = [0];
let getAction = "";
const displayDefault = 0;
let numberCounter = 1;
let actionCounter = 0;
const disp = document.getElementById("display");

onDisplay();
getInput();


function onDisplay() {
    disp.textContent = displayDefault;
}

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function backspace() {

}

function clear() {
    onDisplay();
    numbers = [0];
    getAction = "";
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

function getInput() {
    const btn = document.querySelectorAll(".button");
    btn.forEach ((each) => {
        each.addEventListener("click", event => {
            let userInput = convert(each.id);
            if (userInput === "dot" || userInput === "backspace") {
                return;
            }
            if (userInput === "clear") {              /* clears screen */
                clear();
                return;
            }
            if (!seperator(userInput)) {          /*  checks - number or action */
                displayPrint(userInput, numberCounter);
            } else {
                if (userInput !== "operate") {
                    getAction = userInput;
                }
                disp.textContent = displayDefault;
                actionCounter++;
                if (numberCounter < 2) {
                    numberCounter++;
                } else if (userInput === "operate") {
                    numberCounter = 1;
                    let result = operate(getAction, numbers[0], numbers[1]);
                    disp.textContent = result;
                    numbers[0] = result;
                    numbers[1] = 0;
                } else {
                    numberCounter = 2;
                    let result = operate(getAction, numbers[0], numbers[1]);
                    disp.textContent = result;
                    numbers[0] = result;
                }
            }
            console.log(numbers);
        });
    });
}

function displayPrint(value,operator) {
    if (disp.textContent.length < 2 && disp.textContent === "0") {     /* clears default zero */
        disp.textContent = "";
    }
    if (disp.textContent.length < 9) {
        if (actionCounter >= 2) {
            disp.textContent = "";
        }
        disp.textContent += value;
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
/* converts buttons pressed to inputs */

function convert(input) {
    switch(input) {
        case "clear":
            return "clear";
        case "divide":
            return "divide";
        case "subtract":
            return "subtract";
        case "multiply":
            return "multiply";
        case "backspace":
            return "backspace";
        case "add":
            return "add";
        case "operate":
            return "operate";
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
        case "dot":
            return "dot";           
    }
}