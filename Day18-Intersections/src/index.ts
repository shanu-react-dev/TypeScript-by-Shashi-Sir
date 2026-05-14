// type PERSON = {
//   name: string;
//   age: number;
// };
// type EMPLOYEE = {
//   companyId: string;
//   department: string;
// };

// type PERSONEMPLOYEE = PERSON & EMPLOYEE; // This is intersection

// let employee: PERSONEMPLOYEE = {
//   name: "Keerthi",
//   age: 30,
//   companyId: "Coode-Auraa",
//   department: "IT",
// };
// console.log(employee);

//! Intersection with interface
// interface A {
//   a: string;
// }

// interface B {
//   b: string;
// }

// interface C {
//   c: number;
// }

// interface Combine extends A& B&C{

// }

// type combined = A & B & C;
// let data: combined = {
//   a: "hello",
//   b: "World",
//   c: 23,
// };
// console.log(data);

type adminUser = {
  role: string;
  permission: string[];
} & {
  name: string;
  email: string;
};

let admin: adminUser = {
  role: "admin",
  permission: ["read", "write", "delete"],
  name: "adminUser",
  email: "admin@admin.com",
};
console.log(admin);

// Literal Types
