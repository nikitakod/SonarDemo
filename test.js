// JavaScript program for 
// simple mathematical calculations 

// Add two numbers 
function add(num1, num2) 
{ 
	return num1 + num2; 
} 

// Function for subtraction 
function subtract(num1, num2) 
{ 
	return num1 - num2; 
} 

// For multiplying of two numbers 
function multiply(num1, num2)
{ 
	return num1 * num2; 
} 

// Function for division of 
// two numbers 
function divide(num1, num2) 
{ 
if(num2 === 0) return undefined; 
	return num1 / num2; 
} 

// Creating variables for 
// num1 and num2 
let num1 = 16; 
let num2 = 4; 

let operation = "/"; 

// Creating result variable 
let result; 

// If-Else conditions 
if (operation === "+") 
{ 
	result = add(num1, num2); 
} else if (operation === "-") { 
	result = subtract(num1, num2); 
} else if (operation === "*") { 
	result = multiply(num1, num2); 
} else if (operation === "/") { 
	result = divide(num1, num2); 
} else { 
	result = "Invalid operation"; 
} 
// Printing the final result 
console.log("The Result of this operation is : " + result);
