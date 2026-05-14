let x: string | number = 10;
x = "Shanu";

//Union with array
let arr: (string | number)[] = ["Shanu", 24, 44, "Sundari"];
console.log(arr);
let arr1: string[] | number[];
arr1 = ["Shanu"];
arr1 = [1, 2, 3, 4];

//Object with union
// let user = {
//   userName: "Shashi",
//   userProfile: string | number,
// };

let username: string | number;
let age: string | number;

// let userProfile = {
//   [username]: "Shanu",
//   [age]: 20,
// };

let userProfile: {
  userName: string | number;
  age: string | number;
} = {
  userName: "Shanu",
  age: "Shanu",
};

let obj: { name: string } | { age: number } = { name: "Shanu", age: 17 };

// Union with function
let userdata = (name: string | number) => {
  return name;
};
console.log(userdata("Shanu"));
console.log(userdata(20));
// console.log(userdata(true)); //! error boolean type can't be assigned to type string | number

//! try with union and tuple type
let data: [number | string, boolean] = [20, true];
data = ["Shanu", true];

//! union with union and type alias
type EMPLOYEEID = string | number;
const eid: EMPLOYEEID = 123;

let value: string | number = "Shanu";
if (typeof value === "string") {
  console.log(value.toUpperCase());
} else {
  console.log(value.toFixed(1));
}
