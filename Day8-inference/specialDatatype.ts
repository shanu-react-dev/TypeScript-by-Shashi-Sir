let a: any;
a = ["hello"];
a = { name: "Amarjeet" };
a = 100;
a.toUpperCase();
//! the any datatype is a special datatype which will tell typescript to remove type safety for a particular variable or function parameters etc.

//! such variables willl not cause any compile time error but they may give runtime errors.

//! if we only declare a variable, the datatype assigned to it is any datatype
//! example let a; the default datatype is any
