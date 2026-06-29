//recursive function
//a function calling itself

let sum=0
let one = function rec(a){
    if(a==0){
        return 0 
    }
    sum += a
    return sum+rec(a-1)
}
//a=10 sum=0 --> sum 10 a=9  sum=9--------a=1 x+1   0 sum  -1 -2 -3 
//sum of fist 10 natural numbers
console.log(one(10))

function hai(a){
    console.log("one",a)
    return "done"
}
console.log(hai(10))


//IIFE
//Immediately IOnvoked Function Expression

// (function () {
//     console.log("Hello");
// })();

//function currying

// function functionname(a,b,c,d){

// }
// functionname(10,20,30,40)

// function functionname(a){
//     function (){
//         function (){
//             function (){

//             }
//         }
//     }
// }

// functionname(10,20,30,40)

function add(a){
    return function(b){
        console.log((b/100)*100)
        return"done"
    }
    
}
// var M = add(100)(97)
console.log(add(100)(89))
console.log(add(100)(79))
// console.log(M)


//first class function
//pure function
//impure function

// random numbers generation from 1 to 100


function getNumbers() {   //pure function
    return 100;
}

function generateRandom() {  // impure function
    return Math.floor(Math.random() * 100) + 1;
}

// first-class function (store in variable)
var fn = generateRandom;
console.log(fn());



//Higher order function
// returns another function
// accepts another function

function outer() {
    return function() {
        console.log("Hello");
    };
}

const result = outer(); // returns a function
result();               // calls the returned function


//this key word

console.log(this)

function hello(){
    console.log(this)   //global
}
hello()

let ar= ()=>{
    console.log(this)    //arrow
}
ar()

let obj = {
    name:"siri",
    hello (){
        console.log(this)
    },
    hello1: ()=>{
        console.log(this)

    }

}
obj.hello()
obj.hello1()

// console.log(obj["name"])

//