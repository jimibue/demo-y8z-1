---
title: "TypeScript Crash Course"
description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
---

In this lesson, we are going to go over some of the core concepts of coding using TypeScript.  This is not meant to be an exhaustive list of everything you need to know, but it will give you a good foundation to build on.  There is a lot to learn, so don't get discouraged if you don't understand everything right away.  We will go over everything in more detail in later lessons.


## Coding Fundamentals
[Playground Link](https://www.typescriptlang.org/play?ssl=240&ssc=21&pln=239&pc=4#code/PTAEBUHlQJQVQHIQBIEkDKo3hQUVoqAEJzhRICCRkAargHSgBQIokS4y+AMrgGI50uAMLhU7NnxQZQ6VOHwBZCgGl86ODHwBNSHCwU6s3L1G4AInlABybpADi6axCqYmLMMMjnUCe6D5EcwpFXARwCm50dxBYuLiPUGEAewBbVIBTADsAFwBnD3iimM80zNy80ABDACcM6tAAdyqAT1Ac5OqAEy7QLOScjMqO0BbkgFca0ABjZK6MxPAACwBLSrWGvJWsgHMAGwyAWj3t+tn07JyYgCpmZY2NqqZU8b2clePTmbLL5mvgEpFeIeWZZPLJA70PbJHYACgAlIUgbESsszskwRCMlCYaAAGbjLLTd4Y0AbcZ5DK9EYABxq2xyoAmORp40ZIxyS3RmMhzBAAHUzlUsqAKfVORtafTcky2e0uaAAG5VPbjIZNVYHJr1WriobvXayqazeaMDz8lac5nyjbJY1zep5d57PagGqEvIAGlAACM5Y0hVlrIzKeKFczWTl6CVvjzsdC4dZkBkXZ1+Xa9l1rPCANyJAC8AD4sCnoaB0zVMzHQeDIQnYQAWABMuYLxebMYDM2FoDpDNl7IVytV9WSeIaGQAHnShlsMYka1icXCAIygADUoBXrdYRdATc7gdASyqisd4xpNL2bRebxWV51NR243K+XanUXdZh3ollWmPa5PYaVFSpUiqABrUdJlABNQLteo6iqLoqh9A4FwxWt4xhWFrDXTc1w2axvTwrcdzAPcSJXAAufdEXQ+ZQCdFYXTdD0mktJZrU-LCdkSP1GS7f8gxDDIwyglk2SYSi8yRZEAVYAAFGoYRqKpUnxaFGlk5EYyUlS1I05JGjJYZwxqeYpm2DUVmmJZ5XRVJIwyKYpwyaY2XVJ0qkGV91hFKpGOmekaSjRJyyPUEcmU11OXqOl9PUvFNN9NoKW2HZYy6S0VgxFVGJybyMl871oWSGkvWqLJegJIkSTBM1WACO0+iM70uwAKwpRkslE6lOnA-pjM5bzvgY90wXxZT1I6YCRh9AYOlSb0MXqE4euqRkAveTJPTCyrekaLkRUtN0MiqWz1Vi0Bsl6Md7PxZj6hOp0yryaN0LjZccLxFYaidbM81YbivusSlQSzMjY0wkGuhWgG2wev6rl3YswYxLoEdhnrEiu+KdlU9SNixhDCSydLATk+SwHQKL0oKSmUUSCh8ulDLHkYjIAEc1SJUdx1s2pzsGP6GrAQVuxFMVGPSrVuYGIZPVh8ZUPqOXBgq5qmSmH1zvA95pnA4YP0QwZNlp3ZRdkc2dkqXUQKpd9TpnSkZUGSccm9PJxls6pKiyNT1WapCujqPJKTej7ofrawadZ9jOWl3ZZfGeW8nhoGMKXesACInTjxoONAJWVdANWhmzyG91j9L47srYk9VlP1YRvOa4LhPi+T1P3ApuTEkgGlnO8u16YZgEPAHoeOj+6o6kYwfphWPK8haVJ5r2UyRsHmo8TtdS8gXlYfumJlt+8nKJtJFaf0aZJlqmTk6lHM+qoq4VqSO06ckmfzTq9t5LZolPkPV+EtfT1GVPSFCBxKjNWHGqN6TUXKTjUg+H8Cpg7ZSvmfaeG5uhdGGLfPoL4fTOVtlVL+P9TIISGK8UKiRMF1UjlnbCJEWwIwAMwxi9j6KKQsL7MK-HCJsoBDikQRiuGMt53hXhsufecGdPr1hEbcdhKNQANhjFlRUawBGKKjthBsoAwBqPIsWA8iRUhzFeBSUAsIdgrDPPdOoYFtgWSZOOAK2jdEYkRPolhcIACsoAACktEJExinDSFauQl5MP8UI2EKjbgcL8WY0AAAOXuOlWA0FqEvFWo8GYxjyVAwps96hij6vleCRdvIBSsgFc4Tkph4wJowNEbQ7b+0yL0SKVRTgz2GiGaeOolQqjVGaRIXI55dilgcdknR5jTD2HbAKkCCloVYKkFoCAA4mXuj0vm90NnQIWKwVuhpJQKhyC0QeHiTn5LOYkawAApZISwgwHKuvA45Pynkq0SF2KoYcVg7BFP8kcNh3mfOcByIcAKtQ7L2Zke2918y+y2OC18wDVLTxxp0UMjyoV3XWYijIbUjxS2BgmGMCzQDIoDjRS5GUMVvI+UGQGYAaXYUZZkSuxZ2WwuyUCDw5h6kQDuUMbSorEjioKu0KVts55VMdvMH660rq3PuXdZCCrhkNFOSXISNS6iW2THPO24JUV3Vikteylq55WLnvxbU7EWKzDPA-Lk6lVnC3eiAQ4Qbg0eBXIwFlYUxEBUpNzbI0xjkC1UsSMh3pVUjDqM7X4bsox8mptbZV54ajKUJPMXoPo2j132I3VOWsi4TBLmXWB2tdb60NgGsA9K+UZGZdbUAbKYWcsETxWEXaBWgAHXSjIjJd5zB7XHDF2caQrAAF7LqqNnLlUMAmwhnV0MdS7V1PESPS-GokDQ7DnTXDFAADZMqZywZi6NezdPK4SnqnelMdd6ywVirB4YNIbWBNkYFkEhzlc322qRm0OvxQNrzIYwBAYGZ4mtIWSXIGQdhkNrUlZI59DTRP7HB0hItJ2Mh2RQLDNFiPgYxc2F9mdEkUaw2Ojsx6p0MpaMmMFSwcjUeQ320AAA2egTYGNKN5VxjIPGchjpExYwNAHDiJA4YweaWIeyJDTZ0aDQws3ulHFMPEKpKSMCIMkDTE07aqqsuDLB-tXReR8pcCO7HGRrGQFUS8LQaLqYOD2DFUU1TiYMXCDzXmaQtDHUFhYbmTLoCQr5iz-mRQYuMxvDIIXt1rAS3uzde50uUh7opgDiQGyMBLRkDVDs9qVeq10VNlIoMZEza7DBPoXbxoeWSkc0ZGqgDgFVKrpxejkiaxqbIhryXHhBS1cZvWyOcdKTROrI3BOrZ6l0LLTGWilLHRtqkIqx7HYXCeXYNdIVqm6+MspWzjv3YSGFE1AtdhiXm1d0lN3Nn1HLSBC7GDQXYt+GVKezV8yW3CmAkznQpZXRBVirIOKQd4uaiMeHYLf6-MdmS27YYRonj9gMcBk3lmrLqL0FoU720wQ4xeGgqd+PwamBigADNt4ddPU5jpZ9WM7WHiUffHJz9Wtd7ro6BzKZHw8ahaZpPTkXGKVzs6+sLoYrYYzBy3I7S7xzVej1FHLmtGK9d4KV0OlXhv1bq8SOudciRthBSKlmhFJKheW-VL9yRrA9e2+V-WPX1uStKeDyHwDngKAIGsDgYQyAI-2HwFAUAPg+B8FwFocIEBtAKXwL4CA0Q4vGcVHaS0GQkNM8ZyRwTAB2P32FC-F8GGXkjuZjHpKr4eMBiFAcQpd4LqbuPHaWlBjMSYdRXZSsSPX+kjeBMYoybXuEU+S9N+ci39RWSgVHn6JtbvZs45o+IUzr7zzWBL5n0ftlZMerWHy8WZyykpjgHQE2DhTYmw0XAFKmw2cr8ZGzs4DYbfTFDHM5bXL-awGjGoawd6GVYoVgPgQkYkC+IpSmGMBA2qZAipSDR2fGCYYCaNDjO6JzJ3Cod8LDWKB+TobeXeGodSaNQ+Y+doEFcCKZVgGZeoLsUnNZfERAuqbsF0B2YOHGBUGqJA0kAqSCQhKgwWTIYWN+faX0YQ+oUQvg+aLoNoa5dEBiA1DYVydyQYA6T+K6FQi+A5f8AQjGVgX8HgjA0kYOahdoIhGkGQqdbDDocgmZBQuob+GoCaK6UOOhGMEwuwnoWEKoCvZyb0H0CImoeEGI0AAAbz2m8J-gaE3B9E3QAF9qwVQ1oMpjDeDTD247JrBahnxfJrA4svZUh4iMVg5YQVxvQWwF9YRqix0uEe4gA)

For this demo we will use the TypeSript playground website to run examples.  This will let us be able to get started quickly without having to install anything on our computer.  To run in TypeScript Playground, simply add code into the editor and click the "Run" button.  The output will be displayed in the "Logs" panel on the left side of the app.

If you know how, and want to run TypeScript on your computer with VS Code, feel free to, but this demo will not cover that.

### Comments

Comments are a way to add notes to your code. They are ignored by the compiler, so they will not affect the output of your code. There are two types of comments in TypeScript: single-line comments and multi-line comments.

Single-line comments start with `//` and end at the end of the line. Multi-line comments start with `/*` and end with `*/`.

```ts
// This is a single-line comment

/* 
This is a
multi-line comment 
*/

```

### console.log

The `console.log` function is used to print output to the console. We can use this to print out the values while we are testing our code.  Without this or code still runs, but we can't see the output.

 
```ts
console.log('Hello World');
// => Hello World

console.log(42);
// => 42

// we can print out the value of a expression
console.log(1 + 1);
// => 2

// code still runs without console.log
// but we can't see the output
1 + 1;
```

### Program flow

Program flow is the order in which the computer executes statements in a script. We can control the program flow by using conditional statements, loops, and functions.  For now, we just need to know that code runs from top to bottom, one line at a time, and when it reaches the end of the file it stops.

```ts
console.log('first');
console.log('second');
console.log('done');
// => first
// => second
// => done
// the program is done running

```

### Strings

A string is a sequence of characters. We can use single quotes or double quotes to create a string.  Strings are used to represent text, such as names or addresses.

```ts
console.log('String with single quotes');
console.log("string with double quotes");
// => String with single quotes
// => string with double quotes
```


### Operators

Operators are special symbols that perform specific operations on one, two, or three operands, and then return a result. The operands can be variables or values. For example, the addition operator `+` adds two numbers and returns the result.

```ts

// addition
console.log(1 + 2)
// => 3

// subtraction
console.log(2 - 1)
// => 1

// multiplication
console.log(2 * 2)
// => 4

// division
console.log(4 / 2)
// => 2

// modulus (give the remainder of a division)
console.log(5 % 2)
// => 1

// exponentiation
console.log(2 ** 3)
// => 8

```



### Variables

Variables are used to store data in a computer program. They are named containers that store a value. The value can be a number, a string, a boolean, or any other type of data. Variables are declared using the `let` keyword, followed by the name of the variable, and then the value of the variable.

there are 5 parts to a variable declaration:
1. the `let` keyword (can also be `const` or `var`)
2. the name of the variable
3. the type of the variable 
4. the `=` assignment operator
5. the value of the variable

```ts
// here we use let to declare a variable
// myName is the name of the variable
// string is the type of the variable
// 'John' is the value of the variable
// we assign the value 'John' to the variable myName use the = assignment operator
let myName: string = 'John';

// to see the value of a variable, we can use console.log
console.log(myName);
```

to run this code, we can use the following command:

```bash
tsc main.ts && node main.js

## We should see the following output in the terminal
## => John
```

### Data Types

Data types are used to define the type of data that a variable can store. Here are some of them, there are more but we will cover them later.

1. `string` - a sequence of characters, used to represent text.  Strings are surrounded by single quotes or double quotes or backticks.

```ts
let myName: string = 'John';
console.log(myName);
// => John

let food: string = "pizza";
console.log(food);
// => pizza

let greeting: string = `Hello World`;
console.log(greeting);
// => Hello World
```

2. `number` -  used to represent numbers.  Numbers can be integers or floating point numbers.

```ts
let myAge: number = 42;
console.log(myAge);
// => 42

let myHeight: number = 6.2;
console.log(myHeight);
// => 6.2
```

3. `boolean` - used to represent true or false.  Booleans are used in conditional statements.

```ts
let isHappy: boolean = true;
console.log(isHappy);
// => true

let isSad: boolean = false;
console.log(isSad);
// => false
```

4. `undefined` - undefined, used to represent the absence of a value.  Undefined is used when a variable has no value.

```ts
let myVar: undefined = undefined;
console.log(myVar);
// => undefined
```
**Note:** the difference between `null` and `undefined` is that `null` is an assigned value, and `undefined` is a default value.  Don't worry about this if it doesn't make sense right now.

### changing the value of a variable

We can change the value of a variable by using the assignment operator `=`.  There are also shorthand operators that we can use to change the value of a variable, such as `+=` and `++`.


```ts
let upVotes: number = 0;
console.log(upVotes);
// => 0

// change the value of upVotes with the assignment operator
upVotes = 1;
console.log(upVotes);
// => 1

// add 1 to the value of upVotes
upVotes = upVotes + 1;
console.log(upVotes);
// => 2

// ++
// increment the value of upVotes by 1
upVotes++;
console.log(upVotes);
// => 3
```


The `let` keyword is used to declare a variable that can be reassigned. We can reassign the value of a variable by using the `=` assignment operator.  With typescript though, we need to make sure that we are assigning the correct type of value to the variable.  If we try to assign a value of a different type to the variable, we will get an error.

```ts
let favoriteNumber: number = 7;
console.log(favoriteNumber); // => 7

// we can reassign the value of a variable to it's current type
favoriteNumber = 8;
console.log(favoriteNumber); // => 8

// we can not assign a string to a number variable
favoriteNumber = 'nine';
// => error TS2322: Type '"nine"' is not assignable to type 'number'.
```

### Functions

Functions are used to group a set of statements together to perform a specific task.  Functions are declared using the `function` keyword, followed by the name of the function, and then the parameters of the function.  The parameters are the values that are passed into the function.  The parameters are separated by commas.  The function body is surrounded by curly braces `{}`.  The function body is the code that is executed when the function is called.

```ts

// here we declare a function called add
// the function takes two parameters, a and b
// the function body is the code that is executed when the function is called
// this function adds the two parameters together and returns the result
function add(a: number, b: number): number {
  return a + b;
}
```

to call a function, we use the function name followed by parentheses `()`.  We can pass values into the function by separating them with commas.

```ts
// here we call the add function
// we pass the values 1 and 2 into the function
// the function adds the two values together and returns the result
// we assign the result to the variable sum
let sum: number = add(1, 2);
console.log(sum);
// => 3
```

### Comparison Operators

Comparison operators are used for comparing two values.  The result of a comparison operator is a boolean.  Here are some of the comparison operators:

```ts
// equal to (loose equality, does not check type)
console.log(1 == 1);
// => true

console.log(1 == '1');
// => true

// not equal to
console.log(1 != 1);

// equal to (strict equality, checks type)
console.log(1 === 1);
// => true
console.log(1 === '1');
// => false

// greater than
console.log(1 > 2);
// => false

// greater than or equal to
console.log(1 >= 1);
// => true

// less than
console.log(1 < 2);
// => true

// less than or equal to
console.log(1 <= 1);
// => true
```






### Conditionals

Conditionals are used to execute a block of code if a condition is true.  We can use conditionals to make decisions in our code.  We can use conditionals to check if a value is equal to another value, or if a value is greater than or less than another value.  We can also use conditionals to check if a value is true or false.

```ts

// if statement

// if (condition) {
//   console.log('this will be executed');
// }

let score: number = 100;
if (score > 70) {
  console.log('you passed');
}


// if else statement
// if (condition) {
//   console.log('if condition is true, this will be executed');
// } else {
//   console.log('if condition is false, this will be executed');
// }

if (score > 70) {
  console.log('you passed');
} else {
  console.log('you failed');
}

// if else if statement
// if (condition1) {
//   console.log('if condition1 is true, this will be executed');
// } else if (condition2) {
//   console.log('if condition1 is false and condition2 is true, this will be executed');
// } else {
//   console.log('if condition1 and condition2 are false, this will be executed');
// }

if (score > 90) {
  console.log('you got an A');
} else if (score > 70) {
  console.log('you passed');
} else {
  console.log('you failed');
}
```

### Loops

Loops are used to execute a block of code multiple times.  There are two types of loops, `for` loops and `while` loops.  We can use loops to iterate over an array, or to repeat a block of code a certain number of times.

```ts
// for loop
// for (initialization; condition; increment) {
    // run loop body while condition is true
    // and auto increment the value of the variable
// }
    
// count from 0 to 9 with a for loop

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// => 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// while loop
// while (condition) {
    // run loop body while condition is true
// }

// count from 0 to 9 with a while loop
// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }
// => 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

### Arrays

Arrays are used to store a list of values.  The type of the array is the type of the values that are stored in the array.  The type of the array is surrounded by square brackets `[]`.  The array is assigned a value using the `=` assignment operator, followed by the values of the array, separated by commas.  The values of the array are surrounded by square brackets `[]`.

```ts
// here we declare an array called numbers
// the type of the array is number
// the array is assigned the values 1, 2, and 3
let numbers: number[] = [1, 2, 3];

// to access a value in the array, we use the index of the value
// the index of the first value in the array is 0
console.log(numbers[0]);
// => 1
console.log(numbers[1]);
// => 2
console.log(numbers[2]);
// => 3

let names: string[] = ['John', 'Jane', 'Jack'];
console.log(names[0]);
// => John
```

### Objects

Objects are used to store a collection of values.  The type of the object is the type of the values that are stored in the object.  The type of the object is surrounded by curly braces `{}`.  The object is assigned a value using the `=` assignment operator, followed by the values of the object, separated by commas.  The values of the object are surrounded by curly braces `{}`.  The values of the object are assigned a key using the `:` assignment operator, followed by the value of the key.

```ts

// here we declare an object called person
// the type of the object is { name: string, age: number }
// the object is assigned the values name: 'John', age: 30
let person: { name: string, age: number } = { name: 'John', age: 30 };

// to access a value in the object, we use the key of the value
console.log(person.name);
// => John
console.log(person.age);
// => 30

// we can also use bracket notation to access a value in the object
// you can think of this like accessing a value in an array, but instead of using the index, we use the key
console.log(person['name']);
// => John
console.log(person['age']);
// => 30
```


