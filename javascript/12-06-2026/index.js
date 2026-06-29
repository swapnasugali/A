//DOM
//Document Object Model
//it will sttach the document in the form of a tree structure

//top most parent element html - it has two child nodes

//child nodes - head(meta Tags), body header (nav bar) section(heading tags ,......)  footer(....)  (content)


//reading dom properties

//getElementById()  //return single elmemnt with that id
//getElemenntByClassName()   // return in the form of an array[]
//getElementByTagName()    // return in the form of an array[]
//querySelector   // return first occurence
//querySelectorAll // return which matches the query


console.log(document)
let h1 = document.getElementById("heading")
let h4 = document.getElementById("text")
console.log(h4)
console.log(h1)
let c =document.getElementsByClassName("h1")
console.log(c)


let E =document.getElementsByTagName("h1")
console.log(E)

let q = document.querySelector(".h1")
console.log(q)


//DOM traversing

//parentElement

//children

//firstElemntChild

//lastElementChild

let s = document.querySelectorAll(".text");
console.log(s);

let name=document.getElementById("name")
console.log(name)
let parentElement = name.parentElement
console.log(parentElement)
console.log(parentElement.children)
console.log(parentElement.firstElementChild)
console.log(parentElement.lastElementChild)
console.log(name.nextElementSibling)
console.log(email.previousElementSibling)


//creating a DOM element

let newElement = document.createElement('h1')
newElement.innerText = "8888888888"
console.log(newElement)
parentElement.appendChild(newElement)

//prepend
parentElement.prepend(newElement)

// before & after

let btn = document.getElementById("btn")
console.log(btn)

// btn.onclick = function(){
//     alert("Button CLicked")
//     console.log("Button Clicked")
// }

//addEventListener- attach events

// btn.addEventListener("click",function(){
//       alert("Button CLicked")
// })

function click(){
    alert("Button CLicked")
   btn.innerText = "Button Clicked"
}
btn.addEventListener("click",click)

//

btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "blue";
});

btn.addEventListener("mouseout", function () {
    btn.style.backgroundColor = "gray";
});

btn.addEventListener("dblclick", function () {
    btn.style.backgroundColor = "black";
});

btn.addEventListener("click", function(){
    btn.style.backgroundColor = "green";
});


