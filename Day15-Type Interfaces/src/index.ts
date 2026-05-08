// interface USER {
//   userName: string;
//   age: number;
// }
// let user: USER = {
//   userName: "SHanus",
//   age: 24,
// };
// console.log(user);
// //? Interface does not create object, this defines only rules and structures.

// type str = string;

// interface EMPOBJ {
//   eName: string;
//   eid: string;
//   age: number;
//   domain: string;
//   skills: string[];
//   address: {
//     streetName: string;
//   }[];
// }

// let emp1: EMPOBJ = {
//   eName: "Shanu",
//   eid: "abc123",
//   age: 23,
//   domain: "Software Engineering",
//   skills: ["React", "Node", "Express", "MongoDB"],
//   address: [
//     {
//       streetName: "4th Cross ",
//     },
//   ],
// };

// interface USERPROFILE {
//   userName: string;
//   profileDetails(): void;
// }

// type UserProfile1 = {
//   username: string;
//   profileDetails(): void;
// };

// let userData: USERPROFILE = {
//   userName: "Shanu",
//   profileDetails: function () {
//     console.log(this.userName);
//   },
// };

// console.log(userData);

// interface ADD {
//   (firstNum: number, secNumber: number): number;
// }

// let add: ADD = (firstNum, secNum) => {
//   return firstNum + secNum;
// };
// let res = add(4, 89);
// console.log(res);

//! Interface with functions
// interface ADD {
//   (firstNum: number, secNum: number): number; //Function type interface property
// }

// interface ADD {
//   add(): number;
// }

// let addition: ADD = (mynum, yournum) => {
//   return mynum + yournum;
// };

// let res = addition(90, 20);

//! Interface with array
// interface USERS {
//   users: string[];
// }

// let users: USERS = {
//   users: ["Shanu"],
// };
// console.log(users);

// interface USERS {
//   [name: number]: string;
// }

// let users: USERS = ["Shanu", "Shashi"];
// console.log(users);

// type USER = {};
// type ADDRESS = {};
// type PAYMENT = {};

// type PROFILE = {
//   user: USER;
//   address: ADDRESS;
//   payment: PAYMENT;
// };

//! Same needs to be done using interface
// interface USER {
//   userName: string;
// }
// interface ADDRESS {
//   streetName: string;
// }
// interface PAYMENT {
//   payment: string;
// }

// interface Profile {
//   user: USER;
//   address: ADDRESS;
//   payment: PAYMENT;
// }

// let profile: Profile = {
//   user: { userName: "Shanu" },
//   address: { streetName: "5th Cross" },
//   payment: { payment: "razorpay" },
// };

// console.log(profile);

//! interface Extending interface
// interface PROFILE extends USER, ADDRESS, PAYMENT {
//   //   profileData: string;
// }

// type PROFILE2 = USER & ADDRESS & PAYMENT;
// let profile: PROFILE = {
//   userName: "Shanu",
//   streetName: "2nd main 4th cross",
//   payment: "Razorpay",
// };

//! In interface we can use same interface multiple times but type alias can't be used

// type USER = {
//   userName: string;
// };

// type USER = {
//   age: number;
// };

interface USER {
  username: string;
}
interface USER {
  age: number;
}

let user: USER = {
  username: "Shanu",
  age: 23,
};
console.log(user);
