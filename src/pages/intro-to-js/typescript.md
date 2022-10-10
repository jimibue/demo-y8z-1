---
title: TypeScript
description: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
---

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is a language that is built on top of JavaScript, and adds optional static typing and class-based object-oriented programming to the language. TypeScript is a great choice for writing large applications and can be a great tool for JavaScript programmers who want to start writing more maintainable code.

## Why TypeScript?

JavaScript is a great language for writing small applications. However, as applications grow in size, it becomes more difficult to manage state without introducing bugs. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is a language that is built on top of JavaScript, and adds optional static typing and class-based object-oriented programming to the language. TypeScript is a great choice for writing large applications and can be a great tool for JavaScript programmers who want to start writing more maintainable code.

## What is TypeScript?

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is a language that is built on top of JavaScript, and adds optional static typing and class-based object-oriented programming to the language. TypeScript is a great choice for writing large applications and can be a great tool for JavaScript programmers who want to start writing more maintainable code.

## Types in TypeScript

### Type Annotations

TypeScript uses type annotations to infer the type of a variable. Type annotations are a way to tell TypeScript what type of value a variable will refer to. Type annotations are a powerful way to tell the compiler about the type of function arguments and return values.

```ts
// Type annotations
// In this example, we're using type annotations to tell TypeScript that the variable `name` will refer to a string.
let myName: string = 'John';
myName = 28; // Error: Type 'number' is not assignable to type 'string'.

// Type inference
// TypeScript can infer the type of a variable based on the value assigned to it.
let myAge = 27;
myAge = '27'; // Error: Type 'string' is not assignable to type 'number'.
```

### Type Inference

TypeScript can infer the type of a variable based on the value assigned to it. This is called type inference. Type inference is a powerful feature of TypeScript that allows you to write less code and still get the same level of type safety as if you had explicitly declared the type of every variable.

```ts
// Type inference
// TypeScript can infer the type of a variable based on the value assigned to it.
let myAge = 27;
myAge = '27'; // Error: Type 'string' is not assignable to type 'number'.
```

### Primitive Types

TypeScript has a number of primitive types that are used to represent the most common data types in JavaScript. These types include `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.

```ts
// Primitive types
let myName: string = 'John';
let myAge: number = 27;
let hasHobbies: boolean = false;
let myRealAge; 
// Type 'any' is not assignable to type 'number'.
myRealAge = 27;
let myRealAge: number;
myRealAge = 27;
let x: null = null;
let y: undefined = undefined;
let z: symbol = Symbol();
let big: bigint = 100n;
```
### Arrays

TypeScript has two ways to represent arrays. The first is to use the type of the elements followed by `[]` to denote an array of that element type:

```ts
// Arrays
let hobbies: string[] = ['Cooking', 'Sports'];
hobbies = [100]; // Error: Type 'number' is not assignable to type 'string'.

// Or, you can use a generic array type Array<elemType>:
let hobbies Array<string> = ['Cooking', 'Sports'];
```

### Tuples

Tuples allow you to express an array where the type of a fixed number of elements is known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

```ts
// Tuples
let address: [string, number] = ['Superstreet', 99];

// You can access the elements of a tuple using their index:
let secondAddress = address[1]; // 99
```

### Enums

Enums allow you to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

```ts
// Enums
enum Color {
  Gray, // 0
  Green = 100, // 100
  Blue = 'blue'.length, // 4
}

let myColor: Color = Color.Green;
console.log(myColor); // 100
```

### Any

The `any` type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation. You might expect object properties to be available, but TypeScript can’t verify that, so you’ll get an error:

```ts
// Any
let car: any = 'BMW';
console.log(car); // BMW
car = { brand: 'BMW', series: 3 };
console.log(car); // { brand: 'BMW', series: 3 }
```

### Union Types

Union types allow you to express a value that can be one of several types. We use the vertical bar (`|`) to separate each type, so `number | string | boolean` is the type of a value that can be a `number`, a `string`, or a `boolean`.

```ts

// Union types
let myRealRealAge: number | string = 27;
myRealRealAge = '27';
myRealRealAge = true; // Error: Type 'boolean' is not assignable to type 'number | string'.
```

### Functions

TypeScript has two ways to represent functions. The first is to use the type of the arguments followed by `=>` to denote the return type of the function:

```ts
// Functions
// this function returns a string
function returnMyName(myName: string): string {
  return myName;
}

let myName: string = returnMyName('John');
let myName: number = returnMyName('John'); 
// Error: Type 'string' is not assignable to type 'number'.


// this function returns void
function sayHello(): void {
  console.log('Hello!');
}

// this function returns a number
// value1 and value2 are arguments of type number
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
```

### Function Types

Function types are represented by a pair of types: the type of the arguments and the return type. The type of the arguments is written as a list of types inside parentheses, and the return type is written after a `=>` symbol.

```ts

// Function types
let myMultiply: (val1: number, val2: number):number => val1 * val2;
// myMultiply = sayHello; // Error: Type '() => void' is not assignable to type '(val1: number, val2: number) => number'.
// myMultiply(); // Error: Expected 2 arguments, but got 0.
```

### Objects

TypeScript has a special type for objects that are more flexible than the `interface` type. The type `{}` represents an empty object, so you can use it to indicate that an object has no particular shape.

```ts
// Objects
let userData: { name: string, age: number } = {
  name: 'John',
  age: 27,
};

// You can also use the type alias syntax to create a name for an object type:
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex: Complex = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};
```

### Interfaces

Interfaces are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

```ts

// Interfaces
interface NamedPerson {
  firstName: string;
  age?: number; // optional property
  [propName: string]: any; // any other properties
  greet(lastName: string): void;
}

function greet(person: NamedPerson) {
  console.log('Hello, ' + person.firstName);
}
```

### Interfaces as Function Types

Interfaces can also describe function types. To describe a function type with an interface, we give the interface a call signature. This is like a function declaration with only the parameter list and return type given. Each parameter in the parameter list requires both name and type.

```ts
// Interfaces as function types
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
  return (value1 + value2) * 2;
};
```

### Interfaces as Class Types

Interfaces can also describe how a class should look like. It describes the public side of the class, rather than both the public and private side. This prohibits you from using it to check that a class also has particular types for the private side of the class instance.

```ts
// Interfaces as class types
interface Greetable {
  readonly name: string; // readonly property
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 27;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}
```

### Optional Chaining

Optional chaining is a feature that allows you to handle properties that may not exist. It is a safe way to access deeply nested properties without having to check if the property exists at each level.

```ts
// Optional chaining
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' }
};

console.log(fetchedUserData?.job?.title); // CEO
console.log(fetchedUserData?.email?.title); // undefined
```



### Type Aliases

Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.

```ts




