"use strict";
//! Type Assertions
// In type assertions you can create two ways one is agular braces way
Object.defineProperty(exports, "__esModule", { value: true });
// syntax <type> value
//syntax value as type
// let anyValue: any = "I am any value";
// Example  I need string value
//Type Assertions
// let strValue = anyValue;
// console.log(strValue);
// let strValue = <string>anyValue;
// let numVal = <number>anyValue;
//string
// console.log("Data type of ", typeof strValue); // string
// console.log(strValue.length);
//number
// console.log("Datatype of", typeof numVal); //string because of assertion is compile time only.
// console.log(numVal.toFixed(1));
// let any: any;
//  I want to convert any into string
// let str = (any = "Shanu"); //Implicit way
// console.log(str);
// let str = <string>any;
// str = "Shanu";
// console.log(str);
// I wanna change any into number with help of type assertiions
// let num = <number>any;
// num = 100;
// console.log(num);
// I wanna change any into number with help of type assertiions
// let bool = <boolean>any;
// bool = true;
// console.log(bool);
// let anyVal: any;
// convert any into string
// let strVal = anyVal as string; //! recommended
// strVal = "I am string value you can do anything within string";
// console.log(strVal);
// console.log(strVal.toUpperCase());
// Let's try with number
// let numVal = anyVal as number;
// numVal = 7;
// console.log(numVal);
// console.log(numVal.toFixed(1));
// console.log(typeof numVal.toFixed(1));
//? Let's try to convert number into string
// let num: number = 123;
// console.log(num);
// console.log(typeof num);
// convert number into string; conversion between unrelated datatype
//? Typescript does not allow direct conversion
//? Use unknown as middleman
// let str = num as unknown as string; // Double assertion for unrelated type
// str = "Shanu";
// console.log(str);
// console.log(typeof str);
// let bool = num as unknown as boolean;
// bool = true;
// console.log(bool);
// console.log(typeof bool);
// let myFav = Number(bool);
// console.log(myFav);
// JavaScript
// let str = "123";
// console.log(str);
// console.log(typeof str);
// I wanna convert string into number
// let num = Number(str);
// console.log(num);
// console.log(typeof num);
// I wanna change number into string
// let x = String(num);
// console.log(x);
// console.log(typeof x);
// DOM
let btn = document.getElementById("btn"); //type
let h1 = document.querySelector("h1");
console.log(btn);
console.log(h1);
//# sourceMappingURL=index.js.map