let numbers = [];
let getOperator = ""


getInput();

function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function operate(operator, a, b) {
    switch(operator) {
        case add:
            add(a, b);
            break;
        case divide:
            divide(a, b);
            break;
        case subtract:
            subtract(a, b);
            break;
        case multiply:
            multiply(a, b);
            break;
    }
}

function getInput() {
    const btn = document.querySelectorAll(".button");
    btn.forEach ((each) => {
        each.addEventListener("click", event => {
            let temp = convert(each.id);
            console.log(temp);
        });
    });
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