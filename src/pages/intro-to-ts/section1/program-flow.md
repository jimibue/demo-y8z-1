---
title: 'Program Flow'
description: 'Learn about conditions and loops'
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
let loggedIn: boolean = true

console.log('Before if statement')

if (loggedIn) {
  console.log('You are logged in')
}
console.log('After if statement')
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
let loggedIn: boolean = false

console.log('Before if else statement')

if (loggedIn) {
  console.log('You are logged in')
} else {
  console.log('You are not logged in')
}

console.log('After if else statement')

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
let number: number = 5

console.log('Before if else if statement')

if (number > 10) {
  console.log('Number is greater than 10')
} else if (number < 10) {
  console.log('Number is less than 10')
} else {
  console.log('Number is equal to 10')
}

// Output:
// Number is less than 10
```

## Examples

If statements might seem simple but they have some gotchas. let's look at some examples.

### Incorrect logic

```ts
// checking if someone can gamble
let age: number = 18

if (age > 21) {
  console.log('You can gamble')
} else {
  console.log("You can't gamble")
}

// Output:
// You can gamble

// What happens if the age is 21?
let age = 21

if (age > 21) {
  console.log('You can gamble')
} else {
  console.log("You can't gamble")
}

// Output:
// You can't gamble
```

This seems correct and it is syntactically correct. But what if the age is 21? The code will not be executed. This is because the condition is false. This is a common mistake where we as the coder write incorrect conditions.

```ts
// What happens if the age is 21?
let age: number = 21

if (age >= 21) {
  console.log('You can gamble')
} else {
  console.log("You can't gamble")
}

// Output:
// You can gamble
```

### Incorrect order

The order of the if-else statements is important. If the order is incorrect, the code will not work as expected.

```ts
let age: number = 21

if (age >= 18) {
  console.log('You can vote')
} else if (age > 21) {
  console.log('You can gamble')
} else {
  console.log("You can't do anything")
}

// Output:
// You can vote
// This is incorrect because the age is 21 and the person can gamble
```

This is incorrect because the age is 21 and the person can gamble. The order of the if-else statements is important. If the order is incorrect, the code will not work as expected.

```ts
let age: number = 21

if (age >= 21) {
  console.log('You can gamble')
} else if (age >= 18) {
  console.log('You can vote')
} else {
  console.log("You can't do anything")
}
// Output:
// You can gamble
```

### Nested if-else

Nested if-else statements are if-else statements inside another if-else statement. Nested if-else statements are used when we have multiple conditions to check.

```ts
let age: number = 21
let hasDrivingLicense: boolean = true

if (age >= 21) {
  // in this nested if else statement age is greater than 21
  if (hasDrivingLicense) {
    console.log('You can gamble and drive')
  } else {
    console.log("You can gamble but can't drive")
  }
} else if (age >= 18) {
  // in this nested if else statement age is greater than 18, less than 21
  if (hasDrivingLicense) {
    console.log('You can vote and drive')
  } else {
    console.log("You can vote but can't drive")
  }
} else {
    // in this nested if else statement age is less than 18
    if (hasDrivingLicense) {
        console.log("you can drive")
    } else {
        console.log("You can't do anything")
    }
}
```

## Loops

Loops are used to execute a block of code multiple times. There are three types of loops in TypeScript:

### For

The for loop is used to execute a block of code multiple times. The for loop is used when we know the number of times the code should be executed.

```ts
// General syntax
for (initialization; condition; increment) {
  // code to be executed
}

// Example
for (let i = 0; i < 5; i++) {
  console.log(i)
}
// Output:
// 0
// 1
// 2
// 3
// 4
```

### While

The while loop is used to execute a block of code multiple times. The while loop is used when we don't know the number of times the code should be executed.

```ts
// General syntax
while (condition) {
  // code to be executed while condition is true
}

// Example
let i: number = 0
while (i < 5) {
  console.log(i)
  i++
}
// Output:
// 0
// 1
// 2
// 3
// 4
```

### for-in

The for-in loop is used to execute a block of code multiple times. The for-in loop is used when we want to iterate over the properties of an object.

```ts
// General syntax
for (key in object) {
  // code to be executed
}

// Example
let person:{
    name: string,
    age: number
} = {
    name: "John",
    age: 21
}

for (let key in person) {
    console.log(key)
    console.log(person[key])
}

// Output:
// name
// John
// age
// 21
```


### for-of

The for-of loop is used to execute a block of code multiple times. The for-of loop is used when we want to iterate over the elements of an array.

```ts

// General syntax
for (element of array) {
  // code to be executed
}

// Example
let numbers: number[] = [1, 2, 3, 4, 5]

for (let number of numbers) {
  console.log(number)
}

// Output:
// 1
// 2
// 3
// 4
// 5
```





