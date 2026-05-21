function add(a: number, b: number) {
  return a + b;
}
let demo1 = add(10, 10);
console.log(demo1);

// example2: function without return (void)
// void means this fynction does not return anything
// it performs and actipn (printing) but gives nothing back
// this is useful just do something wihtout needing to return data
function Demo(name: string): void {
  console.log(`hello ${name}, How are you??`);
}
Demo("Shanu");

//! function with multiple parameters
function Profile(name: string, age: number, city: string): string {
  return `My name is ${name} and my age is ${age} and I am coming from ${city}`;
}

let res = Profile("Shanu", 23, "Delhi");
console.log(res);

//! Arrow functions in TypeScript
//? Arrow functions are shorter and cleaner and the syntax: () =>
const square = (x: number): number => x * x;
let res1 = square(10);
console.log(res1);

const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Can't divided by zero");
  }
  return a / b;
};

let res2 = divide(10, 2);
console.log(res2);

//Without parameter return something
let getFullYear = (): number => new Date().getFullYear();
let year = getFullYear();
console.log(year);

// if single parameter it does not require parantheses
// let demo = (x) => x + 1;
// console.log(demo(1));

//! Optional parameter with funcitons
let Profile1 = (name: string, age: number, city?: string): string => {
  if (city) {
    return `My name is ${name}, age is ${age} and city is ${city}`;
  }
  return `My name is ${name} and my age is ${age}`;
};

let user1 = Profile1("kirthi", 21, "Coimbatore");
console.log(user1);

let user2 = Profile1("Shanu", 23);
console.log(user2);

// Default parameter
let Profile2 = (name: string, age: number = 20, city: string): string => {
  return `My name is ${name}, age is ${age}, city is ${city}`;
};

let data = Profile2("Sundari", undefined, "Sambalpur");
console.log(data);

// rest parameter
// it allows multiple arguments to be passed as  an array. Syntax of Rest parameter  ...name (rest parameter or spread operator)
// In function rest parameter always should be at the last parameter.

function Users(...rest: string[]): any {
  return rest; // arguments object exists in normal function only it is not available in arrow functions
}

let user3 = Users("Shanu", "Kalee", "Keerthi");
console.log(user3);

let Emps = (...rest: string[]): string[] => {
  return rest;
};

let mydata = Emps("Shanu", "Sharmila", "Sundari", "kalees");
console.log(mydata);

let UserProfile = (name: string, age: number, ...languages: string[]): any => {
  return [name, age, languages];
};

let userProfile1 = UserProfile("shanu", 23, "JavaScript", "NodeJS", "React");
console.log(userProfile1);
