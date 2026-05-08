## How to declare variables in JS or TS

_We can declare variables in JS or TS using var, let or const._

## What is ECMAscript

_ECMAScript is a standardized scripting language specificatio, managed by ECMA International, that serves as the foundation for technologies like JS, ActionScript and JSCript. It defines teh core syntax, types and objects with annual updates. Ensuring language evolution ofren requiring tools like Babel for Compatibility._

ES5 is browser standard version
ES6 is Development version here we have Babel

```typescript
//Old ES5 way ES stands for EcmaScript which gives specification to JavaScript
var user = "Shanu";
// Modern JS ES6 or ES2015
let user1 = "Sundari";
const user2 = "Kalee";
```

_var is a function scope (Local Scope) and global scope (Global Variable)_

_let and const are block scope means only available within {}_

## Difference between var let and const

_var can be declared redeclared but using let we can declare only we can't redeclare the variable. Re-initialization is possible for both._

## Hoisting

_hoisting is a JS mechanism where declarations will be moved top of the code or scope before its execution. Variable declared with var are hoisted to the top of their scope and initialized with a value of undefined._

_Hoisting is a JS mechanism where the interpreter appears to move declarations (variables, functions and classses) to the top of their containing scope (global or function) before the code is executed._

_Variables created with let and const will not follow hoisting instead it will be waiting in TDZ (Temporal Dead Zone)_

## Temporal Dead Zone
