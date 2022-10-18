---
title: "Setup"
description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
---

Learning to code is a lot like learning a new language. You need to learn the vocabulary, grammar, and syntax of the language. You also need to learn how to communicate with other people who speak the language. We are going to start by learning the vocabulary and grammar of TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.

This will take time, but you will get there! We will start by learning the basic vocabulary of TypeScript, and then we will learn how to use TypeScript to write programs.

## Running TypeScript in Web Browser

To run TS in the browser we can use the [TypeScript Playground](https://www.typescriptlang.org/play/). This is a great way to get started with TypeScript without having to install anything on your computer.  To run in TypeScript Playground, simply add code into the editor and click the "Run" button.  The output will be displayed in the "Logs" panel on the left side of the app.  

## Running TypeScript in VS Code

### Folder Structure

Let's create a new folder for our TypeScript project. We will call it `intro-ts`. Inside this folder, we will create a new file called `main.ts`. This is where we will write our TypeScript code.

```bash
## do this in the terminal, in the folder where you want to create your project

## create a new folder called intro-ts
mkdir intro-ts

## change into the intro-ts folder
cd intro-ts

## create a new file called main.ts
touch main.ts
```

Now, let's open this folder in VS Code. We can do this by opening VS Code and then selecting `File > Open Folder...` and then selecting the `intro-ts` folder.

**intro-ts/main.ts**

```ts
// inside main.ts
let myName: string = 'John';
console.log(myName);
```

### Install typescript


Now that we have this setup we want to run it.  We can not directly run a ts file, we need to compile(convert) Typescript to JavaScript and then run the JavaScript.  We can do this by using the TypeScript compiler, which is a command line tool that comes with the TypeScript package. 
But we need to first install the TypeScript compiler. We can do this by running the following command in the terminal:

```bash
# Install the TypeScript compile, only need to do this once
npm install -g typescript
```

### Compile TypeScript and Run JavaScript

Now that we have the TypeScript compiler installed, we can compile our TypeScript code into JavaScript. We can do this by running the following command in the terminal:

```bash
# Compile the TypeScript code into JavaScript
# this will create a new file called main.js
tsc main.ts

# Run the JavaScript code
node main.js
# => John

# we can do this in one step to compile and run
tsc main.ts && node main.js
```

We can now check our output in the terminal. We should see the following:

```bash
John
```

### Possible Errors

If you get an error that says `tsc: command not found`, then you need to make sure that you have installed the TypeScript compiler correctly. You can do this by running the following command in the terminal:

```bash
# Check that the TypeScript compiler is installed
tsc --version

# your version might be different, this is ok
# => Version 3.9.7
```

If you get an error that says `node: command not found`, then you need to make sure that you have installed Node.js correctly. You can do this by running the following command in the terminal:

```bash
# Check that Node.js is installed
node --version

# your version might be different, this is ok
# => v14.15.1
```

If you get a syntax error, then you need to make sure that you have typed the code correctly. You can check your code against the solution code to make sure that you have typed it correctly.

if you get an error that says `Cannot find module 'main.js' you need to make sure you are running the command in the correct directory. You can do this by running the following command in the terminal:

```bash
# Check that you are in the correct directory
pwd
# => /Users/username/Desktop/intro-ts
```

## CHECKPOINT - Questions or comments?
at this point, we have a basic TypeScript project setup. We have a folder called `intro-ts` that contains a file called `main.ts`. We have installed the TypeScript compiler, and we should be able to compile our TypeScript code into JavaScript and run it.

