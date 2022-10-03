//Arithmetic Operators
// Arithmetic operators are used to perform arithmetic operations on numbers
// Assignment Operators 
// the assignment operator is used to assign a value to a variable

// 1. = - Assigns a value to a variable
let x = 5;


// 2. += - Adds a value to a variable
x += 5; // x = 10

// 3. -= - Subtracts a value from a variable
x -= 5; // x = 5

// 4. *= - Multiplies a variable by a value
x *= 5; // x = 25

// 5. /= - Divides a variable by a value
x /= 5; // x = 5

// 6. %= - Divides a variable by a value and returns the remainder
x %= 5; // x = 0

// 7. **= - Raises a variable to a power
x = 2
x **= 5; // x = 32


// Math in JS
// 1. Addition - add two numbers together
1 + 1 // 2

// 2. Subtraction - subtract two numbers
//
2 - 1 // 1

// 3. Multiplication - multiply two numbers
2 * 2 // 4


// 4. Division - divide two numbers
4 / 2 // 2

// 5. Modulus - return the remainder of two numbers
5 % 2 // 1

// 6. Exponentiation - raise a number to a power
2 ** 3 // 8

// 7. Increment - add one to a number
let score = 1
score++ // 2

// 8. Decrement - subtract one from a number
let num = 2
num-- // 1

// 9. Order of Operations
// 10. Math Object - Math.PI, Math.random(), Math.floor(), Math.ceil(), Math.round()... more on MDN.




// Booleans
// 1. Boolean - a data type that can only be true or false

// Comparison Operators - operators that compare two values and return a boolean
//    - Equal to ==
let age = 18
age == 18 // true

//    - Not equal to: !=
let color = 'red'
color != 'blue' // true

//   - Strict equal to: ===
let number = 18
number === '18' // false

//   - Strict not equal to: !==
let y = 18
y !== '18' // true

//    - Greater than - >
let years = 18
years > 18 // false

//    - Less than - <
let firstName = 'John'
firstName < 'Jane' // true

//    - Greater than or equal to - >=
let money = 100
money >= 100 // true

//    - Less than or equal to - <=
let change = 1
change <= 1 // true

// ? - ternary operator - a shorthand way to write an if statement
//    - condition ? true : false
//    - if the condition is true, the first value is returned, otherwise the second value is returned
let isOver18 = age >= 18 ? true : false 

// 3. Logical Operators
//    - And - &&
if(age > 18 && color == 'red') {
    //if age is greater than 18 AND color is red
}
//    - Or - ||
if(age > 18 || color == 'red') {
    //if age is greater than 18 OR color is red, do something
}
//    - Not - !
if(!(age > 18)) {
  // if age is NOT greater than 18, do something
}
// 4. Truthy and Falsy
//    - Falsy
//      - false
//      - 0
//      - ""
//      - null
//      - undefined
//      - NaN

//    - Truthy
//      - true
//      - 1
//      - "0"
//      - "false"   
//      - "null"
//      - "undefined"
//      - "NaN"

// 5. Ternary Operator - a shorthand way to write an if statement
// 6. If Statements - a way to control the flow of your code
// 7. Else Statements - a way to control the flow of your code
// 8. Else If Statements - a way to control the flow of your code
// 9. Switch Statements - a way to control the flow of your code
// 10. Ternary Operator



// 3. Equality Operators
// 4. Strict Equality Operators
// 5. Logical Operators
// 6. Ternary Operator
// 7. Truthy and Falsy
// 8. Short Circuit Evaluation
let a = 10
let t = a || 5
console.log(t) // 10

let b = 10
let z = b || 5
console.log(z) // 5



// 9. Type Coercion

// Combining strings

// Old way concatenation :(
// join strings 'Hello' and 'World' with concatenation
let  world1 = 'World';
let helloWorld1 = 'Hello' + world1;
console.log(helloWorld1);


// New way concatenation :)
// join strings 'Hello' and variable world with value 'world' with interpolation
let world2 = 'World'
let helloWorld2 = `Hello ${world}`;
console.log(helloWorld2);


// Math Object - The math object is a built in object that has properties and methods for mathematical constants and functions


// Logical Operators - Logical operators are used to determine the logic between variables or values

// Type Operators - Type operators are used to determine the type of a variable or a value
// typeof - returns the type of a variable or a value
typeof 5 // number
typeof 'Hello' // string
typeof true // boolean
typeof undefined // undefined
typeof null // object
typeof {} // object
typeof [] // object
typeof function() {} // function

// instanceof- instanceof is used to determine if an object is an instance of a constructor
[] instanceof Array // true
new Date() instanceof Date // true


// Operators in JS - Operators are used to assign values, compare values, perform arithmetic operations, and more
// Assignment Operators - Assignment operators assign values to JavaScript variables
// Arithmetic Operators - Arithmetic operators are used to perform arithmetic operations on numbers
// Comparison Operators - Comparison operators are used to compare two values
// Logical Operators - Logical operators are used to determine the logic between variables or values
// Type Operators - Type operators are used to determine the type of a variable or a value
// instanceof - instanceof is used to determine if an object is an instance of a constructor  
// typeof - returns the type of a variable or a value


// Boolean Logic - Boolean logic is used to determine the logic between variables or values

// Conditionals - Conditionals are used to control the flow of your code
//
// if statements are used to execute a block of code if a specified condition is true

// if else statements are used to execute a block of code if a specified condition is true, and another block of code if the same condition is false

// else if statements are used to add another condition to an if else statement

// switch statements are used to execute different actions based on different conditions
 
// ternary operator is a shorthand way to write an if statement

// Truthy and Falsy - Truthy and falsy are used to determine the logic between variables or values

// Short Circuit Evaluation - Short circuit evaluation is used to determine the logic between variables or values




// if(condition) {  
//   // code to be executed if condition is true
// }

let testScore = 75
if(testScore >= 70) {
  console.log('You passed!')
}

// else - else statements are used to execute a block of code if the same condition is false

// if(condition) {
//   // code to be executed if condition is true
// } else {
//   // code to be executed if condition is false
// }

if(testScore >= 70) {
  console.log('You passed!')
}else{
  console.log('You failed!')
}
// else if - else if statements are used to execute a block of code if a different condition is true
if(testScore >= 90) {
  console.log('A')
} else if(testScore >= 80) {     
  console.log('B')
} else if(testScore >= 70) {
  console.log('C')
} else if(testScore >= 60) {
  console.log('D')
} else {      
  console.log('F')
}

// switch - switch statements are used to execute different actions based on different conditions
let grade = 'A'
switch(grade) {
  case 'A':
    console.log('You got an A!')
    break
  case 'B':
    console.log('You got a B!')
    break
  case 'C':
    console.log('You got a C!')
    break
  case 'D':
    console.log('You got a D!')
    break
  case 'F':
    console.log('You got an F!')
    break
  default:
    console.log('Not a valid grade')
}

// Truthy and Falsy - Truthy and falsy are values that are considered true or false when evaluated in a boolean context
// Short Circuit Evaluation - Short circuit evaluation is used to determine the logic between variables or values