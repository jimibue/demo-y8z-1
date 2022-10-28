
// render: helping take our data and added to our html

const { render } = require("@headlessui/react/dist/utils/render")

// in general
let foo = {
    name:'james',
    age:12
}



// we need to grab an element from our index.html
let someElefromINDEXHTML = document.querySelector('#someid')

// we need to take our data in our class and maybe create an html element that data=>html
let el = document.createElement('div')

el.innerHTML = `
   <p>${foo.name}</p>
`
// actually adding to the dom
someElefromINDEXHTML.append(el)
