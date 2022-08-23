---
title:  Create React App 
pageTitle:  Create React App 
description:  Create React App 
---

## Overview

In this lesson we will see how we can get a react app up and running quickly with create react app

## Create React App

In order to start coding we need to build out a React project. Now if we were to do this from scratch it would take a while and we would likely run into issues along the way. Luckily we have the [Create React App](https://create-react-app.dev/) to make getting started a breeze. Create React App lets you focus on code, not build tools.

To create a project called `my-app`, run this command:

```
npx create-react-app my-app
cd my-app
npm start
```

Now we can go to {% md-link title="http://localhost:3000" href="http://localhost:3000/" /%} to see our app running

**_ Note: to stop your app from running go to terminal and type `ctrl-c`_**

### A note on npm and npx

**npm** (short for Node Package Manager) is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.

**npx** The npx stands for Node Package Execute and it comes with the npm. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package. The npx is useful during a single time use package.

To learn more about the differences you can checkout this {% md-link title="stack overflow." href="https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm" /%}

### Folder Structure

After creation, open up this project in vsCode or your preferred text editor, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, these files must exist with exact filenames:

- **public/index.html is the page template;**

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

- **src/index.js is the JavaScript entry point.**

```javascript
//index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
```

You can delete or rename the other files.

You may create subdirectories inside the src directory. This is where we will be doing the majority of our work. You need to put any JS and CSS files inside src

Only files inside public can be used from public/index.html. Read instructions below for using assets from JavaScript and HTML.

If you have Git installed and your project is not part of a larger repository, then a new repository will be initialized resulting in an additional top-level .git directory.

### Available Scripts

Create React gives us a few scripts that we can run. We have already seen the `npm start` command, but there are more. We will primarily just be using `npm start` but let's go over the other ones. You can see these in the package.json file. In terminal,in the project directory, you can run these command:

```
npm start
```

Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

```
npm test
```

Launches the test runner in the interactive watch mode. See the section about running tests for more information.

```
npm run build
```

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

```
npm run eject
```

Note: this is a one-way operation. Once you eject, you can’t go back!

We will spend more time on understanding what Create React App does for us, but let's actually start diving into React in the next section.