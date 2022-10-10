--- 
title: Objects
description: A tutorial about objects in js
---

Objects are a way to store multiple values in a single variable.  Objects are defined using curly braces `{}`. You can think of objects as a list of key-value pairs. They can contain any type of data, but it is generally recommended to only store one type of data in an object.  For example:

```javascript
// Object in JS

// 1. Object literal
const person = {
  name: "John",
  age: 30
}
// 2. Object constructor
const person = new Object({
  name: "John",
  age: 30
})

// most commonly used is object literal
```

## Accessing Object Values

To access a value in an object, you need to use the key of the value.  For example:

```javascript
const person = {
  name: "John",
  age: 30
}
console.log(person.name) // John
console.log(person.age) // 30

// if you try to access a key that does not exist, you will get undefined
console.log(person.height) // undefined

// you can also use bracket notation
console.log(person["name"]) // John
console.log(person["age"]) // 30

// bracket notation is useful if you want to access a key that is stored in a variable
const key = "name"
console.log(person[key]) // John
```
## What is the difference between an array and an object?

Arrays are used to store multiple values in a single variable.  Objects are used to store multiple key-value pairs in a single variable.  For example:

```javascript
// Array - this makes sense.
const numbers = [1, 2, 3, 4, 5]

// Array - storing person in an array, not recommended, how would you know what index is what?
const person = ["Jim", 30]

// Object - we can access the values using the key, which we can name whatever we want.
const person = {
  name: "John",
  age: 30
}
```

## When should I use an object?

Objects are useful when you need to store multiple values in a single variable.  For example, if you are working with a user, you can store their name, age, and email in a single object.  Objects are also useful when you need to store multiple key-value pairs in a single variable.  For example, if you are working with a user, you can store their name, age, and email in a single object. They are also useful for dictionary/translation type data structures.

```javascript

const user = {
  name: "John",
  age: 30,
  email: ""
}

const translate = {
  "hello": "hola",
  "goodbye": "adios"
}

const dictionary = {
  "water": "a clear, transparent, odorless, tasteless liquid, that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.",
  "food": "any nourishing substance that is eaten, drunk, or otherwise taken into the body to sustain life, provide energy, promote growth, etc."
}
```

## Adding and Removing Properties

You can add and remove properties from an object.  For example:

```javascript
const person = {
  name: "John",
  age: 30
}

// add a property
person.email = "test@test.com"

// remove a property
delete person.age
```

## Looping Through Objects

You can loop through an object using a `for...in` loop.  For example:

```javascript
const dog = {
  name: "Fido",
  age: 4,
  breed: "Labrador"
}

for (const key in dog) {
  console.log(key, dog[key])
}
```

## Methods on the Object class

Objects have a few methods that you can use to manipulate them.  For example:

```javascript
let address = {
  street: "123 Main St",
  city: "New York",
  state: "NY"
}

// get the keys of an object
let keys = Object.keys(address)
console.log(keys) // ["street", "city", "state"]

// get the values of an object
let values = Object.values(address)
console.log(values) // ["123 Main St", "New York", "NY"]

// get the key-value pairs of an object
let entries = Object.entries(address)
console.log(entries) // [["street", "123 Main St"], ["city", "New York"], ["state", "NY"]]

// check if an object has a property
let hasStreet = address.hasOwnProperty("street")
console.log(hasStreet) // true

// check if an object has a value
let hasNY = Object.values(address).includes("NY")

// check if an object has a key-value pair
let hasNY = Object.entries(address).includes(["state", "NY"])


// you can also use the in operator
let hasStreet = "street" in address
console.log(hasStreet) // true

```

## Comparing Objects

Comparing objects is a bit tricky.  You can't compare objects using `===` or `==`.  This is because objects are stored in memory and the memory location is different for each object.  For example:

```javascript
const dog1 = {
  name: "Fido",
  age: 4,
  breed: "Labrador"
}

const dog2 = {
  name: "Fido",
  age: 4,
  breed: "Labrador"
}

console.log(dog1 === dog2) // false
```

