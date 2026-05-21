//! Numeric Enums
// enum Directions {
//   North, // enum members first item 0
//   South, // Auto increment 1
//   East,//2
//   West,//3
// }

// let north = Directions.North;
// let south = Directions.South;
// let east = Directions.East;
// let west = Directions.West;

// console.log(north);
// console.log(south);
// console.log(east);
// console.log(west);

// enum statusCode {
//   success = 200,
//   errors = 404,
//   warning,
//   pending,
//   informational = 100,
//   redirectional = 300,
//   clientError = 400,
//   serverStatus = 500,
// }

// console.log(statusCode.success);
// console.log(statusCode.errors);

// console.log(statusCode.clientError);
// console.log(statusCode.errors);
// console.log(statusCode.informational);
// console.log(statusCode.pending);
// console.log(statusCode.redirectional);
// console.log(statusCode.serverStatus);
// console.log(statusCode.success);
// console.log(statusCode.warning);

//! string enum
// enum ROLE {
//   Admin = "admin",
//   Editor = "editor",
//   User = "user",
//   Guest = "guest",
// }

// let Admin: ROLE = ROLE.Admin;
// console.log(Admin);
// let User: ROLE = ROLE.User;
// console.log(User);
// let Editor: ROLE = ROLE.Editor;
// console.log(Editor);
// let Guest: ROLE = ROLE.Guest;
// console.log(Guest);

// if (Admin) {
//   console.log("Role is admin");
// } else if (Editor) {
//   console.log("Editor role is existing");
// } else if (User) {
//   console.log("User roles are there");
// } else if (Guest) {
//   console.log("Guest user");
// } else {
//   console.log("No roles found");
// }

// enum ENVIRONMENTS {
//   Development = "development",
//   Staging = "staging",
//   Testing = "testing",
//   Production = "productions",
// }

// interface ENV {
//   Development: string;
//   Staging: string;
//   Testing: string;
//   Production: string;
// }

// function ConfigApp(env: ENVIRONMENTS): void {
//   if (env == ENVIRONMENTS.Development) {
//     console.log("Server is running on local server for development.");
//   } else if ((env = ENVIRONMENTS.Testing)) {
//     console.log(
//       "Server is running local server for testing and giving to staging",
//     );
//   } else if (env === ENVIRONMENTS.Staging) {
//     console.log("This is remote server testing and giving to production");
//   } else if (env === ENVIRONMENTS.Production) {
//     console.log("Server is runnign on production and ready for users.");
//   } else {
//     console.log("Server not found");
//   }
// }

// ConfigApp(ENVIRONMENTS.Production);

//! Mixed Enum --> Not Recommended
// enum MIXED {
//   Yes = "yes",
//   No = 1,
//   MayBe = "may be",
// }

// console.log("Mixed Yes: ", MIXED.Yes);
// console.log("Mixed No: ", MIXED.No);
// console.log("Mixed May be: ", MIXED.MayBe);

// if (MIXED.Yes === "yes") {
//   console.log("yes");
// }

//! Reverse mapping with numeric enum --> It only works with numeric enum
enum Directions {
  East,
  West,
  North,
  South,
}

// console.log("Value 0: ", Directions[0]);
// console.log("Value 1: ", Directions[1]);

enum Colors {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

// If string enum reverse mapping is not work
// console.log("String value: ", Colors["red"]);

//! Literal type vs enum
//? Literal type only works with string
//? Enum works with numeric enum and string as well
//? Literals does not have reverse mapping
//? Enum has only numeric reverse mapping
//? Simple set of values
