---
title: Functions
description: A tutorial about functions in js
---

Functions are a way to group code together.  Functions are reusable and can be called multiple times.  Functions can take in parameters and return a value.  Functions are defined using the `function` keyword.  For example:

```javascript
// Function in JS
// 1. Function declaration
function sayHello() {
  console.log("Hello World")
}

// 2. Function expression
const sayHello = function() {
  console.log("Hello World")
}

// 3. Arrow function
const sayHello = () => {
  console.log("Hello World")
}
```
These 3 functions are equivalent.  The first function is a function declaration.  The second function is a function expression.  The third function is an arrow function.  There are some differences between these 3 functions.  We will skip over the differences for now.  We will cover the differences in a later lesson.

## Calling a Function
To call a function, you need to use the function name followed by `()`.  For example:

```javascript

// define a function named sayHello
// we define a function once and can call it multiple times
function sayName() {
  console.log("My name is John")
}

// calling the function
sayName()
// My name is John
sayName()
// My name is John
```



## Parameters
Parameters are variables that are passed into a function.  Parameters are separated by commas.  These make the function more flexible and reusable. For example:

```javascript
// defining a function with parameters
function getFullName(firstName, lastName) {
  console.log(`My name is ${firstName} ${lastName}`)
}

// calling the function
getFullName("John", "Doe")
// My name is John Doe
getFullName("Jane", "Doe")
// My name is Jane Doe

// calling the function with too many parameters
getFullName("John", "Doe", "Smith")

// calling the function with too few parameters
getFullName("John")
// My name is John undefined
```
 
the order of parameters matters.  The first parameter is assigned to the first parameter in the function definition.  The second parameter is assigned to the second parameter in the function definition.  If there are more parameters than parameters in the function definition, the extra parameters are ignored.  If there are fewer parameters than parameters in the function definition, the missing parameters are assigned the value `undefined`.

## Arguments
Arguments are the values that are passed into a function.  Arguments are separated by commas.  For example:

```javascript
// defining a function with parameters
function getFullName(firstName, lastName) {
  console.log(`My name is ${firstName} ${lastName}`)
}

// passing in arguments
// John and Doe are the arguments
getFullName("John", "Doe")
```


## Return
We Normally don't use console.log() in functions.  We use return. The return statement is used to return a value from a function.    For example:

```javascript
// a function that returns a value
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
} 

// calling the function
// we can store the return value in a variable
let fullName = getFullName("John", "Doe")
console.log(fullName)
// John Doe

// we can also use the return value in another function
function sayFullName(firstName, lastName) {
  let fullName = getFullName(firstName, lastName)
  return `My name is ${fullName}`
}

// we can pass a function call as a parameter
console.log(sayFullName("John", "Doe"))
// My name is John Doe

```

we can have only one return statement in a function.  If we have multiple return statements, the first return statement will be executed and the rest of the function will be ignored.  For example:

```javascript
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`

  // dead code - this code will never be executed
  // returns are like break statements in switch statements, they stop the execution of the function
  console.log("This will never be executed")
}

console.log(getFullName("John", "Doe"))
// John Doe


// two return statements, only one will be executed
const getTemperature = (temp) => {
  if (temp > 100) {
    return "Hot"
  }
  return "Cold"
}

let temperature = getTemperature(50)
console.log(temperature)
// Cold

temperature = getTemperature(150)
console.log(temperature)
// Hot
```

## Functions scope

Functions have their own scope.  Variables defined inside a function are not accessible outside of the function.  Variables defined outside of a function are accessible inside of the function.  For example:



```javascript
let name = "John"

function sayHello() {
  let message = `Hello ${name}`
  console.log(message)
}

 sayHello() // Hello John

console.log(message) // ReferenceError: message is not defined
```

## Naming Functions

Functions should be named using camelCase.  They should be named using a verb and names
should describe what the function does.  For example:

```javascript
// bad function name
// what does this function do?
function x() {
  // ...
}

// good function name
// what does this function do?
function getUserBalance() {
  // ...
}
```






