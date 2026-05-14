"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tupleExample = ["Shanu", "Singh"];
console.log(tupleExample);
let tupleWith10Data = [
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
function Users(profile) {
    return profile;
}
let user1 = Users(["Shanu", 23]);
console.log(user1);
let employees = ["Shanu", 23];
console.log(employees);
//# sourceMappingURL=index.js.map