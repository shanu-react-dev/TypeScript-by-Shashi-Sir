"use strict";
//! The void datatypes mainly represents the absence of any value
//! It is most used to indicate that we do not want to return anything from a function
//? In JavaScript, whenever we don't return anything from the function, the default value returned is undefined
function greet() {
    let a = 2 + 2;
}
let res = greet();
console.log(res);
