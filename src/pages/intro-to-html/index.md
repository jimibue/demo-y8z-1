---
title: Intro to HTML
pageTitle: Intro to HTML 
description: Learn the basic of HTML Here.
---
## Overview

HTML (HyperText Markup Language) is the standard markup language for creating Web pages.  It describes the structure of or Web page and allow to link our pages page together to help build functional websites

A basic HTML page would look something like this:


```html
<!DOCTYPE html>
<html>
    <head>

    </head>
<body>

<h1>My Blog</h1>
<p>This is where the</p>

</body>
</html>

```

## HTML Anatomy
![image info](https://wikimedia.org/api/rest_v1/media/math/render/svg/37506127f0730d9b6035530f46c706af4e2319d4) 

#### Tags
Tags are  used in HTML for creating an element.

Tags are the starting and ending parts of an HTML element. They begin with < symbol and end with > symbol. Whatever written inside < and > are called tags.

#### Elements
Elements enclose the contents in between the tags. They consist of some kind of structure or expression. It generally consists of a start tag, content and an end tag.

#### Atrributes and values
 are used to define the character of an HTML element. It always placed in the opening tag of an element. It generally provides additional styling (attribute) to the element.


 # High Level Structure
## HTML Element: html
The <html> element, the root of an HTML document, should be added after the !DOCTYPE declaration. All content/structure for an HTML document should be contained between the opening and closing <html> tags.

##  Body Element: body

The <body> element represents the content of an HTML document. Content inside <body> tags are rendered on the web browsers.

## Head Element: head
The <head> element contains general information about an HTML page that isn’t displayed on the page itself. This information is called metadata and includes things like the title of the HTML document and links to stylesheets.

Note: There can be only one <body> and <head> element in a document.

```html
<html>
    <head>
        <!-- Metadata is contained in this element-->
        <title>yo</title>
    </head>
    <body>
        <!-- This is where the main content of your website goes-->
       <h1>Hello world</h1>
    </body>
<html>
```

## Try it for yourself

There are many ways to start writing html but my favorite is Codepen. This is a website that allows you to write HTML, CSS, and Javascript with out having to set anything up.  Go ahead and signup for it, it is free.  Below is a demo you can click on the edit in codepen in the top right section to make changes and explore on your own.

{% codepen /%}



