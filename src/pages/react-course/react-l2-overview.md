---
title: React Overview
pageTitle: React Overview
description: React Overview.
---

In this lesson we will do a high level tour of the common features of React.

## Setup

To get started let's create a new project with npx. Open terminal and navigate to a directory where you want this react app to live and run these commands

```
npx create-react-app react-demo
cd react-demo
npm start
```

Open up your project and go to our App.js file and delete its contents and replace it with this basic code.

```javascript
//src/App.js
import './App.css'

function App() {
  return (
    <div className="bordered">
      <h1>This is the App Component</h1>
    </div>
  )
}

export default App
```

Let's also update our App.css to add the styling for our bordered class. We will use this class to help us visualize where our React components are living.

```css
/* src/App.css */
.bordered {
  border: 2px solid #777;
  margin: 20px;
  padding: 20px;
}
```

Now we can go to {% md-link title="http://localhost:3000" href="http://localhost:3000/" /%} to see our app running.

## Key parts of a React

There a many key parts to a React. Let's quickly go over them so of the terms and ideas start to sink in. We will go over these in more detail later so for now let's just a high level view about what these are.

### JSX

JSX is a syntax extension to JavaScript used with React to describe what the UI should look like. JSX may remind you of a html, and the syntax is similar but it comes with the full power of JavaScript.

```javascript
//src/App.js
import './App.css'

function App() {
  let name = 'Bob'
  return (
    <div className="bordered">
      <h1>This is the App Component</h1>
      // Embedding Expressions in JSX
      <p>Hello {name}</p>
    </div>
  )
}

export default App
```

JSX is an Expression Too
After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

```javascript
function App() {
  // a variable
  let name = 'Bob'

  // a function
  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>
    }
    return <h1>Hello, Stranger.</h1>
  }
  return (
    <div className="bordered">
      <h1>This is the App Component</h1>
      // Embedding Expressions in JSX
      <p>Hello {name}</p>
      <hr />
       // calling a function in JSX
      {getGreeting(name)}
      // another expressions in JSX
      <p>1 + 1 is {1 + 1}</>
    </div>
  )
}

export default App
```

{% callout type="warning" title="Note:" %}
Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.

For example, class becomes className in JSX, and tabindex becomes tabIndex.
{% /callout %}

### Components

One of the core features of React is that they allow you to write reusable components. This allows us to split the UI into independent, reusable pieces, and think about each piece as it is own thing. Let's look at a simple example where we might have users in our UI.

```javascript
// A 'User' Component
function User = (props)=>{
   return (
    <div className='user'>
       <h1>Hello I am {props.name}</h1>
       <p>you can reach me at {props.email}</p>
    </div>
   )
}

function App = ()=>{
   return (
    <div>
         <h1>Our Users</h1>
         <div className='users'>
           <User name='Bob' email='bob@yo.com' / >
           <User name='Jane' email='jane@yo.com' / >
          </div>
    </div>
   )
}

```

Here we define a functional component name `Users`. We then render that component in our App component twice with two different sets if user data.

{% callout type="warning" title="Note: Always start component names with a capital letter." %}

React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

{% /callout %}

### Events

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

For example, the HTML:

```javascript
<button onclick="someFunction()">click</button>
```

is slightly different in React:

```javascript
<button onClick={someFunction}>click</button>
```

```javascript
function Demo = (props)=>{
  function warn(){
    alert('button clicked')
  }

  return(
    <>
    <button onClick={warn}>
      click
    </button>
    </>
  )
}
```

### Props

Props is how we pass data to our components. Props are read only and is always going to be a Javascript object. In our example you see a 'props' param in our User functional components and when you see the User component being rendered we see them being `passed` like this

```javascript
<User name="Jane" email="jane@yo.com" />
```

### Rendering

Rendering is when React takes our component and actually attaches it to the DOM. For now this is happening when our component 'mounts' or when the page first loads. This mount happens once. What our functional component returns is what is going to be mounted. We will look more into rendering but first let's talk about two concepts that go along with this. State and the lifecycle of a component in React

### State

So far everything we have done has been read only. Most web apps change though, they have state. React handles this with the useState hook. Let's look at an example where we have a counter

```javascript
// We need to import the hook from the react library
import {useState} from 'react'

function Counter = (props)=>{
  const [count, setCount] = useState(0)
  
  function increment(){
    setCount(count + 1)
  }

  return(
    <div>
      <h1>counter name: {props.name}</h1>
      <p>the count is : {count}</p>
      <button onClick={increment}>
        add
      </button>
    </div>
  )
}

function App = ()=>{
   return (
    <div>
         <h1>Our Users</h1>
         <Counter name='step counter' />
         <Counter name='taco counter' />
    </div>
   )
}

```

Let's break this down a little. Let's first look at the useState hook. useState is a function that returns an array who first value is the state or the way to get the state and the second value is a function to set the state.

It has this general signature.

```javascript
// const [state, setState] = useState(initialState)
```


{% callout type="warning" title="Note:" %}
 calling our setState function will trigger our component to be rerendered
{% /callout %}


{% callout type="warning" title="Note:" %}
 we never want to mutate state directly always use the setState function to change state
{% /callout %}

useState is 


### LifeCycle

### Note on Class Components
