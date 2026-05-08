//! We have four special datatype in typescript
//? 1. Any (No type checking)
//? 2. unknown (Manual Type checking)
//? 3. void (No return value)
//? 4. never (Datatype which will never have a value)

//! These are only available in TypeScript there are no special datatype in JavaScript.

//! any datatype
// It is a datatype that turns off type checking. We can assign any datatype as a value to either variable or function parameters or return value.
let value: any = 100;
value = "Hello";
value = false;
value = ["a", "b", "x"];

//! Such variables are ignored by typescript
//! Type checking is not done for such variables.
//! such variables will not cause any compile time error but they may give run time errors
//Typescript will ignore such a variable and it will not perform any typechecking for these variables.
let greeting: any = "Hello";
greeting = { name: "Hello Shanu" };
greeting.toUpperCase();

//! The any datatype was introduced so that we can gradually migrate from JavaScript to Typescript
//! Sometimes we are not sure about the data type of a variable in such situations we can use any as an escape or the datatype of the variable keeps changing.
//! But we should try to avoid any datatype as much as possible because it does not give any type safety.

