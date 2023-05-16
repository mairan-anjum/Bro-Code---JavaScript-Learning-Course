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
/* let x;
let y;
let z;

document.getElementById("rolldice").onclick = function () {
  x = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice1").innerHTML = x;

  y = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice2").innerHTML = y;

  z = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice3").innerHTML = z;
}; */

// (00:50:53) useful string property and methods 🧵
/*
let username = "  Bro Code  ";
let phonenumber = "123-445-2245";

// console.log(username.length);
// console.log(username.charAt(0));
// console.log(username.indexOf("o"));
// console.log(username.lastIndexOf("o"));
// console.log(username.trim());
// console.log(username.toUpperCase());
console.log(username.toLowerCase());

console.log(phonenumber.replaceAll("-", "+")); */

// (00:55:13) string slicing ✂️
// slice() extracts a section of a String
// and returns it as a new String,
// without modifying the original string
/*
let fullName = "Peter Johan";
let firstName;
let lastName;

// console.log(fullName.slice(0, 3)); //first name
// console.log(fullName.slice(4)); // last name

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName); */
/*
// (00:59:08) method chaining ⛓️
let userName = "bro";
let letter = userName.charAt(1).toUpperCase();
console.log(letter); */

// (01:01:03) if statements ❔
// If statement = a basic form of decision making
// if a condition is true, then do something
// if not, then don't do it!
/*
let age = -6;

if (age >= 65) {
  console.log("You are a senior citizen");
} else if (age < 0) {
  console.log("You have not been born yet");
} else if (age >= 18) {
  console.log("You are adult!");
} else {
  console.log("You are child!");
} */
/*
let online = false;

if (online) {
  console.log("You are online!");
} else {
  console.log("You are offline!");
} */

// (01:05:24) checked property ✔️
/*
document.getElementById("mebutton").onclick = function () {
  const checkbox = document.getElementById("subs1");
  const visabox = document.getElementById("visa");
  const masterbox = document.getElementById("masters");
  const paybox = document.getElementById("paypal");
  if (checkbox.checked) {
    console.log("You are Subscribed!");
  } else {
    console.log("You are not Subscribed!");
  }

  if (visabox.checked) {
    console.log("You are paying with a Visa!");
  } else if (masterbox.checked) {
    console.log("You are paying with a MasterCard!");
  } else if (paybox.checked) {
    console.log("You are paying with a Paypal!");
  } else {
    console.log("You must select a payment type!");
  }
}; */

// (01:12:39) switches 🔀
// switch = statement that examines a value
// for a match against many case clauses.
// more efficient that many "else if" statement
/*let grade = "F";
if (grade == "A") {
  console.log("You did great!");
} else if (grade == "B") {
  console.log("You did good!");
} else if (grade == "C") {
  console.log("You did okay!");
} else if (grade == "D") {
  console.log("You passed...barely!");
} else if (grade == "F") {
  console.log("You FAILED!");
} else {
  console.log(grade, "is not a letter grade!");
}

let grade = "F";

 switch (grade) {
  case "A":
    console.log("You did great!");
    break;
  case "B":
    console.log("You did good!");
    break;
  case "C":
    console.log("You did okay!");
    break;
  case "D":
    console.log("You passed...barely!");
    break;
  case "F":
    console.log("YOU FAILED!");
    break;
  default:
    console.log(grade, "is not a letter grade!");
    break;
} 
let grade = 76;
switch (true) {
  case grade >= 90:
    console.log("You did great!");
    break;
  case grade >= 80:
    console.log("You did good!");
    break;
  case grade >= 70:
    console.log("You did okay!");
    break;
  case grade >= 60:
    console.log("You passed...barely!");
    break;
  case grade < 60:
    console.log("YOU FAILED!");
    break;
  default:
    console.log(grade, "is not a letter grade!");
    break;
} */

// (01:16:26) AND OR logical operators && ||
// Give us ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)
/* let temp = 1;
let sunny = false;
if (temp > 0 && temp <= 30 && sunny) {
  console.log("Weather is Good!");
} else {
  console.log("Weather is not Good!");
}

let temp1 = 31;

if (temp1 <= 0 || temp1 >= 30) {
  console.log("Weather is not Good!");
} else {
  console.log("Weather is Good!");
} */

//(01:20:29) NOT logical operator ❕
// NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false   false -> true
/* let temp = 2;
let sunny = false;

if (!(temp > 0)) {
  console.log("It's cold outside!");
} else {
  console.log("It's warm outside!");
}

if (!sunny) {
  console.log("It's cloudy outside!");
} else {
  console.log("It's sunny outside!");
} */

// (01:23:26) while loops 🔁
// While loop = repeat some code
// while some condition is true
//    potentially infinite
/*let username = "";
while (username == "" || username == null) {
  username = window.prompt("Enter user name!");
}
console.log("Hello", username); */

// (01:26:14) do while loops 🔂
// do while loop = do something,
// then check the condition,
// repeat if conition is true
/*let username;
do {
  username = window.prompt("Enter user name!");
} while (username == "");
console.log("Hello", username); */

// (01:28:36) for loops 🔃
// for loop = repeat some code a
// certain amount of times
/*for (let i = 10; i > 0; i -= 1) {
  console.log(i);
}
console.log("Hello it for testing"); */

// (01:32:05) break and continue statements 💔
/*for (j = 1; j <= 20; j += 1) {
  if (j == 13) {
    // continue;
    break;
  }
  console.log(j);
} */

