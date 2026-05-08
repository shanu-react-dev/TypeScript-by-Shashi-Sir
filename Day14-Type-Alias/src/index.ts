// type str = string;
// let myname: str = "Shanu";
// let company: str = "Coode Auraa";
// console.log(myname);
// console.log(company);

// type UserProfile = {
//   username: string;
//   age: number;
//   panCard: string;
//   address: string;
// };

// let userProfile: UserProfile = {
//   username: "Shanu",
//   age: 24,
//   panCard: "JLFPK5289E",
//   address: "Chennai",
// };

// console.log(userProfile);

// type list = (string | boolean)[];
// let skillsAndExp: list = ["CSS", true, "JavaScript", true];

//! Create one employee object with type alias
// empid
//emp_address
//emp_Exp
//emp_skills
//city
//education
//salary

// type USER = {
//   name: string;
//   photo: string;
//   gender: string;
//   isActive: boolean;
// };

// type ADDRESS = [
//   {
//     streetName: string;
//     houseNumber: number;
//     locality: string;
//     city: string;
//     pin: number;
//   },
// ];

// type SKILLS = string[];

// // type EMP_OBJ = USER & ADDRESS;

// type EMP_OBJ = { user: USER; address: ADDRESS; skills: SKILLS };

// // let empObj: EMP_OBJ = {
// //   name: "Shanu",
// //   photo: "....",
// //   gender: "Male",
// //   isActive: true,

// // };

// let empObj: EMP_OBJ = {
//   user: {
//     name: "",
//     photo: "",
//     gender: "",
//     isActive: true,
//   },
//   address: [
//     {
//       streetName: "4th cross",
//       houseNumber: 34,
//       locality: "Pammal",
//       city: "Chennai",
//       pin: 600046,
//     },
//   ],
//   skills: ["JS", "Java", "Python"],
// };

// console.log(empObj);

// type username = string;
// type age = number;
// type company = string;

// type profile = {
//   username: username;
//   age: age;
//   company: company;
// };

// type emp_profile = {
//   emp_Name: username;
//   emp_Age: age;
//   emp_Company: company;
// };

// let user_Profile: profile = {
//   username: "Shanu",
//   age: 24,
//   company: "Coode Auraa",
// };
// console.log(user_Profile);

// let empProfile: emp_profile = {
//   emp_Name: "Sundari",
//   emp_Age: 21,
//   emp_Company: "Coode Auraa",
// };
// console.log(empProfile);

//! Array alias
// type TASKLIST = { title: string; isCompleted: boolean }[];
// let TaskList: TASKLIST = [
//   { title: "Node JS", isCompleted: false },
//   { title: "ReactJS", isCompleted: true },
// ];
// console.log(TaskList);

//! Functional Alias
// I need only console data not any return data (void)
// type CALLWITHOUTRETURN = (val: string) => void;

// let printMyName: CALLWITHOUTRETURN = (val) => {
//   return val;
// };
// let data = printMyName("Shanu is a good noy");
// console.log(data);

// type CALLWITHOUTRETURN = (val: string) => [];
type Obj = (val: string) => {};
type str = () => string;

function Shanu(val: string): void {
  console.log(val);
  return val;
}

let returnVal = Shanu("Shanu");
console.log(returnVal);
