//comparision operator
// used to compare two values
//result will be a boolean value

//< > <= > =
//==  loose equality
//=== strict equality
//!= loose inequality
//!== loose inequality

var a=10
var b=8
var c=10
console.log(a<b)
console.log(a>b)
console.log(a>=c)
console.log(a==b)
var d=10
var e="10"
console.log("loose equality",d==e)
console.log("strict equality",d===e)
console.log("loose in equality",d!=e)
console.log("strict in equality",d!==e)

//after 18 
let age = 10
console.log(age>18)
console.log(age<18)


//logical operators
//AND (&&) if both conditions are true then the result will be true
//OR (||) if any one condition is true then the result will be tue
//NOT(!)
console.log(2<4)
console.log(2>4)
console.log((2<4) && (2>4))
console.log((2<4) && (2<4))
console.log((2<4) || (2>4))
console.log(2<4)
console.log(!(2<4))


//bitwise operator

//AND
//if both ar̥e true the result will be true
console.log(5 & 3);
console.log(5 & 4);
console.log(2 & 3);

//OR
//if one is true the resuly will be true
console.log(10 | 8)
console.log(8 | 7)

//XOR
//If the two bits are different the result is 1, if they are the same the result is 0
console.log(8 ^ 6)
console.log(10 ^ 12)

//NOT
//0 becomes 1 and 1 becomes 0
console.log(~8)
console.log(~2)

//left shift
//Left shift moves all bits to the left and adds zeros on the right side
console.log(5<<2)
console.log(5<<6)


//right shift
//Right shift moves all bits to the right and removes the rightmost bits
console.log(5>>2)

//ternary ?, :
//syntax:- ? :
// condition ? true :false

let salary =10000
salary>=10000?console.log("apply for the credit card"):console.log("you are not eligible")
 


//string
//use for the concatenation of two strings
var first = "siri"
var last = "swapna"
console.log(first+" "+last)

//string+number

let result = "Age: " + 20;
console.log(result);

//template literal
//
console.log(`My name is ${first} ${last} and i am working as this role`)


//typeof - to check the operator type

var a=10
var b="10"
console.log(a!=b)
console.log(a!==b)