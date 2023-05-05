// A variable is a container for storing data
// A variable behaves as if it was the value that it contains
/*In JavaScript, there are two types of scopes for variables: global scope and local scope. Global variables are defined outside of a function, while local variables are defined inside a function. A local variable is only accessible within the function in which it is defined, while a global variable can be accessed from anywhere in the program.

In summary, variables are an essential part of JavaScript programming as they allow you to store and manipulate data in a flexible and dynamic way. */
// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)
/*
let firstname = "Bro"; //string
let age = 21; // number
let student = true; //boolean

console.log("Hello", firstname);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstname;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student; */

/* Arithmetic expression is a combination of... (00:16:32)
   operands (values, variables, etc.)
   operators (+ - * / %)
   that can be evaluated to a value
   ex. y = x + 5; 

let students = 21;
// students = students + 5;  //Arithmetic operators
// students = students - 8;
// students = students * 4;0
// students = students / 2;
// let extrastudents = students % 2;
// console.log(extrastudents);

// students += 3; // Assignment Operators
// students -= 6;
// students *= 3;
// students /= 4;
// students %= 2;
// console.log(students);

// operator precedence 
//    1. parenthesis ()
//    2. exponents
//    3. multiplication & division
//    4. addition & subtraction 

let result = 1 + 3 * (5 + 2);
console.log(result); */

// How to accept user input   (00:21:14)

// EASY WAY with a window prompt
// let username = window.prompt("What's your name:");
// console.log(username);

// DIFFICULT WAY HTML textbox
/*let username;
document.getElementById("mybutton").onclick = function () {
  username = document.getElementById("myinput").value;
  console.log(username);
  document.getElementById("mytext").innerHTML = "Hello " + username;
}; */

// Type Conversion = change datatype of value to another (00:25:41)
// (strings, numbers, booleans)
/*
let age = window.prompt("How old are you?");
age = Number(age);
age += 1;
console.log(typeof age);
console.log("Happy Birthday! You are", age, "years old");
*/
/*
let x;
let y;
let z;

x = Number("10");
y = String("111.01");
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/

// const = a variable that can't be changed  (00:30:11)
/* const pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of circle");
radius = Number(radius);

// pi = 343.4;
circumference = 2 * pi * radius;
console.log(circumference); */

// Math (00:33:13)
/*
Math.round(x); - This function rounds a number to the nearest integer. If the decimal part of the number is less than 0.5, the function rounds down, and if it is greater than or equal to 0.5, the function rounds up. For example, Math.round(3.14159) would return 3, and Math.round(3.6) would return 4.

Math.floor(x); - This function rounds a number down to the nearest integer. For example, Math.floor(3.14159) would return 3.

Math.ceil(x); - This function rounds a number up to the nearest integer. For example, Math.ceil(3.14159) would return 4.

Math.pow(x, 2); - This function returns the value of x raised to the power of 2. For example, Math.pow(3, 2) would return 9.

Math.sqrt(x); - This function returns the square root of x. For example, Math.sqrt(9) would return 3.

Math.abs(x); - This function returns the absolute value of x (i.e., the distance of x from zero, regardless of whether x is positive or negative). For example, Math.abs(-9) would return 9.

let x = 3.5;
let y = 8;
let z = 9;

// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x, 2);
// x = Math.sqrt(x);
// x = Math.abs(x);

maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);

console.log(maximum);
console.log(minimum);
console.log(x); */

// (00:36:52) hypotenuse calc practice program
/*let a;
let b;
let c;

a = window.prompt("Enter Side A:");
a = Number(a);

b = window.prompt("Enter Side b:");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log(c); 

document.getElementById("submit12").onclick = function () {
  a = document.getElementById("mysidea").value;
  a = Number(a);

  b = document.getElementById("mysideb").value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  console.log(c);
  document.getElementById("mysidec").innerHTML = "The Side C Answer is: " + c;
}; */

// (00:43:12) counter program #️⃣
/* let counter;
counter = 0;

document.getElementById("decreasebtn").onclick = function () {
  counter -= 1;
  document.getElementById("counternum").innerHTML = counter;
};

document.getElementById("resetbtn").onclick = function () {
  counter = 0;
  document.getElementById("counternum").innerHTML = counter;
};

document.getElementById("increasebtn").onclick = function () {
  counter += 1;
  document.getElementById("counternum").innerHTML = counter;
}; */

// (00:46:52) random number generator 🎲
/* let x = Math.floor(Math.random() * 6) + 1;
let y = Math.floor(Math.random() * 6) + 1;
let z = Math.floor(Math.random() * 6) + 1;
console.log(x);
console.log(y);
console.log(z); */
let x;
let y;
let z;

document.getElementById("rolldice").onclick = function () {
  x = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice1").innerHTML = x;

  y = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice2").innerHTML = y;

  z = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice3").innerHTML = z;
};
