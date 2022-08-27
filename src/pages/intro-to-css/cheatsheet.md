---
title: CSS Cheatsheat
pageTitle: CSS Cheatsheat.
description: Cheatsheat for css.
---

## Selectors

### Universal Selector
matches elements of any type.
```css
 * {
     /* Styles in here would apply to everything */
 }
 ```
 ----

### Type Selector
matches elements by tag name. 
```css 
p{
  /* Styles in here would apply to all p */
}
/* can do multiple at the same time */
h1, h2 ,h3 {
     /* Styles in here would apply to h1, h2, h3 */
}
```
 ----

### Child Selector
matches only those elements matched by the second selector that are the direct children of elements matched by the first.
```css 
  ul > li {
        /* Styles in here would apply to li's
        that are direct descendnets of ul's  */
  }
```
----

### Descendant Selector
matches all elements that are descendants of a specified element.
```css 
   p a {
        /* Styles in here would apply to a's
        that are an level of descendnets of a p  
        */ 
   }
```

---

### Class Selector
Matches elements with a specific class attribute.
```css 
.yo {
    /* Styles in here would apply to an element
    with <el class='yo'> */
}

```

---

### ID Selector
Matches elements with a specific id attribute.
```css 
   #yo {
    /* Styles in here would apply to an element
    with <el id='yo'> */ 
   }
```
----

