let tupleExample: [string, string] = ["Shanu", "Singh"];
console.log(tupleExample);
let tupleWith10Data: [string, number, boolean, null, undefined, object] = [
  "Shanu",
  23,
  true,
  null,
  undefined,
  { userName: "shanujtpr" },
];

console.log();

//! tuples with array interface
// interface PROFILE

//! interface with extends keyword with tuple

//! tuple with function parameter
function Users(profile: [string, number]) {
  return profile;
}
let user1 = Users(["Shanu", 23]);
console.log(user1);

let employees: [string, number] = ["Shanu", 23];
console.log(employees);

interface Profile extends Array<string|number>{
    
}
