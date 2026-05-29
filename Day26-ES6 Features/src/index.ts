// ES6 Features
//! Destructuring is JavaScript/Typescript feature that allows you to extract values from an array and object properties into distinct variables using object literal and array literal.
let languages = ["java", "Python", "PHP", "TypeScript", "C#"];
// console.log(languages[1]);

//! Array destructuring
//! Extract values based on index or position
//! Variables are assigned in order from left to right
//! Use empty and commas to skip elements or values
// let [java, python] = languages;
// console.log(java);
// console.log(python);

// const colors = ["red", "blue", "green", "black", "yellow", "purple"];
// let [_red, _blue, _green, $black, yellow] = colors;

// console.log(_red);
// console.log(_blue);
// console.log($black);

//! Rest in Array Destructuring
//! Rest in array
// Uses spread operator(...) on left side of assignment
//It collects all remaining elements into a new array
// Must be the last element - cannot have anything after this

// let names = ["Shanu", "Kalees", "Kashish", "Girish", "Raju", "Divya"];
// let [shanu, kalees, ...Rest] = names;
// console.log(shanu);
// console.log(kalees);
// console.log(Rest);
// Rest.forEach((ele) => console.log(`These values are coming from rest: ${ele}`));

//! Spread in array Destructuring
//? it uses spread operator on right side of assignment
//? Unpacks all elements from an array into a new array.
//? It allows merging multiple Arrays or adding new elements
//? It is a shallow copy when used alone

// let colors = ["red", "blue", "yellow", "black", "green", "purple", "pink"];
// let moreColors = [...colors, "crimson", "Skyblue", "Lightseagreen"]; //returns one new array
// console.log(colors);
// console.log(moreColors);

// //! Swapping variable
// let a = 2;
// let b = 4;
// [a, b] = [b, a];
// console.log(a, b);

// function users() {
//   return ["Shanu", "kalees", "Kirti"];
// }

// let [firstP, secP, thirdP] = users();
// console.log(firstP);
// console.log(secP);
// console.log(thirdP);
// let [...names] = users();
// names.forEach((ele) => console.log(ele));

let x = [["java"], ["javascript"]];
let [[java], [js]] = x;
console.log(java, js);

//! Object Destructuring
let users = {
  username: "Shanu",
  company: "Coode Auraa",
  salary: 40000,
  city: "Chennai",
};

let city = "Delhi";

// Object destructuring order or index not matters instead use object properties
// Extract values based on object properties of key
// let { city: city1, company, username } = users; // renaming the object properties
// console.log(city1);
// console.log(company);
// console.log(username);

// let { city: city1, ...rest } = users;
// console.log(rest);
// let { company, salary, username } = rest;
// console.log(company);
// let updateUsers = {
//   ...users,
//   address: {
//     name: "Shanu",
//     streetNumber: "4th Street",
//     locality: "EB Office LIC colony",
//   },
// };

// console.log(updateUsers);

// function parameters
function getUsers({ username, company, salary, city } = users) {
  console.log(username);
}
getUsers();
