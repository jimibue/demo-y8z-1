---
title: Conditionals
description: A tutorial about conditionals in js
---

Conditionals are used to control the flow of your code. They allow you to execute a block of code only if a certain condition is met. For example, you can use conditionals to execute a block of code only if a user is logged in.  

## If Statements

If statements are used to execute a block of code only if a certain condition is met. For example, you can use an if statement to execute a block of code only if a user is logged in.  

```javascript
// If statement 
if (condition) {
  // code block to be executed if the condition is true
}
let isLoggedIn = true;
if (isLoggedIn) {
  console.log("You are logged in");
}
```


## if...else Statements

If statements can be extended to include an else statement. The else statement is executed if the condition is false. 

```javascript
// If...else statement
if (condition) {
  // code block to be executed if the condition is true
} else {
  // code block to be executed if the condition is false
}

let isLoggedIn = false;
if (isLoggedIn) {
  console.log("You are logged in");
} else {
  console.log("You are not logged in");
}
```
**Note: only one of the code blocks will be executed.**

## if...else if...else Statements

If statements can be extended to include an else if statement.  

```javascript
// If...else if...else statement
if (condition1) {
  // code block to be executed if condition1 is true
} else if (condition2) {
  // code block to be executed if the condition1 is false and condition2 is true
} else {
  // code block to be executed if the condition1 is false and condition2 is false
}

let isLoggedIn = false;
let isRegistered = true;
if (isLoggedIn) {
  console.log("You are logged in");
} else if (isRegistered) {
  console.log("You are registered");
} else {
  console.log("You are not logged in or registered");
}
```

**Note: only one of the code blocks will be executed.  So if the user was logged in we would only see that first message 'You are logged in'**


## Switch Statements

Switch statements are used to execute a block of code based on the value of a variable.  

```javascript
// Switch statement
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Today is not Monday or Tuesday");
}
```
**Note: the break keyword is used to prevent the code from executing the next case.**
**Note: the default keyword is used to execute a block of code if none of the cases match.**

## Ternary Operator


The ternary operator is a shortcut for an if statement. It is used to execute a block of code based on a condition.  

```javascript
// Ternary operator
condition ? expr1 : expr2

let isLoggedIn = true;
let message = isLoggedIn ? "You are logged in": "You are not logged in";
console.log(message);
```
**note: the ternary operator is often used to assign a value to a variable based on a condition.**

## Logical Operators

Logical operators are used to combine conditional statements. 

 - And Operator - && - both conditions must be true
 - Or Operator - || - either condition must be true
 - Not Operator - ! - reverses the result of the condition
 

```javascript
// Logical operators
// && - logical and
let isLoggedIn = true;
let isRegistered = true;
if (isLoggedIn && isRegistered) {
  console.log("You are logged in and registered");
}

// || - logical or
let isLoggedIn = true;
let isRegistered = false;
if (isLoggedIn || isRegistered) {
  console.log("You are logged in or registered");
}

// ! - logical not
let isLoggedIn = true;
if (!isLoggedIn) {
  console.log("You are not logged in");
}
```

## Logical Operators with Non-Boolean Values

Logical operators can be used with non-boolean values.  

### Truthy and Falsy

In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).  


```javascript
// Truthy and Falsy
let user =  "Jim";
if (user) {
  console.log("You are logged in");
} else {
  console.log("You are not logged in");
}
// You are  logged in

let user1 = null
if (user1) {
  console.log("You are logged in");
} else {
  console.log("You are not logged in");
}
// You are not logged in


let isLoggedIn = 1;
let isRegistered = 1;
if (isLoggedIn && isRegistered) {
  console.log("You are logged in and registered");
}
// You are logged in and registered

```

## Nested Conditionals

Nested conditionals are conditionals that are inside of other conditionals.  

```javascript
// Nested conditionals
let isLoggedIn = true;
let isRegistered = true;
if (isLoggedIn) {
  if (isRegistered) {
    console.log("You are logged in and registered");
  } else {
    console.log("You are logged in but not registered");
  }
} else {
  console.log("You are not logged in");
}
```

**note: nested conditionals can be difficult to read and should be avoided if possible.**

## Short-Circuiting

