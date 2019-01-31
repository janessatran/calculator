var validNumbers = ['0','1','2','3','4','5','6','7','8','9'];
var validOperators = ['-', '*', '+', '=', '/', '%', 'Backspace'];

document.onkeypress = function(evt) {
    evt = evt || window.event;
	var charCode = evt.key || evt.which;
	var display = document.getElementById('calc-screen')
	console.log(charCode);
	if (!validNumbers.includes(charCode) && !validOperators.includes(charCode)){
		alert("Please enter numeric values or operators only.")
	}
	// update display
	else {
		display.textContent = (display.textContent) + charCode;

		// if (display.textContent.length == 0) {
		// 	display.textContent = charCode;
		// }
		// else {
		// }
	}
};

function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}


function multiply (a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operator(o, a, b){
	if(o == "+") add(a,b)
	else if(o == "-") subtract(a,b)
	else if(o == "*") multiply(a,b)
	else if(o == "/") divide(a,b)
}

function power(a, b) {
	return a**b;
}

function factorial(a) {
	if (a == 0) return 1;
	else {
		var f = a;
		for(i = a-1; i >= 1; i--) {
			f *= i;
		}
		return f;
	}

}
