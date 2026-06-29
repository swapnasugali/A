var N = null
var True = null
console.log(True)
console.log(N)

var s= "String"
var n= 115
var b=true
var u
var k=null
console.log(s,typeof(s))
console.log(n,typeof(n))
console.log(b,typeof(b))
console.log(u,typeof(u))
console.log(k,typeof(k)) // object

//

var b =10n
console.log(b,typeof(b))

//Reference data types
// Object 
// function
// arrays
// E.s-6 2015 (Map, WeakMap, Set, WeakSet)
// Date
// regular expression


//objects
//enclosed in {}
//collection of key value pairs
//each key and will be seperated by :
//each key value pair will be seperated by ,


var obj={name:"siri",role:"employee",city:"ATP",number:9878365747,female:true,salary:80000,attendance:{jan:25,feb:27,mar:29}}
console.log(obj)
var a = {}
console.log(typeof(obj))

//arrays

var arr=[1,2,3,4,"hi","hello",true,false,null,[1,2,3,4,5,6],["siri"]]
console.log(typeof(arr))
console.log(arr)


// functions

function Hello(){
    console.log("hi how are you?")
}
Hello()
console.log("hi")

//calculation of salary based on number of working days

console.log(2000*20)
console.log(2000*19)
console.log(2000*21)

function salary(name,days){ //parameters
    var perday=2000
    console.log("monthly salary of ",name,"is",perday*days)
    console.log("Execution Completed")
    return perday*days
    
}
salary("siri",20) //arguments
console.log(salary("swapna",19))

console.log("all the salaries are calculated")

//date

let today = new Date();
console.log(typeof(today))
console.log(today)

//regular expression
//search test

let text = "hello world";

let pattern = /hello/;

console.log(pattern.test(text));

console.log(typeof(pattern))

//match patterns
var text1 = "My marks are 90 and 80";

console.log(text1.match(/[0-9]+/g));


//validate data


//phone number

let phone = "9876543210";

let pattern1 = /^\d{10}$/;

console.log(pattern1.test(phone));

//email

let email = "test@gmail.com";


let pattern2 = /\S+@\S+\.\S+/;

console.log(pattern2.test(email));

//password validation

// Password Validation

let password = "Hello123";

let pattern3 = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

console.log(pattern3.test(password));

//E.S-6

//Map
//The data will be stored in key value pairs and key can be of any datatype


var m={name:"siri",1:"date",true:"value"}
console.log(m)
var l = new Map()
l.set("name","siri")
l.set(1,"date")
l.set(true,"value")
console.log(l)

//


//weak map

let wm = new WeakMap();

let obj1 = { name: "siri" };

wm.set(obj1, "employee Info");

console.log(wm.get(obj1));

//set

let set = new Set();

set.add(10);
set.add(20);
set.add(10);

console.log(set);

//weakset

let ws = new WeakSet();

let obj2 = { name: "siri" };

ws.add(obj2);

console.log(ws.has(obj2));