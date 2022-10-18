---
title: OOP and Classes
description: Learn about OOP and Classes
---

Object Oriented Programming (OOP) is a programming paradigm that uses objects and their interactions to design and program applications. OOP is a very popular paradigm in the industry and is used in many different languages. In this section, we will learn about the basics of OOP and how to use classes in TypeScript.

## What is OOP?

OOP is a programming paradigm that uses objects and their interactions to design and program applications. OOP is a very popular paradigm in the industry and is used in many different languages. In this section, we will learn about the basics of OOP and how to use classes in TypeScript.

## What is a Class?

A class is a blueprint for creating objects. It defines a set of properties and methods that will be available to all objects created using this class. Classes are used to create new objects and give them initial values for their properties.

## Objects in TypeScript

```ts
// Objects

// example
type User = {
  name: string;
  age: number;
  likes: number;
  getInformation: () => string;
}

function createUser(name: string, age: number, likes: number): User {
  return {
    name,
    age,
    likes,
    getInformation() {
      return `${this.name} is ${this.age} years old and has ${this.likes} likes`;
    }
  }
}

const user = createUser('John', 20, 0);
console.log(user.getInformation()); // John is 20 years old and has 0 likes


```

## Classes in TypeScript

```ts
// Classes
class Person {
  readonly name: string;
  age: number;
  likes: number;

  constructor(name: string, age: number, likes: number) {
    this.name = name;
    this.age = age;
    this.likes = likes;
  }

  getInformation() {
    return `${this.name} is ${this.age} years old and has ${this.likes} likes`;
  }
}

const person = new Person('John', 20, 0);
console.log(person.getInformation()); // John is 20 years old and has 0 likes
person.name = 'Jane'; // Error: Cannot assign to 'name' because it is a read-only property.
```

```

Write constructor functions using Javascript class syntax.
Add methods to an object’s prototype using constructor functions.
Define and identify scenarios for different this contexts.
Define the three types of program scope (global, function, and block).
Define the scope resolution rules.
