var displayNumbers = document.getElementById('calc-screen');
var displayOperation = document.getElementById('calc-operation');
var validNumbers = ['0','1','2','3','4','5','6','7','8','9'];
var validOperators = ['-', '*', '+', '/'];
var validActions = ['=', 'Backspace', 'Enter', 'Shift', 'Meta', 'r'];
var validSigns = ['%', '.'];
var lastValNum = false;
var storedValues = [];
var storedOperands = [];
var storedSigns = [];
var operationString = '';
var currValue = '';


document.addEventListener('keydown', function(event) {
	event = event || window.event;
	var charCode = event.key || event.which;
	if (event.repeat) return;
	else{

	

		console.log(charCode);
		if (!validNumbers.includes(charCode) && !validOperators.includes(charCode) && !validActions.includes(charCode) && !validSigns.includes(charCode)){
			alert("Please enter numeric values or operators only.")
		}
		// update display
		else {
			var newVal = charCode;
			if(!validOperators.includes(charCode)) {
				if (validNumbers.includes(charCode) || validSigns.includes(charCode)) {
					currValue += charCode;
				}
				newVal = currValue;
				console.log('new value!')
				console.log(newVal);
				lastValNum = true;
			}
			if (!validActions.includes(charCode)){
				operationString += (charCode);
			}
			storeValues(newVal); 


			if(charCode == 'Backspace') {
				operationString = operationString[0,operationString.length-1];
				if(lastValNum) {
					storedValues.pop(); 
					currValue = storedValues[storedValues.length-1];
				}
				else {
					storedOperands.pop();
				}
				console.log(operationString);

				operationString = operationString.slice(0, -1)
				console.log(operationString);

			}

			updateMainScreen();
			updateOpScreen();
			console.log(storedValues);
			console.log(storedOperands);
			if((charCode == '=' || charCode == 'Enter' ) || storedValues.length > 1 && storedOperands.length > 0) {
				let a = parseFloat(storedValues[0]);
				let b = parseFloat(storedValues[1]);
				let o = storedOperands[0]; 
				operate(o, a, b);
			}

		}
	}
});

function storeValues(value) {
	console.log('storing value...');
	console.log(value);
	if (validNumbers.includes(value) || validSigns.includes(value)) {
		console.log('pushing value...')
		storedValues.push(value);
	}
	else if (validOperators.includes(value)) {
		storedOperands.push(value);
	}
}	

function updateValues(result) {
	storedValues.pop();
	storedValues.pop();
	storedValues.push(result);
	storedOperands.pop();
	// currValue = '';
	// operationString = '';
	// updateOpScreen();
}

function updateMainScreen() {
	displayNumbers.textContent = currValue;
}

function updateOpScreen() {
	displayOperation.textContent = operationString;

}

function add (a, b) {
	currValue =  a + b;
	if(toString(currValue).length>5) currValue = parseFloat(currValue.toFixed(5));
	updateValues(currValue);
	updateMainScreen();
}

function subtract (a, b) {
	currValue =  a - b;
	if(toString(currValue).length>5) currValue = parseFloat(currValue.toFixed(5));
	updateValues(currValue);
	updateMainScreen();
}
function multiply (a, b) {
	currValue =  a * b;
	if(toString(currValue).length>5) currValue = parseFloat(currValue.toFixed(5));
	updateValues(currValue);
	updateMainScreen();
}
function divide(a, b) {
	currValue =  a / b;
	if(toString(currValue).length>5) currValue = parseFloat(currValue.toFixed(5));
	updateValues(currValue);
	updateMainScreen();
}

function operate(o, a, b){
	console.log('operating...')
	if(o == "+") add(a,b)
	else if(o == "-") subtract(a,b)
	else if(o == "*") multiply(a,b)
	else if(o == "/") divide(a,b)
}

