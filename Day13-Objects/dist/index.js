"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example of type inference with object
// let obj: {
//   userName: string;
//   age: number;
// };
let obj = {
    userName: "Shanu",
    age: 23,
};
console.log(obj);
obj.userName = "Kalees";
console.log(obj);
//! Type annotation with object
let profile = {
    userName: "Shanu Singh",
    email: "shanu@google.io",
    isPaid: true,
    salary: 24000,
    skills: [
        "JavaScript",
        "Java",
        "React Query",
        "React JS",
        "Node JS",
        "Angular JS",
    ],
};
console.log(profile);
//! optional property and readonly property
let student;
student = {
    std_name: "Shanu",
};
console.log(student);
//! Create an object with or inside an array
let users;
users = [
    { username: "Shanu", salary: 24000 },
    { username: "Kalees", salary: 13000, age: 21 },
    {
        username: "Laxmi",
        salary: 18000,
        age: 24,
    },
];
let myUser = {
    userName: "Shanu",
    empID: 23,
};
let objShanu = "Shanu";
let objSundar = "Sundar";
let userProfile;
userProfile = [
    {
        userName: "Shanu",
        address: [
            {
                city: "Chennai",
                state: "Tamil Nadu",
                pincode: 600045,
            },
        ],
    },
];
console.log(userProfile[0]?.address[0]?.city);
//# sourceMappingURL=index.js.map