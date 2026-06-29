//conditional statements
//if
//ifelse
//else if
//switch
//ternary


//if
//syntax
// if(condition){

// }

//if



// function checkEligible(age){
//     if(age>18)
//         console.log("Eligible for vote")
// }
// let age = 19
// checkEligible(age)
// if(True)
// {
//     console.log("Truthy vales")
// }


function checkEligible(age){
    if(age > 18){
        console.log("Eligible for vote")
    }
}

let age = 19
checkEligible(age)

// truthy and falsy check
if(true){
    console.log("Truthy values")
}
if(1){
    console.log("Truthy values")
}
if(-1){
    console.log("Truthy values")
}
if("hello"){
    console.log("Truthy values")
}
if("0"){
    console.log("Truthy values")
}
if([]){
    console.log("Truthy values")
}
if({}){
    console.log("Truthy values")
}

if(false){
    console.log("Falsy values")
} else {
    console.log("Falsy values")
}

if(0){
    console.log("Falsy values")
} else {
    console.log("Falsy values")
}

if(null){
    console.log("Falsy values")
} else {
    console.log("Falsy values")
}



//ifelse
// if(condtion){

// }else{

// }

if(true){
    console.log("True")
}
else{
console.log("False")
}
console.log("Hi")

//if elseif

let a=10
if(a>0 && a%2==0){
    console.log("Positive number & even")
}
//if else if

let marks = 79
if(marks>90)
{
    console.log("A grade")
}
else if(marks>80){
    console.log("B grade")
}
else if(marks > 70){
    console.log("C grade")
}
else{

}

//switch

let marks1 = 89

switch (true) {

    case (marks1 > 90):
        console.log("A grade")
        break;

    case (marks1 > 80):
        console.log("B grade")
        break;

    case (marks1 > 70):
        console.log("C grade")
        break;

    default:
        console.log("Fail")
}

