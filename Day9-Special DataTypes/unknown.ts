//! Unknown is a type-safe alternative to any
//! This datatype is similar to any datatype, the difference is when we try to use any method on this datatype, we have to manually do the type checking.
let a: unknown;
a = "hello";
a = 89;
a = ["Hii", 918, true];
a = {
  user: "Shanu",
};

console.log(typeof a);
if (typeof a === "string") {
  //! This condition is false
  let uppercase = a.toUpperCase();
  console.log(uppercase);
}
//! Difference between unknown and any
//?in any we can assign anything to the variables same goes to unknown
//? There is no type safety in any but in unknown we have we can perform using manual type checking
//? We can use unknown when we do not know the datatype of a variable or the datatype might change but we still want the type safety because any will not provide type safety.

//! The only difference is that typescript will not ask for manual type checking in case of "any" but in case of unknown type checking is needed. We should go with unknown as compared to any.

//! Type Narrowing
//? It is the process of filtering out a particular datatype so that we can use methods on such variables.

//? Type Narrowing is needed when we have union datatype or unknown as the datatype.
let b: unknown = 300;
b = "Shanu";
if (typeof b === "string") {
  b.toUpperCase();
}

let x: number | string;
x = 200;

if (typeof x === "number") {
  x.toUpperCase();
}

export {};
