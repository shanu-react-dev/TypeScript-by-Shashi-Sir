console.log("Start");

function greet(): never {
  while (true) {} //! execuytion will not get completed
  //! unreachable code
  let a = 2 + 2;
  console.log(a);
}

greet();
console.log("end");

//! never represents a value that can never be obtained
//! Mostly it is used in functions which cannot reach the return statement or the execution is stopped before reaching the return statement of the function.
//! type never is very useful for error handling functions.

function errorHandler(): never {
  throw new Error("The function is terminating");
}
