var display = document.getElementById("calc-screen");
var point = document.getElementById("point");
var numbers = [];
var operators = [];
var newNumber = true;


let numButtons = document.querySelectorAll(".number");
numButtons.forEach(function(n) {
	n.addEventListener("click", updateMainScreen);

});

let opButtons = document.querySelectorAll(".operator");
opButtons.forEach(function(operator) {
  operator.addEventListener("click", addNumber);
});

point.addEventListener("click", disablePoint);
	function disablePoint() {
		point.disabled = true;
}

function operate(a, b, operator) {
  if(operator === "+") return a + b;
  else if(operator === "-") return a - b;
  else if(operator === "*") return a * b;
  else return a / b;
}

function disableOperators(boolean) {
	for(let i = 0; i < opButtons.length; i++) {
		opButtons[i].disabled = boolean;
	  }
  }
  
function updateMainScreen() {
	if(newNumber === false) {
		display.textContent = "";
		newNumber = true;
	}
	display.textContent += this.value;
	disableOperators(false);
}

function newSession() {
	if(display.textContent === "") {
		disableOperators(true);
	}
}

newSession();

function addNumber() {   
	numbers.push(parseFloat(display.textContent));
	operators.push(this.value);
	newNumber = false;
	disableOperators(true);
	if(numbers.length == 2) {
		let a = numbers[0];
		let b = numbers[1];
		let result = operate(a, b, operators[operators.length-2]);
		numbers.length = 0;
		numbers.push(result);
		console.log(numbers[0]);
		display.textContent = numbers[0];
		console.log(display.textContent);
	}
	// result.toFixed(5);
	point.disabled = false;
}

document.getElementById("equal").addEventListener("click", getResult);
	function getResult() {
		addNumber();
		disableOperators(false);
		operators = [];
		numbers = [];
}

document.getElementById("ce").addEventListener("click", clearDisplay);
	function clearDisplay() {
		numbers = [];
		operators = [];
		display.textContent = '';
		newSession();
}

document.getElementById("del").addEventListener("click", clear);
	function clear() {
		display.textContent = display.textContent.slice(0, -1);
}

document.getElementById("neg-pos").addEventListener("click", changeSign);
	function changeSign() {
		display.textContent = parseFloat(display.textContent) * -1;
}

document.addEventListener("keypress", function(e) {
  function clickKey(id){
		console.log('click!')
		console.log(id);
		e.preventDefault();
		document.getElementById(id).click();
  }
 switch(e.key){
   case "1": clickKey("one");
     break;
   case "2": clickKey("two");
     break;
   case "3": clickKey("three");
     break;
   case "4": clickKey("four");
     break;
   case "5": clickKey("five");
     break;
   case "6": clickKey("six");
     break;
   case "7": clickKey("seven");
     break;
   case "8": clickKey("eight");
     break;
   case "9": clickKey("nine");
     break;
   case "0": clickKey("zero");
     break;
   case ".": clickKey("point");
     break;
   case "Delete": clickKey("ce");
     break;
   case "Backspace": clickKey("del");
     break;
   case "Enter": clickKey("equal");
     break;
   case "+": clickKey("add");
     break;
   case "-": clickKey("subtract");
     break;
   case "*": clickKey("multiply");
     break;
   case "/": clickKey("divide");
	 break;
   case "s": clickKey("neg-pos");
   	 break;
 }

});