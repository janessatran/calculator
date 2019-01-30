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
