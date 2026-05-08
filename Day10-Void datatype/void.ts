//! The void datatypes mainly represents the absence of any value
//! It is most used to indicate that we do not want to return anything from a function

//? In JavaScript, whenever we don't return anything from the function, the default value returned is undefined
function greet(): void {
  let a = 2 + 2;
}

let res = greet();
console.log(res);

//! void datatype is all about the intention, it means if the developer does not want to return anything from a function he can use the void datatype to inform the other developers.
//! But from the compiled JavaScript the default behavior of a function cannot be changed.
