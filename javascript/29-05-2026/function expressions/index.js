//function declaration
//A function declaration is a function defined with a name using the function keyword.
//Can be called before it is defined.
//it is hoisted

Hello();

function Hello(){
    console.log("hi");
}

//function expression
//Function is stored in variable
//Cannot call before definition
//Can be anonymous
//not hoisted like function declarations

// const greet = function() {
//   console.log("Hello");
// };
// greet();



//named

let  a = function functionname(){
    return
    functionname()
}
a()

//anonymous:-
//recursive function
//function calling it self
let b = function(){
    return
}

//arrow function //E.S-6
let c =() => a+b

//named function

const greet1 = function() {
  console.log("Good Morning");
};

greet1();

//ananyous function

const greet2 = function (name) {
  console.log("hi " + name);
};

// greet2("Siri");

//arrow function
const greet3 = () => {
  console.log("good afternoon");
};

greet3();


                                  //var              //let                                    //const
//var will support redeclare        yes                 no (declaring same variables)             no
//reassignment                       yes                yes                                      no
//initialization                     yes                yes                                       no
//hoisting


var age=10
// console.log(m)

// var m=20
// console.log(m)

var age=30
console.log(age)

//undefined 


//let
// let k=10
// console.log(k)

// k=20
// console.log(40)

// let k =20
// console.log(k)

//const 
const l=20
console.log(l)

// l=30
console.log(l)

//initialization
var z 

let y

const x=0

//javascripts program runs in two phases
//memory creation
// code execution

//var
// console.log(p)
// var p =10
// console.log(p)


//let
// console.log(s)
// let s =10
// console.log(s)


//const
// console.log(A)
// const A =10
// console.log(A)


//hoisting
//JavaScript moves declarations to the top of the scope before executing the code.
//var

var j;
console.log(j);
j = 89;
console.log(j);


//let
let g = 65;
console.log(g); 

g = 20;          
console.log(g); 

//const
const h = 24;
console.log(h); 

// h = 20;
// console.log(h) 



//scope
//var
if (true) {
  var f = 60;
}
console.log(f);

//let
if (true) {
  let S = 25;
  S=60;
  console.log(S);
}
// console.log(S); 

//const
if (true) {
  const msg = "Hello";
  console.log(msg);
}

// console.log(msg);


//var 
//string
console.log(name);
var name = "Siri";

//boolean
console.log(flag);
var flag = false;

//object
console.log(obj);
var obj = { city: "Hydrebad" };

//function
// console.log(show);

// var show = function () {
//   console.log("Hello");
// };

//let
//string
// console.log(names);
let names = "Swapna";
console.log(names);

//boolean
// console.log(flags);
const flags = true;
console.log(flags);

//object
// console.log(obj2);
const obj2 = { city: "Anantapur" };
console.log(obj2);

//function
// console.log(shows);

let shows = () => {
  console.log("Hello");
};
shows();
console.log(shows)

//const
//string
// console.log(name1);
const name1 = "Sirisha";
console.log(name1);

//boolean
// console.log(flag5);
const flag5 = true;
console.log(flag5);

//object
// console.log(obj3);
const obj3 = { city: "Guntur" };
console.log(obj3);



//function
// console.log(show2);

const show2 = () => {
  console.log("Good evening");
};
show2();
console.log(show2);


//variable is declared in outside function
//variable is declared in inside function

//let and const are block scope

// function var let const 
//var--> this can be accessed out the function
//let, const --> cannot be acessed

//block var,let const
// var --> can be acessed out side the function
//let, const --> cannot be acessed out side the block


//var is a functional scope
//let, const block scope



//recursive function
//a function calling itself


let sum =0
let one = function rec(a){
    if(a==0){
        return 0
    }
    return sum+rec(a-1)

}
// a=10  sum =0  --> sum = 10   a=9  sum=9  a=8......a=1 x+1  0 sum -1 -2 -3
//sum of first 10 natural numbers
console.log(one(10))




Hello();

function Hello(){
    console.log("hi");
    {
      var Y = 55;
  var Z = 70;

  console.log(Y);
  console.log(Z);  
    }
    console.log(Y); 
    console.log(Z); 
}

