---
title: HTML Elements
pageTitle: HTML Elements
description: Learn about what HTML elements are and the most commonly used ones are.
---

## Overview

In this tutorial you will learn more about HTML elements.

An HTML element is a piece of content in an HTML document and uses the following syntax: 
```html
<!-- opening tag: ie <>  -->
<tag attribute1='some-value' attribute2='some-other-value'> 
  content
</tag>
<!-- closing tag:  ie </>   -->
```
## HTML Attributes

HTML attributes are values added to the opening tag of an element to configure the element or change the element’s default behavior. In the provided example, we are giving the <p> (paragraph) element a unique identifier using the id attribute and changing the color of the default text using the style attribute.

```html
<p id="my-paragraph" style="color: red;">this is red</p>
```

----
Let look at some oft he most commonly used html elements.  You do not need to memorize these just get an idea of what ones are out there and what they do. For a complete list checkout [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).
## heading tags: h1-h6

The `<h1>` to `<h6>` or heading elements are used to create headings in html, with <h1> being the largest and <h6> being the smallest.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## paragragh: p

The `<p>` or paragraph element is used for general text and well paragraphs.

```html
<p>My favorite food are tacos... Yummy</p>
```

## divider: div

The `<div>` element is the primary container that breaksup an HTML document into sections and is short for “divider”. This help give our html structure.

```html
<div class="blogs">
  <div class="blog" id="blog-1">
    <h1>All about Tacos</h1>
    <p>I really do love all of these taco's</p>
  </div>
  <div class="blog" id="blog-2">
    <h1>All about Candy</h1>
    <p>I really do love all of this candy<</p>
  </div>
</div>
```

## Lists and list items: ol | ul | li

Ordered lists `<ol>`, use this when the order of items in your list matters.

Unordered lists `<ul>` use this when the order of items in your list does not matter.

The `<li>` list item element is used to list out each item with in a list.

```html
<ol>
  <li>wake up</li>
  <li>shower</li>
  <li>get dresses</li>
  <li>go to work</li>
</ol>

<ul>
  <li>Tacos</li>
  <li>Candy</li>
  <li>Milkshake</li>
</ul>
```

## Emphasis: em

The `<em>` emphasis element emphasizes text. Browsers will usually italicize the emphasized text by default.

```html
<p>That show was <em>crazy!!</em> Don't you agree?</p>
```

## Strong: strong

The `<strong>` emphasis element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.

```html
<p>
  Ok you are proably not pay attention to this,<strong
    >But this part is really important!</strong
  >
  You can dose off know.
</p>
```

## Mark: mark

The `<mark>` HTML element represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context.

```html
<p>let's hightlight <em>this.</em></p>
```

## Line break: br

The `<br>` line break element will create a line break in text. It is useful for writing a poem or an address, where the division of lines is significant.

```html
123 main <br />
slc, cali, 123456
```

## Span: span

The `<span>` HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes.

```html
<p class="black">lets make<span class="blue">this blue</span></p>
```

## Image Element: img

The `<img>` elements embed images in documents. The src attribute contains the image URL and is mandatory. <img> is an empty element meaning it should not have a closing tag.

```html
<img src="my_image.png">
```

## alt Attribute

An <img> element can have alternative text via the alt attribute. The alternative text will be displayed if an image fails to render due to an incorrect URL, if the image format is not supported by the browser, if the image is blocked from being displayed, or if the image has not been received from the URL.

```html
<img src="path/to/image" alt="text describing image" />
```

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

## <a> Anchor Element
The <a> anchor element is used to create hyperlinks in an HTML document. The hyperlinks can point to other webpages, files on the same server, a location on the same page, or any other URL via the hyperlink reference attribute, href. The href determines the location the anchor element points to.

```html
<!-- Creating text links -->

<a href="http://www.codecademy.com">learn to code here at codecademy </a>

<!-- Creating image links -->
<a href="http://www.google.com">
	<img src="logo.jpg">Click this image
</a>
```
## Comments

In HTML, comments can be added between an opening <!-- and closing -->. Content inside of comments will not be rendered by browsers, and are usually used to describe a part of code or provide other details.

Comments can span single or multiple lines.
```html
<!-- Main site content -->
<div>Content</div>

<!--
  Comments can be
  multiple lines long.
-->
```

## Demo

{% codepen /%}
