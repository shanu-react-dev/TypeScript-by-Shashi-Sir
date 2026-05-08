## TypeScript

_TypeScript is an open source, strongly typed programming language developed by Microsoft that builds on JavaScript._

_It is primarily used to add static typing to JavaScript projects allowing developers to catch errors early during development phase rather than at runtime._

_TypeScript is a strongly typed programming language developed by Microsoft that builds on JavaScript. It is defined as a syntactic superset of JavaScript, meaning any valid JavaScript code is also valid TypeScript._

_Typescript is a compiled time language. Browser understands JS. TypeScript can't be used in browser directly so we need transpiler or compiler. The compiler name is TSC. This is a tool which transforms the TypeScript code into JavaScript This acts like a bridge between JavaScript and TypeScript_

## TSC

_The tsc compiler is the official tool developed by Microsoft that transforms the TypeScript codeinto clean, standard JS . Because web browsers and Node JS environments cannot execute Typescript directly. the compiler acts as a bridge , converitn the developer friendly ts syntax into a format the machine can understand_

_This is optionally statically typed language. It is compiled language but JS is interpreted. TS supports OOPS concept where JS does not support directly._

_Install Typescript in the machine then only cwan use typescript into_

## Install Typescript Step by step

1. Install Node JS => (https://nodejs.org./en/download)
2. Check NPM/Yarn, pnpm is there or not => JS/TS packages (libraries ) These all are package managers
   _In JS ecosystem npm, yarn and pnpm are _
   npm is default one which comes up with node js but yarn, pnpm are third party libraries.
3.

What are npm, yarn pnpm
_In the JS ecosystem npm, yarn and pnpm are all package managers. They are tools used to install, update and manage the third party libraries your code needs to run. (typescript, express.)_

_To install typescript_
npm install -g typescript
_Check typescript installed or not with this command_
tsc --version => Version 6.0.3

## What is Compiler or compiled language

_Compiler converts high level language into low level language._
_Typescript follows AOT (Ahead of time) process. In JS errors will be visible in runtime but in TS it will give the errors before means compile time._

_In JavaScrip there is no concept of type itself but in typescript it is._

_Typescript type error you should fix in TS file only not in JS_

What is Compiled language in TypeScript (AOT)
What is compiled time and run time

Typescript is a superset of JS

- All JS code is Valid in Typescript
- typescript adds one type layer on top of it which is not available in JavaScript => static typing e.g. `let x:string="shanu"`
- The typescript compiler check your code and removes the type errors to give you clean error free JS code.

```typescript
let myname: string = "Shanu";
console.log(myname);
```

Received by Sir
what is typescript? TypeScript is an open-source, strongly typed programming language developed by Microsoft that builds on JavaScript. It is primarily used to add static typing to JavaScript projects, allowing developers to catch errors early during development rather than at runtime. what is TSC? The tsc compiler (short for TypeScript Compiler) is the official tool developed by Microsoft that transforms TypeScript code (.ts files) into clean, standard JavaScript (.js files). Because web browsers and Node.js environments cannot execute TypeScript directly, the compiler acts as a bridge, converting the developer-friendly TypeScript syntax into a format the machine can understand. how to install typescript? step 1 : install nodejs => (https://nodejs.org/en/download) step 2 : npm => javascript/typescript packages(libraries)(default one which comes with nodejs) => yarn , pnpm third party libraries what are npm , yarn pnpm? In the JavaScript ecosystem, npm, Yarn, and pnpm are all package managers. They are tools used to install, update, and manage the third-party libraries (dependencies) your code needs to run. (typescript , express) Install typescript npm install -g typescript check typescript installed or not with this command tsc --version => Version 6.0.3 // what is compiled language in typescript?(AOT) The distinction between compile-time and runtime in TypeScript is fundamental to understanding how the language works. TypeScript provides safety during development, but that safety disappears once the code is executed as JavaScript. 1. Compile Time (Development Phase) Compile time is the period when the TypeScript compiler (tsc) analyzes your source code. Its primary job is to find errors and transform TypeScript into JavaScript. Static Type Checking: This is when TypeScript checks if you are assigning the correct types. For example, if you try to assign a string to a number variable, the TypeScript Compiler will flag a "compile-time error" and often stop the build. Type Erasure: A critical concept in TypeScript is that types are erased during compilation. Interfaces, type aliases, and type annotations are completely removed. The resulting JavaScript file has no idea what a User interface or a string | number union was. Early Bug Detection: Catching errors at this stage is preferred because it prevents broken code from ever reaching the user. According to research cited by Swizec Teller, static typing significantly reduces "code smells" and detectable bugs. Runtime (Execution Phase) Runtime is the period when the compiled JavaScript code is actually running in a browser or on a server (Node.js). No Native Type Safety: Because types were erased at compile-time, there is no native TypeScript engine to stop you from performing invalid operations at runtime. If an API returns a null when your TypeScript code expected a User object, the application may crash with an error like Cannot read property 'name' of null. Unpredictable Data: Data from external sources (API calls, user input, local storage) is not checked by TypeScript at runtime. You must "promise" the compiler that the data matches your types, but if it doesn't, the compiler won't be there to catch it. Runtime Errors: Errors like ReferenceError or TypeError (e.g., x is not a function) occur at this stage
