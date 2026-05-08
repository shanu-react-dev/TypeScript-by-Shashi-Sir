let a = {
  name: "AMarjeet",
  address: "Delhi",
  isactive: true,
};

// a = {name:string, adddress:string, isactive:boolean} Inferred datatype for
//! In object a the properties name, address and isactive is mandatory that too name and address should have string datatype and isactive must and should have boolean. Even we can't add any new properties.
// a.name = true //! not possible it will throw error due to inferred type
// a.hobbies = ["Cricket"] //! not possible

// delete a.address;//! It is not possible directly to delete that we need to use optional
const z = "lastAlphabet"; //! it is a literal datatype we can't change it later on internally it is z:"lastAlphabet" This is also known as literal type
//* const variables can't be changed after they have been created such variables are said to have literal type in typescript
// Variables created using const variable are constant It can't be changed later.

let abc;
console.log(abc);
// When we only declare variable and do not initialize (do not provide the value) the value, for such variables the inferred datatype is any.

//? Such variables will not have any type safety

//? Whenver we use a const variable  we cannot change the valu later on. This means that we have to create and assign a value to const variable at the same time.Later on the value of such variables can't be changed
//? In typescript const variables are said to have literal type that means whatever value assigned to the variable is taken as the datatype of the variable.
const s = "Shanu";
