var Name = "Shanu Singh";
console.log(Name);
console.log(typeof Name);
let ExpInYear = 5;
console.log(ExpInYear);
console.log(typeof ExpInYear);
const isActive = true;
console.log(isActive);
console.log(typeof isActive);

function functionName() {
  //Block of reusable code
}
functionName(); // function inoking

let myFun = function Sum(a: number, b: number) {
  let sum = a + b;
  console.log(sum);
};
myFun(7, 9);

let mulWithAnonymous = function (a: number, b: number) {
  let mul = a * b;
  console.log(mul);
};

mulWithAnonymous(7, 8);

(function () {
  console.log("Execution started!!");
})();

// console.log(a);
// var a = 10;

// console.log(b);
// let b = "Shanu";

// test();
// function test() {
//   console.log("Hello");
// }

// test();
// var test = function () {
//   console.log("Hello");
// };
