---
title: "Array Iteration"
description: "A tutorial about array iteration in js"
---

Iterating over an array is a common task in programming.  There are many ways to iterate over an array.  In this lesson, we will learn about the `forEach`, `map`, `filter`, `reduce`, `find`, `every`, and `some` methods.  These methods are available on all arrays.  You can call them by using the dot operator `.`.  These methods all take functions as arguments.  The function that is passed to the method will be called once for each element in the array.  The function will be called with the current element as the first argument.  The function will also be called with the index of the current element as the second argument.  The function will also be called with the array that is being iterated over as the third argument.  The `forEach` method does not return anything.  The `map` and `filter` methods return a new array.  The `reduce` method returns a single value.  The `every`, and `some` methods return a boolean.

```javascript


##  for loop

The `for` loop is a common way to iterate over an array.  The forEach loop is preferred over the `for` loop because it is more concise and easier to read.  However, the `for` loop is still useful to know.  It can be useful when you need to 
  - iterate over an array in reverse order. 
  - you need to iterate over multiple arrays at the same time, 
  - you need to iterate over an array in steps
  - you need to start iterating at a specific index.

```javascript

const numbers = [1, 2, 3, 4, 5]

// iterate over an array in reverse order
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i])
}
// 5
// 4
// ...

// iterate over multiple arrays at the same time

const numbers = [1, 2, 3, 4, 5]
const letters = ["a", "b", "c", "d", "e"]

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i], letters[i])
}
// 1 a
// 2 b
// ...

// iterate over an array in steps

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i += 2) {
  console.log(numbers[i])
}
// 1
// 3
// 5

// start iterating at a specific index

const numbers = [1, 2, 3, 4, 5]

for (let i = 2; i < numbers.length; i++) {
  console.log(numbers[i])
}
// 3
// 4
// 5
```

## forEach

The forEach method is the most common way to iterate over an array.  The forEach method takes a function as an argument.  The function will be called once for each element in the array.  The function will be called with the current element as the first argument.  The function will also be called with the index of the current element as the second argument.  The function will also be called with the array that is being iterated over as the third argument.  The forEach method does not return anything.

```javascript

const people = [{ name: "John" }, { name: "Jane" }, { name: "Jim" }]
people.forEach((person, index, array) => {
    if(index === 0) {
        console.log("array: ", array)
    }
   console.log(`index: ${person.name}, name: ${person.name}`)
})
// array: [{ name: "John" }, { name: "Jane" }, { name: "Jim" }]
// index: 0, name: John
// index: 1, name: Jane
// index: 2, name: Jim
```

##