### Adjacent Sibling Selector
(+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent element.
```css 
  h1 + p {

  }
```
---

### General Sibling Selector
separates two selectors and matches all iterations of the second element, that are following the first element (though not necessarily immediately), and are children of the same parent element.
```css 
h1 ~ p {}
```

---

### Attribute Selector
matches elements based on the presence or value of a given attribute.
```css 
/* <a> elements with a title attribute */
a[title] {
  color: purple;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"] {
  color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}

/* <a> elements with an href ending ".org" */
a[href$=".org"] {
  font-style: italic;
}

/* <a> elements whose class attribute contains the word "logo" */
a[class~="logo"] {
  padding: 2px;
}

```

## Pseudo Selectors & Elements

### Mouse Over Selector
The  :hover selector allows you to target an element that the user hovers over with a cursor or mouse pointer.

```css 
a:hover {
  /* styles here */
}
```
 ----
### Active Link Selector
The  :active selector allows you to target an element that is being activated (such as a link that is being clicked on).
```css 
a:active {
    /* styles here */
}
```
 ----
### Focus Selector
The CSS :active selector allows you to target an element that is being that is focused (such as a input that is currently active).
```css 
input:focus {
    /* styles here */
}
```
 ----
### Visited Links Selector
The :visited selector allows you to target visited links.

```css 
a:visited {
    /* styles here */
}
```
 ----
### Link Selector
The :link selector is used to select unvisited links.
```css 
.class:link {
  /* styles here */
}
```
 ----
### First Line Selector
The ::first-line selector is used to add a style to the first line of the specified selector.
```css 
p::first-line {
  /* styles here */
}
```

### First Letter Selector
The ::first-line selector is used to add a style to the first letter of the specified selector.
```css 
p::first-letter {
  /* styles here */
}
```
----
### First Child Selector
The :first-child CSS pseudo-class represents the first element among a group of sibling elements.
```css 
p:first-child {
  /* styles here */
}
```
----
### Last Child Selector
The :last-child CSS pseudo-class represents the last element among a group of sibling elements.
```css 
p:last-child {
  /* styles here */
}
```
----
### Only Child Selector
The :only-child CSS pseudo-class represents an element without any siblings.
```css 
p:only-child {
  /* styles here */
}
```
----
### :nth-child Selector
The :nth-child() CSS pseudo-class matches elements based on their position among a group of siblings.
```css 
p:nth-child() {
  /* styles here */
}

p:nth-child(even) {
  /* styles here */
}
```
----
### Checked elements selector 
The :checked selector works for checkboxes, radio buttons, and options of select elements. To retrieve only the selected options of select elements, use the :selected selector.
```css 
input:checked {
  /* styles here */
}
```
---
### Disabled elements selector
The :disabled selector matches every disabled element (mostly used on form elements).
```css
input:disabled {
  /* styles here */
}
```

### Enabled elements selector
The :enabled selector matches every enabled element (mostly used on form elements).
```css
input:enabled {
  /* styles here */
}
```
---
### Elements that have no Children Selector (including text nodes)

```css
p:empty {
  /* styles here */
}
```
---
### Not a Specified Element Selector
styles for anything that does not math element
```css
:not(p) {
  /* styles here */
}

```
---

### Be
element{
  fore Element
::before creates a pseudo-element that is the first child of the selected element. It is often used to add cosmetic content to an element with the content property. It is inline by default.
```css 
.class::before {
  /* styles here */
}
```
---
### After Element
```css 
.class::before {
  /* styles here */
}
```
---

---

## Text Styling
----------

Font style
```css 
element{
  font-style: normal | italic | oblique
}
```

---


Font Variant
```css 
element{
  font-variant: normal | small-caps
}
```

---


Font Weight
```css 
element{
  font-weight: normal | bold | bolder | lighter | 100 - 900
}
```

---


Vertical Alignment
```css 
element{
  vertical-align: baseline | 10px | sub | super | top | text-top | middle | bottom | text-bottom | initial
}
```

---


Font Size
```css 
element{
  font-size: 12px | 0.8em | 80%
}
```

---


Text Transform
```css 
element{
  text-transform: capitalise | lowercase | uppercase
}
```

---


Space Between Characters
```css 
element{
  letter-spacing: normal | 4px
}
```

---


Line Height
```css 
element{
  line-height: normal | 3em | 34%
}
```

---


Horizontal Alignment
```css 
element{
  text-align: left | right | center | justify
}
```

---


Text Align Last
```css 
element{
  text-align-last: auto | left | right | center | justify | start | end | initial | inherit
}
```

---


Text Decoration
```css 
element{
  text-decoration: none | underline | overline | line-through
}
```

---


Indent First Line
```css 
element{
  text-indent: 25px
}
```

---


Font Family
```css 
element{
  font-family: 'Open Sans', sans-serif
}
```

---


Text Justify
```css 
element{
  text-justify: auto | inter-word | inter-character | none | initial | inherit
}
```

---


Text Overflow
```css 
element{
  text-overflow: clip | ellipsis | string | initial | inherit
}
```

---


Text Shadow
```css 
element{
  text-shadow: h-shadow v-shadow blur-radius color | none | initial | inherit
}
```

---


## Position

Position
```css 
element{
  position: static | relative | absolute | fixed | sticky
}
```

---


Position Properties
```css 
element{
  top | right | bottom | left
}
```

---


Float Element
```css 
element{
  float: left | right | none
}
```

---


Clear Floating Elements
```css 
element{
  clear: none | left | right | both
}
```

---


Z Index
```css 
element{
  z-index: 3 | auto | inherit
}
```

---


## Background

Background Image
```css 
element{
  background-image: url()
}
```

---


Background Repeat
```css 
element{
  background-repeat: repeat-x | repeat-y | repeat | space | round | no-repeat
}
```

---


Background Color
```css 
element{
  background-color: #2AA9E0
}
```

---


Background Position
```css 
element{
  background-position: top | right | bottom | left | center
}
```

---


Background Attachment
```css 
element{
  background-attachment: scroll | fixed | local | initial | inherit
}
```

---


## Box properties

Box Sizing
```css 
element{
  box-sizing: border-box | content-box
}
```

---


Margin
```css 
element{
  margin: 2px 4px 6px 8px | 0 auto
}
```

---


Padding
```css 
element{
  padding: 2px 4px 6px 8px
}
```

---


Border Color
```css 
element{
  border-color: #2AA9E0
}
```

---


Border Style
```css 
element{
  border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
}
```

---


Border Width
```css 
element{
  border-width: 10px
}
```

---


## List Styling

List Type
```css 
element{
list-style-type: disc | circle | square | none
}
```

---
List Position
```css 
element{
list-style-position: inside | outside
}
`
List Image
```css 
element{
list-style-image: url()
}```

## Flexbox

Flex Direction
```css 
element{
  flex-direction: row | row-reverse | column | column-reverse
}
```

---


Flex Wrap
```css 
element{
  flex-wrap: nowrap | wrap | wrap-reverse
}
```

---


Justify Content
```css 
element{
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly
}
```

---


Align Items
```css 
element{
  align-items: flex-start | flex-end | center | baseline | stretch
}
```

---


Align Content
```css 
element{
  align-content: flex-start | flex-end | center | space-between | space-around | stretch
}
```

---


Order
```css 
element{
  order: 0
}
```

---


Flex Grow
```css 
element{
  flex-grow: 0
}
```

---


Flex Shrink
```css 
element{
  flex-shrink: 1
}
```

---


Flex Basis
```css 
element{
  flex-basis: 3px | auto
}
```
Align Self

```css 
element{
  align-self: auto | flex-start | flex-end | center | baseline | stretch
}
```

---


## CSS Grid

Grid Template Columns
```css 
element{
  grid-template-columns: 40px 50px auto 50px 40px
}
```

---


Grid Template Rows
```css 
element{
  grid-template-rows: 25% 100px auto
}
```

---


Grid Template Areas
```css 
element{
  grid-template-areas: "a b c" | none
}
```

---


Grid Template
```css 
element{
  grid-template: "a a a" 20% "b b b" auto | 100px 1fr / 50px 1fr
}
```

---


Grid Column Gap
```css 
element{
  grid-column-gap: 10px
}
```

---


Grid Row Gap
```css 
element{
  grid-row-gap: 10px
}
```

---


Justify Items
```css 
element{
  justify-items: start | end | center | stretch
}
```

---


Align Items
```css 
element{
  align-items: start | end | center | stretch
}
```

---


Justify Content
```css 
element{
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly
}
```

---


Align Content
```css 
element{
  align-content: flex-start | flex-end | center | space-between | space-around | stretch
}
```

---


Grid Auto Columns
```css 
element{
  grid-auto-columns: 100px | max-content | min-content
}
```

---


Grid Auto Rows
```css 
element{
  grid-auto-rows: 100px | max-content | min-content
}
```

---


Grid Auto Flow
```css 
element{
  grid-auto-flow: row | column | row dense | column dense
}
```

---


Grid Column Start
```css 
element{
  grid-column-start: 2 | areaname | span 2 | span areaname | auto
}
```

---


Grid Column End
```css 
element{
  grid-column-end: 2 | areaname | span 2 | span areaname | auto
}
```

---


Grid Row Start
```css 
element{
  grid-row-start: 2 | areaname | span 2 | span areaname | auto
}
```

---


Grid Row End
```css 
element{
  grid-row-end: 2 | areaname | span 2 | span areaname | auto
}
```

---


Grid Column
```css 
element{
  grid-column: 3 / span 2
}
```

---


Grid Row
```css 
element{
  grid-row: 3 / span 2
}
```

---


Justify Self
```css 
element{
  justify-self: start | end | center | stretch
}
```

---


Align Self
```css 
element{
  align-self: start | end | center | stretch
}
```

---


## Dynamic Content

CSS Variable
```css 
element{
  --variable-name: value
}
```

---


Variable Usage
```css 
element{
  var(--variable-name)
}
```

---


Counter Reset
```css 
element{
  counter-reset: name-of-counter
}
```

---


Counter Increment
```css 
element{
  counter-increment: name-of-counter
}
```

---


Counter Dynamic Value
```css 
element{
  content: counter(name-of-counter)
}
```

---


Attribute Dynamic Value
```css 
element{
  content: attr(name-of-attribute)
}
```

---



