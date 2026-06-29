//Event Bubbling - when event trigger then event travels from child element to parent element
//Event Capturing - when event trigger then event travels from parent element to child element
//Event Deligation - Event will be added to the parent elemnt and the event will be used by all child elements

//Event Bubbling
let child = document.getElementById("inner-text");
function action() {
    console.log("inner h1 clicked");
   
}
child.addEventListener("click",action);


//
let div = document.getElementById("div")
// console.log(div)
function action2(){
    console.log("parent element")
}
div.addEventListener("click",action2,true)  //Event Capturing


//
let parent = document.getElementById("outer-text")
function action1(){
    console.log("outer text")
}
parent.addEventListener("click",action1) //Event Capturing


//
let div1 = document.getElementById("div1")
function action3(){
    console.log("top parent element")
}

div1.addEventListener("click",action3,true)  //Event Capturing


//Event Deligation

let list = document.getElementById("list")
function listclick(){
    console.log("clicked")
}
// list.addEventListener("click",listclick)
list.addEventListener("click", function (e){
    console.log(e.target.innerText)
})


//window.onscroll
console.log(window)


//Normal Event - how many times we clicked the button it supports, not stoping here
//event countionously fire
//Whenever the user performs an action, the function gets executed

let button = document.getElementById("button")
let a= 0 //normal click count
let b= 0 //throttling click count
let d=0 //debouncing click count
button.addEventListener("click",function(){
    a += 1
    console.log("value of a is :",a)
    console.log("button clicked")
})
 

//Throttling - Even if the user clicks many times quickly, the function executes only after maintaining a certain time interval
let lastclick = 0
button.addEventListener("click",function(){
let current = Date.now()
if(current-lastclick > 2000){
    b += 1
    console.log("value of B is :",b)
     lastclick = current //Save this click time as previous click time
}
   
console.log("button clicked")
})


//Debouncing - delays the function execution until the user stops performing the action for a specific amount of time
//Wait until the user stops, then execute the function

let t 
button.addEventListener("click",function(){
    clearTimeout(t)
    t =setTimeout(function(){
        d += 1
        console.log("value d is:",d)

    },2000)
})   



//call back function

function function1(s){
    console.log(s)
}

function one(a,b,c){
    console.log("one is executed")
c(a+b)
// c(a-b)
}

one(1,2,function1)
