"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 10;
x = "Shanu";
//Union with array
let arr = ["Shanu", 24, 44, "Sundari"];
console.log(arr);
let arr1;
arr1 = ["Shanu"];
arr1 = [1, 2, 3, 4];
//Object with union
// let user = {
//   userName: "Shashi",
//   userProfile: string | number,
// };
let username;
let age;
// let userProfile = {
//   [username]: "Shanu",
//   [age]: 20,
// };
let userProfile = {
    userName: "Shanu",
    age: "Shanu",
};
let obj = { name: "Shanu", age: 17 };
// Union with function
let userdata = (name) => {
    return name;
};
console.log(userdata("Shanu"));
console.log(userdata(20));
// console.log(userdata(true)); //! error boolean type can't be assigned to type string | number
//! try with union and tuple type
let data = [20, true];
data = ["Shanu", true];
const eid = 123;
let value = "Shanu";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
else {
    console.log(value.toFixed(1));
}
//# sourceMappingURL=index.js.map