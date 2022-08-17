---
title: Variables
description: A tutorial about variables in js
---
A variable is the way in which we can name and store our data in programing languages

To create a variable in JS we use the `let` keyword.

```javascript
let age = 23;
//
```
---

Here we would say we are:

"`declaring` a variable named myAge and `assigning` it the value 23"

We can break the example above into separate parts.

```javascript
// can't use age before it is defined
// console.log(age)
// ERROR 'age' is not defined

// declaring a variable 'age'
let age;
console.log(age); // undefinded

// assinging age the value 45
age = 45;
console.log(age); //45

// reassinging age to the value 50
age = 50;
console.log(age); //50
```

In the example above we see that we can't use a variable before we use it. This is because javascript does not know what it is and throws an not defined error. When we say `let age` we declare the variable and store it in memory. Now JavaScript know about that variable and doesn't throw an error when we try to use it. It however if we do it this way it will be given the `undefined` value by default.

_NOTE: You might see in other examples this being done with the `var` keyword. This is an older way of doing things works much like the `let` keyword, altough there are differnces which we will skip for now._

```javascript
var myAge = 23;
```

## Variable Names

There are a few rules to know about variable names in JavaScript:

1. The name must contain only letters, digits, or the symbols $ and \_.
2. The first character may not be a digit.
3. [reserved](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) words are not allowed to be used as variable names
4. Variable names are case sensitve

### Naming a variable correctly: code readibilty

There is another subtle and difficult part to naming a variable. Coming up with a name that represent what that variable is. Variables names should be descriptive and intuitive.

## Constants

Many times we have data whoms value is not going to change but we still need to store it in a variable so we can use it in our app. for this we use the `const` keyword. This will prevent our constant from unintentionaly getting reassigned in our app

```javascript
const pi = 3.14;

//pi = 2 // ERROR can't reassing a const
```