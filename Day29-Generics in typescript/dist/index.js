"use strict";
//! Generics
//? Generics in typescript allows you to create a component that can work with different types
Object.defineProperty(exports, "__esModule", { value: true });
// let x: number[] = [10, 20, 30];
// let y: string[] = ["Shanu", "Kalee"];
// console.log(x);
// console.log(y);
//! Reusable Generic type
// let x: <type>[]
//! any does not provide any type safety but generic provides
// function User(): any {
//   return NaN;
// }
// function identity<Type>(value: Type): Type {
//   return value;
// }
// let tryWithString = identity("Shanu");
// let tryWithNumber = identity(10);
// let tryWithBoolean = identity(true);
// let str = (value: string): string => {
//   return value;
// };
// console.log(str("Shanu"));
// let num = (value: number): number => {
//   return value;
// };
// console.log(num(19));
// let bool = (value: boolean): boolean => {
//   return value;
// };
// console.log(bool(true));
// const getFirst = <T>(arr: T[]): T | undefined => {
//   return arr[0];
// };
// console.log("---------------------generic arrow data-----------");
// console.log(getFirst(["Shanu", "Kalee"]));
// console.log(getFirst([1, 4, 3]));
// console.log(getFirst(["Shanu", 23]));
// class Box<T> {
//   private content: T;
//   constructor(initialContent: T) {
//     this.content = initialContent;
//   }
//   getContent(): T {
//     return this.content;
//   }
//   setContent(value: T): void {
//     this.content = value;
//   }
// }
// const stringBox = new Box<string>("Hello Shanu");
// console.log(stringBox.getContent());
// const numberBox = new Box<number>(45);
// console.log("this is numberbox: ", numberBox.getContent());
function pair(key, value) {
    return { key, value };
}
console.log("Multiple type parameter");
const stringPair = pair("Shanu", "kalee");
console.log(stringPair);
console.log("Try with string and number");
const numberPair = pair(19, "Shanu");
console.log(numberPair);
//! Decorator:- Class, parameter
//# sourceMappingURL=index.js.map