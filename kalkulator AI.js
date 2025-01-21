const display = document.getElementById('display');
let currentInput = "";
let operator = "";
let operand1 = null;

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === '=') {
            if (operand1 !== null && operator !== "" && currentInput !== "") {
                const operand2 = parseFloat(currentInput);
                let result = 0;

                switch (operator) {
                    case '+': result = operand1 + operand2; break;
                    case '-': result = operand1 - operand2; break;
                    case '*': result = operand1 * operand2; break;
                    case '/': result = operand1 / operand2; break;
                }

                display.textContent = result;
                currentInput = result.toString();
                operator = "";
                operand1 = null;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            operand1 = parseFloat(currentInput);
            operator = value;
            currentInput = "";
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});