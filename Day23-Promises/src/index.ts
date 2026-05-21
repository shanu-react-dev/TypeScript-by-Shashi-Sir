// let x = "Shanu";
// console.log(x);

// for (let i = 0; i < 1000000; i++) {
//   console.log(i); // time consuming task so interpreter is busy with reading this taks and once this task has been completed then only it is taking next line
// }
// let y = "Sundari";
// console.log(y);

// let x = "Shanu";
// console.log(x);
// setTimeout(() => {
//   for (let i = 0; i < 1000000; i++) {
//     console.log(i); // time consuming task so interpreter is busy with reading this taks and once this task has been completed then only it is taking next line
//   }
// }, 5000);
// let y = "Singh";
// console.log(y);

//Promises --> Asynchronous Executes later
// A promise in typescript/javascript represents the eventual completion of an asynchronous operation and its resulting value it could be success or failure.
// Promises have three possible states
//1 Pending state --> This is the initial state where operations has not completed yet.
//2 Fulfilled state --> The operations completed successfully
//3 Rejected state --> The operation got failed

//! How to create a promise
//? It is an object
// let promise = new Promise()

// Constructor function in JavaScript
// function USER(name: string, company: string, age: number) {
//   this.name = name;
//   this.company = company;
//   this.age = age;
// }

// let user1 = new USER("Shanu", "Coode Auraa", 12);
// console.log(user1);

// let promsie = new Promise(function (resolve, reject) {
//   console.log(resolve);
//   console.log(reject);
// }); // creating a promise involves passing an executor function to the promise constructor.
// console.log(promsie);

// let promise1 = new Promise((resolve, reject) => {
//   let isCleaned = true;
//   if (isCleaned) {
//     //success
//     resolve("Your room is cleaned");
//   } else {
//     //failure
//     reject("Your room is not cleaned");
//   }
// });
// console.log(promise1);

//then and catch
// then is used for resolved data and catch block is used for rejected data or failed data

// console.dir(promise1.then());
// console.dir(promise1.catch());
// console.dir(promise1.finally());

// promise1.then(function (data) {
//   console.log(data);
// }); //then method for consuming resolved data
// promise1.catch(function (err) {
//   console.log(err);
// }); //catch method is consuming failure data

// const promise = new Promise((res, rej) => {
//   let num = Math.random();
//   if (num >= 0.5) {
//     res("Promise is fulfilled");
//   } else {
//     rej("promise got rejected");
//   }
// });

// promise.then((val) => console.log(val)).catch((err) => console.log(err));

// function handleFullfilled(data) {
//   console.log(data);
// }

// function handleFailedData(err) {
//   console.log(err);
// }

// promise.then(handleFullfilled, handleFailedData);

new Promise((res, rej) => {
  setTimeout(() => {
    res("I am resolved");
  }, 1000);

  setTimeout(() => {
    rej("I am reject");
  }, 1000);
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("finally block");
  });
