let displayValue = "0";
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

function updateDisplay() {
	const display = document.getElementById("display");
	display.textContent = displayValue;
}

function clearDisplay() {
	displayValue = "0";
	firstNumber = null;
	operator = null;
	waitingForSecondNumber = false;
	updateDisplay();
}

function appendToDisplay(value) {
	if (displayValue === "0" || waitingForSecondNumber) {
		displayValue = value;
		waitingForSecondNumber = false;
	} else {
		displayValue += value;
	}
	updateDisplay();
}

function calculate() {
	if (waitingForSecondNumber) {
		return;
	}

	const secondNumber = parseFloat(displayValue);
	if (operator && firstNumber !== null) {
		switch (operator) {
			case "+":
				displayValue = (firstNumber + secondNumber).toString();
				break;
			case "-":
				displayValue = (firstNumber - secondNumber).toString();
				break;
			case "*":
				displayValue = (firstNumber * secondNumber).toString();
				break;
			case "/":
				if (secondNumber === 0) {
					displayValue = "Error: Cannot divide by 0";
				} else {
					displayValue = (firstNumber / secondNumber).toString();
				}
				break;
			default:
				displayValue = "Error: Invalid operator";
		}
	}

	// Reset operator and store the result as the first number
	operator = null;
	firstNumber = parseFloat(displayValue);
	waitingForSecondNumber = true;
	updateDisplay();
}

document.addEventListener("DOMContentLoaded", function () {
	updateDisplay();
});
