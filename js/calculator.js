function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	var sum = 0;
	for(i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum;
}

function multiply (arr) {
	var m = arr[0];
	for(i = 1; i < arr.length; i++) {
		m *= arr[i];
	}
	return m;
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
