---
title: Operators
description: A tutorial about operators in js
---

Operators are used to assign values, compare values, perform arithmetic operations, and more
 - `Assignment operators` assign values to JavaScript variables
 - `Arithmetic operators`  are used to perform arithmetic operations on numbers
- `Comparison operators`  are used to compare two values
 - `Logical operators` are used to determine the logic between variables or values
 - `Type operators` are used to determine the type of a variable or a value


## Arithmetic Operators

Arithmetic operators are used to perform arithmetic operations on numbers

| Operator | Description                  |
| -------- | ---------------------------- |
| +        | Addition                     |
| -        | Subtraction                  |
| \*       | Multiplication               |
| \*\*     | Exponentiation (ES2016)      |
| /        | Division                     |
| %        | Modulus (Division Remainder) |
| ++       | Increment                    |
| --       | Decrement                    |

### Code Demo

```javascript
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
```

## Assignment Operators

The assignment operator is used to assign a value to a variable

| Operator | Example   | Same As      |
| -------- | --------- | ------------ |
| =        | x = y     | x = y        |
| +=       | x += y    | x = x + y    |
| -=       | x -= y    | x = x - y    |
| \*=      | x \*= y   | x = x \* y   |
| /=       | x /= y    | x = x / y    |
| %=       | x %= y    | x = x % y    |
| \*\*=    | x \*\*= y | x = x \*\* y |

### Code Demo

```javascript
// Assignment Operators
// 1. = - Assigns a value to a variable
let x = 5

// 2. += - Adds a value to a variable
x += 5 // x = 10

// 3. -= - Subtracts a value from a variable
x -= 5 // x = 5

// 4. *= - Multiplies a variable by a value
x *= 5 // x = 25

// 5. /= - Divides a variable by a value
x /= 5 // x = 5

// 6. %= - Divides a variable by a value and returns the remainder
x %= 5 // x = 0

// 7. **= - Raises a variable to a power
x = 2
x **= 5 // x = 32
```

## Comparison Operators

Operators that compare two values and return a boolean

| Operator | Description                       |
| -------- | --------------------------------- |
| ==       | equal to                          |
| ===      | equal value and equal type        |
| !=       | not equal                         |
| !==      | not equal value or not equal type |
| &gt;     | greater than                      |
| &lt;     | less than                         |
| &gt;=    | greater than or equal to          |
| &lt;=    | less than or equal to             |
| ?        | ternary operator                  |

### Code Demo

```javascript
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
```

## Logical Operators
Logical operators are used to determine the logic between variables or values

| Operator | Description |
| -------- | ----------- |
| &&       | logical and |
| \|\|     | logical or  |
| !        | logical not |

### Code Demo

```javascript
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
```

## Type Operators

Type operators are used to determine the type of a variable or a value

| Operator   | Description                                                |
| ---------- | ---------------------------------------------------------- |
| typeof     | Returns the type of a variable                             |
| instanceof | Returns true if an object is an instance of an object type |

### Code Demo
```javascript
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
```

## Math Object

The math object is a built in object that has properties and methods for mathematical constants and functions

| Method               | Description                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| abs(x)               | Returns the absolute value of x                                               |
| acos(x)              | Returns the arccosine of x, in radians                                        |
| acosh(x)             | Returns the hyperbolic arccosine of x                                         |
| asin(x)              | Returns the arcsine of x, in radians                                          |
| asinh(x)             | Returns the hyperbolic arcsine of x                                           |
| atan(x)              | Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians |
| atan2(y, x)          | Returns the arctangent of the quotient of its arguments                       |
| atanh(x)             | Returns the hyperbolic arctangent of x                                        |
| cbrt(x)              | Returns the cubic root of x                                                   |
| ceil(x)              | Returns x, rounded upwards to the nearest integer                             |
| cos(x)               | Returns the cosine of x (x is in radians)                                     |
| cosh(x)              | Returns the hyperbolic cosine of x                                            |
| exp(x)               | Returns the value of Ex                                                       |
| floor(x)             | Returns x, rounded downwards to the nearest integer                           |
| log(x)               | Returns the natural logarithm (base E) of x                                   |
| max(x, y, z, ..., n) | Returns the number with the highest value                                     |
| min(x, y, z, ..., n) | Returns the number with the lowest value                                      |
| pow(x, y)            | Returns the value of x to the power of y                                      |
| random()             | Returns a random number between 0 and 1                                       |
| round(x)             | Rounds x to the nearest integer                                               |
| sign(x)              | Returns if x is negative, null or positive (-1, 0, 1)                         |
| sin(x)               | Returns the sine of x (x is in radians)                                       |
| sinh(x)              | Returns the hyperbolic sine of x                                              |
| sqrt(x)              | Returns the square root of x                                                  |
| tan(x)               | Returns the tangent of an angle                                               |
| tanh(x)              | Returns the hyperbolic tangent of a number                                    |
| trunc(x)             | Returns the integer part of a number (x)                                      |

### Code Demo
```javscript
// 1. Math.random() - returns a random number between 0 and 1
Math.random() // 0.123456789
// 2. Math.floor() - rounds a number down to the nearest integer
Math.floor(3.9) // 3

// 3. Math.ceil() - rounds a number up to the nearest integer
Math.ceil(3.1) // 4

// 4. Math.round() - rounds a number to the nearest integer
Math.round(3.5) // 4

// 5. Math.max() - returns the largest number in a list of numbers
Math.max(1, 2, 3, 4, 5) // 5

// 6. Math.min() - returns the smallest number in a list of numbers
Math.min(1, 2, 3, 4, 5) // 1

// 7. Math.pow() - raises a number to a power
Math.pow(2, 3) // 8
// 8. Math.sqrt() - returns the square root of a number
Math.sqrt(4) // 2

// 9. Math.abs() - returns the absolute value of a number
Math.abs(-4) // 4
```
