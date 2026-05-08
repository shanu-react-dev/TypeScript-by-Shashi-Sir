//! The difference between var let and const

//? var keyword
var a; //Only Declaration
console.log(a); //undefined
a = "Shanu"; // Only Initialization
console.log(a); //Shanu

var b = "Bharati"; //Declaration and initialization at the same time
console.log(b); //Bharati

var b = "";
("Redeclaration");

//? let Keyword
let c; // declaration
console.log(c);
c = "Chhavi"; // initialization
let d = "Devdutt Padikkal"; // Declaration and initialization at the same time
console.log(d);
//! Redeclaration is not possible here
// let d ❌
c = "Chanchal"; // Reinitialization

//? const keyword

console.log(username); //variable hoisting
var username = "Sheela";
//!hoisting is a JS mechanism where declarations will be moved top of the code or scope before its execution.

// console.log(user); // TDZ
//! TDZ stands for Temporal Dead Zone here Hoisting will not work throw uncaught reference error.
let user = "Sharanya";
// console.log(user1); //TDZ
const user1 = "Renuka";

//todo What is var let and const in JS or TS
