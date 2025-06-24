"use strict";

// Question no. 1
// Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo";

console.log(carName);

// Question no.2
// On one single line, declare three variables with the following names and values:

// firstName = "John"
// lastName = "Doe"
// age = 35

// So What Will Be The 1st Variable Name, Then 2nd Variable Values &
// 3rd Variable Name And Values Both!

let firstName = "John"; // write variable name
let lastName = "Doe"; //write variable values
let age = 35; // write variable name and values both

console.log(firstName);
console.log(lastName);
console.log(age);

// Question no.3

/// Use the correct assignment operator that will
// result in x being 50 (same as x = x * y).
let x = 10;
let y = 5;
// x*= y; // what will be the value of x ?

console.log((x *= y));

// Question no.4

// Use comments to describe the correct data type of the following variables:

let length = 16; // data type ?
let LastName = "Johnson"; // data type ?

const X = {
  firstName: "John",
  lastName: "Doe",
}; // data type ?
console.log(typeof length);

console.log(typeof LastName);

console.log(typeof X);

// Question no.5

// Execute the function named myFunction.

function myFunction() {
  alert("Hello World!");
}

// call the function and see the output

function myFunction() {
  console.log("Hello World!");
}
myFunction();

// Question no.6

// 1. Create an object called person with name = John, age = 50, Then,
//    access the object to alert("John is 50").

const person = {
  theName: "John",
  age: 50,
};

// alert(person.theName + " is " + person.age);

console.log(person.theName + " is " + person.age);

// Question no.7

// 1. The <button> element should do something when someone clicks on it. Try to fix it!

// <button>Click me.</button>

function myFun() {
  alert(`Hello World!`);
}

// Question no.8

// 1. Alert the number of items in an array, using the correct Array property:

const cars = ["Volvo", "Jeep", "Mercedes"];

function carsNumber() {
  alert(cars.length);
}

// 2. Change the first item of Brand to "Ford".

const Brand = ["Volvo", "Jeep", "Mercedes"];

Brand[0] = "Ford";
console.log(Brand);

// Question no.9

// 1. Use the correct Math method to create a random number.

console.log(Math.random());

// 2. Use the correct Math method to return the largest number of 10 and 20.

console.log(Math.max(10, 20));

// 3. Use the correct Math method to get the square root of 9.

console.log(Math.sqrt(9));

// Question no.10

// 1. Choose the correct comparison operator to alert true, when x is greater than y.
// x = 10;
// y = 5;

// alert() // ?

let x1 = 10;
let y1 = 5;

function greatNum() {
  alert(x1 > y1);
}

// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let theAge = 17;

let checkAge = theAge < 18 ? "Too young" : "Old enough";

console.log(checkAge);


// First JS assignment done