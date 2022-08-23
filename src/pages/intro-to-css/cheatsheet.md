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

Mouse Over Selector```css a:hover {}```

Active Link Selector```css a:active {}```

Focus Selector```css input:focus {}```

Visited Links Selector```css a:visited {}```

Link Selector```css .class:link {}```

First Line Selector```css p::first-line {}```

First Letter Selector```css p::first-letter {}```

First Child Selector```css p:first-child {}```

Last Child Selector```css p:last-child {}```

Only Child Selector```css p:only-child {}```

:nth-child Selector```css p:nth-child() {}```

First Element of its Parent Selector```css p:first-of-type {}```

Checked elements selector ```css input:checked {}```

Disabled elements selector```css input:disabled {}```

Enabled elements selector```css input:enabled {}```

Elements that have no Children Selector (including text nodes)```css p:empty {}```

Not a Specified Element Selector```css :not(p) {}```

Before Element```css .class::before {}```

After Element```css .class::before {}```

## Text Styling

Font style```css font-style: normal | italic | oblique`

Font Variant```css font-variant: normal | small-caps`

Font Weight```css font-weight: normal | bold | bolder | lighter | 100 - 900`

Vertical Alignment```css vertical-align: baseline | 10px | sub | super | top | text-top | middle | bottom | text-bottom | initial`

Font Size```css font-size: 12px | 0.8em | 80%`

Text Transform```css text-transform: capitalise | lowercase | uppercase`

Space Between Characters```css letter-spacing: normal | 4px`

Line Height```css line-height: normal | 3em | 34%`

Horizontal Alignment```css text-align: left | right | center | justify`

Text Align Last```css text-align-last: auto | left | right | center | justify | start | end | initial | inherit`

Text Decoration```css text-decoration: none | underline | overline | line-through`

Indent First Line```css text-indent: 25px`

Font Family```css font-family: 'Open Sans', sans-serif`

Text Justify```css text-justify: auto | inter-word | inter-character | none | initial | inherit`

Text Overflow```css text-overflow: clip | ellipsis | string | initial | inherit`

Text Shadow```css text-shadow: h-shadow v-shadow blur-radius color | none | initial | inherit`

## Position

Position```css position: static | relative | absolute | fixed | sticky`

Position Properties```css top | right | bottom | left`

Float Element```css float: left | right | none`

Clear Floating Elements```css clear: none | left | right | both`

Z Index```css z-index: 3 | auto | inherit`

## Background

Background Image```css background-image: url()`

Background Repeat```css background-repeat: repeat-x | repeat-y | repeat | space | round | no-repeat`

Background Color```css background-color: #2AA9E0`

Background Position```css background-position: top | right | bottom | left | center`

Background Attachment```css background-attachment: scroll | fixed | local | initial | inherit`

## Box properties

Box Sizing```css box-sizing: border-box | content-box`

Margin```css margin: 2px 4px 6px 8px | 0 auto`

Padding```css padding: 2px 4px 6px 8px`

Border Color```css border-color: #2AA9E0`

Border Style```css border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset`

Border Width```css border-width: 10px`

## List Styling

List Type```css list-style-type: disc | circle | square | none`

List Position```css list-style-position: inside | outside`

List Image```css list-style-image: url()`

## Flexbox

Flex Direction```css flex-direction: row | row-reverse | column | column-reverse`

Flex Wrap```css flex-wrap: nowrap | wrap | wrap-reverse`

Justify Content```css justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly`

Align Items```css align-items: flex-start | flex-end | center | baseline | stretch`

Align Content```css align-content: flex-start | flex-end | center | space-between | space-around | stretch`

Order```css order: 0`

Flex Grow```css flex-grow: 0`

Flex Shrink```css flex-shrink: 1`

Flex Basis```css flex-basis: 3px | auto`

Align Self```css align-self: auto | flex-start | flex-end | center | baseline | stretch`

## CSS Grid

Grid Template Columns```css grid-template-columns: 40px 50px auto 50px 40px`

Grid Template Rows```css grid-template-rows: 25% 100px auto`

Grid Template Areas```css grid-template-areas: "a b c" | none`

Grid Template```css grid-template: "a a a" 20% "b b b" auto | 100px 1fr / 50px 1fr`

Grid Column Gap```css grid-column-gap: 10px`

Grid Row Gap```css grid-row-gap: 10px`

Justify Items```css justify-items: start | end | center | stretch`

Align Items```css align-items: start | end | center | stretch`

Justify Content```css justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly`

Align Content```css align-content: flex-start | flex-end | center | space-between | space-around | stretch`

Grid Auto Columns```css grid-auto-columns: 100px | max-content | min-content`

Grid Auto Rows```css grid-auto-rows: 100px | max-content | min-content`

Grid Auto Flow```css grid-auto-flow: row | column | row dense | column dense`

Grid Column Start```css grid-column-start: 2 | areaname | span 2 | span areaname | auto`

Grid Column End```css grid-column-end: 2 | areaname | span 2 | span areaname | auto`

Grid Row Start```css grid-row-start: 2 | areaname | span 2 | span areaname | auto`

Grid Row End```css grid-row-end: 2 | areaname | span 2 | span areaname | auto`

Grid Column```css grid-column: 3 / span 2`

Grid Row```css grid-row: 3 / span 2`

Justify Self```css justify-self: start | end | center | stretch`

Align Self```css align-self: start | end | center | stretch`

## Dynamic Content

CSS Variable```css --variable-name: value`

Variable Usage```css var(--variable-name)`

Counter Reset```css counter-reset: name-of-counter`

Counter Increment```css counter-increment: name-of-counter`

Counter Dynamic Value```css content: counter(name-of-counter)`

Attribute Dynamic Value```css content: attr(name-of-attribute)`


