// Object Oriented Programming in TypeScript
// In JS OOPS in JS => Prototype class Keyword
// Classes and objects rather than functions and logic
// classs
// Class is a blueprint used to create an instance of an object
// class car {
//   model: string;
//   year: number;
//   price: number;

//   drive() {
//     console.log("BMW started");
//   }

//   stop() {
//     console.log("Car stopped");
//   }
// }
// console.log(car);
// let car1 = new car();
// car1.model = "BMW M5";
// car1.price = 10000000;
// car1.year = 2026;
// console.log(car1);
// car1.drive();
// car1.stop();

// class Person {
//   //Step1: Define Properties (Data or variables that belongs to the class)
//   name: string;
//   age: number;

//   //   Constructor
//   // it is a special method existing in all type of classes
//   constructor(n: string, a: number) {
//     console.log(this);
//     this.name = n;
//     this.age = a;
//   }

//   getProfile() {
//     console.log(this.name);
//     console.log(this.age);
//   }
// }

// let person1 = new Person();

// person1.name = "Shanu";
// person1.age = 29;
// person1.getProfile();

// let person1 = new Person("Shanu", 20);
// console.log(person1);

//! Class with multiple methods
// class Calculator {
//   add(a: number, b: number): number {
//     return a + b;
//   }
//   subtract(a: number, b: number): number {
//     return a - b;
//   }
//   multiplication(a: number, b: number): number {
//     return a * b;
//   }
//   division(a: number, b: number): number {
//     if (b === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     return a / b;
//   }
// }

// let calc = new Calculator();
// console.log(calc.add(10, 5));
// console.log(calc.subtract(10, 5));
// console.log(calc.multiplication(10, 5));
// console.log(calc.division(10, 5));

//Inheritance
//? Inheritance in typescript is a fundamental OOP concept that allows one class to acquire the properties and methods of another class. It is primarily used to promote code reusability by building specialized classes on top of more general ones.
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log("What's for dinner");
//   }
//   speak() {
//     console.log(`My name is ${this.name}, I am ${this.age} years old`);
//   }
// }

// Inheritance
// class User extends Person {
//   designation: string;
//   constructor(name: string, age: number, designation: string) {
//     super(name, age);
//     this.designation = designation;
//   }
//   speak(): void {
//     console.log(`My designation is ${this.designation}`);
//   }
// }

// let peron1 = new User("Shanu", 23, "Software Engineer");
// console.log(peron1);
// peron1.speak();
// console.log(peron1);

//! Multiple inheritance
// class Shape {
//   constructor(public color: string) {}
// }

// class Rectangle extends Shape {
//   constructor(
//     color: string,
//     public width: number,
//     public height: number,
//   ) {
//     super(color);
//   }
//   area(): number {
//     return this.width * this.height;
//   }
// }

// class Square extends Rectangle {
//   constructor(
//     color: string,
//     width: number,
//     height: number,
//     public side: number,
//   ) {
//     super(color, width, height);
//     this.side = side;
//   }
// }

// let rect = new Rectangle("yellow", 10, 5);
// console.log(rect);
// console.log(rect.area());
// let square = new Square("green", 10, 30, 4);
// console.log(square);
// console.log(square.area());

//! Access modifiers
// public
// private
// protected
// readonly

// class Example {
//   constructor(
//     public pub: string,
//     private priv: string,
//     protected prot: string,
//     readonly read: string,
//   ) {}
//   public showAll(): string {
//     return `${this.pub} and ${this.priv} and ${this.prot} and ${this.read}`;
//   }
// }

// let ex = new Example("Public", "private", "protected", "readonly");
// console.log(ex.pub);
// console.log(ex.priv);
// console.log(ex.prot);
// console.log(ex.read);
// console.log(ex.showAll());

// interface Printable {
//   print(): void;
// }

// interface Loggable {
//   log(): void;
// }

// class Document implements Printable, Loggable {
//   constructor(
//     public title: string,
//     public content: string,
//   ) {}

//   public print(): void {
//     console.log(`Printing ${this.title}`);
//     console.log(`${this.content}`);
//   }
//   public log(): void {
//     console.log(`Doc is ${this.title}`);
//   }
// }

// let doc = new Document("Welcome to TypeScript", "This is TypeScript content");
// doc.print();
// doc.log();

class SecureAccount {
  #balance: number; /**This is a way to make the private field */
  constructor(initialBalance: number) {
    this.#balance = initialBalance;
  }
  public getBalance(): number {
    return this.#balance;
  }
  public deposit(amount: number): void {
    this.#balance += amount;
  }
}

let secure = new SecureAccount(1000);
console.log(secure.getBalance());

console.log(secure.#balance);
