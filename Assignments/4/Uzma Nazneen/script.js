var expression = ''; // Variable to store the entered expression

// JavaScript function to append numbers to the expression
function appendNumber(number) {
    expression += number;
    updateDisplay();
}

function appendDecimal() {
    // Check if the last character is not already a decimal point
    if (!expression.endsWith('.')) {
        expression += '.';
        updateDisplay();
    }
}

// JavaScript function to append operators to the expression
function appendOperator(operator) {
    expression += operator;
    updateDisplay();
}

// JavaScript function to calculate and display the result
function calculateResult() {
    // Use the eval function to calculate the result
    var result = eval(expression);
    // Concatenate the expression and result
    expression = expression + ' = ' + result;
    // Display the updated expression with the result
    updateDisplay();
    // Reset the expression for further calculations
    expression = '';
}


function backspace() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function clearspace() {
    expression = '';
    updateDisplay();
}

 // JavaScript function to update the display with the current expression
 function updateDisplay() {
    document.getElementById("display").innerHTML = expression;
}
