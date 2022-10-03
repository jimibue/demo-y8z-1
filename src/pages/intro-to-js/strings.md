---
title: Strings
description: A tutorial about strings in js
---

Strings are a primitive data type in JavaScript. A string is a sequence of characters. Strings in JavaScript can be created using single quotes, double quotes, or backticks. The backticks are the most flexible.  For example:

```javascript   
// String in JS
// 1. Single quotes
'Hello World'

// 2. Double quotes
"Hello World"

// 3. Backticks
`Hello World`
```

## Overview
Strings in JavaScript are 0-indexed. This means that the first character in a string is at index 0.  If you try to access a character at an index that does not exist, you will get `undefined`. Example:

```javascript

```javascript   
let str = "Hello World"
str[0] // "H"
str[1] // "e"
str[2] // "l"
str[3] // "l"
str[4] // "o"
str[5] // " "
str[6] // "W"
str[7] // "o"
str[8] // "r"
str[9] // "l"
str[10] // "d"
string[11] // undefined
```

### console.log()
Console.log() will print out the string in the console. For example:

```javascript
console.log("Hello World")
// Hello World

// With two parameters and a variable
let str = "Hello World"
console.log("The string is:", str)
// The string is: Hello World
```

## Joining Strings
You can join strings together using the `+` operator, or interpolation.  For example:


### concatenation
Concatenation is the process of combining strings. For example:

```javascript
let str1 = "Hello"
let str2 = "World"
let str3 = str1 + str2
console.log(str3) // "Hello World"

// or
let  str4 = "Hello"
console.log(str4 + " " + "Jim" ) // "Hello Jim"
```

### interpolation
Interpolation is similar to concatenation, it is the process of combining strings and variables.  It is done using backticks and using the ${} syntax. For example:

```javascript
// interpolation
let favoriteFood = "Pizza"
console.log(`My favorite food is ${favoriteFood}`) // "My favorite food is Pizza"
```

**Note: Interpolation is preferred over concatenation because it is easier to read and write.**

## String Methods
String methods are functions that are called on a string.  There are many string methods, but we will cover the most common ones.  For a full list of string methods, see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). 


```javascript
let str = "Hello World"
str.toUpperCase() // "HELLO WORLD"
str.toLowerCase() // "hello world"
str.includes("Hello") // true
str.includes("hello") // false
str.includes("hello", 6) // true
```
With these built-in methods, you can do a lot of things with strings.  For example, you can check if a string contains a certain word, or you can change the case of a string. You can also use string methods to check if a string starts with a certain character, or ends with a certain character.  Let's look at some examples:

### length
The length property returns the length of a string.  For example:

```javascript
let str = "Hello World"
str.length // 11
```


### toUpperCase(), toLowerCase()
`toUpperCase()` will convert the string to all uppercase letters. For example:

`toLowerCase()` will convert the string to all lowercase letters. For example:

```javascript
let str = "upcase me"
str.toUpperCase() // "UPCASE ME"

let str2 = "DOWN CASE ME"
str2.toLowerCase() // "down case me"
```

### includes()
`includes()` will return true if the string includes the parameter. It can also take a second parameter which is the index to start searching from. For example:

```javascript
let message = "is cat in here?"
message.includes("cat") // true
message.includes("dog") // false

let message2 = "is cat in here?"
message2.includes("cat", 6)
// false, starts searching at index 6
message2.includes("cat", 2)
// true, starts searching at index 2
```


### indexOf()
`indexOf()` will return the index of the first occurrence of the parameter. If the parameter is not found, it will return -1. For example:


```javascript
let characters = "abcdefg"
characters.indexOf("a") // 0
characters.indexOf("b") // 1
characters.indexOf("z") // -1
```

### startsWith(), endsWith()
`startsWith()` will return true if the string starts with the parameter. 

`endsWith()` will return true if the string ends with the parameter. 

```javascript
let str = "Hello World"
str.startsWith("Hello") // true
str.startsWith("rld") // false
str.endsWith("ld") // true
str.endsWith("He") // false
```

### slice()
`slice()` will return a new string that is a slice of the original string. It takes two parameters, the start index and the end index. the start index is where the slice will start, and the end index is where the slice will end.  The end index is not included in the slice. For example:

```javascript
let str = "0123456789"
str.slice(0, 3) // "012"
str.slice(3, 6) // "345"
str.slice(3, 1) 
// "" // end index is smaller than start index
```

### split()
`split()` will split a string into an array of substrings. It takes one parameter, which is the character to split the string on. For example:

```javascript
let names = "Jim, Bob, Sally"
names.split(",") // ["Jim", "Bob", "Sally"]
```

### trim()
`trim()` will remove whitespace from the beginning and end of a string. For example:

```javascript
let str = "   Hello World   "
str.trim() // "Hello World"
```

### replace()
`replace()` will replace a substring with another substring. It takes two parameters, the substring to replace and the substring to replace it with. For example:

```javascript
let str = "Hello World"
str.replace("World", "Jim") // "Hello Jim"
```

### charAt()
`charAt()` will return the character at the specified index. If the index is out of range, it will return an empty string. For example:



```javascript
let str = "Hello World"
str.charAt(0) // "H"
str.charAt(20) // ""
```

### charCodeAt()
`charCodeAt()` will return the Unicode of the character at the specified index. List of Unicode values: [Unicode](https://unicode-table.com/en/). For example:

```javascript
let str = "Hello World"
str.charCodeAt(0) // 72
str.charCodeAt(1) // 101
str.charCodeAt(20) // NaN
```

### fromCharCode()
`fromCharCode()` will return a string created from the specified sequence of Unicode values. For example:

```javascript
String.fromCharCode(72, 101, 108, 108, 111) // "Hello"
```

These are just a few of the many string methods.  For a full list of string methods, see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

**Note: Practice using string methods.  You can use the [repl.it](https://repl.it/languages/javascript) to practice.**

## Exercises

### Exercise 1
How would you check if a string starts with "Hello"?

### Exercise 2
How would you check if a string ends with "World"?

### Exercise 3
How would you check if a string contains "Hello"?

### Exercise 4
How would you check if a string contains "Hello" and "World"?

### Exercise 5
What is the method to get the length of a string?

### Exercise 6
What is the method to get the character at a specific index?

### Exercise 7
What is the method to get the Unicode of a character at a specific index?

