---
title: Arrays
description: A tutorial about arrays in js
---

Arrays are a way to store multiple values in a single variable.  Arrays are defined using square brackets `[]`. You can think of arrays as a list of items. They can contain any type of data, but it is generally recommended to only store one type of data in an array.  For example:

```javascript
// Array in JS

// 1. Array literal
const numbers = [1, 2, 3, 4, 5]
// 2. Array constructor
const numbers = new Array(1, 2, 3, 4, 5)
// 3. Array constructor with length
const numbers = new Array(5)
// 4. Array constructor with length and value
const numbers = new Array(5).fill(1)

// most commonly used is array literal
const names = ["John", "Jane", "Joe"]
const numbers = [1, 2, 3, 4, 5]
const mixed = ["John", 1, true, null, undefined]
const nested = [[1, 2, 3], [4, 5, 6]]
const empty = []
```

## Accessing Array Values

To access a value in an array, you need to use the index of the value.  Arrays are 0 indexed, meaning the first value in the array is at index 0.  If you try to access an index that does not exist, you will get `undefined`.  For example:


```javascript
const names = ["John", "Jane", "Joe"]
console.log(names[0]) // John
console.log(names[1]) // Jane
console.log(names[2]) // Joe
console.log(names[3]) // undefined
```
 
## Common Array Methods

Arrays have many built-in methods.  These methods are used to manipulate the array.  We will cover some of the most commonly used methods.  For a full list of array methods, you can check out the [MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### .push()

The `.push()` method adds a value to the end of an array.  For example:

```javascript
const names = ["John", "Jane", "Joe"]
names.push("Mary")
console.log(names) // ["John", "Jane", "Joe", "Mary"]
```

### .pop()

The `.pop()` method removes the last value in an array.  For example:

```javascript
const names = ["John", "Jane", "Joe"]
let name = names.pop()
console.log(names) // ["John", "Jane"]
console.log(name) // Joe
```

### .unshift()

The `.unshift()` method adds a value to the beginning of an array.  For example:

```javascript
const names = ["John", "Jane", "Joe"]
names.unshift("Mary")
console.log(names) // ["Mary", "John", "Jane", "Joe"]
```

### .shift()

The `.shift()` method removes the first value in an array.  For example:

```javascript
const names = ["John", "Jane", "Joe"]
let name = names.shift()
console.log(names) // ["Jane", "Joe"]
console.log(name) // John
```

### .indexOf()

The `.indexOf()` method returns the index of the first occurrence of a value in an array.  If the value is not found, it returns `-1`.  For example:

```javascript

const names = ["John", "Jane", "Joe"]
console.log(names.indexOf("John")) // 0
console.log(names.indexOf("Jane")) // 1
console.log(names.indexOf("Joe")) // 2
console.log(names.indexOf("Mary")) // -1
```

### .includes()

The `.includes()` method returns `true` if the value is found in the array, and `false` if it is not.  For example:

```javascript
const names = ["John", "Jane", "Joe"]
console.log(names.includes("John")) // true
console.log(names.includes("Jim")) // false
```

### .join()

The `.join()` method joins all the values in an array into a string.  By default, the values are joined with a comma.  You can pass a string as an argument to change the separator.  For example:

```javascript
const names = ["John", "Jane", "Joe"]
console.log(names.join(', ')) // John, Jane, Joe
console.log(names.join(" ")) // John Jane Joe
console.log(names.join("-")) // John-Jane-Joe
```

### .reverse()

### .sort()

The `.sort()` method sorts the values in an array.  By default, the values are sorted alphabetically.  You can pass a function as an argument to change the sort order. This function takes two arguments, `a` and `b`.  If the function returns a negative number, `a` will be sorted before `b`.  If the function returns a positive number, `b` will be sorted before `a`.  If the function returns 0, `a` and `b` will be sorted in the same order.  For example:

```javascript
const numbers = [1, 3, 2, 5, 4]
numbers.sort()
console.log(numbers) // [1, 2, 3, 4, 5]

const names = ["John", "Jane", "Bob"]
names.sort() // ["Bob", "Jane", "John"]

const names = ["1233456", "123", "12345"]
names.sort((a, b) => {
  if (a.length < b.length) {
    return -1
  } else if (a.length > b.length) {
    return 1
  } else {
    return 0
  }
})
console.log(names) // ["123", "12345", "1233456"]
```

## Array Iteration

Arrays have many built-in methods that allow you to iterate over the values in the array.  These methods are used to manipulate the array.  We will cover some of the most commonly used methods.  For a full list of array methods, you can check out the [MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### .forEach()

The `.forEach()` method executes a function for each value in the array.  The function takes three arguments: the value, the index, and the array.  For example:

```javascript
const names = ["John", "Jane", "Joe"]

// 1. Using a anonymous function
names.forEach((name, index, array) => {
  console.log(name, index, array)
})

// John 0 ["John", "Jane", "Joe"]
// Jane 1 ["John", "Jane", "Joe"]
// Joe 2 ["John", "Jane", "Joe"]

// 2. Using a named function
function logName(name, index, array) {
  console.log(name, index, array)
}

names.forEach(logName)
// John 0 ["John", "Jane", "Joe"]
// Jane 1 ["John", "Jane", "Joe"]
// Joe 2 ["John", "Jane", "Joe"]
```


### .map()

The `.map()` method executes a function for each value in the array.  The function takes three arguments: the value, the index, and the array.  The return value of the function is added to a new array.  For example:

```javascript
const names = ["John", "Jane", "Joe"]

// 1. Using a anonymous function
const upperNames = names.map((name, index, array) => {
  return name.toUpperCase()
})

console.log(upperNames) // ["JOHN", "JANE", "JOE"]

// 2. Using a named function
function toUpperCase(name, index, array) {
  return name.toUpperCase()
}

const upperNames = names.map(toUpperCase)
console.log(upperNames) // ["JOHN", "JANE", "JOE"]
```

### .filter()

The `.filter()` method executes a function for each value in the array.  The function takes three arguments: the value, the index, and the array.  If the function returns `true`, the value is added to a new array.  If the function returns `false`, the value is not added to the new array.  For example:

```javascript

const names = ["John", "Jane", "Joe"]

// 1. Using a anonymous function
const shortNames = names.filter((name, index, array) => {
  return name.length < 4
})

console.log(shortNames) // ["Joe"]

// 2. Using a named function
function isShort(name, index, array) {
  return name.length < 4
}

const shortNames = names.filter(isShort)
console.log(shortNames) // ["Joe"]
```

### .reduce()

The `.reduce()` method executes a function for each value in the array.  The function takes four arguments: the accumulator, the value, the index, and the array.  The return value of the function is used as the accumulator for the next iteration.  For example:

```javascript
const numbers = [1, 2, 3, 4, 5]

// sum all the numbers
const sum = numbers.reduce((accumulator, number, index, array) => {
  return accumulator + number
}, 0)

console.log(sum) // 15

// capitalize all the names, return a string
const names = ["john", "jane", "joe"]

const capitalizedNames = names.reduce((accumulator, name, index, array) => {
  return accumulator + name[0].toUpperCase() + name.slice(1) + " "
}, "")

console.log(capitalizedNames) // "John Jane Joe "
```









