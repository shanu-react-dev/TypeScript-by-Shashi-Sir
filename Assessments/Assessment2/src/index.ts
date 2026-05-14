//! 1.Create a type alias called User with name as string and age as number. Create one object using it.
type USER = {
  userName: string;
  age: number;
};
// interface USER_INTERFACE {
//   userName: string;
//   age: number;
// }
const userObj: USER = {
  userName: "Shanu",
  age: 23,
};
console.log(userObj);

//! 2.Create a type alias called Product with title, price, and inStock. Then create two products.
type PRODUCTSCHEMA = {
  title: string;
  price: number;
  inStock: boolean;
};

interface PRODUCT_INTERFACE {
  title: string;
  price: number;
  inStock: boolean;
}

let product1: PRODUCTSCHEMA = {
  title: "Television",
  price: 1499.0,
  inStock: true,
};
console.log(product1);

let product2: {
  title: string;
  price: number;
  inStock: boolean;
} = {
  title: "Dress",
  price: 799.0,
  inStock: false,
};
console.log(product2);

//! 3.Create a type alias called Employee with id, name, and salary. Print the employee details.
type EMPSCHEMA = {
  id: number | string;
  ename: string;
  salary: number;
};

interface EMP_INTERFACE {
  id: number | string;
  ename: string;
  salary: number;
}

let emp1: EMPSCHEMA = {
  id: "abc123",
  ename: "Shanu Singh",
  salary: 200.0,
};
console.log(emp1);

//! 4.Create a type alias for a Car object with brand, model, and year. Create an array of 3 cars.
type CARDETAILS = { brand: string; model: string; year: number }[];

interface CAR_INTERFACE {
  brand: string;
  model: string;
  year: number;
}

let carCollection: CAR_INTERFACE[];

