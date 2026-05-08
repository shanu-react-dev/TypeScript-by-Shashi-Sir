//! Unknown is a type-safe alternative to any
//! This datatype is similar to any datatype, the difference is when we try to use any method on this datatype, we have to manually do the type checking.
let a;
a = "hello";
// a = 89;
// a = ["Hii", 918, true];
// a = {
//   user: "Shanu",
// };
console.log(typeof a);
if (typeof a === "string") {
    //! This condition is false
    let uppercase = a.toUpperCase();
    console.log(uppercase);
}
export {};
