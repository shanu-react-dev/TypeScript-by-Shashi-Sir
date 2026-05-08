//! Functions with parameters
//? In JavaScript, parameters are place
(function (a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
})("Shanu", "Sundari", "Sudha");

//! return keyword
//? The return keyword to specify the value that function should produce as a funal result.
//! when it is required
//? when interpreter reaches a return statement
//! example
// function add(a, b) {
//   return a + b; // return statement produce final result
// }
// add(2, 2);

// function Demo(a) {
//   a;
//   let x = 10;
//   console.log(x);
//   return a; // final result
// }
//! What is return keyword in JS???
//! A return keyword in JS is a statemnet used in

//! Arrow function
//? It was introduced in ES6. It is a concised way to write anonymous function.
//? concise way to write JavaScript functions
//! syntax
//* () => {};

// Normal Function expression
// let x = function (a) {
//   return a;
// };

// arrow funciton way to write function
// let y = (a) => {
//   return a;
// };

function x(a) {
  return a;
}
// convert normal function into arrow function.

let a = () => "shanu";
console.log(a());

export {};
