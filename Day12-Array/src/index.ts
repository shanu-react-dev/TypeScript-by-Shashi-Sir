// Array = > list
// Can store multiple values in a single variable.
// let languages = ["JavaScript", 19, true, null, undefined];

// Same type of values like only string
// How to store same type of data inside an array
// let languages: string[] = ["Java", "JS", "Node JS", "Python"];

let courseDuration: number[] = [];

// Array syntax with types
// Array<type>; Generic way
let courses: Array<number> = [10, 20, 40];

let usersInfo: string[] = ["Shanu", "Sundari"];
usersInfo[0] = "Amarjeet";
usersInfo[2] = "Raja";
console.log(usersInfo);
usersInfo.push("Kaleeswari");
usersInfo.unshift("Laxmi");
console.log(usersInfo);

//! Remove last element from an array
usersInfo.pop(); // Removes last element from an array.
usersInfo.shift(); // removes first element in the array

let languages: Array<string> = ["Java", "JS", "Python", "Ruby", "PHP"];

for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

// for of
for (let i of languages) {
  console.log(i);
}

// forEach method only works with array
languages.forEach((ele, index) => console.log(ele));

// How to iterate array of values
// foreach way
languages.forEach(function () {
  console.log("Kalees");
}); // forEach is expecting a function

// let str: string = "Shanu";
// str.forEach((ele) => ele); //! String does not support forEach method it is applicable only for array

//! Multidimensional Array
// let users: string[] = ["Shanu"];
// let myUsers: string[][] = [["Shanu"], ["Sundari"]];
// console.log(myUsers[0][0]);
// let users2: number[][][] = [[[10]]];

let users: Array<Array<string>> = [["Shanu"]];
let users1: string[][] = [["Sundari"]];

let emp: readonly string[] = ["Shanu", "Sailaja", "Surabhi"]; //! Now you are not able to change the value
