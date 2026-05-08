"use strict";
// let a = 100;
// a = "hello";
//! tsc inference.ts --noEmitOnError:-> this command helps not to create JS file if typescript is having any type error
let a = 100; //! type annotation
let b = "Shanu";
b = "Shivani";
let isActive = false;
isActive = true;
// according to typescript we have done something like this isActive:boolean = false
//! Type inference with array
let myarr = ["Hello", "hi"]; //string[] --> inferred datatype
myarr.push("19");
console.log(myarr);
let arr1 = [1, "a"];
console.log(arr1); // arr1: (string | number)[] --> inferred type of this array
arr1.push("Hii");
arr1.push(19);
// arr1.push(true); //! not possible
arr1[2] = "Kaleeswari";
arr1[3] = "Kalee";
// arr1[4] = true;
let arr2 = [];
arr2[0] = true;
arr2[1] = "shanu";
arr2[2] = undefined;
