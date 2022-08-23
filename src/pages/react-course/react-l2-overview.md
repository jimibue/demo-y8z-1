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

There a many key parts to a React. Let's quickly go over them so of the terms and ideas start to sink in.  We will go over these in more detail later so for now let's just a high level view about what these are.

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

### State

### Rendering

### Props

### LifeCycle

### Note on Class Components
