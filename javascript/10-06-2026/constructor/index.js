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
