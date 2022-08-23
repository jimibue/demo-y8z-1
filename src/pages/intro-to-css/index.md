---
title: Intro to CSS
pageTitle: Intro to CSS
description: Learn the basic of CSS Here.
---

## CSS

CSS (Cascading Style Sheets) is the primary tool used to style websites. It goes hand in hand with HTML which how we deifne the structure of our web page. Let's dive straight into it.

## SELECTORS

![css](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png)

**Selector**
This is the HTML element name at the start of the ruleset. It defines the element(s) to be styled (in this example, <p> elements). To style a different element, change the selector.

**Declaration**
This is a single rule like color: red;. It specifies which of the element's properties you want to style.

**Properties**
These are ways in which you can style an HTML element. (In this example, color is a property of the <p> elements.) In CSS, you choose which properties you want to affect in the rule.

**Property value**
To the right of the property—after the colon—there is the property value. This chooses one out of many possible appearances for a given property. (For example, there are many color values in addition to red.)

Here is how it would look to style all of all paragraphs

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

## Types of selectors

```html
<div>
   <p class=>p1</p>
   <p class=>p1</p>
   <p >p3</p>
</div>   
```



