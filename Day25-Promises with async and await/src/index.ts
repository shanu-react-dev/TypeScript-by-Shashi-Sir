// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((val): any => {
//     console.log(val);
//     return val * 2;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//   });

//! Async and await
//? Promise function
// async function User(name: string) {
//   return name;
// }

// let user1 = User("Shanu");
// // console.log(user1)
// User("Shanu").then((data) => console.log(data));

// let promise1 = new Promise((res, rej) => {
//   res("I am promise 1");
// });

// async function promise2() {
//   return 1;
// }

// promise1.then((val) => console.log(val));
// promise2().then((val) => console.log(val));

// function f() {
//   let promise = new Promise((res, rej) => {
//     setTimeout(() => res("I am resolved"), 1000);
//   });
//   promise.then((data) => console.log(data));
// }
// f();

// async function asyncAwaitWay() {
//   let promise = new Promise((res, rej) => {
//     setTimeout(() => res("I am resolved using async and await"), 1000);
//   });
//   let result = await promise;
//   console.log(result);
// }

// asyncAwaitWay();

//!  Using typescript
// function fetchUser(id: number): Promise<{ id: number; name: string }> {
//   return new Promise((res, rej) => {
//     setTimeout(() => res({ id, name: "Shanu" }));
//   });
// }

// function fetchPost(
//   userId: number,
// ): Promise<Array<{ id: number; title: string }>> {
//   return new Promise((res, rej) => {
//     setTimeout(() => res([{ id: 1, title: "post1" }]));
//   });
// }

// fetchUser(1).then((data) => {
//   console.log(data);
//   fetchPost(data.id).then((data) => {
//     console.log(data);
//   });
// });

// async function LoadAllPromises() {
//   let a = await fetchUser(1);
//   console.log(a);
//   let b = await fetchPost(1);
//   console.log(b);
//   let c = await fetchPost(100);
//   console.log(c);
// }

// async function LoadAllPromises() {
//   try {
//     let a = await fetchUser(100);
//     console.log(a);
//     let b = await fetchPost(1);
//     console.log(b);
//     let c = await fetchPost(a.id);
//     console.log(c);
//   } catch (error) {
//     console.log(error);
//   }
// }

// console.log(LoadAllPromises());

// // In this example I will take real time data or fetch data from API
// //!Traditional way
// function fetchGithubUser() {
//   fetch("https://api.github.com/users")
//     .then((data) => {
//       // console.log(data);
//       data.json().then((data) => {
//         console.log(data);
//       });
//     })
//     .catch((error) => console.log(error));
// }

// fetchGithubUser();

// //! using async await
// async function GitUser() {
//   try {
//     let data = await fetch("https://api.github.com/users");
//     let values = await data.json();
//     console.log(values);
//   } catch (error) {
//     console.log(error);
//   }
// }

// GitUser();

// function getData(): Promise<string> {
//   return Promise.resolve("data");
// }

// //! then and catch
// getData().then((data) => console.log(data));

// async function getMydata() {
//   const data = await getData();
//   console.log(data);
// }
// getMydata();

// function demo() {
//   Promise.resolve(5)
//     .then((x) => x * 5)
//     .then((result) => console.log(result));
// }
// demo();

function getUsers() {
  return Promise.resolve("I am data");
}
// console.log(getUsers());
getUsers().then((data) => console.log(data));
// using async and await

async function data() {
  let mydata = await getUsers();
  console.log(mydata);
}
data();