So how do we compare objects?  We can use a function called `JSON.stringify()` to convert an object to a string.  We can then compare the strings.  For example:

```javascript
const dog1 = {
  name: "Fido",
  age: 4,
  breed: "Labrador"
}

const dog2 = {
  name: "Fido",
  age: 4,
  breed: "Labrador"
}

console.log(JSON.stringify(dog1) === JSON.stringify(dog2)) // true
``` 

We can also use a function called `Object.keys()` to get an array of the keys in an object.  We can then loop through the keys and compare the values.  For example:

```javascript
const dog1 = {
  name: "Fido",
  age: 4,
  breed: "Labrador"
}

const dog2 = {
  name: "Fido",
  age: 4,
  breed: "Labrador"
}

const keys1 = Object.keys(dog1)
const keys2 = Object.keys(dog2)

if (keys1.length !== keys2.length) {
  console.log("not the same")
} else {
  for (const key of keys1) {
    if (dog1[key] !== dog2[key]) {
      console.log("not the same")
      return
    }
  }
  console.log("same")
}
// same
```

## Object Methods

Objects can also contain functions.  These functions are called methods.  For example:

```javascript
const dog = {
  name: "Fido",
  age: 4,
  breed: "Labrador",
  bark: function() {
    console.log("woof woof")
  }
}

dog.bark() // woof woof
```

## Object Class

Objects are a type of class.  Classes are a way to create objects.  For example:

```javascript

// Object literal
const dog = {
  name: "Fido",
  age: 4,
  breed: "Labrador",
  bark: function() {
    console.log("woof woof")
  }
}

dog.bark() // woof woof

// Object class
class Dog {
  constructor(name, age, breed) {
    this.name = name
    this.age = age
    this.breed = breed
  }
  bark() {
    console.log("woof woof")
  }
}

const dog = new Dog("Fido", 4, "Labrador")

dog.bark() // woof woof
dog.name // Fido
```

## Object Destructuring

Object destructuring is a way to extract values from an object.  For example:

```javascript
const taco = {
  meat: "chicken",
  cheese: "cheddar",
  salsa: "mild"
}

const { meat, cheese, salsa } = taco
console.log(meat) // chicken

// you can also rename the variables
const { meat: m, cheese: c, salsa: s } = taco
console.log(m) // chicken

// you can also set default values
const { meat: m, cheese: c, salsa: s, guacamole = "no" } = taco
console.log(guacamole) // no

// nested objects
const taco = {
  meat: "chicken",
  cheese: "cheddar",
  salsa: "mild",
  toppings: {
    lettuce: true,
    tomato: true,
    guacamole: false
  }
}

const { meat, cheese, salsa, toppings: { lettuce, tomato, guacamole } } = taco
console.log(lettuce) // true

// you can also use the rest operator
const taco = {
  meat: "chicken",
  cheese: "cheddar",
  salsa: "mild",

}

const { meat, ...rest } = taco
console.log(rest) // { cheese: "cheddar", salsa: "mild" }
```

## Object Spread Operator

The object spread operator is a way to copy an object.  This lets you add, update, or remove properties from the copy without affecting the original object.  It is also a way to merge objects.  For example:

```javascript
const movie = {
  title: "The Matrix",
  year: 1999,
  rating: 5
}
// copy the object
const movieCopy = { ...movie }
console.log(movieCopy) // { title: "The Matrix", year: 1999, rating: 5 }

// copy an object and update a property
const updatedCopy = { ...movie, title: "The Matrix Reloaded" }
console.log(updatedCopy.title) // The Matrix, 
console.log(updatedCopy.title) // The Matrix Reloaded

// copy an object and  add a property
const addedDirectorCopy = { ...movie, director: "Wachowski Brothers" }
console.log(addedDirectorCopy) // { title: "The Matrix", year: 1999, rating: 5, director: "Wachowski Brothers" }

// merge two objects
const x = { a: 1, b: 2 }
const y = { c: 3, d: 4 }
const z = { ...x, ...y }
console.log(z) // { a: 1, b: 2, c: 3, d: 4 }
``` 
















