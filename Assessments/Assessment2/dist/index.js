"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface USER_INTERFACE {
//   userName: string;
//   age: number;
// }
const userObj = {
    userName: "Shanu",
    age: 23,
};
console.log(userObj);
let product1 = {
    title: "Television",
    price: 1499.0,
    inStock: true,
};
console.log(product1);
let product2 = {
    title: "Dress",
    price: 799.0,
    inStock: false,
};
console.log(product2);
let emp1 = {
    id: "abc123",
    ename: "Shanu Singh",
    salary: 200.0,
};
console.log(emp1);
let carCollection;
let arrOfCars = [
    {
        brand: "Bayerische Motoren Verke",
        model: "M5 Competition Edition",
        year: 2022,
    },
    {
        brand: "Dodge Demon",
        model: "Hellcat Redeye SRT Demon",
        year: 2024,
    },
    {
        brand: "Porsche",
        model: "911 Turbo S",
        year: 2026,
    },
];
console.log(arrOfCars);
let st_scorecard1 = {
    name: "Nikhil",
    marks: [98, 88, 97, 93, 98],
};
console.log(st_scorecard1);
let person = {
    firstName: "Rohit",
    lastName: "Sharma",
    age: 38,
};
console.log(person);
//! 7.Create an object called book with title, author, and pages. Print all properties.
let book = {
    title: "Monk who holds ferrari",
    author: "Shanu",
    pages: 30,
};
for (let i in book) {
    console.log({ [i]: book[i] });
}
let userDetails = {
    userName: "Shanu",
    address: {
        city: "Chennai",
        pincode: 600075,
    },
};
console.log(userDetails);
let myPhone = {
    brand: "Samsung",
    price: 124000,
    is5g: true,
};
console.log(myPhone);
let movie1 = {
    title: "Padayappa",
    rating: "🌟🌟🌟🌟🌟",
    language: "tamil",
};
console.log(movie1);
//todo Why this is not working
// console.log(movie1);
// let { rating } = movie1;
// rating = "🌟🌟🌟🌟";
// console.log(movie1);
movie1.rating = "🌟🌟🌟";
console.log(movie1);
//! 11.Create an array of numbers and print all elements.
let arr = [49, 7, 45, 100];
arr.forEach((ele) => {
    console.log(ele);
});
let arrOfAge = [2, 4, 88, 55];
let evenOrOdd = (n) => n % 2 === 0 ? console.log("hii this is even") : console.log("This is an odd");
evenOrOdd(19);
let fruits = ["Orange", "Grapes", "Papaya", "Guava", "Apricot"];
let myFruits = ["Orange", "Papaya"];
console.log(fruits);
console.log(myFruits);
let isOld = [true, false, false, false, true];
console.log(isOld);
let usersArr = [
    {
        username: "Sundari",
        age: 21,
    },
];
let arrOfUsers = [
    { username: "Sundari", age: 20 },
    { username: "Shanu", age: 23 },
];
console.log(arrOfUsers);
let arrOfNumber = [10, 40, 12, 25, 12];
function totalAndAvg(arr) {
    //   console.log(arr);
    let total = arr.reduce((acc, ele) => acc + ele);
    console.log(total);
    let avg = total / arr.length;
    console.log(avg);
}
totalAndAvg(arrOfNumber);
let myNumArr = [2, 34, 54, 56, 4, 6, 46, 456];
console.log(myNumArr);
let arrOfAnimals = ["Cow", "Horse", "Dog", "Buffalo", "Goat"];
console.log(arrOfAnimals);
let myStudent = {
    st_name: "Lavan Kumar",
    class: 12,
    subjects: ["MongoDB", "React", "Node", "Express", "HTML", "CSS"],
};
console.log(myStudent);
let product = [
    {
        id: 1,
        title: "Phone",
        price: 20000,
    },
    {
        id: "2a",
        title: "laptop",
        price: 50000,
    },
    {
        id: 4,
        title: "clothes",
        price: 5000,
    },
    {
        id: 5,
        title: "speakers",
        price: 5000,
    },
];
product.forEach((ele) => {
    console.log(ele.title);
});
let height = 10;
let width = 20;
let area = (h, w) => {
    return h * w;
};
let res = area(height, width);
console.log(`${res} cm square`);
let radius = 12;
let circumference = (radi) => 2 * (22 / 7) * radi;
res = circumference(radius);
console.log(res);
let company1 = {
    company_name: "Coode Auraa",
    no_of_emps: [20],
    locations: ["Chennai", "Delhi", "Bangalore"],
};
console.log(company1);
let arrOfUsers2 = [
    {
        name: "Shanu",
        age: 23,
        gender: "male",
    },
    {
        name: "sailaja",
        age: 23,
        gender: "female",
    },
    {
        name: "shruti",
        age: 17,
        gender: "female",
    },
    {
        name: "Sannu",
        age: 23,
        gender: "female",
    },
    {
        name: "Laxmi",
        age: 23,
        gender: "female",
    },
];
arrOfUsers2.forEach((ele) => {
    let { age } = ele;
    if (age > 18) {
        console.log(ele);
    }
});
let course1 = {
    courseName: "MERN Stack",
    duration: 4,
    studentEnrolled: 200,
};
console.log(course1);
let course2 = {
    courseName: "AWS Cloud",
    duration: 1,
    studentEnrolled: 250,
};
console.log(course2);
let laptop1 = {
    brand: "Dell",
    ram_in_gb: 16,
    storage_in_gb: 1024,
    price_in_rupees: 800000,
};
console.log(`${laptop1.brand} Laptop costs ${laptop1.price_in_rupees}`);
let arrOfAccHolders = [
    { accountHolder: "Shanu", balance: 400, isActive: true },
    { accountHolder: "Sailaja", balance: 4000000, isActive: true },
    { accountHolder: "Shiva", balance: 40000, isActive: true },
    { accountHolder: "Shruti", balance: 18000, isActive: true },
    { accountHolder: "Sharanya", balance: 28000, isActive: true },
];
console.log(arrOfAccHolders);
//# sourceMappingURL=index.js.map