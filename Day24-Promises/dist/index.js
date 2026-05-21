"use strict";
// let promiseOne = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "Promise Resolve1");
// });
// let promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "Promise Resolve2");
// });
// let promiseThree = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "Promise Resolve3");
// });
Object.defineProperty(exports, "__esModule", { value: true });
// Promise.all([promiseOne, promiseTwo, promiseThree]).then((value) =>
//   value.forEach((val) => console.log(val)),
// );
// let cleanhouse = new Promise((res, rej) => {
//   let isCleaned = true;
//   if (isCleaned) {
//     res("The house is cleaned");
//   } else {
//     rej("The house is not cleaned");
//   }
// });
// let getReady = new Promise((res, rej) => {
//   let isReady = true;
//   if (isReady) {
//     res("I am ready");
//   } else {
//     rej("I am not ready");
//   }
// });
// let TakeCarAndCheckIdAvailable = new Promise((res, rej) => {
//   let isAvailable = true;
//   if (isAvailable) {
//     res("Yes the car is available");
//   } else {
//     rej("No the car is not available now");
//   }
// });
// // let getReady = new Promise();
// Promise.all([cleanhouse, getReady, TakeCarAndCheckIdAvailable])
//   .then((data) =>
//     data.forEach((element) => {
//       console.log(element, "-");
//     }),
//   )
//   .catch((err) => console.log(err)); // If all promises are resolved it will be returning the result else it will be returning the catch block for unhandled promise
//! Promise.race
//todo it accepts an array of all promises as an arguments.  It returns the fastest value (time is important)
// Promise.race([]);
// let promise1 = new Promise((res, rej) => {
//   setTimeout(res, 1000, "I am promise1 in the race");
// });
// let promise2 = new Promise((res, rej) => {
//   setTimeout(res, 2000, "I am promise1 in the race");
// });
// let promise3 = new Promise((res, rej) => {
//   setTimeout(res, 3000, "I am promise1 in the race");
// });
// // let promise4 = Promise.reject("Promise got rejected");
// let promise4 = new Promise((res, rej) => {
//   let data = false;
//   setTimeout(() => {
//     if (data) {
//       res("it got resolved");
//     } else {
//       rej("Promise got rejected");
//     }
//   }, 5000);
// });
// Promise.race([promise1, promise2, promise3, promise4])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// Promise.any([promise1, promise2, promise3, promise4]) // it accepts an array of promises as an argument but it returns a single promise as an output any one promise is resolved then it is taking the first resolved value. if all promises are rejected will get error as an array.
// // If all promise got rejected it will produce an array
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// const promise1 = new Promise((res, rej) => {
//   setTimeout(res, 3000, "First resolve value");
// });
// const promise2 = new Promise((res, rej) => {
//   setTimeout(res, 2000, "First resolve value");
// });
// const promise3 = new Promise((res, rej) => {
//   setTimeout(rej, 2000, "First resolve value");
// });
// Promise.allSettled([promise1, promise2, promise3])
//   .then((data) => console.log(data))
//   .then((err) => console.log(err));
//! How to handle promises in TypeScript
function FetchUserData(userId) {
    return new Promise((res, rej) => {
        //simulate an asynchronous task like fetching data from database or API
        // setTimeOut delays executions by a specified time
        // setTimeout(() => {
        //   if (userId > 0) {
        //     res(`User data for ID ${userId}`);
        //   } else {
        //     // rej(`Failure or Invalid ID`);
        //     rej(new Error("Invalid id"));
        //   }
        // }, 3000);
        fetch("https://api.github.com/users")
            .then((data) => data.json())
            .then((data) => res(data));
    });
}
FetchUserData(1)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map