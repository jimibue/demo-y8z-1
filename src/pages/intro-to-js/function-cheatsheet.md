---
title: Function Cheatsheet
description: A cheatsheet for functions in JavaScript
---

## Function Declaration

A function declaration defines a named function. It consists of the function keyword, followed by:

  * The name of the function.
  * A list of parameters to the function, enclosed in parentheses and separated by commas.
  * The JavaScript statements that define the function, enclosed in curly brackets, {...}.

```js

function square(number) {
  return number * number;
}

```

## Function Expression

A function expression defines a function as part of a larger expression syntax. It consists of the function keyword, followed by:

  * A list of parameters to the function, enclosed in parentheses and separated by commas.
  * The JavaScript statements that define the function, enclosed in curly brackets, {...}.

```js

const square = function(number) { return number * number }
const x = square(4) // x gets the value 16

```

## Arrow Function

An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

```js

const square1 = (number) => { 
    return number * number
}

// with implicit return (works the same as above)
const square2 = (number) => number * number
```

## Function Parameters

A function can be invoked with any number of arguments, no matter how many parameters it was defined to accept. If the function is invoked with more arguments than there are parameters, the extra arguments are ignored. If the function is invoked with fewer arguments than there are parameters, the missing arguments are set to undefined.

```js
function greet(greeting, name) {
  console.log(`${greeting} ${name}`);
}
```

## Default Parameters

Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.

```js

function greet(greeting = 'Hello', name = 'friend') {
  console.log(`${greeting} ${name}`);
}

```

## Return Statement

The return statement ends function execution and specifies a value to be returned to the function caller.

```js


function sum(a, b) {
  return a + b;
}

```

## Function Scope

Variables defined inside a function are not accessible (visible) from outside the function.

```js

function myFunction() {
  var carName = "Volvo";
}

console.log(carName); // will throw an error

```

## Function Hoisting

Function declarations are hoisted in JavaScript. You can use a function declaration before you declare it.

```js

// code works because the function is hoisted
carName("Volvo");

function carName(name) {
  console.log(name);
}

```

## Higher Order Functions

A higher-order function is a function that can take another function as an argument, or that returns a function as a result.

```js

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function calculator(x, y, operator) {
  return operator(x, y);
}

calculator(2, 3, add); // 5
calculator(2, 3, multiply); // 6

```

## sandbox

```js
//
const q = () => 1
const r = a => a
const s = (a, b) => [a,b]
const t = () => q
const u = () => q()

console.log(q())
// 1
console.log(r('yo'))
// yo

console.log(s('yo', 'hi'))
// [ 'yo', 'hi' ]

console.log(t())
// [Function: q]

console.log(u())
// 1






```
## DIFFERENCES BETWEEN RETURN AND CONSOLE.LOG

let's think in real world terms.  I go to a vending machine. for simplicity this machine only takes mon and has 3 options 'a' 'b' and 'cancel'.  


```js 
 const vendingMachine = (change, option) => {
  if (change >= 50) {
    if (option === 'a') {
      return 'you got a'
    } else if (option === 'b') {
      return 'you got b'
    } else {
      return 'invalid option'
    }
  } else {
    return 'not enough change'
  }

  // doesn't return anything
  // but has a side effect
  const cool()=>{
      while(temp > 45){
        // all the inner workings of the machine
      temp--
    }
  }

  const displayMessage(message) => {
    console.log('hello')
  }

```

## why do we need a function to take in a function?

- a click handler
- sorting
- filtering

```js
