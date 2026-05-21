// console.log("start");
// console.log("continue");
// console.log("end");

console.log("start");
for (let i = 0; i < 10000000000; i++) {}

console.log("end");
/**Synchronous: The behaviour of JavaScript where line by line execution happens
 *
 * If there is any error in any statement, the execution will be stopped then and there itself.
 */

/**Asynchronous JavaScript
 * It is a way of delegating the execution of time consuming task in future.
 * Asynchronous JavaScript is a programming technique that allows your code to start a long running task and continue responding to other events while that tasks runs, rather than waiting for it to finish.
 */

//! how to create a promise
//! Consume a promise
//! Event Loop

//! Promise
/**
 * A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.
 */

/**
 * States of a promise
 * 1. Pending
 * 2. Fulfiled
 * 3. Rejected
 *
 * fulfilled and rejected state together is called as settled state.
 */

/**
 * Syntax of a promise
 * A callback function is a function which is given to another function as an argument
 * let promise = new Promise((resolve, reject) =>{
 * if(condition){
 *  resolve()
 * }else{
 *  reject()    
 *  }
 * })
 */
