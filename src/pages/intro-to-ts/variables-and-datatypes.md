---
title: "Variables and Datatypes"
description: "Learn about variables and datatypes in TypeScript."
---

Variables and Datatypes are the building blocks of any programming language. Variables are used to store data, and datatypes are used to define the type of data that can be stored in a variable. Both JavaScript and TypeScript have a number of primitive datatypes that are used to represent the most common data types in JavaScript. These datatypes include `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.  TypeScript also has a number of other datatypes that are used to represent more complex data types. These datatypes include `any`, `unknown`, `never`, `void`, `object`, `array`, `tuple`, `enum`, and `function`.

## Variables

Variables are used to store data. In TypeScript, variables are declared using the `let` or `const` keyword. The `let` keyword is used to declare a variable that can be reassigned. Variables can be reassigned using the `=` operator.  Variables cannot be reassigned using the `=` operator. The `const` keyword is used to declare a variable that cannot be reassigned.

**Note: you might see the `var` keyword used to declare variables in some older JavaScript code. `var` is similar to `let`, but it has some differences that we will not cover in this course.**


### Variables properties

Variables have these properties:
1. Variables have a name.
2. Variables have a type.
3. Variables have a value.
4. Variables have a scope. (we will cover this later)
5. Variables defined with `let` can be reassigned.
6. Variables defined with `const` cannot be reassigned.



```ts

// Variables

// general syntax
// let/const variableName: variableType = variableValue;

let likes: number = 0;
// the name of the variable is `likes`
// the type of the variable is `number`
// the value of the variable is `0`
// the scope of the variable is `global` meaning that it can be accessed anywhere in this file

// we can reassign the value of a variable defined with `let`
likes = 1;
console.log(likes); // 1

// we cannot change the type of a variable

// Error: Type 'string' is not assignable to type 'number'.
likes = '1'; 

const username: string = 'John';
// the name of the variable is `username`
// the type of the variable is `string`
// the value of the variable is `'John'`
// the scope of the variable is `global` meaning that it can be accessed anywhere in this file

console.log(username); // 'John'

// we cannot reassign the value of a variable defined with `const`

// Error: Cannot assign to 'username' because it is a constant.
username = 'Jane'; 

// this line will not be executed because the above line will throw an error
console.log(username); 

```

### Variable names

Naming variables in JavaScript is not as simple as it might seem. Variable names should be descriptive and help make our code more readable.  If I want to store some data representing a score I should have the variable name match that data. There are also a number of rules that must be followed when naming variables. These rules are:
1. Variable names cannot be reserved keywords. list of reserved keywords [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords).
2. Variable names cannot contain spaces.
3. Variable names must begin with a letter, an underscore (_) or a dollar sign ($).
4. Variable names can only contain letters, numbers, underscores, or dollar signs.
5. Variable names are case sensitive.


```ts

// Valid variable names
let x:number = 0;
let _x:number = 0;
let $x:number = 0;
let x1:number = 0;
let x_x:number = 0;


// names that cause errors
// let string: number = 0; // Error: string is a reserved keyword
// let 1ds: number = 0; // Error: variable names cannot start with a number
// let h#sd: number = 0; // Error: variable names cannot contain special characters

// Variable names
// meaningful variable names
let yo: number = 0; // bad variable name: what is yo?
let likes: number = 0; // good variable name: likes is descriptive

let asdf$$123DSFSD_jflkjasdlfk: number = 0; // valid but horrible variable name: 
let firstName: string = 'John'; // good variable name: firstName is descriptive
let isAuthorized: boolean = true; // good variable name: isAuthorized is descriptive

```

### Let vs Const

The `let` and `const` keywords are used to declare variables. The `let` keyword is used to declare a variable that can be reassigned. The `const` keyword is used to declare a variable that cannot be reassigned. It can be helpful to think of `let` as meaning "let me change the value of this variable" and `const` as meaning "this variable cannot be changed".  When we say "changed" we are referring to the value of the variable in the context of the application.

```ts
// pretend user logs in here
const artist: string = 'Britney Spears';
const birthYear: number = 1981;
let fans: number = 1000000;
let songPlays: number = 1000000000;

// in our application we might want to update the number of fans or song plays
// but we don't want to change the artist or birth year
```

Sometimes we have constants that we know the value before-hand.  This can be things like the number PI, e, or Earth's radius, or the number of seconds in a hour.  In these cases we can use the `const` and we upcase the variable name to indicate that it is a pre-defined constant.

```ts

// these are constants that we know the value of before hand
// so we upcase the variable name.
 const PI: number = 3.141592653589793;
 const E: number = 2.718281828459045;

 const EARTH_RADIUS: number = 6371;

// artist is lowercase because artist could be any artist
// we might not know the artist before hand, but we don't want to change it after it is set.
 const artist: string = 'Britney Spears';
 ```