let arrOfCars: CARDETAILS = [
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

//! 5.	Create a type alias called Student where name is string and marks is number[]. Store marks of 5 subjects.
type ST_SCORECARD = {
  name: string;
  marks: number[];
};

interface ST_INTERFACE {
  name: string;
  marks: number[];
}

let st_scorecard1: ST_SCORECARD = {
  name: "Nikhil",
  marks: [98, 88, 97, 93, 98],
};
console.log(st_scorecard1);

//! 6.Create an object called person with firstName, lastName, and age. Add proper TypeScript types.
interface PERSON {
  firstName: string;
  lastName: string;
  age: number;
}

let person: {
  firstName: string;
  lastName: string;
  age: number;
} = {
  firstName: "Rohit",
  lastName: "Sharma",
  age: 38,
};
console.log(person);

//! 7.Create an object called book with title, author, and pages. Print all properties.
let book: object = {
  title: "Monk who holds ferrari",
  author: "Shanu",
  pages: 30,
};

interface BOOK_INTERFACE {
  title: string;
  author: string;
  pages: number;
}

for (let i in book) {
  console.log({ [i]: book[i] });
}

//! 8.Create a nested object with name and address containing city and pincode. Add types for everything.
type USERSCHEMA = {
  userName: string;
  address: {
    city: string;
    pincode: number;
  };
};

interface ADDRESS {
  city: string;
  pincode: number;
}

interface USER_INTERFACE {
  userName: string;
  address: ADDRESS;
}
let userDetails: USERSCHEMA = {
  userName: "Shanu",
  address: {
    city: "Chennai",
    pincode: 600075,
  },
};
console.log(userDetails);

//! 9.Create an object for a mobile phone with brand, price, and is5G.
type brand = string;
type price = number;
type is5G = boolean;
type MOBILESCHEMA = {
  brand: brand;
  price: price;
  is5g: is5G;
};
interface MOBILE_INTERFACE {
  brand: string;
  price: number;
  is5g: boolean;
}
let myPhone: MOBILESCHEMA = {
  brand: "Samsung",
  price: 124000,
  is5g: true,
};
console.log(myPhone);

//! 10.Create an object called movie with title, rating, and language. Then update the rating.
type MOVIE_DATA = {
  title: string;
  rating: string;
  language: string;
};

interface MOVIE_INTERFACE {
  title: string;
  rating: string;
  lang: string[];
}
let movie1: MOVIE_DATA = {
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
let arr: number[] = [49, 7, 45, 100];
arr.forEach((ele) => {
  console.log(ele);
});

//todo this way also we can create an array of numbers using interface or any other array of other datatype
interface ARR_OF_NUMBERS {
  [index: number]: number;
}

let arrOfAge: ARR_OF_NUMBERS = [2, 4, 88, 55];

//! Creating a function using interface
interface EVEN_OR_ODD {
  (n: number): void;
}

let evenOrOdd: EVEN_OR_ODD = (n) =>
  n % 2 === 0 ? console.log("hii this is even") : console.log("This is an odd");
evenOrOdd(19);

//! 12.Create an array of strings containing 5 fruits.
type FRUITS = string[];
let fruits: FRUITS = ["Orange", "Grapes", "Papaya", "Guava", "Apricot"];

interface FRUITS_INTERFACE {
  [index: number]: string;
}
let myFruits: FRUITS_INTERFACE = ["Orange", "Papaya"];
console.log(fruits);
console.log(myFruits);

//! 13.Create an array of boolean values.
type BOOL = boolean[];
let isOld: BOOL = [true, false, false, false, true];
console.log(isOld);

//! 14.Create an array of objects where each object contains name and age. Store details of 3 people.
type ARROFUSERS = {
  username: string;
  age: number;
}[];

interface USERS_ARR {
  username: string;
  age: number;
}
let usersArr: USERS_ARR[] = [
  {
    username: "Sundari",
    age: 21,
  },
];

let arrOfUsers: ARROFUSERS = [
  { username: "Sundari", age: 20 },
  { username: "Shanu", age: 23 },
];
console.log(arrOfUsers);

//! 15.Create an array called prices and find total and average.
type ARROFNUMBER = number[];
let arrOfNumber: ARROFNUMBER = [10, 40, 12, 25, 12];

function totalAndAvg(arr: number[]): void {
  //   console.log(arr);
  let total: number = arr.reduce((acc, ele) => acc + ele);
  console.log(total);
  let avg: number = total / arr.length;
  console.log(avg);
}

totalAndAvg(arrOfNumber);

interface NUMBER_ARR {
  [index: number]: number;
}
let myNumArr: NUMBER_ARR = [2, 34, 54, 56, 4, 6, 46, 456];
console.log(myNumArr);

//! 16.Create a type alias Animal and store multiple animals inside an array.
type ANIMALS = string[];
let arrOfAnimals: ANIMALS = ["Cow", "Horse", "Dog", "Buffalo", "Goat"];
console.log(arrOfAnimals);

//! 17.Create an object representing a student with name, class, and subjects (array).
type ST_DETAILS = {
  st_name: string;
  class: number | string;
  subjects: string[];
};

let myStudent: ST_DETAILS = {
  st_name: "Lavan Kumar",
  class: 12,
  subjects: ["MongoDB", "React", "Node", "Express", "HTML", "CSS"],
};
console.log(myStudent);

//! 18.Create an array of products with id, title, and price. Print only product titles.
type ARROFPROD = {
  id: string | number;
  title: string;
  price: number;
}[];

let product: ARROFPROD = [
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

//! 19.Create a type alias Rectangle with width and height. Calculate area.
type RECTANGLE_HEIGHT = number;
type RECTANGLE_WIDTH = number;
let height: RECTANGLE_HEIGHT = 10;
let width: RECTANGLE_WIDTH = 20;
let area = (h: number, w: number): number => {
  return h * w;
};
let res = area(height, width);
console.log(`${res} cm square`);

//! 20.Create a type alias Circle with radius. Calculate circumference.
type CIRCLERADIUS = number;
let radius: CIRCLERADIUS = 12;
let circumference = (radi: number): number => 2 * (22 / 7) * radi;
res = circumference(radius);
console.log(res);
//! 21.Create an object called company with name, employees (number), and locations (string array).
type COMPANY = {
  company_name: string;
  no_of_emps: number[];
  locations: string[];
};

let company1: COMPANY = {
  company_name: "Coode Auraa",
  no_of_emps: [20],
  locations: ["Chennai", "Delhi", "Bangalore"],
};

console.log(company1);

//! 22.Create an array of users and print users whose age is greater than 18.
type ARROFUSERS2 = { name: string; age: number; gender: string }[];
let arrOfUsers2: ARROFUSERS2 = [
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

//! 23.Create a type alias Course with courseName, duration, and studentsEnrolled. Create 2 courses.
interface COURSESCHEMA {
  courseName: string;
  duration: number;
  studentEnrolled: number;
}

let course1: COURSESCHEMA = {
  courseName: "MERN Stack",
  duration: 4,
  studentEnrolled: 200,
};
console.log(course1);

let course2: COURSESCHEMA = {
  courseName: "AWS Cloud",
  duration: 1,
  studentEnrolled: 250,
};
console.log(course2);

//! 24.	Create an object called Laptop with brand, ram, storage, and price. Print: Dell Laptop costs 50000.
interface LAPTOP_SCHEMA {
  brand: string;
  ram_in_gb: number;
  storage_in_gb: number;
  price_in_rupees: number;
}

let laptop1: LAPTOP_SCHEMA = {
  brand: "Dell",
  ram_in_gb: 16,
  storage_in_gb: 1024,
  price_in_rupees: 800000,
};
console.log(`${laptop1.brand} Laptop costs ${laptop1.price_in_rupees}`);

//! 25.Create a type alias BankAccount with accountHolder, balance, and isActive. Create multiple bank accounts in an array.
type ACC_HOLDER = string;
type BALANCE = number;
type IS_ACTIVE = boolean;

interface BANK_SCHEMA {
  accountHolder: ACC_HOLDER;
  balance: BALANCE;
  isActive: IS_ACTIVE;
}

let arrOfAccHolders: BANK_SCHEMA[] = [
  { accountHolder: "Shanu", balance: 400, isActive: true },
  { accountHolder: "Sailaja", balance: 4000000, isActive: true },
  { accountHolder: "Shiva", balance: 40000, isActive: true },
  { accountHolder: "Shruti", balance: 18000, isActive: true },
  { accountHolder: "Sharanya", balance: 28000, isActive: true },
];

console.log(arrOfAccHolders);
