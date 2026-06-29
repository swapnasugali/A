//Fuctions
//it is a block of code to do some task and return some value

function Hello(){ // parametres

}

Hello()  //function calling
//values that can be passed at the time of function  calling are called as arguments


function add(a,b){
     return "Hello"
    console.log(a+b)
   
}
let result = add(1,2)
console.log(result)

//function declaration syntax
function otp(){

}


//email, mobile verification
//to change the password
//to change the mobile number
//to change email

//2 ways we declare function
//function declaration
//function expression //named function //anonymous function //arrow function

//function declaration
// function functionname(){

// }


// functionname(){

// }

function Hello(a=10,b=10){ // default parameters
    console.log(a,b)


}
Hello(1,undefined) //arguments

//arguments will replace parameters
//arguments will have high priority than parameters
//default parameters

//varying in number of parameters and arguments

function varying(a=10,b,c,d,...f){
    console.log(a,b,c,d)
    console.log(arguments)
    console.log(f)

}
//trest parameters and arguments objects
varying(undefined,2,3,4,5,6,7,8,9)