Short circuiting is a way to prevent a block of code from executing. These can be useful when you want to check if a variable is defined before using it.  

```javascript
// Short circuiting
let user = "Jim";
if (user && user.length > 0) {
  console.log("You are logged in");
} else {
  console.log("You are not logged in");
}
```


```javascript
// Short circuiting with && operator
let isLoggedIn = true;

isLoggedIn && console.log("You are logged in");
// you are logged in

// this could be thought of as a shorthand if statement
if(isLoggedIn) {
  console.log("You are logged in");
}


// Short circuiting with || operator
isLoggedIn = false;
isLoggedIn || console.log("You are not logged in");
```

**Note: the && operator will only execute the code if the first condition is true.**

**Note: the || operator will only execute the code if the first condition is false.**

## Truthy and Falsy Assignment

In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).  

```javascript
// Truthy and Falsy Assignment
let user = "Jim";
let userName = user || "Guest";
console.log(userName);
// Jim

user = null;
userName = user || "Guest";
console.log(userName);
// Guest
```

## The Nullish Coalescing Operator

The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.  

```javascript
// The Nullish Coalescing Operator
let user = null;

let userName = user ?? "Guest";
console.log(userName);
// Guest
```

## The Optional Chaining Operator

The optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid. The ?. operator functions similarly to the chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.  

```javascript
// The Optional Chaining Operator
let user = {
  name: "Jim",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  }
}

let street = user.address?.street;
console.log(street);
// 123 Main St

let zip = user.address?.zip;
console.log(zip);
// undefined
```

**note: the optional chaining operator is useful when you want to check if a property exists before using it.**

## Problem Set
### Problem A. if else statement

1. Create a variable called score and assign it a number.
2. Create an if statement that checks if the score is greater than 100.
3. If the score is greater than 100, log "You win!" to the console.
4. If the score is less than or equal to 100, log "You lose!" to the console.

### Problem A Solution

```javascript
let score = 101;

if (score > 100) {
  console.log("You win!");
} else {
  console.log("You lose!");
}
```

### Problem B. if else if statement

1. Create a variable called score and assign it a number.
2. Create an if statement that checks if the score is greater than 100.
3. If the score is greater than 100, log "You win!" to the console.
4. If the score is less than or equal to 100, create an else if statement that checks if the score is greater than 50.
5. If the score is greater than 50, log "You almost win!" to the console.
6. If the score is less than or equal to 50, log "You lose!" to the console.

### Problem B Solution

```javascript
let score = 101;

if (score > 100) {
  console.log("You win!");
} else if (score > 50) {
  console.log("You almost win!");
} else {
  console.log("You lose!");
}
```

### Problem C. Logical Operators

1. Create a variable called balance and assign it a number.
2. Create a variable called isActive and assign it a boolean.
3. Create a variable called checkBalance and assign it a boolean.
4. Create an if statement that checks if the balance is greater than 0 and isActive is true.
5. If the balance is greater than 0 and isActive is true, log "Your balance is $X." to the console.
6. If the balance is greater than 0 and isActive is false, log "Your account is no longer active." to the console.
7. If the balance is 0, log "Your account is empty." to the console.
8. If the balance is less than 0, log "Your balance is negative. Please contact bank." to the console.
9. Create an else if statement that checks if checkBalance is true.
10. If checkBalance is true, log "Thank you. Have a nice day!" to the console.
11. If checkBalance is false, log "Thank you. Have a nice day!" to the console.

### Problem C Solution

```javascript
let balance = 100;
let isActive = true;
let checkBalance = true;

if (balance > 0 && isActive) {
  console.log(`Your balance is $${balance}.`);
} else if (balance > 0 && !isActive) {
  console.log("Your account is no longer active.");
} else if (balance === 0) {
  console.log("Your account is empty.");
} else {
  console.log("Your balance is negative. Please contact bank.");
}

if (checkBalance) {
  console.log("Thank you. Have a nice day!");
} else {
  console.log("Thank you. Have a nice day!");
}
```






## Variables

Variables are containers for storing data values.   

```javascript
let name = "Jim";
let age = 30;
let isCool = true;
let friends = ["Bob", "Sally", "John"];
let address = {
  street: "123 Main St",
  city: "New York",
  state: "NY"
}
```

