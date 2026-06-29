//objects
//In objects data will be stored in key value pairs
//keys will be of strings
//values can be of any data type
//key and value will be seperated by :
//Each key value pair will be seperated by ,
//{ } declared object

//4 ways to define objects 
//objectliteral way
let a = { }
console.log(a)

//
let a1 = {
    name : "Siri",
    adress : "Anantapur"
}
console.log(a1);


//new key word
let b = new Object()
console.log(b)

// 
let b1 = new Object()

b1.name="siri";
b1.adress="Anantapur";
b1.phonenumber="98749749847";

console.log(b1)

//constructor
function student(name,age){
    this.name=name;
    this.age=age
}
let s1 = new student("siri",22);
let s2 = new student("swapna",22);
console.log(s1)
console.log(s2)

//class
class student1{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
let s3 =new student1("siri",22)
let s4=new student1("swapna",22)

console.log(s3)
console.log(s4)


//example
let obj = {
    name : "swapna",
    age:22,
    adress:"atp"
}
console.log(obj)
console.log(obj.name)
console.log(obj["adress"])

//add
obj.phnumber = 988999989
console.log(obj)

//delete
delete obj.age
console.log(obj)

//change
obj.name ="siri"
console.log(obj)