// (01:33:34) nested loops ➿
// nested loop = a loop inside of another loop
/*let symbol = window.prompt("Enter a sysmbol to use!");
let row = window.prompt("Enter # of rows!");
let column = window.prompt("Enter # of columns!");
for (let i = 1; i <= row; i += 1) {
  for (let j = 1; j <= column; j += 1) {
    document.getElementById("test1").innerHTML += symbol;
  }
  document.getElementById("test1").innerHTML += "<br>";
} */

// (01:38:05) functions ☎️
// function = Define code once, and use it many times
// To perform some code, call the function name
/*startprogram();
function startprogram() {
  let age = 12;
  let username = "Pakora";
  happybirthday(age, username);
}

function happybirthday(age, username) {
  console.log("Happy Birthday to You!");
  console.log("Happy Birthday to You!");
  console.log("Happy Birthday dear", username);
  console.log("Happy Birthday to You!");
  console.log("You are", age, "years old!");
} */

// (01:42:43) return statement 🔙
// return = returns a value back to the plane
// where you invoked a function

/*let area;
let width;
let height;

width = window.prompt("Enter Width:");
height = window.prompt("Enter Height:");

area = getarea(width, height);
console.log("The are is:", area);
function getarea(width, height) {
  return width * height;
} */

// (01:45:36) ternary operator ❔
// ternary operator = Shortcut for an 'if/else statement'
// takes 3 operands
// 1. a condition with ?
// 2. expression if true :
// 3. expression if false
// condition ? exprIfTrue : exprIfFalse
/*let adult = checkage(17);
console.log(adult);
function checkage(age) {
  return age >= 18 ? true : false;
}

checkwinner(false);
function checkwinner(win) {
  win ? console.log("You are win") : console.log("You are loss");
} */

// (01:48:58) var vs let 🥊
// variable scope = where a variable is accessible
// let = variable are limited to block scope {}
// var = variable are limited to a function(){}

// global variable = is declared outside any function
// (if global, var will change browser's window properties)
/*nextlevel();
function nextlevel() {
  for (var i = 1; i <= 3; i += 1) {}
  console.log(i);
} */

// #28 (01:53:25) template literals 💬
// template literals = delimited with (`)
// instead of double or single quotes
// allow embedded variable and expression
/*
let username = "Bro";
let item = 3;
let total = 75;

// console.log("Hello", username);
// console.log("You have", item, "items in your cart");
// console.log("Your total cost is $", total);

// console.log(`Hello ${username}`);
// console.log(`You have ${item} items in your cart`);
// console.log(`Your total cost is $${total}`);

let text = `Hello ${username}<br>
You have ${item} items in your cart<br>
Your total cost is $${total}`;

// console.log(text);
document.getElementById("test12").innerHTML = text;*/

// #29 (01:57:47) format currency 💲
// toLocaleString() = returns a string with a language
// sensitive representation of this number

// number.toLocaleString(locale, {options});

// 'locale' =specify that language (undefined = default set in browser)
// 'options' = object with formating options
/*
let mynum = 100;

// mynum = mynum.toLocaleString("en-US"); //US English
// mynum = mynum.toLocaleString("hi-IN"); //hindi
// mynum = mynum.toLocaleString("de-DE"); //Standard German

// mynum = mynum.toLocaleString("en-US", { style: "currency", currency: "USD" });
// mynum = mynum.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
// mynum = mynum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

// mynum = mynum.toLocaleString(undefined, { style: "percent" });

// mynum = mynum.toLocaleString(undefined, { style: "unit", unit: "celsius" });
// mynum = mynum.toLocaleString(undefined, { style: "unit", unit: "fahrenheit" });
// mynum = mynum.toLocaleString(undefined, { style: "unit", unit: "gram" });

console.log(mynum); */

// #30 (02:02:47) number guessing game 🔢
/*
const answer = Math.floor(Math.random() * 10 + 1);
let guess = 0;
document.getElementById("guessbtn").onclick = function () {
  let guess = document.getElementById("guessing").value;
  if (guess == answer) {
    alert(`${answer} is the #. IT TOOK YOU ${guess} guesses`);
  } else if (guess < answer) {
    alert("Too small");
  } else {
    alert("Too Large");
  }
}; */

// #31 (02:06:55) temperature conversion program 🌡️
/*
document.getElementById("calculate").onclick = function () {
  let temp;
  if (document.getElementById("ctemp").checked) {
    temp = document.getElementById("entertemp").value;
    temp = Number(temp);
    temp = celtemp(temp);
    document.getElementById("results").innerHTML = temp + "°C";
  } else if (document.getElementById("ftemp").checked) {
    temp = document.getElementById("entertemp").value;
    temp = Number(temp);
    temp = fahrtemp(temp);
    document.getElementById("results").innerHTML = temp + "°F";
  } else {
    document.getElementById("results").innerHTML = "Plase select any unit";
  }
};

function celtemp(temp) {
  return ((temp - 32) * 5) / 9;
}

function fahrtemp(temp) {
  return (temp * 9) / 5 + 32;
} */

// #32 (02:15:49) arrays 🍎

let fruits = ["apple", "orange", "banana"];

fruits.push("mango"); // add an element in last
fruits.pop(); // remove last element
fruits.unshift("mango"); // add an element in first
fruits.shift(); // remove first element

let length = fruits.length; // lenght of element
let index = fruits.indexOf("orange"); //
console.log(index);
