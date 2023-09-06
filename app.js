let currentInput = '';
let currentOperator = '';
let firstOperand = null;

function clickedNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function clickedOperator(operator) {
    if (currentInput !== '') {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
            currentInput = '';
        } else {
            calculate();
        }
        currentOperator = operator;
    }
}

function calculate() {
    if (currentInput !== '') {
        const secondOperand = parseFloat(currentInput);
        let result;
        switch (currentOperator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
        }
        updateDisplay(result);
        currentInput = '';
        firstOperand = result;
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    firstOperand = null;
    updateDisplay(currentInput);
}

function updateDisplay(content) {
    const display = document.getElementById('display');
    display.textContent = content;
}