---
title: Variables
description: A tutorial about variables in js
---
Variables are a way we can name, store and access our data in our program.  

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
console.log(age); // undefined

// assigning age the value 45
age = 45;
console.log(age); //45

// reassigning age to the value 50
age = 50;
console.log(age); //50
```

In the example above we see that we can't use a variable before we use it. This is because javascript does not know what it is and throws a 'not defined error'. When we say `let age` we declare the variable and store it in memory. Now JavaScript knows about that variable and doesn't throw an error when we try to use it. However, if we do it this way it will be given the `undefined` value by default.  This can be a little confusing but remember `undefined` is a type that javascript knows about.

_NOTE: You might see in other examples this is done with the `var` keyword. This is an older way of doing things that will work much like the `let` keyword.  Although there are differences between let and var we will skip going over those for now._

```javascript
var myAge = 23;
```

## Variable Names

There are a few rules to know about variable names in JavaScript:

1. The name must contain only letters, digits, or the symbols $ and \_.
2. The first character may not be a digit.
3. [reserved](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) words are not allowed to be used as variable names
4. Variable names are case sensitive

### Naming a variable correctly: code readability

There is another subtle and difficult part to naming a variable. Coming up with a name that represents what that variable is. Variables' names should be descriptive and intuitive.

## Constants

Many times we have data whose value is not going to change but we still need to store it in a variable so we can use it in our app. for this we use the `const` keyword. This will prevent our constant from unintentionally getting reassigned in our app

```javascript
const PI = 3.14;

//PI = 2 // ERROR can't reassign a const
```

We also have variables where we might not know the value in advance and it could vary but once it is defined we expect it not to change in the context of our app.  An example of this could be a username.  Before a user logins to a site, we don't know their user name but once they are logged in we don't expect that username to change. so we would use const here as well.

```javascript
const username = getUserName() // assume this returns 'Alice'

// username = 'bob' // ERROR can't reassign a const
```

### When to capitalize

You might have noticed the difference in capitalization.  Why is PI all caps lock and username not?  It is a convention in JS that if we know the value beforehand we use all caps.  This is the case with pi.  Pi is always 3.14.  username on the other hand could be anything, 'hello-kitty', 'bob34', etc.  We don't know the value at the time we are writing the code.