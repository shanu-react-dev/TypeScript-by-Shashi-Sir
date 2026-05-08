"use strict";
//! Functions
//? Function is a block of reusable code written to perform a specific task.
//? A function in JS is a reusable block of code designed to perform a specific task. Instead of writing the same logic multiple times, You can wrap it in a function and call or invoke it whenever it needed.
//! In JS we have builtin functions
//? alert()
//? prompt()
//? confirm()
//! How to define function
//? we need to use function keyword followed by function name and parantheses followed by block of codes.
function functionName() {
    //statements
    //Code here
}
//! Function Declaration / Naming Function
//? A named function in JavaScript is a function that i sdefined with a specific identifier during its creation.
function demo() {
    console.log("Hello Function");
}
demo();
//! Anonymous Function
//? An anonymous function in JS a function that does not have a name or identifier. Unlike a standard function declaration anonymous function are typically created as part of an expression and are used for one timeor short term task.
//! Function expression / variable declaration function
//? A function expression (sometimer called a variable declaration function) defines a function by assigning it to a variable or using it within an expression. These function itself is only availableafter the execution reaches that line. Syntax: defined as part of a variable assignment.
// Hoisitng: Hoisting can't be done with function expression
let x = function () {
    console.log("Function expression or variable declared function");
};
x();
//! What is Function Hoisting
//? Function hoisting is a unique behavior in JS where the interpreter appears to move function declarations to the top of their containing scope (either the global scope)
//! IIFE Functions
//? IIFE stands for Immediate Invoked Function Expression is a JS function that runs as soon as it is defined. It is common design pattern used to create a private scope and prevent variables from leaking into the global name space.
//? We can create an IIFE function using two parantheses one for a block of function and another for invoking.
(function () {
    console.log("hello Shanu");
})();
(() => console.log("Hii I am from arrow iife"))();
