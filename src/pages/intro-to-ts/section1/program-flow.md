---
title: "Program Flow"
description: "Learn about conditions and loops"
---

Learn about conditions and loops

## Conditions

Conditions are used to check if a certain condition is true or false. If the condition is true, the code inside the condition will be executed. If the condition is false, the code inside the condition will not be executed. There are three types of conditions in TypeScript:

### If

The if statement is used to check if a condition is true or false. If the condition is true, the code inside the if statement will be executed. If the condition is false, the code inside the if statement will not be executed.

```ts
// General syntax
if (condition) {
  // code to be executed if condition is true
}

// Example
let loggedIn:boolean = true;

console.log("Before if statement");

if (loggedIn) {
  console.log("You are logged in");

}
console.log("After if statement");
// Output:
// Before if statement
// You are logged in
// After if statement

```

### If-Else

The if-else statement is used to check if a condition is true or false. If the condition is true, the code inside the if statement will be executed. If the condition is false, the code inside the else statement will be executed.

```ts
// General syntax
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}

// Example
let loggedIn:boolean = false;

console.log("Before if else statement");

if (loggedIn) {
  console.log("You are logged in");
} else {
  console.log("You are not logged in");
}

console.log("After if else statement");

// Output:
// Before if else statement
// You are not logged in
// After if else statement

```

### If-Else-If

The if-else-if statement is used to check if a condition is true or false. If the condition is true, the code inside the if statement will be executed. If the condition is false, the code inside the else-if statement will be executed. If the condition is false, the code inside the else statement will be executed.

```ts
// General syntax
if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition1 is false and condition2 is true
} else {
  // code to be executed if condition1 and condition2 are false
}

// Example
let number:number = 5;

console.log("Before if else if statement");

if(number > 10) {
  console.log("Number is greater than 10");
} else if(number < 10) {
  console.log("Number is less than 10");
} else {
  console.log("Number is equal to 10");
}

// Output:
// Number is less than 10
```

## Examples

If statements might seem simple but they have some gotchas. let's look at some examples.

### Incorrect logic

```ts
// checking if someone can gamble
let age:number = 18;

if (age > 21) {
  console.log("You can gamble");
} else{
  console.log("You can't gamble");
}

// Output:
// You can gamble

// What happens if the age is 21?
let age = 21;

if (age > 21) {
  console.log("You can gamble");
} else{
  console.log("You can't gamble");
}

// Output:
// You can't gamble
```

This seems correct and it is syntactically correct. But what if the age is 21? The code will not be executed. This is because the condition is false. This is a common mistake where we as the coder write incorrect conditions.  
 

```ts
// What happens if the age is 21?
let age:number = 21;

if (age >= 21) {
  console.log("You can gamble");
} else{
  console.log("You can't gamble");
}

// Output:
// You can gamble
```

### Incorrect order

The order of the if-else statements is important. If the order is incorrect, the code will not work as expected.

```ts

let age:number = 21;

if (age >= 18) {
  console.log("You can vote");
} else if (age > 21) {
  console.log("You can gamble");
} else {
  console.log("You can't do anything");
}

// Output:
// You can vote
// This is incorrect because the age is 21 and the person can gamble
```

This is incorrect because the age is 21 and the person can gamble. The order of the if-else statements is important. If the order is incorrect, the code will not work as expected.

```ts
let age:number = 21;

if (age >= 21) {
  console.log("You can gamble");
} else if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't do anything");
}
// Output:
// You can gamble
```

