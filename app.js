// console.log("Hello World! with Shanu sir"); //Alternate of SOP Which print something in console
// console.log(2 + 2); // This is client side JavaScript means inside browser.
// //! learn Console method such as dir

// //! How to decalre variable in JavaScript or TypeScript
// /* This isMultiline comment */
// //! All JavaScript are valid in TypeScript
// //? There are three wayts to create variables
// //? keyword identifier assignment datatype
// var username = "Shanu"; //string data type
// let username1 = "Kalees";
// let age = 21; //number data type
// const isAvailable = true; //Boolean data type
// console.log(username);
// console.log(username1);
// console.log(age);
// console.log(isAvailable);

// username = "Shanu"; // It leads to create a bug in JavaScript You should avoid it.
// console.log(username); //What is access identifier
var x = "Shanu"; //Global scope or global variable
console.log(global.x);
for (var i = 0; i < 10; i++) {
  console.log(x);
  var username = "Shanu"; //global variable global scope
}
// console.log(username); //Shanu
if (true) {
  console.log(x);
  var age = 23; //global variable global scope
}
// console.log(age);
console.log("MY name is", username, "My age is ", age);
function test() {
  console.log(x);
  var company = "Pasmina"; //Local Variable or function scope
}

console.log(window); // global scopes resides in window object

// When it is local scope or local variablein JavaScript even var keyword.
function mytest() {
  var myCompany = "Coode Auraa"; // This line is local variable or local scope only available inside function
  console.log(myCompany); // Here it is working because variable is with function block {}
}

mytest();
console.log("I work for " + myCompany); //myCompany is not defined

// If var keyword is inside a if block that is global scope
// If var keyword is inside a for block that is also global scope
// If var keyword inside a function block that is local scope or function scope

